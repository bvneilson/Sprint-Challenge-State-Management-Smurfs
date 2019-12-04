import React, { useEffect } from "react";
import Smurf from './Smurf.js';
import { connect } from "react-redux";
import axios from 'axios';

import { getSmurfs } from '../actions';

const Smurfs = props => {

  if (!props.smurfs || props.smurfs.length === 0) {
    props.getSmurfs();
    return <h2>Loading...</h2>
  }

  //console.log(props.smurfs);
  return (
    props.smurfs.map((smurf, index) => {
      return <Smurf data={smurf} key={index} />
    })
  )
}

const mapStateToProps = state => {
  //console.log(state);
  if (!state) {
    return{};
  }
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
