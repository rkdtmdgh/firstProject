import { getLoginedSessionID } from "./session";

export const getDateTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    return `${year}${month}${date}${hours}${minutes}${seconds}`;
}

export const today = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();

    return `${year}${month}${date}`;
}

export const getCoinCnt = () => {
    let coinDBInStorage = localStorage.getItem('coinDB');
    let parCoinDB = JSON.parse(coinDBInStorage);
    let myCoinDB = parCoinDB[getLoginedSessionID()];
    let myCoinCnt = myCoinDB.coin * 1;

    return myCoinCnt;
}

export const setCoinCnt = (changeCoin) => {
    let coinDBInStorage = localStorage.getItem('coinDB');
    let parCoinDB = JSON.parse(coinDBInStorage);
    let myCoinDB = parCoinDB[getLoginedSessionID()];
    let myCoinCnt = myCoinDB.coin * 1;

    myCoinCnt = changeCoin

    parCoinDB[getLoginedSessionID()].coin = myCoinCnt;
    localStorage.setItem('coinDB', JSON.stringify(parCoinDB));
}

export const setAccumCoinCnt = (changeCoin) => {
    let coinDBInStorage = localStorage.getItem('coinDB');
    let parCoinDB = JSON.parse(coinDBInStorage);
    let myCoinDB = parCoinDB[getLoginedSessionID()];
    let myCoinCnt = myCoinDB.accumulatedCoin * 1;

    myCoinCnt = changeCoin

    parCoinDB[getLoginedSessionID()].accumulatedCoin = myCoinCnt;
    localStorage.setItem('coinDB', JSON.stringify(parCoinDB));
}

 export const getAccumCoinDB = () => {

    let coinDBInStorage = localStorage.getItem('coinDB')
    let parCoinDB = JSON.parse(coinDBInStorage);
    let signInedCoinDB = parCoinDB[getLoginedSessionID()]
    let myAccumCoinCnt = signInedCoinDB.accumulatedCoin * 1;
      
    return myAccumCoinCnt;

}