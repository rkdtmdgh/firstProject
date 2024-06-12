import React, { useState } from "react";
import { setLoginedSessionID, getLoginedSessionID } from "./session.js"
import './css/SignIn.css'
import { CoinInterval } from './CoinInterval.js';


const SignIn = (props) => {

    
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');


    const signInBtnClickHandler = () => {
        console.log('signInBtnClickHandler() CALLED!!');

        if (uId === 'admin' && uPw === '1234') {
            console.log('admin login!');

            props.showHideAdminWrap(true);

            props.showHideSignIn(false);
            props.showHideStatus(false);

            props.showHideSignOut(true);
            props.showHideSignUp(false);

            props.showHideSlideWrap(false);

            return;
        }
        
        let memDBInStorage = localStorage.getItem('memberDB');      
        let memDBJsObj = JSON.parse(memDBInStorage);                
                                   
        
        if (memDBJsObj !== null) {
            
            let memObj = memDBJsObj[uId];    

            if (memObj !== undefined && memObj.uPw === uPw) {

                props.setAlertShow('welcomeCodePangPang')
                
                setLoginedSessionID(uId);
                
                props.showHideSignIn(false);
                props.showHideStatus(true);
    
                props.showHideSignOut(true);
                props.showHideSignUp(false);

                CoinInterval({
                    setCoinValue: props.setCoinValue,
                    setAlertShow: props.setAlertShow,
                    // getCoinCnt: props.getCoinCnt,
                    // setAccumCoinCnt: props.setAccumCoinCnt,
                    // getAccumCoinDB: props.getAccumCoinDB,
                }); 
    
            } else {
                props.setAlertShow('signInFail')
                
                setLoginedSessionID()
    
            }
        } else {

            props.setAlertShow('signInFail')
            
        }
        
        setUId('');
        setUPw('');


        console.log('loginedID: ' ,getLoginedSessionID());
        
    }
    
    const uIdChangeHandler = (e) => {
        console.log('uIdChangeHandler() CALLED!!');
        setUId(e.target.value);
    }

    const uPwChangeHandler = (e) => {
        console.log('uPwChangeHandler() CALLED!!');
        setUPw(e.target.value);
    }

    return(
        <>
            <div className="sign_in_wrap">
                <h3>LOG IN</h3>
                <input type="text" name="uId" value={uId} onChange={uIdChangeHandler} placeholder="input user ID" />
                <br />
                <input type="password" name="uPw" value={uPw} onChange={uPwChangeHandler} placeholder="input user PW" />
                <br />
                <button onClick={signInBtnClickHandler}>로그인</button>
            </div>

        </>
    );  

}
export default SignIn;