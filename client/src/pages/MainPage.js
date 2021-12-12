import React from 'react';
import { useSelector } from 'react-redux';

import MainView from '../components/views/MainView'

import { getData, getDataByUsername, switchMode } from '../redux/actions/dataActions'

import { light_styles, dark_styles } from '../static/styles/Styles'

const MainPage = () => {

    const myData = useSelector(state => state.myData)
    const {
        userLoading,
        userData,
        userError,
        allUsersLoading,
        allUsersData,
        allUsersError,
        darkMode
    } = myData

    return (
        <MainView 
            userLoading={userLoading}
            userData={userData}
            userError={userError}
            allUsersLoading={allUsersLoading}
            allUsersData={allUsersData}
            allUsersError={allUsersError}
            darkMode={darkMode}
            getData={getData}
            getDataByUsername={getDataByUsername}
            switchMode={switchMode}
            styles={darkMode ? dark_styles : light_styles}
        />
    )
}

export default MainPage
