import React from "react";
import './css/D_alert.css'

const D_alert = (props) => {
    // Handler --------------------------------------------------------------------------------------------------------------------------
    const alertCloseClickHandler = () => {
        props.setAlertShow('');
    }

    // UI --------------------------------------------------------------------------------------------------------------------------
    return(
        <div className="D_alert_BG">
            <div className="D_alert">
                <div className="D_alert_txt">
                    {props.txt}
                </div>
                <button onClick={alertCloseClickHandler}> 닫기 </button>
            </div>
        </div>
    )
}

export default D_alert;