import React from "react";
import AttendanceDayItem from "./AttendanceDayItem";

const AttendanceCalender = (props) => {
    // Hook -------------------------------------------------------------------------------------------------------------
    
    // Handle -------------------------------------------------------------------------------------------------------------

    // UI -------------------------------------------------------------------------------------------------------------
    return( 
        <div className="attendance_calender">
            <tr>
                <td> <AttendanceDayItem day="1" coin="3" item="coin"/> </td>
                <td> <AttendanceDayItem day="2" coin="3" item="coin"/> </td>
                <td> <AttendanceDayItem day="3" coin="3" item="coin"/> </td>
                <td> <AttendanceDayItem day="4" coin="3" item="coin"/> </td>
                <td> <AttendanceDayItem day="5" coin="3" item="coin"/> </td>
            </tr>
            <tr>
                <td> <AttendanceDayItem day="6" coin="5" item="coin_box1"/> </td>
                <td> <AttendanceDayItem day="7" coin="5" item="coin_box1"/> </td>
                <td> <AttendanceDayItem day="8" coin="5" item="coin_box1"/> </td>
                <td> <AttendanceDayItem day="9" coin="5" item="coin_box1"/> </td>
                <td> <AttendanceDayItem day="10" coin="5" item="coin_box1"/> </td>
            </tr>
            <tr>
                <td> <AttendanceDayItem day="11" coin="10" item="coin_box2"/> </td>
                <td> <AttendanceDayItem day="12" coin="10" item="coin_box2"/> </td>
                <td> <AttendanceDayItem day="13" coin="10" item="coin_box2"/> </td>
                <td> <AttendanceDayItem day="14" coin="10" item="coin_box2"/> </td>
                <td> <AttendanceDayItem day="15" coin="10" item="coin_box2"/> </td>
            </tr>
            <tr>
                <td> <AttendanceDayItem day="16" coin="30" item="coin_box3"/> </td>
                <td> <AttendanceDayItem day="17" coin="30" item="coin_box3"/> </td>
                <td> <AttendanceDayItem day="18" coin="30" item="coin_box3"/> </td>
                <td> <AttendanceDayItem day="19" coin="30" item="coin_box3"/> </td>
                <td> <AttendanceDayItem day="20" coin="30" item="coin_box3"/> </td>
            </tr>
                        
        </div>
    )
}

export default AttendanceCalender;