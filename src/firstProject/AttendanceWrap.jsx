import React, { useEffect, useState } from "react";
import './css/attendance.css';
import AttendanceCalender from "./AttendanceCalender";
import { getLoginedSessionID } from "./session";
import { getAccumCoinDB, getCoinCnt, getDateTime, setAccumCoinCnt, setCoinCnt, today } from "./D_utils";
import AttendanceCheck from "./AttendanceCheck";
import D_alert from "./D_alert";



const AttendanceWrap = (props) => {
    // Hooks -------------------------------------------------------------------------------------------------------------
    const [attDays, setAttDays] = useState(0);
    const [showAtt, setShowAtt] = useState(false);
    const [tempFlag, setTempFlag] = useState(true);
    const [alertShow, setAlertShow] = useState('');

    useEffect(() => {
        console.log('[AttendanceWrap] useEffect!!');

        let attDBInStorage = localStorage.getItem('attDB');
        
        if (attDBInStorage !== undefined && attDBInStorage !== null && getLoginedSessionID() !== '') {

            let parAttDB = JSON.parse(attDBInStorage);
            let myAttArr = parAttDB[getLoginedSessionID()] || [];


            parAttDB[getLoginedSessionID()] = myAttArr;
            localStorage.setItem('attDB', JSON.stringify(parAttDB));
            
            let curAttCnt = myAttArr.length;
            setAttDays(curAttCnt);
        }
        
    }, [tempFlag]);

    // Handler -------------------------------------------------------------------------------------------------------------
    const attBtnClickHandler = () => {

        // 출석체크 DB 가져오기
        let attDBInStorage = localStorage.getItem('attDB');
        let parAttDB = JSON.parse(attDBInStorage);
        let myAttArr = parAttDB[getLoginedSessionID()];

        // 오늘이미 출석한 경우
        let curMyAttArr = myAttArr[myAttArr.length - 1];
        let AttKey;

        if (curMyAttArr === undefined) {
            AttKey = 0;
        }
        else {
            AttKey = Object.keys(curMyAttArr)[0];
        }

        if(AttKey == today()) {
            setAlertShow('alreadyAtt');
            return;
        }
    
        // 전부 출석한 경우
        if (myAttArr.length >=20) {
            setAlertShow('eventEnded')
            return;
        }

        // 출석체크 성공 ~~~~~~~~~~~~~~~~~~~
        // 출석체크 DB 업데이트
        if (myAttArr === undefined) {
            myAttArr = [
                {
                    [today()] : {
                        attCnt : 1
                    }
                }
            ]
        }
        else {
            let attDB = {
                [today()] : {
                    attCnt : myAttArr.length + 1
                }
            }

            myAttArr.push(attDB);
        }

        parAttDB[getLoginedSessionID()] = myAttArr;
        localStorage.setItem('attDB', JSON.stringify(parAttDB));
        
        let curAttCnt = myAttArr.length;
        setAttDays(curAttCnt);

        // 코인추가
        if(curAttCnt <= 5) {
            setCoinCnt(getCoinCnt() + 3);
            setAccumCoinCnt(getAccumCoinDB() + 3);
        }
        else if (curAttCnt <= 10) {
            setCoinCnt(getCoinCnt() + 5);
            setAccumCoinCnt(getAccumCoinDB() + 5);
        }
        else if (curAttCnt <= 15) {
            setCoinCnt(getCoinCnt() + 10);
            setAccumCoinCnt(getAccumCoinDB() + 10);
        }
        else if (curAttCnt <= 20) {
            setCoinCnt(getCoinCnt() + 30);
            setAccumCoinCnt(getAccumCoinDB() + 30);
        }

        setAccumCoinCnt(getAccumCoinDB())

        setAlertShow('attChkSuccess');
        props.setCoinValue(getCoinCnt());

    }

    // 출석체크 모달 온오프
    const showAttClickHandler = () => {
        // 로그인 안 된 경우
        if(getLoginedSessionID() === '') {
            setAlertShow('signInPlease')
            return;
        }

        props.setCoinValue(getCoinCnt() + 1);
        setShowAtt(true);
        
        setTempFlag((pv) => !pv);

    }

    const closeBtnClickHandler = () => {
        setShowAtt(false);

    }

    // UI -------------------------------------------------------------------------------------------------------------
    return(
        <>
            <div className="att_banner" onClick={showAttClickHandler}>
                <img src="/resources/pjt_game/imgs/att_banner.jpg"/>
            </div>
                
            {
                showAtt 
                ?
                <div className="att_modal_bg">
                    <div className="attendance_wrap">
                        <p>코인팡팡 특별 출석 이벤트</p>
                        <AttendanceCalender attDays={attDays} />
                        <button className="att_btn" onClick={attBtnClickHandler} > 출석하기 </button>
                        <button className="close_btn" onClick={closeBtnClickHandler}> X </button>
                        <AttendanceCheck attDays={attDays}/>
                    </div>
                </div>
                :
                null
            }

            {   
                alertShow === 'signInPlease' 
                ? 
                <D_alert txt="이벤트 참여를 위해 로그인 해주세요!" setAlertShow={setAlertShow} />
                : 
                alertShow === 'attChkSuccess' 
                ?
                <D_alert txt="출석되었습니다!" setAlertShow={setAlertShow} />
                :
                alertShow === 'eventEnded' 
                ?
                <D_alert txt="종료된 이벤트입니다!" setAlertShow={setAlertShow} />
                :
                alertShow === 'alreadyAtt' 
                ?
                <D_alert txt="이미 출석했습니다!" setAlertShow={setAlertShow} />
                :
                null
            }

        </>
    )
}

export default AttendanceWrap;