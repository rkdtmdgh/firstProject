import React from 'react'
import { setLoginedSessionID, getLoginedSessionID } from "./session.js"
import { StopCoinInterval } from './CoinInterval.js';
import './css/SignOut.css'

const SignOut = (props) => {

    const signOutBtnHandler = () => {
        console.log('sign out btn clicked!!');

        props.showHideSignOut(false);
        props.showHideSignUp(true);

        props.showHideSignIn(true);
        props.showHideStatus(false);

        props.showHideAdminWrap(false);

        props.showHideSlideWrap(true);
        
        StopCoinInterval(); 

        setLoginedSessionID();

        props.setAlertShow('signOutSuccess');

    };

    return (
        <button className='sign_out_btn' onClick={signOutBtnHandler} >LOG OUT</button>
    )
}

export default SignOut