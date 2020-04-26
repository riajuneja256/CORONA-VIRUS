import axios from 'axios';
export const FETCH_PRODUCTS_STARTED = 'FETCH_PRODUCTS_STARTED';
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SHIFTBOX = 'SHIFTBOX'; 
export const SHIFTDATA = 'SHIFTDATA';
export const CANCELSHIFT = 'CANCELSHIFT';

  export const getData = () => {
    return dispatch => {
      dispatch(Started());
      axios
        .get(`https://corona-node.herokuapp.com/global`)
        .then(res => {
          dispatch(Success(res.data));
        })
        .catch(err => {
          dispatch(Failure(err.message));
        });
    };
  };


  export const Started = () => ({
    type: "FETCH_PRODUCTS_STARTED"
  });

  export const Success = data => ({
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: data
  });
  
  export const Failure = error => ({
    type: "FETCH_PRODUCTS_FAILURE",
    payload: {
      error
    }
  });

  export const shiftBox = (data1, data2, data3, data4) => ({
    type: "SHIFTBOX",
    payload: {"name": data1, "confirmed": data2, "recovered": data3, "fatal": data4}
  });

  export const shiftdata = (data1, data2) => ({
    type: "SHIFTDATA",
    payload: [ data1, data2]
  }); 

  export const cancelShift = (data1,data2) => ({
    type: "CANCELSHIFT",
    payload: [data1, data2]
  });