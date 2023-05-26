import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { auth, db } from './firebase';
import CheckoutProduct from './CheckoutProduct';
import { Link, Navigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { useNavigate } from 'react-router-dom';



function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();


    //very very important part or function lets say. any time the basket changes it gets executed so that the correct amount is displayed to pay */
    useEffect(() => {
        // generate the special stripe secret that allows us to charge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',

                //stripe expects the total in a currencies subunit (cent if dollar is being used)
                url: `/payments/create?total = ${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);

        }
        getClientSecret();

    }, [basket])


    console.log('The Secret is : : : ', clientSecret)

    const handleSubmit = async (event) => {
        // do all the ffancy stufff 

        event.preventDefault();// prevents refreshing 

        setProcessing(true);

        // stripe knows how much to charge 
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation 

            db
                .collection('user')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders')
        })

    }

    const handleChange = (event) => {

        //listen for changes in the CardElement
        //and display any errors as the customer types their card details 
        setDisabled(event.empty);
        setError(error ? error.message : '');

    }
    return (
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout (
                    <Link to='/checkout'>
                        {basket?.length} item
                    </Link>
                    )
                </h1>

                {/** Payment section - delivery address  */}

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>

                    </div>

                    <div className='payment__address'>
                        <p>{auth.currentUser?.email}</p>
                        <p>Khotang Nepal</p>
                        <p>Barkhe 11</p>

                    </div>

                </div>


                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery </h3>


                    </div>

                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}


                    </div>


                </div>
                {/** Payment section - payment methods  */}


                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>

                        {/** strip goes here  */}

                        <form onClick={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total : {value}</h3>
                                        </>
                                    )}

                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>Processing</p> : 'Buy Now '}
                                    </span>
                                </button>

                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Payment
