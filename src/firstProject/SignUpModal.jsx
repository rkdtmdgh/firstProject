import React, { useState } from "react";
import './css/sign_up_modal.css';
import D_alert from "./D_alert";
import Clause from "./Clause";


const SignUpModal = () => {

    // hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uPwCheck, setUPwCheck] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');
    const [signUpShow, setSignUpShow] = useState(false);
    const [coin, setCoin] = useState(3);
    const [agreed, setAgreed] = useState(true);
    const [alertShow, setAlertShow] = useState('');


    // handler
    const signUpModalBtnClickHandler = () => {
        console.log('signUpWrapBtnClickHandler() CLICKED!!')
        setSignUpShow(!signUpShow);
        setAgreed(true);
    }

    const uIdChangeHandler = (e) => {
        console.log('uIdChangeHandler() CALLED!!');
        setUId(e.target.value);
    }

    const uPwChangeHandler = (e) => {
        console.log('uPwChangeHandler() CALLED!!');
        setUPw(e.target.value);
    }

    const uPwCheckChangeHandler = (e) => {
        console.log('uPwCheckChangeHandler() CALLED!!');
        setUPwCheck(e.target.value);
    }

    const uMailChangeHandler = (e) => {
        console.log('uMailChangeHandler() CALLED!!');
        setUMail(e.target.value);
    }

    const uPhoneChangeHandler = (e) => {
        console.log('uPhoneChangeHandler() CALLED!!');
        setUPhone(e.target.value);
    }

    const handleCheckboxChange = () => {
        setAgreed(!agreed);
        if (agreed === true) {
            setAlertShow('phoneSaveNo');
        }

    };


    // function
    
    //중복검사
    const checkDuplicateId = () => {
        let memDBInStorage = localStorage.getItem('memberDB');
    
        // 초기 값이 없으면 빈 객체로 설정
        let memDBObj = memDBInStorage ? JSON.parse(memDBInStorage) : {};
    
        if (uId === 'admin' || memDBObj[uId]) {
            return true;
        } else {
            return false;
        }
    };


    // 회원가입
    const performSignUp = () => {
        const isDuplicate = checkDuplicateId();

        if (uId !== '' && uPw !== '' && uPwCheck !== '' && uMail !== '' && uPhone !== '') {

            if (isDuplicate) {
            setAlertShow('changeIDPlz');
            return;
            }

            // 비밀번호 확인 틀렸을 때
            if(uPw !== uPwCheck) {
                setAlertShow('uPwDifferent');
                return;
            }

            let memDBInStorage = localStorage.getItem('memberDB');
            if (memDBInStorage === null) {
            let newMemObj = {
                [uId]: {
                uPw: uPw,
                uMail: uMail,
                uPhone: agreed ? uPhone : '',
                }
            };
            let newMemStr = JSON.stringify(newMemObj);
            localStorage.setItem('memberDB', newMemStr);
            } else {
            let memDBObj = JSON.parse(memDBInStorage);
            memDBObj[uId] = {
                uPw: uPw,
                uMail: uMail,
                uPhone: agreed ? uPhone : '',
            };
            let newMemStr = JSON.stringify(memDBObj);
            localStorage.setItem('memberDB', newMemStr);
            }

            // 코인 DB
            let coinDBInStorage = localStorage.getItem('coinDB');      
            if (coinDBInStorage === null) {
                let newCoinObj = {
                    [uId]: {
                        coin: agreed ? coin + 3 : coin,
                        accumulatedCoin :agreed ? coin + 3 : coin
                    }
                };
                let newCoinStr = JSON.stringify(newCoinObj);
                localStorage.setItem('coinDB', newCoinStr);
            } else {
                let coinDBObj = JSON.parse(coinDBInStorage);         
                coinDBObj[uId] = {
                    coin: agreed ? coin + 3 : coin,
                    accumulatedCoin : agreed ? coin + 3 : coin
                };
                let Memcoin = JSON.stringify(coinDBObj);          
                localStorage.setItem('coinDB', Memcoin);
            }

            // 출석체크 DB
            let attDBInStorage = localStorage.getItem('attDB');      
            if (attDBInStorage === null) {
                let newAttDB = {
                    [uId]: []
                };
                let newAttStr = JSON.stringify(newAttDB);
                localStorage.setItem('attDB', newAttStr);
            } else {
                let attDBObj = JSON.parse(attDBInStorage);         
                attDBObj[uId] = []
                ;
                let MemAtt = JSON.stringify(attDBObj);          
                localStorage.setItem('attDB', MemAtt);
            }

            // 쿠폰 DB
            let cpDBInStorage = localStorage.getItem('couponDB');      
            if (cpDBInStorage === null) {
                let newCpDB = {
                    [uId]: []
                };
                let newCpStr = JSON.stringify(newCpDB);
                localStorage.setItem('couponDB', newCpStr);
            } else {
                let cpDBObj = JSON.parse(cpDBInStorage);         
                cpDBObj[uId] = []
                ;
                let MemCp = JSON.stringify(cpDBObj);          
                localStorage.setItem('couponDB', MemCp);
            }

            // 아이템 DB
            let itemDBInStorage = localStorage.getItem('itemDB');      
            if (itemDBInStorage === null) {
                let newItemObj = {
                    [uId]: []
                };
                let newItemStr = JSON.stringify(newItemObj);
                localStorage.setItem('itemDB', newItemStr);
            } else {
                let itemDBObj = JSON.parse(itemDBInStorage);         
                itemDBObj[uId] = []
                ;
                let MemItem = JSON.stringify(itemDBObj);          
                localStorage.setItem('itemDB', MemItem);
            }
            
            setSignUpShow(!signUpShow);
            
            setUId('');
            setUPw('');
            setUPwCheck('');
            setUMail('');
            setUPhone('');
            setAgreed(false);

            setAlertShow('signUpSuccess');

        } else {
            setAlertShow('signUpFail');
        }

    }

    // sign up btn 
    const signUpBtnClickHandler = () => {
        performSignUp();
        setAgreed(true);
    }

    return (
        <>
            <button className="sign_up_btn" onClick={signUpModalBtnClickHandler} >회원 가입</button>

            {
            signUpShow 
            ?
            <div className="a_sign_up_modal_bg">
                <div className="a_sign_up_modal">
                    <h3>코드팡팡 ID 생성</h3>
                    <input type="text" name="uId" placeholder="사용자 ID 입력" onChange={uIdChangeHandler} />
                    <input type="password" name="uPw" placeholder="비밀번호 입력" onChange={uPwChangeHandler} />
                    <input type="password" name="uPw_check" placeholder="비밀번호 확인" onChange={uPwCheckChangeHandler} />
                    <input type="email" name="uMail" placeholder="이메일 입력" onChange={uMailChangeHandler} />
                    <input type="text" name="uPhone" placeholder="전화번호 입력" onChange={uPhoneChangeHandler} />
                    <div className="sign_up_modal_box">
                        <input type="checkbox" name="phoneCheck" checked={agreed} onChange={handleCheckboxChange} />
                        <p>개인 정보 수집 이용 동의</p>
                    </div>

                    <Clause />
                    
                    <div className="plus_coin"> * 개인 정보 수집 이용 동의시 코드팡팡 이벤트 코인 3개가 추가 지급됩니다.</div> <br />
                    <button name="signBtn" onClick={signUpBtnClickHandler} >회원가입</button>
                    <button name="signExit" onClick={signUpModalBtnClickHandler} >닫기</button>
                </div>
            </div>
            : 
            null
            }

            {   
            alertShow === 'signUpSuccess' 
            ? 
            <D_alert txt="코드팡팡 회원가입을 축하드립니다!" setAlertShow={setAlertShow} />
            : 
            alertShow === 'signUpFail' 
            ? 
            <D_alert txt="빈칸없이 입력해주세요!" setAlertShow={setAlertShow} />
            : 
            alertShow === 'changeIDPlz' 
            ? 
            <D_alert txt="이미 사용 중인 아이디입니다. 다른 아이디를 입력해주세요." setAlertShow={setAlertShow} />
            : 
            alertShow === 'phoneSaveNo' 
            ? 
            <D_alert  txt={`개인 정보 수집 이용을 거절하셨습니다.　　동의하시면 코인 3개가 지급됩니다`} setAlertShow={setAlertShow} />
            :
            alertShow === 'uPwDifferent'  
            ? 
            <D_alert  txt={`비밀번호 입력이 서로 다릅니다`} setAlertShow={setAlertShow} />
            :
            null
            }

        </>
    )
}

export default SignUpModal;