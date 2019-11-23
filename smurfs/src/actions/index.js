export const SET_SMURFS = 'SET_SMURFS';
export const NEW_SMURF = 'NEW_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

export const setSmurfs = smurfs => {
  console.log(smurfs);
  return {
    type: SET_SMURFS,
    payload: smurfs
  }
}

export const newSmurf = smurf => {
  console.log(smurf);
  return {
    type: NEW_SMURF,
    payload: smurf
  }
}

export const deleteSmurf = id => {
  console.log(id);
  return {
    type: DELETE_SMURF,
    payload: id
  }
}
