import { actions } from "react-table"

const intialState = {
    incomingdata: "",
    loading: false,
    error: null,
}

export const IndiaReducer  = (state = intialState, action) => {
    switch(actions.type){
        case "FETCH_INDIA_STARTED":
            return{
                ...state,
                loading: true,
                error: null
            }
        case "FETCH_INDIA_SUCCESS":
            return{
                ...state,
                loading: false,
                error: null,
                incomingdata: action.payload
            }
        case "FETCH_INDIA_FAILURE":
            return{
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
        }
        default: 
        return state
    }
} 