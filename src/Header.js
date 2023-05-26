import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, Navigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function Header() {
    const [{ basket }, dispatch, user] = useStateValue();

    const handleAuthentication = () => {

        if (auth.currentUser) {
            signOut(auth)
                .then(() => {
                    console.log('Sign out successful !');
                    Navigate('/')
                })
                .catch((error) => {
                    console.log('Sign out error : ', error)
                })
        }
    }

    return (
        <div className='header'>

            <Link to='/'>
                <img
                    className='header__logo'
                    src='https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png?strip=all&w=960' />

            </Link>


            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />

            </div>
            <div className='header__nav'>

                <Link to={!auth.currentUser && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'> Hello {auth.currentUser?.email ? auth.currentUser.email : 'Guest !'} </span>
                        <span className='header__optionLineTwo'> {auth.currentUser ?
                            'Sign Out' : 'Sign In'}</span>

                    </div>
                </Link>

                <Link to='/orders'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>

                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>

                </div>

                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>



            </div>

        </div>
    )
}

export default Header
