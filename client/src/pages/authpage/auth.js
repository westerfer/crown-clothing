import React from 'react'

import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";
import './auth.scss'

const AuthPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default AuthPage
