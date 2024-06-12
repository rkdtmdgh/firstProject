import React, { useState } from "react";
import ItemInfo from "./ItemInfo";

const D_item = (props) => {
    // Hook ----------------------------------------------------------------------------------------------------------------------------------
    const [showItemInfo, setShowItemInfo] = useState(false);

    // Handler ----------------------------------------------------------------------------------------------------------------------------------
    const itemClickHandler = () => {
        setShowItemInfo(true);
    }

    // UI ----------------------------------------------------------------------------------------------------------------------------------
    return (
        <>
        <div className="item">
            <div className="item_pic" onClick={itemClickHandler}>
                <img src={`./resources/pjt_game/imgs/rullet_items/pic${props.itemPicNo}.png`} />
            </div>
            <div className="item_name">{props.txt}</div>
        </div>

        {
            showItemInfo ?
                <ItemInfo itemPicNo={props.itemPicNo} setShowItemInfo={setShowItemInfo} />
            :
                null
        }
        </>
    )
}

export default D_item;