const initialState = {
    tab1: false,
    tab2: true
}

export const tabsReducer  = (state = initialState, action) => {
    switch(action.type){
        case 'TAB1':
            return{
                ...state,
                tab1: true,
                tab2: false
            }
        case 'TAB2':
            return{
                ...state,
                tab1:false,
                tab2:true
            }
            default:
                return state;
    }
};