import { 
    GET_USER_DATA_REQUEST,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
    GET_ALL_DATA_REQUEST,
    GET_ALL_DATA_SUCCESS,
    GET_ALL_DATA_FAILURE,
}  from '../constants/dataConstants'

import axios from 'axios'

export const getDataByUsername = (username) => async (dispatch) => {
    try{
        dispatch({
            type: GET_USER_DATA_REQUEST
        })

        // API CALL
        const { data } = await axios.get(`http://localhost:4242/api/users/${username}`)
        const all_data = await axios.get(`http://localhost:4242/api/users`)

        dispatch({
            type: GET_USER_DATA_SUCCESS,
            userData: data,
            allUsersData: all_data.data,
        })

    } catch(error) {
        dispatch({
            type: GET_USER_DATA_FAILURE,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const getData = () => async (dispatch) => {
    try{
        dispatch({
            type: GET_ALL_DATA_REQUEST
        })

        // API CALL
        const { data } = await axios.get(`http://localhost:4242/api/users`)

        dispatch({
            type: GET_ALL_DATA_SUCCESS,
            allUsersData: data
        })

    } catch(error) {
        dispatch({
            type: GET_ALL_DATA_FAILURE,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
