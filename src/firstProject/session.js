let loginedSessionID = '';

export const setLoginedSessionID = (id = '') => {
   
    loginedSessionID = id;

}

export const getLoginedSessionID = () => {
      
    return loginedSessionID;

}