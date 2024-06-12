import React from "react";

const AttendanceDayItem = (props) => {
    // Hook -------------------------------------------------------------------------------------------------------------
    

    // UI -------------------------------------------------------------------------------------------------------------
    return(
        <div className="attendance_day_item">
            <li> {props.day}일차 </li>
            <li> <img src={`/resources/pjt_game/imgs/calender_items/${props.item}.png`}/> </li>
            <li> 코인 X {props.coin} </li>
        </div>
    )
}

export default AttendanceDayItem;