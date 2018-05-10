import React, { Component } from 'react';

class Bar extends Component {
  constructor(props){
      super(props);
      this.state={
          value:props.value
      }
  }
  
  static defaultProps = {
      min: 0,
      max: 245,
      step:1
  }
  
  onChange(event){
    console.log(event.target.value);
    this.props.onChange(this.state.value);
    this.setState({value:event.target.value});
  }
  render() {
    return (
        <div className="bar">
            <input 
            type="range"
            onChange={this.onChange.bind(this)}
            value={this.state.value}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            />
        </div>
    );
  }
}

export default Bar;
