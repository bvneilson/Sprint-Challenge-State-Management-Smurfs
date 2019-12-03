import axios from 'axios';
import { SET_SMURFS, NEW_SMURF, DELETE_SMURF } from '../actions';

const initialState = {
  smurfs: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SMURFS':
      return {
        ...state,
        smurfs: action.payload
      }
    case 'NEW_SMURF':
      axios.post('http://localhost:3333/smurfs', action.payload)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })
        return {
          ...state,
          smurfs: [...state.smurfs, action.payload]
        }
    case 'DELETE_SMURF':
      axios.delete(`http://localhost:3333/smurfs/${action.payload}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })
        return {
          ...state,
          smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
        }
    default:
      return state;
  }
}
