import React from 'react'

// import {SpinnerContainer, SpinnerOverlay} from "./with-spinner";
import './spinner.scss'

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <div className="SpinnerOverlay">
                <div className="SpinnerContainer"/>
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return Spinner

}


export default WithSpinner
