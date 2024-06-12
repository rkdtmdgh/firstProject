import React, { useEffect, useState, useRef } from "react";
import { setLoginedSessionID, getLoginedSessionID } from "./session.js"
import { getCoinCnt, getDateTime, setCoinCnt } from "./D_utils";

// item array
const items = [ '', 'CUGift', 'mouse', 'keyboardPad', 'starbucks', 
                'keyboard', 'monitor', 'chair', 'desktop' ];

const RulletPlay = (props) => {
    // Hooks ----------------------------------------------------------------------------------------------------------------------------------
    const [picItemNo, setPicItemNo] = useState(0);
    const [changeBtn, setChangeBtn] = useState(1);
    const [changeSpd, setChangeSpd] = useState(50);
    const [showHalo, setShowHalo] = useState(false);

    const intervalID = useRef();
    const interval2ID = useRef();

    let temp = picItemNo;

    useEffect(() => {
        console.log('useEffect() called!!');
        intervalID.current = setInterval(changeItemNo, changeSpd);

        return () => {
            clearInterval(intervalID.current);
        };
    }, [changeSpd]);

    // Handler ----------------------------------------------------------------------------------------------------------------------------------
    const clawBtnClickHandler = () => {
        setChangeBtn(2);
        let spd = 100;
        
        setTimeout(() => {
            clearInterval(interval2ID.current);
            clearInterval(intervalID.current);
            setShowHalo(true);
            setChangeBtn(3);
        }, 3000);

        interval2ID.current = setInterval(() => {
            setChangeSpd(spd);
            console.log(changeSpd);
            spd = spd + 100;
        }, 500);
    }

    const stopBtnClickHandler = () => {
        clearInterval(interval2ID.current);
        clearInterval(intervalID.current);
        setShowHalo(true);
        changeItemNo();

        setChangeBtn(3);
    }

    const receiveBtnClickHandler = () => {
        let pickedItem = items[picItemNo];
        
        let itemDBInStorage = localStorage.getItem('itemDB');
        let parItemDB = JSON.parse(itemDBInStorage);
        let myItemArr = parItemDB[getLoginedSessionID()];
        
        if (myItemArr === undefined) {
            myItemArr = [
                {
                    [getDateTime()] : {
                        "items" : pickedItem,
                        "item_cnt" : 1,
                        "picItemNo" : picItemNo
                        }
                }
            ]
        }
        else {
            let itemObj = {
                [getDateTime()] : {
                    "items" : pickedItem,
                    "item_cnt" : myItemArr.length + 1,
                    "picItemNo" : picItemNo
                }
            }

            myItemArr.push(itemObj);
        }

        parItemDB[getLoginedSessionID()] = myItemArr;
        localStorage.setItem('itemDB', JSON.stringify(parItemDB));

        setCoinCnt(getCoinCnt() - 1);

        props.setRulletShow(false);
        props.setCoinValue(getCoinCnt());
    }

    // Event ----------------------------------------------------------------------------------------------------------------------------------
    const randomNo = () => {
        let no = Math.floor(Math.random() * (9 - 1) + 1)
        return no;
    }

    

    const changeItemNo = () => {
        setPicItemNo(randomNo());
    }

    // UI ----------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className="rullet">

            <div className="rullet_img">
                <div>
                    { showHalo ? 
                        <div className="item_halo">
                            <img src="/resources/pjt_game/imgs/rullet_items/halo2.png" />
                        </div>
                    :
                        null
                    }
                    <div className="item_box">
                        <img src="/resources/pjt_game/imgs/rullet_items/item_box.png" />
                    </div>
                    <div className="rullet_item">
                        <img src={`/resources/pjt_game/imgs/rullet_items/pic${picItemNo}.png`} />
                    </div>
                </div>
                
                {
                changeBtn === 1
                ?
                <button className="claw_btn" onClick={clawBtnClickHandler}>
                아이템 뽑기
                </button>
                :
                changeBtn === 2
                ?
                <button className="claw_btn" onClick={stopBtnClickHandler}>
                바로 뽑기
                </button>
                :
                changeBtn === 3
                ?
                <button className="receive_btn" onClick={receiveBtnClickHandler}>
                아이템 수령
                </button>
                :
                null
                }
            </div>

            {/* {
                changeBtn === 1
                ?
                <button className="claw_btn" onClick={clawBtnClickHandler}>
                아이템 뽑기
                </button>
                :
                changeBtn === 2
                ?
                <button className="claw_btn" onClick={stopBtnClickHandler}>
                바로 뽑기
                </button>
                :
                changeBtn === 3
                ?
                <button className="receive_btn" onClick={receiveBtnClickHandler}>
                아이템 수령
                </button>
                :
                null
            } */}
        </div>  
    )
}

export default RulletPlay;  