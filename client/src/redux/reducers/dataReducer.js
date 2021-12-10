import { 
    GET_USER_DATA_REQUEST,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
    GET_ALL_DATA_REQUEST,
    GET_ALL_DATA_SUCCESS,
    GET_ALL_DATA_FAILURE,
}  from '../constants/dataConstants'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_DATA_REQUEST:
            return {
                userLoading: true,
                userData: [],
                userError: null,
                allUsersLoading: true,
                allUsersData: [],
                allUsersError: null
            }

        case GET_USER_DATA_SUCCESS:
            return {
                userLoading: false,
                userData: action.userData,
                userError: null,
                allUsersLoading: false,
                allUsersData: action.allUsersData,
                allUsersError: null
            }

        case GET_USER_DATA_FAILURE:
            return {
                userLoading: false,
                userData: [],
                userError: action.payload,
                allUsersLoading: false,
                allUsersData: [],
                allUsersError: action.payload
            }

        case GET_ALL_DATA_REQUEST:
            return {
                allUsersLoading: true,
                allUsersData: [],
                allUsersError: null
            }

        case GET_ALL_DATA_SUCCESS:
            return {
                allUsersLoading: false,
                allUsersData: action.allUsersData,
                allUsersError: null
            }

        case GET_ALL_DATA_FAILURE:
            return {
                allUsersLoading: false,
                allUsersData: [],
                allUsersError: action.payload
            }
        default:
            return state
    }
}