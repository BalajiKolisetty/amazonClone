import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { ShoppingBasket } from "@material-ui/icons"
import "./Header.css"
import { useStateValue } from '../providers/StateProvider'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";

function Header() {

    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <img className='headerLogo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            <div className='headerSearch'>
                <input className='headerSearchInput' type='text' />
                <SearchIcon className='headerSearchIcon'/>

                <div className='headerNav'>
                    <Link to="/login">
                    <div className="headerOption" onClick={handleAuthentication}>
                        <span className='headerOptionLine1'>Hello</span>
                        <span className='headerOptionLine2'>Sign In</span>
                    </div>
                    </Link>

                    <div className="headerOption">
                        <span className='headerOptionLine1'>Return</span>
                        <span className='headerOptionLine2'>& Orders</span>
                    </div>

                    <div className="headerOption">
                        <span className='headerOptionLine1'>Your</span>
                        <span className='headerOptionLine2'>Prime</span>
                    </div>

                    <div className='headerShoppingBasketIcon'>
                        <ShoppingBasket />
                        <span className='headerOptionLine2 headerBasketCount'> {basket?.length} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
