import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    //chu ni da maji use tabaki email en chu jodtiba kyat laba. control rhangban 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // firebase sign in things haha 

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Sign in sucess : ', user);

                navigate('/')
            })


    }
    const register = (e) => {
        e.preventDefault();

        // Firebase registration logic goes here
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Registration successful
                const user = userCredential.user;
                console.log('Registration successful:', user);
                navigate('/')

            })
            .catch((error) => {
                // Registration failed
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Registration failed:', errorCode, errorMessage);
            });
    };
    /*
        const register = e => {
            e.preventDefault();
    
            // firebase registration goes here mate 
    
            auth
                .createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    //success on registration 
                    console.log(auth);
                })
                //in case any error 
                .catch(error => alert(error.message))
    
        }
        */

    return (

        <div className='login'>

            <Link to='/'>

                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' />
            </Link>
            <div className='login__container'>
                <h1> Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing in you agrreed to the terms and conditions of dumzan's amazon app alright !?
                </p>
                <button onClick={register}
                    className='login__registerButton'>Create Your Dumzan Amazon Account</button>
            </div>
        </div >

    )
}

export default Login
