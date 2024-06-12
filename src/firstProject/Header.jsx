import React, { useState } from 'react'

import HeaderMemInfoIcon from './HeaderMemInfoIcon'
import HeaderMenuHomeIcon from './HeaderMenuHomeIcon'
import D_alert from "./D_alert";

import './css/header.css'



const Header = (props) => {

    const [alertShow, setAlertShow] = useState('');

    
    
    return (
        <div className='header'>
            <a href='https://ujb.greenart.co.kr/' target='_blank' ><img src="./resources/pjt_game/imgs/green_logo_g.png" className='header_green_academy_img' /></a>
            
            <ul className='icon_menu'>

                <HeaderMemInfoIcon   

                    setAlertShow={setAlertShow}

                    showHideSignUp = {props.showHideSignUp}
                    showHideSignOut = {props.showHideSignOut}
                    
                    showHideSignIn = {props.showHideSignIn}
                    showHideStatus = {props.showHideStatus}

                    src= './resources/pjt_game/imgs/info_icon.png' 
                    
                     />

                <HeaderMenuHomeIcon src= './resources/pjt_game/imgs/home_icon.png' />

            </ul>

            {
            alertShow === 'pealseLogin' 
            ?
            <D_alert txt="로그인 해주세요." setAlertShow={setAlertShow} />
            : 
            alertShow === 'writeInputPlz' 
            ?
            <D_alert txt="빈 칸을 입력해주세요." setAlertShow={setAlertShow} />
            : 
            alertShow === 'memInfoModifySuccess' 
            ?
            <D_alert txt="수정하였습니다." setAlertShow={setAlertShow} />
            : 
            alertShow === 'CodePangPandWithdrawed' 
            ?
            <D_alert txt="탈퇴하였습니다." setAlertShow={setAlertShow} />
            : 
            alertShow === 'passwordCheck' 
            ?
            <D_alert txt="비밀번호를 확인해주세요." setAlertShow={setAlertShow} />
            : 
            alertShow === 'withdrawCancel' 
            ?
            <D_alert txt="코드팡팡 계속 이용하기." setAlertShow={setAlertShow} />
            : 
            null
            } 

        </div>
    )
}

export default Header