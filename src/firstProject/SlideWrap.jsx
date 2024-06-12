import React, { useState } from 'react'
import './css/SlideWrap.css';
import SlideMenuListLi from './SlideMenuListLi';

const SlideWrap = () => {

    //hook
    const [slideBtn,setSlideBtn] = useState(-300)
    const [slideIconTop1,setSlideIconTop1] = useState(19)
    const [slideIconTop2,setSlideIconTop2] = useState(29)
    const [slideIconRotate1,setSlideIconRotate1] = useState(0)
    const [slideIconRotate2,setSlideIconRotate2] = useState(0)


    //handler
    let slideTogleHandler = () => {
       
        console.log('slideBtn clicked!!');
        if(slideBtn === 0){
            setSlideBtn(-300)
            
            setSlideIconTop1(19)
            setSlideIconTop2(29)
            setSlideIconRotate1(0)
            setSlideIconRotate2(0)
        }else {
            setSlideBtn(0)            

            setSlideIconTop1(25)
            setSlideIconTop2(25)
            setSlideIconRotate1(45)
            setSlideIconRotate2(-45)
        }        
        
    }

    //function

    return (
        <div className="slide_wrap" style={{ left: `${slideBtn}px` }}>
            <div className="slide_btn" onClick={slideTogleHandler}>
                <div className="slide_btn_icon" style ={{top:`${slideIconTop1}px`, transform: `rotate(${slideIconRotate1}deg)`}}></div>
                <div className="slide_btn_icon" style ={{top:`${slideIconTop2}px`,transform: `rotate(${slideIconRotate2}deg)`}}></div>
            </div>
            <div className="slide_menu_wrap">
                <div className="slide_menu_title"><img src="./resources/pjt_game/imgs/logo_w.png" alt="" /></div>
                <ul className="slide_menu_list">
                    <SlideMenuListLi src = "./resources/pjt_game/imgs/list1.png" txt_p = "해피 메리 윈터" txt_h = "겨울 특별 출석 이벤트"/>          
                    <SlideMenuListLi src = "./resources/pjt_game/imgs/list2.png" txt_p = "추운 겨울 따듯하게 녹여줄" txt_h = "윈터 포인트 SHOP"/>          
                    <SlideMenuListLi src = "./resources/pjt_game/imgs/list3.png" txt_p = "아크라시아에서 떠오르는 해!" txt_h = "일리오스"/>          
                    <SlideMenuListLi src = "./resources/pjt_game/imgs/list4.png" txt_p = "올겨울 따듯한 사랑의 별" txt_h = "희망의 트리"/>          
                    <SlideMenuListLi src = "./resources/pjt_game/imgs/list5.png" txt_p = "딩동~ 선물 왔습니다!" txt_h = "소망 배달 프로젝트"/>          
                    <SlideMenuListLi src = "./resources/pjt_game/imgs/list6.png" txt_p = "윈터 로드맵" txt_h = "윈터 업데이트 로드맵"/>               
                </ul>
            </div>            
        </div>
    )
}

export default SlideWrap;