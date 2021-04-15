import {
    ADD_JOURNAL_FAIL,
    ADD_JOURNAL_LOADING,
    ADD_JOURNAL_SUCCESS,
    DELETE_JOURNAL_FAIL,
    DELETE_JOURNAL_LOADING,
    DELETE_JOURNAL_SUCCESS,
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

export const addJournalReducer = (state = {},action) =>{
    switch (action.type) {
        case ADD_JOURNAL_LOADING:
            return{
                loading : true,
            }

        case ADD_JOURNAL_SUCCESS:
            return{
                loading: false,
                entry: action.payload
            }

        case ADD_JOURNAL_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        case USER_LOGOUT:
            return {};

        default:
            return state;
    }
}

export const deleteJournalReducer = (state = {},action) =>{
    switch (action.type) {
        case DELETE_JOURNAL_LOADING:
            return{
                loading : true,
            }

        case DELETE_JOURNAL_SUCCESS:
            return{
                loading: false,
                message: action.payload
            }

        case DELETE_JOURNAL_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        case USER_LOGOUT:
            return {};

        default:
            return state;
    }
}