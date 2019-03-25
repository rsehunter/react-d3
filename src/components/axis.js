import React from 'react';
import d3    from 'd3';

export default class Axis extends React.Component {

  node  = React.createRef();
  componentDidUpdate(){
    var axis = d3.svg.axis().orient(this.props.orient).ticks(6).scale(this.props.scale);

    d3.select(this.node.current)
      .transition()
      .duration(1000)
      .call(axis);
  }
  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
    var axis = d3.svg.axis().orient(this.props.orient).ticks(5).scale(this.props.scale);
    d3.select(this.node.current).call(axis);
  }

  render() {
    return <g className="axis" ref={this.node} transform={this.props.translate}></g>
  }
}
