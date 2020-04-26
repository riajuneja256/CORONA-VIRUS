import axios from 'axios';
export const FETCH_INDIA_STARTED = 'FETCH_INDIA_STARTED';
export const FETCH_INDIA_SUCCESS = "FETCH_INDIA_SUCCESS";
export const FETCH_INDIA_FAILURE = 'FETCH_INDIA_FAILURE';

export const getIndiaData = () => {
    return dispatch => {
      dispatch(india_started());
      axios
        .get(`https://script.googleusercontent.com/macros/echo?user_content_key=JHReYSUI-RRSVraZcX6SJ3vnBS-ob8ZkQHyEpH4RuOYH7rEXKJt1u2NWqob4T9oD7JhYi8VFkiTQKcIaw-MtvxDccEakGCj6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKXFvsR88vL4WiBr168omFadgngDnj25DLpEvLRaiIpzZr1NvbW-Bo38vshdDBv10tpytj_A4aoE&lib=Mm1FD1HVuydJN5yAB3dc_e8h00DPSBbB3`)
        .then(res => {
          dispatch(india_success(res.data));
        })
        .catch(err => {
          dispatch(india_failure(err.message));
        });
    };
};

export const india_started = () => ({
    type: "FETCH_INDIA_STARTED"
});

export const india_success = (data) => ({
    type: "FETCH_INDIA_SUCCESS",
    payload: data
});

export const india_failure = (error) => ({
    type: "FETCH_INDIA_FAILURE",
    payload: {
        error
      }
});
