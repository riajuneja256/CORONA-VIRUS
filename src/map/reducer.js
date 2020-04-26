import { actions } from "react-table";

 
const inititalState = {
    content:[],
    wholeData:{},
    countries:[],
    nameAndNumbers: {}
};

var array_map_keys = [];
var object_data = {};

function getCountries(data){
    array_map_keys = data.objects.ne_110m_admin_0_countries.geometries.map(el => {
            return el.properties.NAME;
        })
     return array_map_keys
}


function getdataNumbers(data){
        data.objects.ne_110m_admin_0_countries.geometries.map(el => {
            object_data[el.properties.NAME] =  el.properties.POP_EST
        })
        return object_data;
}
export const reducerForMap = (state = inititalState, action) => {
    switch(action.type){
        case 'UPDATE':
            return{
                ...state,
                content: action.payload,
            }
        case 'WHOLECONTENT':
            return{
                ...state,
                wholeData: action.payload,
                countries: getCountries(action.payload),
                nameAndNumbers: getdataNumbers(action.payload)
            }
        default:
            return state;
    }
};