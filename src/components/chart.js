import React                from 'react';
import {connect}            from 'react-redux';
import * as actionCreators  from '../lib/action-creators';
import ScatterPlot          from './scatter-plot';
import {Button}             from 'react-bootstrap';
import "../App.css"

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

const Chart = (props) => {
  return <div className="Chart">
    <h1>Playing With React and D3</h1>
    <ScatterPlot {...props} {...styles} />
    <div className="controls">
      <button class="btn btn-primary" onClick={() => props.randomizeData()}>
        Randomize Data
      </button>

    </div>
  </div>
};

export default connect((state) => state, actionCreators)(Chart);
