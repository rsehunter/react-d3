import React from 'react';
import d3 from "d3";

var color = d3.scale.category20();


export default class DataCircles extends React.Component {
  circles = React.createRef();
  renderCircles = (props) => {
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
  

  componentDidUpdate(){

    let node = d3.selectAll('circle').data( this.props.data);
    node.transition()
        .duration(500)
        .attr("cx", (d) => this.props.xScale(d[0]))
        .attr("cy", (d) => this.props.yScale(d[1]))
        .attr( "r", 10 )
        .attr( 'fill', (d, index) => color(index));

  }

  componentDidMount(){

    let node = d3.select("#circles" );
    node.selectAll('circle')
            .data( this.props.data)
            .enter()
            .append( 'circle' )
            .attr("cx", (d) => this.props.xScale(d[0]))
            .attr("cy", (d) => this.props.yScale(d[1]))
            .attr( "r", 10 )
            .attr( 'fill', (d, index) => color(index));

  }
  render(){
    return <g ref={this.circles} id="circles">{}</g> ;
  } 
}
