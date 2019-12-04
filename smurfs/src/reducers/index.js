import { SET_SMURFS,
  NEW_SMURF_START,
  NEW_SMURF_SUCCESS,
  NEW_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL } from '../actions';

const initialState = {
  smurfs: [],
  error: '',
  isFetching: false
}

export const reducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case 'SET_SMURFS':
      return {
        ...state,
        smurfs: action.payload
      }
    case 'NEW_SMURF_START':
        return {
          ...state,
          isFetching: true,
          error: ''
        }
    case 'NEW_SMURF_SUCCESS':
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ''
        }
    case 'NEW_SMURF_FAIL':
        return {
          ...state,
          error: action.payload
        }
    case 'DELETE_SMURF_START':
        return {
          ...state,
          isFetching: true,
          error: ''
        }
    case 'DELETE_SMURF_SUCCESS':
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ''
        }
    case 'DELETE_SMURF_FAIL':
        return {
          ...state,
          error: action.payload
        }
    default:
      return state;
  }
}
