import {
    JOURNAL_ENTRY_FAIL,
    JOURNAL_ENTRY_LOADING,
    JOURNAL_ENTRY_SUCEESS
} from "../constants/journalConstants";
import { USER_LOGOUT } from "../constants/userConstants";

export const journalReducer = (state = {journalEntry:[]}, action) =>{
    switch(action.type){
        case JOURNAL_ENTRY_LOADING:
            return{
                loading : true,
                journalEntry: []
            }

        case JOURNAL_ENTRY_SUCEESS:
            return{
                loading: false,
                journalEntry: action.payload
            }

        case JOURNAL_ENTRY_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        case USER_LOGOUT:
            return {journalEntry: []};

        default:
            return state;
    }
}