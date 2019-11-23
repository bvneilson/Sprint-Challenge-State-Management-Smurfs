import React from "react";
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';

const Smurf = props => {
  const handleClick = () => {
    props.deleteSmurf(props.data.id);
  }
  return(
    <div className="smurf">
      <h2>{props.data.name}</h2>
      <p><b>Age</b>: {props.data.age}</p>
      <p><b>Height</b>: {props.data.height}</p>
      <p><button onClick={handleClick}>Delete Smurf</button></p>
    </div>
  )
}

export default connect(null, { deleteSmurf })(Smurf);
