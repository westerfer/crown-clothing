import React, {useState} from 'react'
import {connect} from 'react-redux'
import FormInput from "../formInput/formInput";
import Button from "../button/button";

import {SignUpStart} from "../../redux/user/userActions";

import './sign-up.scss'

const SignUp = ({SignUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {displayName, email, password, confirmPassword} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('passwords dont match')
            return;
        }

        SignUpStart({ displayName, email, password})

    }

    const handleChange = event => {
        const { name, value } = event.target

        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} handleChange={handleChange} label="Display Name" required />
                <FormInput type="email" name="email" value={email} handleChange={handleChange} label="Email" required />
                <FormInput type="password" name="password" value={password} handleChange={handleChange} label="Password" required />
                <FormInput type="password" name="confirmPassword" value={confirmPassword} handleChange={handleChange} label="Confirm Password" required />

                <div className="buttons">
                    <Button type="submit">Sign Up</Button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    SignUpStart: userCredentials => dispatch(SignUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp)
