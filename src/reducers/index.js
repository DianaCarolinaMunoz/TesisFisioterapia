import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import ejerciciosReducer from "./ejerciciosReducers";

export default combineReducers({
    users: usersReducer,
    ejercicios: ejerciciosReducer
});


