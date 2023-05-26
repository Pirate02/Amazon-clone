
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';


const promise = loadStripe(
  'pk_test_51NBBD6Ea6jz055UzUJfE8shnWttvzWmoda3aBnRA5AWCRtOdvpJSoflZ0qFaPyB7FLmwwk7NCelB8DQzqfqOnIpm00uDgriWIb'
);

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will run only once when the component laods .. 

    auth.onAuthStateChanged(authUser => {
      console.log('The user is : ', authUser);


      if (authUser) {
        // means the user is either signed in or was signed in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //means the user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])
  return (
    //BEM naming convention is used 
    <Router>

      <div className="App">


        <Routes>


          <Route path='login' element={
            <Login />
          }>
          </Route>

          <Route path='checkout'
            element={<>
              <Header />
              <Checkout />
            </>
            }
          >

          </Route>
          <Route path='/' element={<>
            <Header />
            <Home />

          </>}>

          </Route>

          <Route path='/payment' element={<>
            <Header />

            <Elements stripe={promise}>

              <Payment />

            </Elements>

          </>}>

          </Route>

          <Route path='/orders' element={
            <Orders />
          }>

          </Route>



        </Routes>


      </div>

    </Router>
  );

}

export default App;
