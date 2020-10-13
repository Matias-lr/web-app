import {GET_TOKEN,GET_USER, LOGOUT_USER} from '../actions/actionTypes'

const initialState = {}

export default (state=initialState,action) => {
    switch(action.type){
        case GET_TOKEN:
            return {...state,token:action.payload}
        case GET_USER:
            return {...state,...action.payload}
        case LOGOUT_USER:
            return {...state,token:null}
        default:
            return state
    }
}