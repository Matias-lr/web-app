import {GET_BUILDINGS} from '../actions/actionTypes'

const initialState = {}

export default (state=initialState,action) => {
    switch(action.type){
        case GET_BUILDINGS:
            return {...state,edificios:action.payload}
        default:
            return state
    }
}