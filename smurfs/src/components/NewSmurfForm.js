import React, { useState } from 'react';
import { connect } from 'react-redux';

import { newSmurf } from '../actions';

const NewSmurfForm = props => {
  const [smurf, setSmurf] = useState({});

  const handleChange = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.newSmurf(smurf);
    setSmurf({})
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={smurf.name} onChange={handleChange} />
        <label htmlFor="age">Age: </label>
        <input type="text" name="age" value={smurf.age} onChange={handleChange} />
        <label htmlFor="height">Height: </label>
        <input type="text" name="height" value={smurf.height} onChange={handleChange} />
        <input type="submit" value="Add Smurf to Village" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default connect(null, { newSmurf })(NewSmurfForm);
