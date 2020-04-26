
const initialState = {
    data:"",
    loading: false,
    error: null,
    countries_name_confirmed:{},
    countries_name_recovered:{},
    countries_name_death:{},
    countries_key_new:[]
}
var country_name_C = {};
var country_name_R = {};
var country_name_D = {};
var country_name = [];

function get_names(content){
    content.results.map(el =>{
        country_name.push(el.country_name);
    })
    return country_name
}
function get_names_confirmed(content){
    content.results.map(el =>{
        country_name_C[el.country_name] = el.confirmed
    })
    return country_name_C
}
function get_names_recovered(content){
    content.results.map(el =>{
        country_name_R[el.country_name] = el.recovered
    })
    return country_name_R
}
function get_names_death(content){
    content.results.map(el =>{
        country_name_D[el.country_name] = el.death
    })
    return country_name_D
}
export const new_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_STARTED1':
            return{
                ...state,
                loading: true,
                error: null
            }

        case 'FETCH_PRODUCTS_SUCCESS1':
            
            return{
                ...state,
                data: action.payload,
                countries_key_new: get_names(action.payload),
                countries_name_confirmed: get_names_confirmed(action.payload),
                countries_name_recovered: get_names_recovered(action.payload),
                countries_name_death: get_names_death(action.payload),
                loading: false,
                
            }
        case 'FETCH_PRODUCTS_FAILURE1':
            return{
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            }
            default:
                return state;
          }
          };