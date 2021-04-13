import React from 'react'

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {

    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error) {
        // Process the error

        return { hasErrored: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <div className='ErrorImageOverlay'>
                    <div className='ErrorImageContainer'/>
                    <h1 className='ErrorImageText'>
                        Sorry, this page is broken
                    </h1>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
