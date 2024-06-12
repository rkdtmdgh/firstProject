import React, { useEffect, useState } from 'react';
import { setLoginedSessionID, getLoginedSessionID } from "./session.js"
import { getCoinCnt, getDateTime, setCoinCnt , getAccumCoinDB } from "./D_utils";

import './css/StatusWrap.css'

const StatusWrap = (props) => {

    //hook
    const [logInedIDCoin,setLogInedIDCoin] = useState(0);
    const [logInedIDItemNo,setLogInedIDItemNo] = useState(0);
    const [logInedIDAccumCoin,setLogInedIDAccumCoin] = useState(0);
    const [logInedIDUseCoin,setLogInedIDUseCoin] = useState(0);

    useEffect(()=>{
        console.log('StatusWrap useEffect() CALLED!!')
        
        setLogInedIDCoin(getCoinCnt());
        setLogInedIDAccumCoin(getAccumCoinDB());

        let itemDBInStorage = localStorage.getItem('itemDB');
        let parItemDB = JSON.parse(itemDBInStorage);
        let myItemArr = parItemDB[getLoginedSessionID()];

        setLogInedIDItemNo(myItemArr.length)

        setLogInedIDUseCoin(useCoin)

    },[props.coinValue])

    //handler
    const searchItemsBtnClickHandler = () => {
        console.log('search Items Btn Clicked!!');

        props.statusModal(true);
        props.showHideStatus(true);
        
    }

    //function

    let useCoin = getAccumCoinDB() - getCoinCnt()

    // let getCoinDB = () => {

    //     let coinDBInStorage = localStorage.getItem('coinDB')
    //     let parCoinDB = JSON.parse(coinDBInStorage);
    //     let signInedCoinDB = parCoinDB[getLoginedSessionID()]
             
    //     return signInedCoinDB.coin;

    // }

    // let getAccumCoinDB = () => {

    //     let coinDBInStorage = localStorage.getItem('coinDB')
    //     let parCoinDB = JSON.parse(coinDBInStorage);
    //     let signInedCoinDB = parCoinDB[getLoginedSessionID()]
          
    //     return signInedCoinDB.accumulatedCoin;

    // }

    return (
        <>
            <div className="status_wrap">
                <div className="sign_ined_id"><span>{`${getLoginedSessionID()}`}</span>님 환영합니다!</div>
                <div className="current_coins">{`보유한 코인 : ${logInedIDCoin}`}</div>
                <div className="current_coins">{`사용한 코인 : ${logInedIDUseCoin}`}</div>
                <div className="current_coins">{`누적 획득 코인 : ${logInedIDAccumCoin}`}</div>
                <div className="accumulated_coins">{`누적 아이템 수량 : ${logInedIDItemNo}`}</div>
                <button className='search_items_btn' onClick={searchItemsBtnClickHandler}>아이템 획득 내역 확인</button>
            </div>
        </>
    )
}

export default StatusWrap;