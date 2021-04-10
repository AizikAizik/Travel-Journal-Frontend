import axios from "axios";
import { JOURNAL_ENTRY_FAIL, JOURNAL_ENTRY_LOADING, JOURNAL_ENTRY_SUCEESS } from "../constants/journalConstants";

const api_url = process.env.REACT_APP_API_URL;

export const fetchJornalEntries = () => async (dispatch, getState) =>{
    try {
        dispatch({
            type: JOURNAL_ENTRY_LOADING
        });

        const { userLogin: {userInfo} } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization : `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(
            `${api_url}/api/journal`,
            config
        );

        dispatch({
            type: JOURNAL_ENTRY_SUCEESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: JOURNAL_ENTRY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}