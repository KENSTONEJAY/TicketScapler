import {LOGIN_REQUEST, SUCCESS, FAILURE,LOGOUT_REQUEST} from "./authTypes";
const initialState ={
    isLoggedIn: ''
}
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state
            };
        case SUCCESS:
            return {
                isLoggedIn: action.payload
            };
        case FAILURE:
            return{
                isLoggedIn: action.payload
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
            };
        default:
            return state;    
            
    }
}
export default reducer;