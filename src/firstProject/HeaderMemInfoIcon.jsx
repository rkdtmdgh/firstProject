import React, { useEffect, useState } from 'react'
import MemInfoMdifyModal from './MemInfoMdifyModal';
import { getLoginedSessionID } from "./session";



const HeaderMemInfoIcon = (props) => {

    // hook
    const [memInfoModifyModalShow, setMemInfoModifyModalShow] = useState(false);
    
    const memInfoIconbtnHandler = () => {
        console.log('memInfoIcon clicked');

        if (getLoginedSessionID() === '')  {

            props.setAlertShow('pealseLogin') ;
            return;
        }

        setMemInfoModifyModalShow(!memInfoModifyModalShow);

    };

    return (
        <>
        
            <li >
                <img src= {props.src} onClick={memInfoIconbtnHandler} className='mem_info_icon' />

                {
                memInfoModifyModalShow
                ?
                <MemInfoMdifyModal 
                    showHideSignUp = {props.showHideSignUp}
                    showHideSignOut = {props.showHideSignOut}

                    showHideSignIn = {props.showHideSignIn}
                    showHideStatus = {props.showHideStatus}

                    setAlertShow={props.setAlertShow}

                    showHideModifyModal = {setMemInfoModifyModalShow}
                />
                :
                null
                }

            </li>
            
        </>
        
    )
}

export default HeaderMemInfoIcon