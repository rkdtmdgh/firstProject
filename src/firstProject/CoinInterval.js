import { setCoinCnt, getCoinCnt, getAccumCoinDB, setAccumCoinCnt, today } from './D_utils';
import { setLoginedSessionID, getLoginedSessionID } from "./session.js"


/*  SignIn.jsx에 
    import { CoinInterval } from './CoinInterval.js';
    
    signInBtnClickHandler 밑 
    멤버DB안에 
    CoinInterval({
                    setCoinValue: props.setCoinValue,
                    getCoinCnt: props.getCoinCnt,
                    setAccumCoinCnt: props.setAccumCoinCnt,
                    getAccumCoinDB: props.getAccumCoinDB,
                }); 
*/ 

/*  SignOut.jsx 에
    import { StopCoinInterval } from './CoinInterval.js';

    signOutBtnHandler 내부에 
    StopCoinInterval(); 
    작성
*/

// 코인 인터벌의 ID를 저장할 전역 변수
let coinIntervalId; 

// 코인 인터벌을 시작하는 함수
export const CoinInterval = (props) => {
    console.log('button Clicked!!');
    let time = 0;
    
    // 쿠폰DB 가져오기
    let cpDBInStorage = localStorage.getItem('couponDB');
    let parCpDB = JSON.parse(cpDBInStorage);
    let myCpArr = parCpDB[getLoginedSessionID()] || [];

    // 15쿠폰 중복 수령 중단
    if(myCpArr.includes(today(),0)) {
        return;
    }

    // 이전에 생성된 인터벌이 있다면 중단
    if (coinIntervalId) {
        StopCoinInterval(coinIntervalId);
    }

    // 1초 간격으로 동작하는 코인 인터벌 설정
    coinIntervalId = setInterval(function () {
        time = time + 1;

        console.log(`현재 ${time}초`);

        // 15초일 때 코인 지급 및 인터벌 중단
        if (time === 15) {
            console.log('15초 쿠폰발급!');
            props.setAlertShow('intervalEnd')
            //인터벌 중단
            clearInterval(coinIntervalId); 
            console.log('쿠폰지급 후 인터벌중단');
            //코인지급
            setCoinCnt(getCoinCnt() + 3); 
            setAccumCoinCnt(getAccumCoinDB() + 3);
            props.setCoinValue(getCoinCnt());

            myCpArr.push(today())

            parCpDB[getLoginedSessionID()] = myCpArr;
            localStorage.setItem('couponDB', JSON.stringify(parCpDB));

        }
    }, 1000);

    // 생성된 인터벌의 ID를 반환    
    return coinIntervalId; 
};

// 코인 인터벌을 중단하는 함수
export const StopCoinInterval = () => {
    if (coinIntervalId) {
        // 전달받은 인터벌 ID를 사용하여 중단
        clearInterval(coinIntervalId); 
        console.log('SIGN OUT clearInterval');
    }
};
