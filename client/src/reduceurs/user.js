import { FAIL_USERS, GET_USER, GET_USERS, LOAD_USERS } from "../actiontype/user";

const initialState ={
    listUsers: [],
    errors: null,
    load: false,
    userToGet:{},
};

//pure function
const userReducer = (state = initialState, {type,payload}) => {
    switch ( type) {
        case LOAD_USERS:
            return { ...state, load:true};
        case GET_USERS:
            return { ...state, load:false, listUsers: payload.listUsers }; 
        case GET_USER:
            return { ...state, userToGet: payload.userToGet, load:false};
        case FAIL_USERS:
            return { ...state, load:false, errors: payload};
        default:
            return state;
    }
};

export default userReducer;