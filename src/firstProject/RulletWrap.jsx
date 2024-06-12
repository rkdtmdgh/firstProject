import React, { useState } from "react";
import D_item from "./D_item";
import RulletPlay from "./RulletPlay";
import { getLoginedSessionID } from "./session";
import D_alert from "./D_alert";
import { getCoinCnt } from './D_utils';
import './css/Rullet.css'

const RulletWrap = (props) => {
    // Hooks ----------------------------------------------------------------------------------------------------------------------------------
    const [rulletShow, setRulletShow] = useState(false);
    const [itemPicNo, setItemPicNo] = useState(1);
    const [alertShow, setAlertShow] = useState('');

    // Handler ----------------------------------------------------------------------------------------------------------------------------------
    const drawClickHandler = () => {
        if(getLoginedSessionID() === '') {
            setAlertShow('pealseLogin');
            return;
        }

        if (getCoinCnt() < 1) {
            setAlertShow('coinless')
            return;
        } else {
            setRulletShow(true);
        }
    }


    // UI ----------------------------------------------------------------------------------------------------------------------------------
    return(
        <div className="rullet_wrap">
            
            <p>획득 가능 아이템 목록</p>
            
            <div className="items_line">
                <D_item itemPicNo='1' txt="CU 상품권 50,000원"/>
                <D_item itemPicNo='2' txt="로지텍 마우스"/>
                <D_item itemPicNo='3' txt="마우스 장패드"/>
                <D_item itemPicNo='4' txt="스타벅스 아메리카노"/>
            </div>

            <div className="items_line">
                <D_item itemPicNo='5' txt="게이밍 키보드"/>
                <D_item itemPicNo='6' txt="삼성 LED 모니터"/>
                <D_item itemPicNo='7' txt="ARENA 게이밍 의자"/>
                <D_item itemPicNo='8' txt="데스크톱"/>
            </div>

            <button onClick={drawClickHandler} >추첨하기</button>

            {
                rulletShow 
                ?
                <RulletPlay setRulletShow = {setRulletShow} setCoinValue={props.setCoinValue} />
                :
                null
            }

            {
                alertShow === 'pealseLogin' 
                ? 
                <D_alert txt="이벤트 참여를 위해 로그인 해주세요." setAlertShow={setAlertShow} />
                : 
                alertShow === 'coinless' 
                ?
                <D_alert txt="이벤트 참여를 위한 코인이 부족합니다." setAlertShow={setAlertShow} />
                : 
                null
            }

        </div>
    )
}

export default RulletWrap;