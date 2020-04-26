import React from 'react';
import './navbar.css';

function Icons(props) {

    return (
        <div className="col s12 padding_0">
            <i className="material-icons icon_style" style = {{color: props.color_name}}>{props.icon_name}</i> 
        </div>
    );
  }
  
  export default Icons;