// import React from 'react'

const ContactPage = () => {
    console.log('Intentionally throwing an error to demonstrate the Page error feature')

    throw Error;

    // return(
    //     <p>This page is always going to throw an error. It won't actually render this paragraph</p>
    // )

}

export default ContactPage
