import React, { useEffect, useState } from 'react'
import { getLoginedSessionID } from "./session.js"
import './css/TitleWrap.css'

const TitleWrap = (props) => {
    
    const [titleText,setTitleText] = useState();

    useEffect(()=>{
        checkLogInedId()
    },[props.statusWrap])


    const checkLogInedId = () => {

        if(getLoginedSessionID() === '' || getLoginedSessionID() === null || getLoginedSessionID() === undefined){
            
            setTitleText(false)
        }else{
            
            setTitleText(true)
        }

    }

    return (
        <div className='title_wrap'>
            {
                titleText
                ?
                <span>{`${getLoginedSessionID()}님 환영합니다!`}</span>
                :                
                <span>로그인을 하시면 나의 코드팡팡 코인 정보를 확인할 수 있습니다.</span>
            }
            
        </div>
    )
}

export default TitleWrap;