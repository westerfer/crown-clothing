import React, {useEffect, lazy, Suspense} from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
// import HomePage from "./pages/homepage/homepage";
// import ShopPage from "./pages/shoppage/shop";
// import AuthPage from "./pages/authpage/auth";
// import CheckoutPage from "./pages/checkoutpage/checkout";

import Header from "./components/header/header";
import {selectCurrentUser} from "./redux/user/userSelector";
import {checkUserSession} from "./redux/user/userActions";

import WithSpinner from './components/spinner/spinner'
import ErrorBoundary from "./components/errorBoundary/errorBoundary";

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ContactPage = lazy(() => import ('./pages/contactPage/contactpage'));
const ShopPage = lazy(() => import('./pages/shoppage/shop'));
const AuthPage = lazy(() => import('./pages/authpage/auth'));
const CheckoutPage = lazy(() => import('./pages/checkoutpage/checkout'));

const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return (
        <div>
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<WithSpinner />}>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/shop" component={ShopPage}/>
                        <Route exact path="/contact" component={ContactPage}/>
                        <Route exact path="/checkout" component={CheckoutPage}/>
                        <Route exact path="/auth" render={() => currentUser ? (<Redirect to='/'/>) : (<AuthPage />)}/>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
