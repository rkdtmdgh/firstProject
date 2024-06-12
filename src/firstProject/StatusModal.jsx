import React, { useEffect, useState } from 'react';
import { setLoginedSessionID, getLoginedSessionID } from "./session.js"
import './css/StatusModal.css';

const StatusModal = (props) => {
    
        //hook
    const [myItems,setMyItems] = useState([]);
    const [sortByItem, setSortByItem] = useState(true); // 기본적으로 아이템 이름으로 정렬
    const [initialLoad, setInitialLoad] = useState(true); // 초기 로딩 여부

        // useEffect를 통한 컴포넌트 재 랜더링 이벤트 설정
    useEffect(()=>{
        console.log('StatusModal useEffect() Called!!')
        setMyItems(getItemObj());
        console.log(myItems)
    },[sortByItem]);

        // 모달 닫기 핸들러
    const statusModalCloseHandler = () => {
        console.log('statusModalCloseHandler() clicked!!!');
        props.statusModal(false);
    };

        // 아이템 정렬 버튼 클릭 핸들러
    const itemListSortClickHandler = () => {
        console.log('itemListSortClickHandler() clicked!!!');
        setSortByItem(!sortByItem);
    };

        // 아이템 정렬 함수
    const sortItems = (items) => {
        return items.sort((a, b) => {
            const itemNameA = a[Object.keys(a)[0]].items;
            const itemNameB = b[Object.keys(b)[0]].items;
            
            // 정렬 기준을 아이템 이름의 글자순으로 설정
            return sortByItem ? itemNameA.localeCompare(itemNameB) : itemNameB.localeCompare(itemNameA);
        });
    };


        // 아이템 데이터 가져오는 함수
    let getItemObj = () => {
   
        let itemDBInStorage = localStorage.getItem('itemDB');
        let parItemDB = JSON.parse(itemDBInStorage);
      
        // 로그인한 사용자의 아이템 내역 가져오기
        let myItemArr = parItemDB[getLoginedSessionID()] || [];
      
        // 처음 로드될 때만 정렬 적용
        if (initialLoad) {
            setInitialLoad(false);
            return [...myItemArr];
        }

        // 정렬된 아이템 내역 반환
        return sortItems([...myItemArr]);

    }

    return (
        <div className='status_modal_bg' >
            <div className="status_modal_box">
                <div className="status_modal_title">
                    <h5>아이템 획득 내역</h5>
                    <ul className='status_modal_close' onClick={statusModalCloseHandler}>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th onClick={itemListSortClickHandler}>아이템 이름 {sortByItem ? '▲' : '▼'}</th>
                            <th>획득 시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myItems.map((items,idx)=>{
                                let itemsGetTime = Object.keys(items)[0];
                                let itemsGetTimeValue = items[itemsGetTime];
                                let itemsKeys = Object.keys(itemsGetTimeValue);
                                let item = itemsGetTimeValue[itemsKeys[0]];
                                let itemImg = itemsGetTimeValue[itemsKeys[2]];

                                return  (
                                    <tr key={idx}>
                                        <td>
                                            <div className='item_img'>
                                                <img src={`/resources/pjt_game/imgs/rullet_items/pic${itemImg}.png`} />
                                            </div>
                                            {`${item}`}
                                        </td>
                                        <td>{`${itemsGetTime}`}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StatusModal;