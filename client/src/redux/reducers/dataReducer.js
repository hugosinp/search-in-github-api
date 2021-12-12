import { 
    GET_USER_DATA_REQUEST,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILURE,
    GET_ALL_DATA_REQUEST,
    GET_ALL_DATA_SUCCESS,
    GET_ALL_DATA_FAILURE,
    SWITCH_DARK_MODE
}  from '../constants/dataConstants'

const initialState = {
    darkMode: false
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_DATA_REQUEST:
            return {
                ...state,
                userLoading: true,
                userData: [],
                userError: null,
                allUsersLoading: true,
                allUsersData: [],
                allUsersError: null
            }

        case GET_USER_DATA_SUCCESS:
            return {
                ...state,
                userLoading: false,
                userData: action.userData,
                userError: null,
                allUsersLoading: false,
                allUsersData: action.allUsersData,
                allUsersError: null
            }

        case GET_USER_DATA_FAILURE:
            return {
                ...state,
                userLoading: false,
                userData: [],
                userError: action.payload,
                allUsersLoading: false,
                allUsersData: [],
                allUsersError: action.payload
            }

        case GET_ALL_DATA_REQUEST:
            return {
                ...state,
                allUsersLoading: true,
                allUsersData: [],
                allUsersError: null
            }

        case GET_ALL_DATA_SUCCESS:
            return {
                ...state,
                allUsersLoading: false,
                allUsersData: action.allUsersData,
                allUsersError: null
            }

        case GET_ALL_DATA_FAILURE:
            return {
                ...state,
                allUsersLoading: false,
                allUsersData: [],
                allUsersError: action.payload
            }

        case SWITCH_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state
    }
}