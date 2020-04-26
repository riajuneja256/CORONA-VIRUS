import axios from 'axios';
export const FETCH_PRODUCTS_STARTED1 = 'FETCH_PRODUCTS_STARTED1';
export const FETCH_PRODUCTS_SUCCESS1 = "FETCH_PRODUCTS_SUCCESS1"
export const FETCH_PRODUCTS_FAILURE1 = 'FETCH_PRODUCTS_FAILURE1';

export const getData1 = () => {
    return dispatch => {
      dispatch(Started());
      axios
        .get(`https://corona-node.herokuapp.com/allcountrydata`)
        .then(res => {
          dispatch(Success(res.data));
        })
        .catch(err => {
          dispatch(Failure(err.message));
        });
    };
  };

  export const Started = () => ({
    type: "FETCH_PRODUCTS_STARTED1"
  });

  export const Success = data => ({
    type: "FETCH_PRODUCTS_SUCCESS1",
    payload: data
  });
  
  export const Failure = error => ({
    type: "FETCH_PRODUCTS_FAILURE1",
    payload: {
      error
    }
  });

  