import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import { auth } from './firebase';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonKarigar/Saheli_store_banner.png' />

                <div>

                    <h3>
                        Hello, {auth.currentUser?.email}
                    </h3>
                    <h2 className='checkout__title'>
                        Your Shopping Basket
                    </h2>



                    {basket.map(item => (

                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}

                        />

                    ))}

                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
