import axios from 'axios';

export const SET_SMURFS = 'SET_SMURFS';
export const NEW_SMURF_START = 'NEW_SMURF_START';
export const NEW_SMURF_SUCCESS = 'NEW_SMURF_SUCCESS';
export const NEW_SMURF_FAIL = 'NEW_SMURF_FAIL';
export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL';

export const setSmurfs = smurfs => {
  console.log(smurfs);
  return {
    type: SET_SMURFS,
    payload: smurfs
  }
}

export const newSmurf = smurf => dispatch => {
  dispatch({ type: NEW_SMURF_START });
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        console.log(res.data);
        dispatch({ type: NEW_SMURF_SUCCESS, payload: res.data })
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: NEW_SMURF_FAIL, payload: error })
    })
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        console.log(res.data);
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: DELETE_SMURF_FAIL, payload: error })
    })
}
