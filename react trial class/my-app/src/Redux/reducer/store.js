import {createStore,combineReducers} from "redux";
import cartReducer from "./cartReducer";
import gameReducer from "./gameReducer";



const reducer=combineReducers({
    cart:cartReducer,
    game:gameReducer
})

const store=createStore(reducer)
export default store
