import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchJornalEntries } from '../actions/journalActions';
import Header from '../components/Header';
import Loader from '../components/Loader';

const MapScreen = () => {
    const userLogin = useSelector(state => state.userLogin);

    const journal = useSelector(state => state.journal);

    const {loading, journalEntry} = journal;

    const dispatch = useDispatch();

    const history = useHistory();

    const{userInfo} = userLogin;

    useEffect(() =>{
        if(!userInfo){
            history.push('/');
        }

        dispatch(fetchJornalEntries());
        console.log(journalEntry);
    }, [userInfo, history, dispatch])

    return (
        <div>
            <Header />
            { loading && <Loader />}
            Welcome {userInfo?.fullName}
        </div>
    )
}

export default MapScreen;
