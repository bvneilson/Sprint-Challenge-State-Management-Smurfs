export const SET_SMURFS = 'SET_SMURFS';

export const setSmurfs = smurfs => {
  console.log(smurfs);
  return {
    type: SET_SMURFS,
    payload: smurfs
  }
}
