import axios from 'axios';

const initialState = {
  smurfs: null,
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
            //dispatch({ type: POST_DATA_SUCCESS, payload: apiData });
            //let newSmurf = res.data;
        })
        .catch(error => {
            console.log(error);
            //dispatch({ type: POST_DATA_FAIL, payload: apiData });
        })
        return {
          ...state,
          smurfs: [...state.smurfs, action.payload]
        }
    default:
      return state;
  }
}
