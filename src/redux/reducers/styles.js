import {BACKGROUND_CHANGE} from '../actions/actionTypes'

const initialState = {}

export default (state=initialState,action) => {
    switch(action.type){
        case BACKGROUND_CHANGE:
            if(action.payload == 0){
                return {...state,back:'blank'}
            }else{
                return {...state,back:'image'}
            }
        default:
            return state
    }
}