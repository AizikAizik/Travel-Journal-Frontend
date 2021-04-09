import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const MapScreen = () => {
    const userLogin = useSelector(state => state.userLogin);

    const{userInfo} = userLogin;

    return (
        <div>
            <Header />
            Welcome {userInfo?.fullName}
        </div>
    )
}

export default MapScreen;
