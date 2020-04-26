import React from 'react';
import ReactLoading from 'react-loading';
import './App.css';
 
const Example = ({ type, color }) => (
    <div className = "row">
        <div className="col s12 something">
            <ReactLoading type={type} color={color} height={667} width={50}/>
        </div>
    </div>
);
 
export default Example;
