import React from 'react';
import BodyLeft from './left';
import BodyRight from './right';
import './body.css';

class Body extends React.Component{
    render(){
        return(
            <div className="row" style={{margin:0}}>
                <div className="col s12 padding_0">
                    <div className="col s3 left_style">
                        <BodyLeft/>
                    </div>
                    <div className="col s9 right_style padding_0">
                        <BodyRight/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Body;