import React, {useState} from 'react'
import {connect} from 'react-redux'
import FormInput from "../formInput/formInput";
import Button from "../button/button";
import {googleSignInStart, emailSignInStart} from "../../redux/user/userActions";

import './sign-in.scss'

const SignIn = ({emailSignInStart, googleSignInStart }) =>{
    const [userCredentials, setCredentials] = useState({ email:'', password:'' })
    const {email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target
        setCredentials({...userCredentials,  [name]: value })
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={email} handleChange={handleChange} label="Email" required />
                <FormInput name="password" type="password" value={password} handleChange={handleChange} label="Password" required />

                <div className="buttons">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={googleSignInStart} isGoogleSignIn> {''}Sign in with Google {''}</Button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn)
