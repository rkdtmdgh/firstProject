import React from 'react';
import './css/SlideMenuListLi.css';


const SlideMenuListLi = (props) => {
    return (
        <li>
            <div className='menu_list_icon'><img src={`${props.src}`} /></div>
            <div className="menu_list_txt_wrap">
                <p>{props.txt_p}</p>
                <h6>{props.txt_h}</h6>
            </div>
            
        </li> 
    )
}

export default SlideMenuListLi;