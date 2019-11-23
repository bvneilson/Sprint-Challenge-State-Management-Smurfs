import React, { useEffect } from "react";
import Smurf from './Smurf.js';
import { connect } from "react-redux";
import axios from 'axios';

import { setSmurfs } from '../actions';

const Smurfs = props => {
  let setSmurfs = props.setSmurfs;
  useEffect((props) => {
    axios.get('http://localhost:3333/smurfs').then(res => {
      //console.log(res);
      setSmurfs(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  if (!props.smurfs || props.smurfs.length === 0) {
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

export default connect(mapStateToProps, { setSmurfs })(Smurfs);
