import React, { useEffect, useState } from 'react'
import './css/AdminPage.css'

const AdminPage = () => {

        // hook
    const [tempFlag, setTempFlag] = useState(true);

    const [memDBWrap, setMemDBWrap] = useState(false);
    const [itemDBWrap, setItemDBWrap] = useState(false);
    const [coinDBWrap, setCoinDBWrap] = useState(false);

    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    const [memDBModifyModalWrap, setMemDBModifyModalWrap] = useState(false);

    const [memDBKeysArr, setMemDBKeysArr] = useState([]);
    const [memDBObj, setMemDBObj] = useState([]);
    const [modifyMemDBKey, setModifyMemDBKey] = useState('');

    const [itemDBArr, setItemDBArr] = useState([]);
    const [itemDBValueArr,setItemDBValueArr] = useState([]);
    const [valueArrObj,setValueArrObj] = useState([]);
    const [itemDBUserID,setItemDBUserID] = useState([]);
    
    const [coinDBKeysArr, setCoinDBKeysArr] = useState([]);
    const [coinDBObj, setCoinDBObj] = useState([]);
    const [presentCoinNumber, setPresentCoinNumber] = useState('');


    useEffect(() => {
        console.log('admin page useEffect() CALLED!!');

        setMemDBKeysArr(getMemDBKeysHandler());
        setMemDBObj(getMemDBHandler());

        setCoinDBKeysArr(getCoinDBKeysHandler());
        setCoinDBObj(getCoinDBHandler());

        let itemDBInStorage = localStorage.getItem('itemDB');
        let itemDBObj = JSON.parse(itemDBInStorage);
        if (itemDBObj !==  null && itemDBObj !== undefined) {
            let itemDBKeyArr = Object.keys(itemDBObj)

            setItemDBArr(itemDBKeyArr);
            setItemDBValueArr(itemDBObj);
            // console.log('itemDBKeyArr>>>>>>>>>',itemDBObj)
        }

    }, [tempFlag]);

    
        // admin menu view
    const memberDBStatusOpenBtn = () => {
        console.log('memberDBStatusOpenBtn clicked')

        setMemDBWrap(true);
        setItemDBWrap(false);
        setCoinDBWrap(false);

    };

    const itemDBStatusOpenBtn = () => {
        console.log('itemDBStatusOpenBtn clicked')
        
        setMemDBWrap(false);
        setItemDBWrap(true);
        setCoinDBWrap(false);
        setMemDBModifyModalWrap(false);

    };

    const coinDBStatusOpenBtn = () => {
        console.log('coinDBStatusOpenBtn clicked')

        setMemDBWrap(false);
        setItemDBWrap(false);
        setCoinDBWrap(true);
        setMemDBModifyModalWrap(false);
        
    };


    //////////////////////// memDB START ////////////////////////

        // memberDB 에서 id 키 값 가져오기
    const getMemDBKeysHandler = () => {     
        console.log('getMemDBKeysHandler() called');

        let memDBInStorage = localStorage.getItem('memberDB');
        let memDBObj = JSON.parse(memDBInStorage);

        let memDBObjKeysArr = Object.keys(memDBObj)

        console.log(memDBObjKeysArr);

        return memDBObjKeysArr;

    };

        // memberDB 파싱
    const getMemDBHandler = () => {         
        console.log('getMemDBKeysHandler() called');

        let memDBInStorage = localStorage.getItem('memberDB');
        let memDBObj = JSON.parse(memDBInStorage);

        return memDBObj;

    };

        // memDB 수정 값 
    const uPwChangeHandler = (e) => {
        setUPw(e.target.value);
    };

    const uMailChangeHandler = (e) => {
        setUMail(e.target.value);
    };

    const uPhoneChangeHandler = (e) => {
        setUPhone(e.target.value);
    };

        // memDB 선택 id 삭제 버튼. 나머지 DB도 함께 삭제.
    const withdrawMemberBtn = (e, key) => {
        console.log('withdrawMemberBtn clicked')

        let memDBInStorage = localStorage.getItem('memberDB');
        let memDBObj = JSON.parse(memDBInStorage);

        delete memDBObj[key];

        memDBInStorage = JSON.stringify(memDBObj);
        localStorage.setItem('memberDB',memDBInStorage);

        let couponDBInStorage = localStorage.getItem('couponDB');
        let couponDBObj = JSON.parse(couponDBInStorage);

        delete couponDBObj[key];

        couponDBInStorage = JSON.stringify(couponDBObj);
        localStorage.setItem('couponDB',couponDBInStorage);

        let attDBInStorage = localStorage.getItem('attDB');
        let attDBObj = JSON.parse(attDBInStorage);

        delete attDBObj[key];

        attDBInStorage = JSON.stringify(attDBObj);
        localStorage.setItem('attDB',attDBInStorage);

        let coinDBInStorage = localStorage.getItem('coinDB');
        let coinDBObj = JSON.parse(coinDBInStorage);

        delete coinDBObj[key];

        coinDBInStorage = JSON.stringify(coinDBObj);
        localStorage.setItem('coinDB',coinDBInStorage);
        
        attDBInStorage = JSON.stringify(attDBObj);
        localStorage.setItem('attDB',attDBInStorage);

        let itemDBInStorage = localStorage.getItem('itemDB');
        let itemDBObj = JSON.parse(itemDBInStorage);

        delete itemDBObj[key];

        itemDBInStorage = JSON.stringify(itemDBObj);
        localStorage.setItem('itemDB',itemDBInStorage);

        setTempFlag((pv) => !pv);

    };

        // memDB 선택 id 수정 모달 열기
    const modifyMemDBModalBtn = (memDBkey) => {
        console.log('modifyMemberInfoBtn clicked')
        
        setMemDBModifyModalWrap(true);
        
        setModifyMemDBKey(memDBkey); // 선택 아이디 key 값 가져오기

        setTempFlag((pv) => !pv);

    };

        // memDB 선택 id 수정 버튼
    const adminMemDBModifyBtn = () => {
        console.log('adminMemDBModifyBtn() clicked')

        let memDBInStorage = localStorage.getItem('memberDB');
        let MemDBObj = JSON.parse(memDBInStorage);
        let sltMemDBObj = MemDBObj[modifyMemDBKey];

        if (uPw === '' || uMail === '' || uPhone === '') {
            alert('수정하실 정보를 입력해주세요.')

        } else {
            sltMemDBObj = {
                uPw : uPw,
                uMail : uMail,
                uPhone : uPhone
            }

            MemDBObj[modifyMemDBKey] = sltMemDBObj;
            memDBInStorage = JSON.stringify(MemDBObj);
            localStorage.setItem('memberDB', memDBInStorage);

            alert('수정하였습니다.')

            setUPw('');
            setUMail('');
            setUPhone('');

            setMemDBModifyModalWrap(false);

            setTempFlag((pv) => !pv);

        }

    };

        // memDB 선택 id 수정 모달 닫기
    const adminMemDBModifyCloseBtn = () => {
        console.log('adminMemDBModifyCloseBtn() clicked');

        setMemDBModifyModalWrap(false);

    };

        // memDB status 닫기
    const memDBStatusCloseBtn = () => {
        console.log('memDBStatusCloseBtn() clicked');

        setMemDBWrap(false);

    };

    //////////////////////// memDB END ////////////////////////

    //////////////////////// itemDB START ///////////////////////

    //handler
    const userIdClickHandler = (e,value,idx,itemDB) => {
        setValueArrObj(value)
        setItemDBUserID(itemDB)
    }

    const itemInfoDltClickHandler = (valueIdx) => {
        let itemDBInStorage = localStorage.getItem('itemDB');
        let itemDBObj = JSON.parse(itemDBInStorage);
        if (itemDBObj !==  null && itemDBObj !== undefined) {
            let itemDBKeyArr = itemDBObj[itemDBUserID]
            itemDBKeyArr.splice(valueIdx,1);

            itemDBObj[itemDBUserID] = itemDBKeyArr;
            localStorage.setItem('itemDB',JSON.stringify(itemDBObj));
            
            
            // valueArrObj를 업데이트하고, 이로 인해 다시 렌더링되도록 함
            setValueArrObj(itemDBObj[itemDBUserID]);
        }
        setTempFlag((pv) => !pv);
    }


    //////////////////////// coinDB START ////////////////////////

        // coinDB 에서 id 키 값 가져오기
    const getCoinDBKeysHandler = () => {     
        console.log('getCoinDBKeysHandler() called');

        let coinDBInStorage = localStorage.getItem('coinDB');
        let coinDBObj = JSON.parse(coinDBInStorage);

        let coinDBObjKeysArr = Object.keys(coinDBObj)

        console.log(coinDBObjKeysArr);

        return coinDBObjKeysArr;

    };

        // coinDB 파싱
    const getCoinDBHandler = () => {         
        console.log('getCoinDBHandler() called');

        let coinDBInStorage = localStorage.getItem('coinDB');
        let coinDBObj = JSON.parse(coinDBInStorage);

        return coinDBObj;

    };

        // 선물 코인갯수
    const coinPresentedNumberhandler = (e) => {
        setPresentCoinNumber(e.target.value);
    };

        // 코인 선물하기
    const coinPresentedBtn = (coinDBkey) => {
        console.log('coinPresentedBtn() clicked');

        let sltCoinDBObj = coinDBObj[coinDBkey];

        if (presentCoinNumber === '') {
            alert('선물하실 코인 갯수를 입력하세요.')
            return
        } else {
            let presentNum = presentCoinNumber * 1;

            let sltCoin = sltCoinDBObj.coin * 1;
            let sltAccumulatedCoin = sltCoinDBObj.accumulatedCoin * 1;

            let sumCoin = sltCoin + presentNum;
            let sumAccumulatedCoin = sltAccumulatedCoin + presentNum;

            sltCoinDBObj = {
                coin: sumCoin,
                accumulatedCoin: sumAccumulatedCoin
            }

            coinDBObj[coinDBkey] = sltCoinDBObj;
            let coinDBInStorage = JSON.stringify(coinDBObj);
            localStorage.setItem('coinDB', coinDBInStorage);

            alert(`코인 ${presentNum} 개를 선물하였습니다.`)

            setPresentCoinNumber('');

        }

        setTempFlag((pv) => !pv);

    };

        // 코인 회수하기
    const coinStealdBtn = (coinDBkey) => {
        console.log('coinStealdBtn() clicked');

        let sltCoinDBObj = coinDBObj[coinDBkey];
        
        let sltCoin = sltCoinDBObj.coin * 1;
        let sltAccumulatedCoin = sltCoinDBObj.accumulatedCoin * 1;

        if (presentCoinNumber === '' || sltCoin < presentCoinNumber) {
            alert('회수하실 코인 갯수를 확인해주세요.')
            return
        } else {
            let presentNum = presentCoinNumber * 1;

            let sumCoin = sltCoin - presentNum;
            let sumAccumulatedCoin = sltAccumulatedCoin - presentNum;

            sltCoinDBObj = {
                coin: sumCoin,
                accumulatedCoin: sumAccumulatedCoin
            }

            coinDBObj[coinDBkey] = sltCoinDBObj;
            let coinDBInStorage = JSON.stringify(coinDBObj);
            localStorage.setItem('coinDB', coinDBInStorage);

            alert(`코인 ${presentNum} 개를 회수하였습니다.`)

            setPresentCoinNumber('');

        }

        setTempFlag((pv) => !pv);

    };

        // coinDB 닫기
    const coinDBStatusCloseBtn = () => {
        console.log('coinDBStatusCloseBtn() clicked')

        setCoinDBWrap(false);

    };



    return (
        <div className="admin_page_wrap">

            <div className="admin_menu_wrap">
                <ul>
                    <li className='memberDB_open_btn' onClick={memberDBStatusOpenBtn}>Member DB</li>
                    <li className='itemDB_open_btn' onClick={itemDBStatusOpenBtn}>Item DB</li>
                    <li className='coinDB_open_btn' onClick={coinDBStatusOpenBtn}>Coin DB</li>
                </ul>
            </div>

            {
                memDBWrap
                ?
                <div className="memberDB_status_wrap">

                    <div className="memberDB_status_title">
                        <h2>CodePangPang Member DB</h2>
                        <button onClick={memDBStatusCloseBtn}>CLOSE</button>
                    </div>

                    <div className="memberDB_status">

                        <div className="memberDB_status_table_wrap">
                            <table className='memberDB_status_table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>PW</th>
                                        <th>Mail</th>
                                        <th>Phone</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        memDBKeysArr.map((memDBkeys, idx) => {
                                            let memDBValue = memDBObj[memDBkeys]
                                            
                                            return  <tr key={idx}>
                                                        <td>{memDBkeys}</td>
                                                        <td>{memDBValue.uPw}</td>
                                                        <td>{memDBValue.uMail}</td>
                                                        <td>{memDBValue.uPhone}</td>
                                                        <td><button onClick={() => modifyMemDBModalBtn(memDBkeys)}>수정</button></td>
                                                        <td><button onClick={(e) => withdrawMemberBtn (e, memDBkeys)}>추방</button></td>
                                                    </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>

                        {
                            memDBModifyModalWrap
                            ?
                                <div className="memDB_modify_modal_wrap">
                                    <h3>{` ${modifyMemDBKey} 회원 정보 수정`}</h3>
                                    <input type="text" name='uPw' onChange={uPwChangeHandler} placeholder='input password' />
                                    <input type="email" name='uMail' onChange={uMailChangeHandler} placeholder='input mail' />
                                    <input type="text" name='uPhone' onChange={uPhoneChangeHandler} placeholder='input phone' />
                                    <button onClick={adminMemDBModifyBtn}>Modify MemberDB</button>
                                    <button onClick={adminMemDBModifyCloseBtn} >Close</button>
                                </div>
                            :
                            null
                        }

                    </div>
                </div>
                :
                null
            }

            

            {
                itemDBWrap
                ?
                
                <div className="itemDB_stauts_wrap">
                    
                    <div className='itemDB_stauts'>
                        <div className='itemDB_stauts_userid'>
                            <h3>가입 회원 정보</h3>
                            <ul>
                                {
                                    itemDBArr.map((itemDB, idx) => {
                                        console.log('itemDB: ' , itemDB, idx);
                            
                                        let valueArrObj = itemDBValueArr[itemDB];
                                        console.log('memValueArrObj>>>>>',valueArrObj)
                            
                                        return  <>
                                                    <li key={idx} className={`item_status${idx}`}  onClick={(e)=>userIdClickHandler(e,valueArrObj,idx,itemDB)}>
                                                        <span>{idx}. 회원 ID: <span>{itemDB}</span></span>                   
                                                    </li>
                                                </>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='itemDB_stauts_iteminfo'>
                            <h3>{`ID: ${itemDBUserID}님 보유 아이템`}</h3>
                            <div className="itemDB_stauts_slt_iteminfo">
                                {
                                    valueArrObj.map((itemvalue, valueIdx)=>{
                                        let itemCurTime = Object.keys(itemvalue)
                                        let itemObj = itemvalue[itemCurTime]
                                        return  <ul>
                                                    <li>
                                                        {valueIdx}.<span>획득 일시: <span>{itemCurTime}</span></span>
                                                        <span>아이템 이름: <span>{itemObj['items']}</span></span>
                                                        <button onClick={() => itemInfoDltClickHandler(valueIdx)}>삭제</button>
                                                    </li>
                                                </ul>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>

                :
                null
            }

            {
                coinDBWrap
                ?
                <div className="coinDB_status_wrap">
                    <div className="coinDB_status_title">
                        <h2>CodePangPang Coin DB</h2>
                        <button onClick={coinDBStatusCloseBtn}>CLOSE</button>
                    </div>

                    <div className="coinDB_status_table_wrap">
                        <table className="coinDB_status_table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>현재 코인</th>
                                    <th>누적 코인</th>
                                    <th><input type='text' value={presentCoinNumber} onChange={coinPresentedNumberhandler} placeholder='number'></input></th>
                                    <th></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                
                                {
                                    coinDBKeysArr.map((coindbkeys, idx) => {
                                        let coinDBValue = coinDBObj[coindbkeys]

                                        return  <tr key = {idx}>
                                                    <td>{coindbkeys}</td>
                                                    <td>{coinDBValue.coin}</td>
                                                    <td>{coinDBValue.accumulatedCoin}</td>
                                                    <td><button key={coindbkeys} onClick={() => coinPresentedBtn(coindbkeys)}>선물하기</button></td>
                                                    <td><button key={coindbkeys} onClick={() => coinStealdBtn(coindbkeys)}>회수하기</button></td>
                                                </tr>
                                        
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                :
                null
            }

        </div>
    )
}

export default AdminPage