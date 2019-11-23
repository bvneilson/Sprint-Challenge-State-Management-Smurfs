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
    default:
      return state;
  }
}
