import React from "react";
import './css/footer.css'

const Footer =() => {
    return (
        <>
        <footer id="footercontainer">
            <div className="footer_wrap">
                <img src="/resources/pjt_game/imgs/logo_w.png" className="footer_logo"/>
                <ul className="footer_menu">
                    <li><a href="#none">회사소개</a></li>
                    <li>|</li>
                    <li><a href="#none">이용약관</a></li>
                    <li>| </li>
                    <li><a href="#none">개인정보처리방침</a></li>
                    <li>| </li>
                    <li><a href="#none">운영정책</a></li>
                    <li>| </li>
                    <li><a href="#none">이벤트&UGC규약</a></li>
                    <li>| </li>
                    <li><a href="#none">청소년보호정책</a> </li>
                    <li>| </li>
                    <li><a href="#none"> 게임이용등급</a> </li>
                    <li>| </li>
                    <li><a href="#none">고객센터</a> </li>
                    <li>| </li>
                    <li><a href="#none">제휴문의</a> </li>
                </ul>
                <br/>
                <div className="footer_info">
                    <p>
                        회사명 ㈜코드팡팡 대표이사 이현우 사업자등록번호 000-00000-000
                        <br/>
                        통신판매업 신고번호 제2023-의정부-0000호 E react@react.com F 000-0000-0000
                    </p>
                    </div>
                <p className="footer_copy_right">
                    <br/>
                © CODE PANGPANG All rights reserved.
                </p>
            </div>

        </footer>
        </>
    )
}



export default Footer;