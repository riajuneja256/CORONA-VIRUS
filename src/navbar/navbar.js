import React from 'react';
import Icons from './icons';
import './navbar.css';

function NavBar() {

    return (
      <div className="row" style={{marginBottom: 0}}>
            <div className="col s12 navbar_style">
                <div className="col s1 left-align logo_style">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><g clipPath="url(#clipLogo)"><path d="M8.8 18.564V1.68L4 0V21.324L8.8 24L20.8 17.1V11.64L8.8 18.564Z" fill="#666"></path><path opacity="0.75" d="M20.8 17.1V11.64L10.156 7.92001L12.238 13.11L20.8 17.1Z" fill="#666"></path></g><defs><clipPath id="clipDarkLogo"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                </div>
                <div className="col s2 heading padding_0 left-align">COVID-19 Tracker</div>
                <div className="col s1 right right-align padding_0 icon_parent" >
                    <Icons icon_name = {"info"}/>
                </div>
                <div className="col s1 right right-align padding_0 icon_parent" >
                    <Icons icon_name = {"mode_comment"}/>
                </div>
                <div className="col s1 right right-align padding_0 icon_parent" >
                    <Icons icon_name = {"share"}/>
                </div>
          </div>
      </div>
    );
  }
  
  export default NavBar;