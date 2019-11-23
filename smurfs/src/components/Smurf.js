import React from "react";

const Smurf = props => {
  return(
    <div className="smurf">
      <h2>{props.data.name}</h2>
      <p><b>Age</b>: {props.data.age}</p>
      <p><b>Height</b>: {props.data.height}</p>
    </div>
  )
}

export default Smurf;
