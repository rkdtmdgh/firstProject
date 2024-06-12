import React from "react";

const ItemInfo = (props) => {
    const closeBtnClickHandler = () => {
        props.setShowItemInfo(false);
    }

    return(
        <div className="item_info_bg">
            {
                props.itemPicNo === '1' ?
                    <div className="item_info">
                        <img src={`./resources/pjt_game/imgs/rullet_items/pic1.png`} />
                        <h3>CU 모바일 상품권 50,000원</h3>
                        <br />
                        <p>
                            모바일 상품권은 휴대폰 메시지로 전송되는 바코드 형태의 전자 상품권이며 CU점포에서 실제 금액처럼 사용하거나 실제 상품과 교환할 수 있습니다.
                            <br />
                            <br /> 1. 구매불가품목 : 담배/택배/로또/토토/교통카드/기프트카드/프리페이드상품/쓰레기봉투 및 상품권류
                            <br /> 2. 권면가액 내 여러번 분할 사용가능 (사용 후 잔액은 재 사용이 가능)
                            <br /> 3. 권면가액 이상 구매시 현금/카드 등 추가 결제가능
                            <br /> 4. 행사상품 2+1 등 이벤트 상품 구매가능
                            <br /> 5. CU 멤버십 적용 또는 통신사 할인 가능
                            <br /> 6. 공과금 및 세금등 납부불가
                            <br /> 7. 현금과 교환불가
                            <br />
                            <br /> *사용 장소 : 전국 CU 편의점
                            <br /> *사용 불가 장소 : 일부 특수점포(공항, 군부대, 고속도로 휴게소 등) 사용 불가
                        </p>
                        <button onClick={closeBtnClickHandler}>X</button>
                    </div>
                :
                    props.itemPicNo === '2' ?
                    <div className="item_info">
                        <img src={`./resources/pjt_game/imgs/rullet_items/pic2.png`} />
                        <h3>로지텍 마우스패드 교환권</h3>
                        <br />
                        <p>
                            제품명 : 스틸시리즈 Rival 3 유선 마우스 62513
                            <br />
                            <br /> * 재고 소진시 로지텍 G102IC 2세대 LIGHTSYNC 게이밍 유선마우스 벌크 MU0054로 제품이 변경될 수 있습니다.
                            <br />
                            <br /> * 제품 상세 정보 및 제조사 정보는 로지텍 본사 홈페이지 (https://www.logitech.com/ko-kr) 에서 확인할 수 있습니다.
                        </p>
                        <button onClick={closeBtnClickHandler}>X</button>
                    </div>
                :
                    props.itemPicNo === '3' ?
                    <div className="item_info">
                        <img src={`./resources/pjt_game/imgs/rullet_items/pic3.png`} />
                        <h3>게이밍 장패드 교환권</h3>
                        <br />
                        <p>
                            제품명 : 로지텍코리아 G740 대형 패브릭 마우스패드
                            <br />
                            <br /> * 규격 : 가로 78센티, 세로 30센티, 두께 4mm
                            <br />
                            <br /> * 본 사진은 샘플용 이미지로 실제 배송되는 상품과 차이가 있을 수 있습니다.
                            <br />
                            <br /> * 제품 상세 정보 및 제조사 정보는 로지텍 본사 홈페이지 (https://www.logitech.com/ko-kr) 에서 확인할 수 있습니다.
                        </p>
                        <button onClick={closeBtnClickHandler}>X</button>
                    </div>
                :
                    props.itemPicNo === '4' ?
                    <div className="item_info">
                        <img src={`./resources/pjt_game/imgs/rullet_items/pic4.png`} />
                        <h3>스타벅스 아메리카노 교환권 (Tall)</h3>
                        <br />
                        <p>
                            상품권은 휴대폰 메시지로 전송되는 바코드 형태의 전자 상품권이며 스타벅스 매장에서 실제 금액처럼 사용하거나 실제 상품과 교환할 수 있습니다.
                            <br />
                            <br /> * 유효기간 : 문자 수신일로부터 30일
                            <br />
                            <br /> * 사용불가 매장 : 미군부대 (오산AB, 대구캠프워커, 군산AB, 캠프케롤, 캠프케이시, 평택험프리, 평택험프리트룹몰, 평택험프리메인몰) 등
                        </p>
                        <button onClick={closeBtnClickHandler}>X</button>
                    </div>
                :
                    props.itemPicNo === '5' ?
                    <div className="item_info">
                        <img src={`./resources/pjt_game/imgs/rullet_items/pic5.png`} />
                        <h3>레이저 코리아 게이밍 키보드 교환권</h3>
                        <br />
                        <p>
                            제품명 : 레이저코리아 Huntsman V2/Huntsman V3 Pro 유선 키보드
                            <br />
                            <br /> * 재고 소진시 '로지텍 G102IC 2세대 LIGHTSYNC 게이밍 유선마우스 벌크 MU0054'로 제품이 변경될 수 있습니다.
                            <br />
                            <br /> * 키캡 및 추가 구성품은 포함되지 않습니다.
                            <br />
                            <br /> * 제품 상세 정보 및 제조사 정보는 레이저코리아 홈페이지 (https://razerstore.co.kr/) 에서 확인할 수 있습니다.
                        </p>
                        <button onClick={closeBtnClickHandler}>X</button>
                    </div>
                :
                    props.itemPicNo === '6' ?
                    <div className="item_info">
                        <img src={`./resources/pjt_game/imgs/rullet_items/pic6.png`} />
                        <h3>삼성 LED 모니터 교환권</h3>
                        <br />
                        <p>
                            제품명 : 삼성전자 스마트 모니터 LS32BM703UKXKR
                            <br />
                            <br /> * 제품 색상은 화이트, 블랙 중 랜덤하게 발송됩니다.
                            <br />
                            <br /> * 제품 설치 서비스는 별도로 제공되지 않으며, 제품만 발송됩니다.
                            <br />
                            <br /> * 제품 상세 정보 및 제조사 정보는 삼성 S-mall 홈페이지 (https://www.samsungsmall.com/) 에서 확인할 수 있습니다.
                        </p>
                        <button onClick={closeBtnClickHandler}>X</button>
                    </div>
                :
                    props.itemPicNo === '7' ?
                    <div className="item_info">
                        <img src={`./resources/pjt_game/imgs/rullet_items/pic7.png`} />
                        <h3>ARENA 게이밍 의자 교환권</h3>
                        <br />
                        <p>
                            제품명 : 제닉스 ARENA TYPE-1 게이밍 의자
                            <br />
                            <br /> * 사이즈: 740 x 125 x 1320mm
                            <br />
                            <br /> * 제품 색상은 블랙&화이트로 배송되며 별도의 색상 선택은 불가합니다.
                            <br />
                            <br /> * 제품 상세 정보 및 제조사 정보는 로지텍 본사 홈페이지 (https://www.logitech.com/ko-kr) 에서 확인할 수 있습니다.
                        </p>
                        <button onClick={closeBtnClickHandler}>X</button>
                    </div>
                :
                    props.itemPicNo === '8' ?
                    <div className="item_info">
                        <img src={`./resources/pjt_game/imgs/rullet_items/pic8.png`} />
                        <h3>쿨젠 게이밍 PC</h3>
                        <br />
                        <p>
                            제품명 : 쿨젠 게임용 PC G01
                            <br />
                            <br /> * 모니터 및 키보드, 마우스 등 주변기기는 제품에 포함되지 않습니다.
                            <br />
                            <br /> * 제품은 조립된 상태로 발송되며 마이크로 소프트 window 10 HOME이 기본으로 포함되어 있습니다.
                            <br />
                            <br /> * 제품 상세 정보 및 제조사 정보는 쿨젠 홈페이지 (https://www.coolzen.co.kr/) 에서 확인할 수 있습니다.
                        </p>
                        <button onClick={closeBtnClickHandler}>X</button>
                    </div>
                :
                    null
            }
        </div>
    )
}


export default ItemInfo;