import React, { useEffect, useState } from "react";
import { setCoinCnt, getCoinCnt, getAccumCoinDB, setAccumCoinCnt } from "./D_utils.js";
import './css/coupon.css'
import { getLoginedSessionID } from "./session";
import D_alert from "./D_alert";


const Coupon = (props) => {
    
    useEffect(()=>{
        console.log('Coupon useEffect() CALLED!!')
        

    },[])

    const [coincoupon, setCoinCoupon] = useState('');
    const [alertShow, setAlertShow] = useState('');

    const couponList = ['이현우', '강승호', '장지현', '김현우', '방종민', '김명호']; // 원하는 만큼 추가

    const couponInputTxt = (e) => {
        setCoinCoupon(e.target.value);
    };

    const couponInputBtn = () => {
        let cpDBInStorage = localStorage.getItem('couponDB');

        // 쿠폰 DB가 없을 때
        if(cpDBInStorage == undefined && cpDBInStorage == null) {
            setAlertShow('couponSignInPlz');
            return;
        }

        // 쿠폰 DB 가져오기
        let parCpDB = JSON.parse(cpDBInStorage);
        let myCpArr = parCpDB[getLoginedSessionID()] || [];
        
        // 로그인 안 된 경우
        if(getLoginedSessionID() === '') {
            setAlertShow('couponSignInPlz');
            setCoinCoupon('');
            return;
        }

        // 사용된 쿠폰인지 확인
        if (myCpArr.includes(coincoupon)) {
            setAlertShow('usedCoupon');
            setCoinCoupon('');
            return;
        }
        
        // 유효 쿠폰인지 확인
        if (couponList.includes(coincoupon)) {
        
            switch (coincoupon) {
                case '이현우':
                    setCoinCnt(getCoinCnt() + 3);
                    setAccumCoinCnt(getAccumCoinDB() + 3);
                    props.setCoinValue(getCoinCnt());
                    myCpArr.push('이현우');
                    setAlertShow('3coinGet');
                    break;
                case '강승호':
                    setCoinCnt(getCoinCnt() + 3);
                    setAccumCoinCnt(getAccumCoinDB() + 3);
                    props.setCoinValue(getCoinCnt());
                    myCpArr.push('강승호');
                    setAlertShow('3coinGet');
                    break;
                case '장지현':
                    setCoinCnt(getCoinCnt() + 3);
                    setAccumCoinCnt(getAccumCoinDB() + 3);
                    props.setCoinValue(getCoinCnt());
                    myCpArr.push('장지현');
                    setAlertShow('3coinGet');
                    break;
                case '김현우':
                    setCoinCnt(getCoinCnt() + 3);
                    setAccumCoinCnt(getAccumCoinDB() + 3);
                    props.setCoinValue(getCoinCnt());
                    myCpArr.push('김현우');
                    setAlertShow('3coinGet');
                    break;
                case '방종민':
                    setCoinCnt(getCoinCnt() + 3);
                    setAccumCoinCnt(getAccumCoinDB() + 3);
                    props.setCoinValue(getCoinCnt());
                    myCpArr.push('방종민');
                    setAlertShow('3coinGet');
                    break;
                case '김명호':
                    setCoinCnt(getCoinCnt() + 12);
                    setAccumCoinCnt(getAccumCoinDB() + 12);
                    props.setCoinValue(getCoinCnt());
                    myCpArr.push('김명호');
                    setAlertShow('12coinGet');
                    break;
            }

            parCpDB[getLoginedSessionID()] = myCpArr;
            localStorage.setItem('couponDB', JSON.stringify(parCpDB));

        } else {
            // 쿠폰이 유효하지 않으면 알림 표시
            setAlertShow('incorrectCoupon');
        }
        
        setCoinCoupon('');
            
        
    };

    return (
        <>
            <div className="coupon_wrap">
                <input type='text' name="couponTxt" value={coincoupon} placeholder="쿠폰을 입력하세요" onChange={couponInputTxt} />
                <button onClick={couponInputBtn} >쿠폰입력</button>

                {
                alertShow === 'incorrectCoupon' 
                ? 
                <D_alert txt="유효하지 않은 쿠폰입니다." setAlertShow={setAlertShow} />
                : 
                alertShow === 'usedCoupon' 
                ?
                <D_alert txt="이미 사용한 쿠폰입니다." setAlertShow={setAlertShow} />
                : 
                alertShow === 'couponSignInPlz' 
                ?
                <D_alert txt="쿠폰을 사용하려면 로그인해주세요." setAlertShow={setAlertShow} />
                : 
                alertShow === '3coinGet' 
                ?
                <D_alert txt="3 코인을 획득하였습니다." setAlertShow={setAlertShow} />
                : 
                alertShow === '12coinGet' 
                ?
                <D_alert txt="12 코인을 획득하였습니다." setAlertShow={setAlertShow} />
                : 
                null
                }
                
            </div>

            

        </>
    );
};

export default Coupon;