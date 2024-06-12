import React, { useEffect, useState } from 'react'
import './css/MemInfoMdifyModal.css'
import { setLoginedSessionID, getLoginedSessionID} from './session.js'
import { StopCoinInterval } from './CoinInterval.js';

const MemInfoMdifyModal = (props) => {

    // hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    useEffect(() => {
        console.log('useEffect() called!!');

        setUId(getLoginedSessionID());

        let memDBInStorage = localStorage.getItem('memberDB');
        if (memDBInStorage !== null && memDBInStorage !== undefined) {
            let MemDBObj = JSON.parse(memDBInStorage);
            let sltMemDBObj = MemDBObj[getLoginedSessionID()];

            let uMailDB = sltMemDBObj.uMail
            let uPhoneDB = sltMemDBObj.uPhone

            setUMail(uMailDB);
            setUPhone(uPhoneDB);
        }

    },[])

    // handler
    const uPwChangeHandler = (e) => {
        setUPw(e.target.value);
    };

    const uMailChangeHandler = (e) => {
        setUMail(e.target.value);
    };

    const uPhoneChangeHandler = (e) => {
        setUPhone(e.target.value);
    };

    const memIfoModifyBtn = () => {
        let memDBInStorage = localStorage.getItem('memberDB');
        let MemDBObj = JSON.parse(memDBInStorage);
        let sltMemDBObj = MemDBObj[getLoginedSessionID()];

        if (uPw === '' || uMail === '' || uPhone === '') {
            props.setAlertShow('writeInputPlz')

        } else if (sltMemDBObj.uPw === uPw && sltMemDBObj.uMail === uMail && sltMemDBObj.uPhone) {
            alert('수정된 정보가 없습니다.')}
        else {
            sltMemDBObj = {
                uPw : uPw,
                uMail : uMail,
                uPhone : uPhone
            }

            MemDBObj[getLoginedSessionID()] = sltMemDBObj;
            memDBInStorage = JSON.stringify(MemDBObj);
            localStorage.setItem('memberDB', memDBInStorage);

            props.setAlertShow('memInfoModifySuccess')
            props.showHideModifyModal(false)

        }
        
    };

    const infoModalCloseBtnHandler = () => {
        console.log('infoModalCloseBtnHandler clicked');

        props.showHideModifyModal(false)

    }

    const memWithdrawBtn = (e, uId) => {

        let memDBInStorage = localStorage.getItem('memberDB');
        let memDBobj = JSON.parse(memDBInStorage);
        let sltMemDBObj = memDBobj[getLoginedSessionID()]
        
        if (sltMemDBObj.uPw === uPw) {
            let result = window.confirm('Are you sure you want to delete?');

            if (result) {
                let memDBInStorage = localStorage.getItem('memberDB');
                let memDBobj = JSON.parse(memDBInStorage);
                delete memDBobj[uId];
                memDBInStorage = JSON.stringify(memDBobj);
                localStorage.setItem('memberDB', memDBInStorage)

                let couponDBInStorage = localStorage.getItem('couponDB');
                let couponDBobj = JSON.parse(couponDBInStorage);
                delete couponDBobj[uId];
                couponDBInStorage = JSON.stringify(couponDBobj);
                localStorage.setItem('couponDB', couponDBInStorage)

                let attDBInStorage = localStorage.getItem('attDB');
                let attDBobj = JSON.parse(attDBInStorage);
                delete attDBobj[uId];
                attDBInStorage = JSON.stringify(attDBobj);
                localStorage.setItem('attDB', attDBInStorage)

                let coinDBInStorage = localStorage.getItem('coinDB');
                let coinDBobj = JSON.parse(coinDBInStorage);
                delete coinDBobj[uId];
                coinDBInStorage = JSON.stringify(coinDBobj);
                localStorage.setItem('coinDB', coinDBInStorage)

                let itemDBInStorage = localStorage.getItem('itemDB');
                let itemDBobj = JSON.parse(itemDBInStorage);
                delete itemDBobj[uId];
                itemDBInStorage = JSON.stringify(itemDBobj);
                localStorage.setItem('itemDB', itemDBInStorage)

                props.setAlertShow('CodePangPandWithdrawed')

                setLoginedSessionID()

                props.showHideModifyModal(false)

                props.showHideSignUp(true)
                props.showHideSignOut(false)

                props.showHideSignIn(true)
                props.showHideStatus(false)

                StopCoinInterval();

            } else {
                props.setAlertShow('withdrawCancel')
            }
        } else {
            props.setAlertShow('passwordCheck');
        }

    };

    return (
        <div className="mem_info_modify_modal_wrap_bg">
            <div className="mem_info_modify_modal_wrap">
                
                <h3>코드팡팡 회원 정보</h3>
                <div className="modal_close_btn"  onClick={infoModalCloseBtnHandler}> <img src={`/resources/pjt_game/imgs/bt_menu_close_b.png`} /></div>
                <input type="text" name="uId" placeholder="사용자 ID 입력" value={getLoginedSessionID()} disabled="disabled" />
                <input type="password" name="uPw" placeholder="비밀번호 입력" onChange={uPwChangeHandler}/>
                <input type="email" name="uMail" defaultValue={uMail} placeholder="이메일 입력" onChange={uMailChangeHandler}/>
                <input type="text" name="uPhone" defaultValue={uPhone} placeholder="전화번호 입력" onChange={uPhoneChangeHandler}/>
                <button onClick={memIfoModifyBtn} >수정하기</button>
                <button onClick={(e) => memWithdrawBtn(e, uId)} >탈퇴</button>

            </div>
        </div>
    )
}

export default MemInfoMdifyModal