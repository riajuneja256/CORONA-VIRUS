import React from 'react';
import "./App.css";
function Heading(props) {

  return (
  <div className = "heading_style" style = {{fontSize: props.size}} >{props.content}</div>
  );
}

export default Heading;
