
const initialState = {
    data:"",
    loading: false,
    error: null,
    global_data: "",
    shiftBox: false,
    shiftData: {},
    heading: "Global".toUpperCase(),
    clicked_country_data: {},
    global_data_update: {}
}

var global_data_all;

function getGlobalData(data){
    (data.results  && data.results.length)?
    global_data_all = data.results[data.results.length-1]:console.log("sorry");
    return global_data_all;
}

export const ourReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_STARTED':
            return{
                ...state,
                loading: true,
                error: null
            }

        case 'FETCH_PRODUCTS_SUCCESS':
            
            return{
                ...state,
                data: action.payload,
                loading: false,
                global_data: getGlobalData(action.payload),
                global_data_update:getGlobalData(action.payload)
            }
        case 'FETCH_PRODUCTS_FAILURE':
            return{
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            }
        case 'SHIFTBOX':
            console.log(action.payload)
            return{ //payload: {"name": data1, "confirmed": data2, "recovered": data3, "fatal": data4}
                ...state,
                shiftBox: true,
                heading: action.payload.name,
                shiftData: action.payload,
                clicked_country_data: action.payload
            }
        case 'SHIFTDATA':
                return{
                    ...state,
                    shiftData: [action.payload],
                }
        case 'CANCELSHIFT':
            console.log(action.payload[0])
            return{
                ...state,
                shiftBox: false,
                shiftData: "",
                heading: "Global",
                global_data_update: action.payload[0]
            }

        default:
          return state;
    }
    };
