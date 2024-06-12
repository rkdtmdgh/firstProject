import React, { useState } from 'react'
import './css/wrap.css'
import IntroModal from './IntroModal';
import TitleWrap from './TitleWrap';
import StatusWrap from './StatusWrap';
import StatusModal from './StatusModal';
import SignUpModal from './SignUpModal';
import RulletWrap from './RulletWrap';
import SignIn from './SignIn';
import SignOut from './SignOut';
import GuideWrap from './GuideWrap';
import Header from './Header';
import Coupon from './Coupon';
import SlideWrap from './SlideWrap';
import Footer from './Footer';
import D_alert from "./D_alert";
import AttendanceWrap from './AttendanceWrap';
import AdminPage from './AdminPage';
import BannerSlider from './BannerSlider';




const Wrap = (props) => {

    // hook

    const [isModalShow, setIsModalShow] = useState(true);
    const [statusModalView,setStatusModalView] = useState(false);

    const [signInWrap, setSignInWrap ] = useState(true);
    const [statusWrap, setStatusWrap ] = useState(false);
    
    const [signUpWrap, setSignUpWrap ] = useState(true);
    const [signOutWrap, setSignOutWrap ] = useState(false);  

    const [showAdminWrap, setShowAdminWrap] = useState(false);

    const [showSlideWrap, setShowSlideWrap] = useState(true);

    const [coinValue, setCoinValue] = useState(0);

    const [alertShow, setAlertShow] = useState('');
    
    // handler

    //function

    return (

        <div id="wrap">

                {/* admin page */}

                {
                    showAdminWrap
                    ?
                    <AdminPage  />
                    :
                    null
                }

                {/* header */}
            <div className="header_area">

                <Header 
                    showHideSignUp = {setSignUpWrap}
                    showHideSignOut = {setSignOutWrap}
                    
                    showHideSignIn = {setSignInWrap}
                    showHideStatus = {setStatusWrap} />

                {
                    signUpWrap
                    ?
                    <SignUpModal showHideSignUp = {setSignUpWrap}
                                showHideSignOut = {setSignOutWrap} />
                    :
                    null
                    }   
                
                {
                    signOutWrap
                    ?
                    <SignOut showHideSignUp = {setSignUpWrap}
                            showHideSignOut = {setSignOutWrap}
                            
                            showHideSignIn = {setSignInWrap}
                            showHideStatus = {setStatusWrap}
                            
                            showHideAdminWrap = {setShowAdminWrap}

                            showHideSlideWrap = {setShowSlideWrap}
                            
                            setAlertShow= {setAlertShow} />
                    :
                    null
                }   

            </div>

            <div className="body_wrap">

                <img src="./resources/pjt_game/imgs/bg_event.jpg" className="body_wrap_bg_img" />
                
                <div className="slide_title_wrap">
                    
                    <TitleWrap  statusWrap = {statusWrap} />

                    {
                        showSlideWrap
                        ?
                        <SlideWrap />
                        :
                        null
                    }
                    

                </div>
                
    
                <div className="body_area">

                        {/* sign in area */}
                    <div className="sign_in_area">

                        {
                            signInWrap
                            ?
                            <SignIn  showHideSignIn = {setSignInWrap}
                                    showHideStatus = {setStatusWrap}

                                    showHideSignUp = {setSignUpWrap}
                                    showHideSignOut = {setSignOutWrap}
                                    
                                    setAlertShow= {setAlertShow}

                                    showHideAdminWrap = {setShowAdminWrap}

                                    showHideSlideWrap = {setShowSlideWrap}
                                    
                                    setCoinValue = {setCoinValue}/>
                            :
                            null
                        }

                        {
                            statusWrap
                            ?
                            <StatusWrap showHideStatus = {setStatusWrap}
                                        showHideSignIn = {setSignInWrap}
                                        statusModal = {setStatusModalView} 
                                        coinValue = {coinValue} />
                            :
                            null
                        }

                        {
                            alertShow === 'welcomeCodePangPang' 
                            ? 
                            <D_alert txt="코드팡팡에 오신걸 환영합니다." setAlertShow={setAlertShow} />
                            : 
                            alertShow === 'signOutSuccess' 
                            ? 
                            <D_alert txt="잘가요!" setAlertShow={setAlertShow} />
                            : 
                            alertShow === 'signInFail' 
                            ? 
                            <D_alert txt="ID, PW 정보를 다시 확인해주세요." setAlertShow={setAlertShow} />
                            : 
                            alertShow === 'intervalEnd'
                            ?
                            <D_alert txt="15초 코인지급완료" setAlertShow={setAlertShow} />
                            :
                            null
                        }


                        <GuideWrap />

                    </div>


                        {/* rullet area*/}
                    <div className="rullet_area">

                        <RulletWrap setCoinValue={setCoinValue} />

                    </div>


                        {/* event area */}
                    <div className="event_area">

                        <Coupon setCoinValue={setCoinValue} />

                        <BannerSlider />

                        <AttendanceWrap coinValue = {coinValue} setCoinValue = {setCoinValue} />

                    </div>

                </div>

                

                    {/* StatusModal */}
                {
                    statusModalView
                    ?
                    <StatusModal
                        statusModal = {setStatusModalView}
                    />
                    :
                    null
                }
                

                    {/* intro modal */}
                {
                    isModalShow
                    ?
                    <IntroModal 
                        modalShow = {setIsModalShow}
                    />
                    :
                    null
                }

                

            </div>

            <Footer />

        </div>
    )
}

export default Wrap