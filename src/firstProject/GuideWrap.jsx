import React from 'react'
import './css/GuideWrap.css'

const GuideWrap = () => {
    return (
        <>
            <div className="guide_wrap">
                <p className='guide_txt'>
                    - 본 이벤트는 회원가입 시, 
                    계정당 3개에 코인을 수령할 수 있으며, 
                    쿠폰을 등록한 경우 3개에 코인을 추가로 수령할 수 있습니다.
                    <br /><br />
                    - 출석체크 이벤트 참여시 출석일에 따라 추가 코인을 수령할 수 있습니다.
                    <br /><br />                    
                    - 매일 홈페이지 접속 후 15초가 지나면 3코인이 지급됩니다.
                    <br /><br />                    
                    - 코인 1개로 추첨 룰렛 1회 참여 가능하며,
                    사용한 코인은 차감됩니다.
                    <br /><br />
                    - 당첨된 사은품은 저렴한 가격으로 코스트코에서 구매 할 수 있습니다.
                    <br /><br />
                    - 개수가 기재되지 않은 보상은 1개가 지급됩니다.
                </p>
            </div>
        </>
    )
}

export default GuideWrap;