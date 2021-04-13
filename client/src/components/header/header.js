import React from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from "../cartIcon/cartIcon";
import CartDropdown from "../cartDropdown/cartDropdown";
import {selectCartHidden} from "../../redux/cart/cartSelectors";
import {selectCurrentUser} from "../../redux/user/userSelector";

import {SignOutStart} from "../../redux/user/userActions";
import './header.scss'

const Header = ({ currentUser, hidden, SignOutStart }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/" >
                <Logo />
            </Link>
            <div className="options">
                {
                    currentUser ?
                        <p className="option"> Hi {currentUser.displayName}</p>
                        :
                        null
                }
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/contact" className="option">
                    Contact
                </Link>
                {
                    currentUser ?
                        <div onClick={SignOutStart} className="option">
                            SIGN OUT

                        </div>
                    :
                        <Link to="/auth" className="option">
                            Sign In
                        </Link>
                }
                <CartIcon />

            </div>
            {hidden ? null :
                <CartDropdown/>
            }
        </div>
    )
}

const mapStateToProps =  createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps =  dispatch => ({
    SignOutStart: () => dispatch(SignOutStart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
