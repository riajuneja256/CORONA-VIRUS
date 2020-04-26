import React from 'react';
import Heading from '../heading';
import Icons from '../navbar/icons';
import {connect } from 'react-redux';
import {Success, confirmed_Cases, recovered_cases, fatal_cases, shiftBox,cancelShift} from  './actions';
import './body.css';

class BodyLeft extends React.Component{

    render(){

        return(
            <div className="col s12 padding_0">
                <div className="col s12 padding_0 divider_style">
                    <div className="col s8">
                        <Heading size = {16} content = {"Total confirmed cases"}/>
                    </div>
                    <div className="col s4 right-align">
                        <Icons icon_name = {"info"}/>
                    </div>
                    <div className = "col s12 total_cases_style"><b>{this.props.global_data.confirmed}</b></div>
                    <div className="col s12 padding_0 blah">
                        <div className = "col s1 dot_style">
                            <div className = "dot_style" style = {{background: "rgb(244, 195, 99)"}}></div>
                        </div>
                        <div className="col s6 cases_style">
                            Active cases
                        </div>
                        <div className="col s5 total_style right-align">
                            {this.props.global_data.confirmed - this.props.global_data.recovered - this.props.global_data.fatal}
                        </div>
                    </div>
                    <div className="col s12 padding_0"  style = {{marginBottom: 16}}>
                        <div className = "col s1 dot_style">
                            <div className = "dot_style" style = {{background: "rgb(96, 187, 105)"}}></div>
                        </div>
                        <div className="col s6 cases_style">
                            Recovered cases
                        </div>
                        <div className="col s5 total_style right-align">
                            {this.props.global_data.recovered}
                        </div>
                    </div>
                    <div className="col s12 padding_0"  style = {{marginBottom: 16}}>
                        <div className = "col s1 dot_style">
                            <div className = "dot_style" style = {{background: "rgb(118, 118, 118)"}}></div>
                        </div>
                        <div className="col s6 cases_style">
                            Fatal cases
                        </div>
                        <div className="col s5 total_style right-align">
                            {this.props.global_data.fatal}
                        </div>
                    </div>
                </div>
                <div id="area" className = "col s12 overflow_style">
                    <div className="col s12 browse">Browse</div>
                    <div className="area selected col s12" onClick = {() => this.props.cancelShift(this.props.global_data.confirmed)}>
                        <div className="col s6 left padding_0">Global</div>
                        <div className="col s6 right-align">{this.props.global_data.confirmed}</div>
                    </div>
                    {
                        (this.props.shift.shiftBox === true)?
                        <div className="area selected col s12" style={{marginTop:20}}>
                            <div className="col s6 left padding_0">{this.props.heading}</div>
                            <div className="col s6 right-align">{this.props.shift.shiftData}</div>
                        </div>:
                        ""
                    }

                    <div className="divider col s12"></div>
                    {
                        this.props.countries.map(el => (
                            <div key= {el}  onClick = {() => this.props.shiftBox(el, this.props.confirmed_cases_countrywise[el], this.props.recovered_cases_countrywise[el], this.props.fatal_cases_countrywise[el])} className="area mar_14 col s12">
                                <div className="col s6 left padding_0">{el}</div>
                                <div className="col s6 right-align">{this.props.confirmed_cases_countrywise[el]}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}   

const mapStateToProps = (reducerData) => {
    console.log()
    return {
    //   global_data: reducerData.ourReducer.globalCases,
    //   heading: reducerData.ourReducer.heading,
    //   shift: reducerData.ourReducer,
      countries_key: reducerData.new_reducer.countries_key_new,

      confirmed_cases_countrywise: reducerData.new_reducer.countries_name_confirmed,
      recovered_cases_countrywise: reducerData.new_reducer.countries_name_recovered,
      fatal_cases_countrywise: reducerData.new_reducer.countries_name_death,
    };
  }
  
const mapDispatchToProps = { 
    Success,
    confirmed_Cases,
    recovered_cases,
    fatal_cases,
    shiftBox,
    cancelShift
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BodyLeft);