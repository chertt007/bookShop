import {
    LOGIN, LOGOUT,
    SET_ACTIVE_USER_ID,
    SET_ACTIVE_USER_NAME,
    SET_ADMINISTRATOR_ACCESS,
    SET_USER_ACCESS,
    TOGGLE_LOGIN
} from "../constants";


const defaultApp = {
    loggedIn:false,
    activeId: '',
    activeName:'',
    isAdmin:false,
}

export default (app = defaultApp, action) => {
    const { type, payload } = action;

    switch (type) {

        case LOGIN:
            return {...app, loggedIn: true}
        case LOGOUT:
            return {...app, loggedIn:false,activeId:'',activeName:'',isAdmin:false}
        case SET_ADMINISTRATOR_ACCESS:
            return {...app, isAdmin: true}
        case SET_USER_ACCESS:
            return {...app, isAdmin: false}
        case SET_ACTIVE_USER_ID:
            return {...app, activeId:payload}
        case SET_ACTIVE_USER_NAME:
            return {...app, activeName: payload}

        default:
            return app;
    }
};
