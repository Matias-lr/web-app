import {combineReducers} from 'redux'
import user from './user'
import style from './styles'
import buildings from './buildings'

const rootReducer = combineReducers({
    user,
    style,
    edificios:buildings
})

export default rootReducer