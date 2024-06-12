import React, { useEffect, useState } from "react";

const AttendanceCheck = (props) => {
    
    //  Hooks -------------------------------------------------------------------------------------------------------------
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('[AttendanceCheck] useEffect!!');

        updateCheckCnt(props.attDays);

    }, [props.attDays]);

    // Function -------------------------------------------------------------------------------------------------------------
    const updateCheckCnt = (cnt) => {
        console.log('updateCheckCnt() CALLED!!');

        const items = [];
        for (let i = 0; i < cnt; i++) {
            items.push(<li key={i}> <img src="/resources/pjt_game/imgs/calender_items/check1.png" /> </li>);
        } 

        setItems(items);

    }

    // UI -------------------------------------------------------------------------------------------------------------
    return(
        <div className="att_check_wrap">
            {
                items.map((item, idx) => item)
            }
        </div>
    )
}

export default AttendanceCheck;