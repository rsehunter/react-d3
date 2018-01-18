import React from 'react';
import d3 from "d3";

var color = d3.scale.category20();

console.log(color(2));

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 10,
      key: index,
      fill: color(index)
    };
    return <circle {...circleProps} />;
  };
};

export default (props) => {
  return <g>{ props.data.map(renderCircles(props)) }</g>
}
