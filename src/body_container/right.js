import React from 'react';
import IndiaData from './india_data';
import Heading from '../heading';
import {connect } from 'react-redux';
import { Showtab1, Showtab2 } from './actions_for_tabs';
import { shiftBox } from './actions';
import { setContent, whole_content } from '../map/action';
import MapChart from '../map/map';
import './body.css';
import ReactTooltip from "react-tooltip";
import Icons from '../navbar/icons';

class BodyRight extends React.Component{

    render(){ 
        return(
            <div className="row" style={{margin:0}}>
                <div className="col s12 padding_0">
                <div className="col s12 padding_0"  style={{borderBottom: "1px solid #ddd"}}>
                    <div className="col s6 padding_0 header">
                        <Heading size = {20} content = {this.props.headingData}/>
                    </div>
                    <div className="col s6">
                        <div className="col s2 padding_0 btn-flat right" onClick = {() => this.props.Showtab1()}>India</div>
                        <div className="col s2 padding_0 btn-flat right" onClick = {() => this.props.Showtab2()}>Overview</div>
                    </div>
                </div>
                    {
                        (this.props.onOff.tab1 === true)?
                            <div className="col s12 padding_0">
                                <IndiaData/>
                            </div>:
                        (this.props.onOff.tab2 === true)?
                            <div className="col s12 padding_0">
                                <div className="col s12 padding_0">
                                    {
                                        (this.props.headingData == "GLOBAL"  ||  this.props.headingData == "Global")?
                                            <div>
                                                <div className="col s2 sections_style_confirmed"><b>Confirmed:</b> {this.props.global_data_update1.confirmed}</div>
                                                <div className="col s2 sections_style_recovered"><b>Recovered:</b> {this.props.global_data_update1.recovered}</div>
                                                <div className="col s2 sections_style_fatal"><b>Fatal:</b> {this.props.global_data_update1.death}</div>
                                            </div>:
                                            <div>
                                                <div className="col s2 sections_style_confirmed"><b>Confirmed:</b> {this.props.each_country_data.confirmed}</div>
                                                <div className="col s2 sections_style_recovered"><b>Recovered:</b> {this.props.each_country_data.recovered}</div>
                                                <div className="col s2 sections_style_fatal"><b>Fatal:</b> {this.props.each_country_data.fatal}</div>
                                            </div>
                                    }
                                </div>
                                <div>
                                    <MapChart setTooltipContent={this.props.setContent} sendData = {this.props.whole_content} pooraReducer = {this.props.reducerBhejdo}/>
                                    {
                                        (this.props.mapContent.length)?
                                            <ReactTooltip>
                                                                                <div className="col s12 padding_0">
                                                                                    <div className="col s12 padding_0 tooltip_style_header">
                                                                                        {this.props.mapContent[0]}
                                                                                    </div>
                                                                                    <div className="col s12 padding_0">
                                                                                        <div className="col s4">
                                                                                            <div className="col s12 padding_0">
                                                                                                <div className="col s6">
                                                                                                    <Icons icon_name = {"stop"} color_name = {"skyblue"}/>
                                                                                                </div>
                                                                                                <div className="col s6 padding_0">
                                                                                                {this.props.mapContent[1]}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col s4">
                                                                                            <div className="col s12 padding_0">
                                                                                                <div className="col s6">
                                                                                                    <Icons icon_name = {"stop"} color_name = {"green"}/>
                                                                                                </div>
                                                                                                <div className="col s6 padding_0">
                                                                                                {this.props.mapContent[2]}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col s4">
                                                                                            <div className="col s12 padding_0">
                                                                                                <div className="col s6">
                                                                                                    <Icons icon_name = {"stop"} color_name = {""}/>
                                                                                                </div>
                                                                                                <div className="col s6 padding_0">
                                                                                                {this.props.mapContent[3]}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </ReactTooltip>
                                            :""
                                    }
                                    </div>
                            </div>:
                        <div>
                            error
                        </div>
                    } 
                    
                </div>
            </div>
        );
    }
}
const mapStateToProps = (reducerData) => {
    console.log(reducerData)
    return {
      onOff: reducerData.tabsReducer,
      headingData: reducerData.ourReducer.heading.charAt(0).toUpperCase() + reducerData.ourReducer.heading.slice(1),
      data: reducerData.ourReducer.shiftData,
      globalData: reducerData.ourReducer.global_data,
      each_country_data: reducerData.ourReducer.clicked_country_data,
      countriesArray: reducerData.ourReducer.countries,
      mapContent: reducerData.reducerForMap.content,
      reducerBhejdo: reducerData,
      global_data_update1: reducerData.ourReducer.global_data_update
    };
    
  }

const mapDispatchToProps = {
    Showtab1,
    Showtab2,
    shiftBox,
    setContent,
    whole_content
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BodyRight);
