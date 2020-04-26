import React, { memo, useEffect } from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography} from "react-simple-maps";
import data from '../data/worldData.json';

//const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const geoUrl = data; 
const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};
const MapChart = ({ setTooltipContent , sendData, pooraReducer}) => {
    useEffect(() => {
        sendData(geoUrl)
    }, []);
    var wholeReducer = pooraReducer;
    var countries_key_new = wholeReducer.new_reducer.countries_key_new;
    var confirmed = pooraReducer.new_reducer.countries_name_confirmed;
    var recovered = pooraReducer.new_reducer.countries_name_recovered;
    var death = pooraReducer.new_reducer.countries_name_death;
    console.log(confirmed);
    console.log(wholeReducer);
    function setCNumber(naam){
      console.log(naam);
      var res1;
      countries_key_new.map(el => {
            if(naam.indexOf(el) >= 0){
                console.log("AVAIL: " + el + " EXPECTED: "  +naam);
                res1 =  confirmed[el]
            }
            else if(naam.indexOf("United States of America")  >= 0){

                  console.log("US" + " + "  +naam);
                  res1 =  confirmed["US"]
              }
              else if(naam.indexOf("United Kingdom")  >= 0){

                console.log("UK" + " + "  +naam);
                res1 =  confirmed["UK"]
            }
            else if(naam.indexOf("Antarctica")  >= 0){

              console.log("UK" + " + "  +naam);
              res1 =  0
          }
          else if(naam.indexOf("China") >= 0){
                console.log("Mainland China" + " + "  +naam);
                res1 =  confirmed["Mainland China"]
            }

          
        })
        return res1
    }
    function setRNumber(naam){
      var res2;
      countries_key_new.map(el => {
        if(naam.indexOf(el) >= 0){
          res2 =  recovered[el]
        }
        else if(naam.indexOf("United States of America")  >= 0){
          console.log("US" + " + "  +naam);
          res2 =  recovered["US"]
        }
        else if(naam.indexOf("United Kingdom")  >= 0){
          console.log("UK" + " + "  +naam);
          res2 =  recovered["UK"]
        }
        else if(naam.indexOf("Antarctica")  >= 0){
          console.log("UK" + " + "  +naam);
          res2 =  0
        }
        else if(naam.indexOf("China") >= 0){
          console.log("Mainland China" + " + "  +naam);
          res2 =  recovered["Mainland China"]
      }
      })
      return res2;
    }
  function setDNumber(naam){
    var res3;
    countries_key_new.map(el => {
      if(naam.indexOf(el) >= 0){
        res3 =  death[el]
    }
    else if(naam.indexOf("United States of America")  >= 0){
      console.log("US" + " + "  +naam);
      res3 =  death["US"]
    }
    else if(naam.indexOf("United Kingdom")  >= 0){
      console.log("UK" + " + "  +naam);
      res3 =  death["UK"]
    }
    else if(naam.indexOf("Antarctica")  >= 0){
      console.log("UK" + " + "  +naam);
      res3 =  0
    }
    else if(naam.indexOf("China") >= 0){
      console.log("Mainland China" + " + "  +naam);
      res3 =  death["Mainland China"]
  }
  })
    return res3
}
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }} width = {800} height = {500}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, NAME_LONG, ABBREV } = geo.properties;
                    setTooltipContent([(`${NAME}`), (`${(setCNumber([NAME, NAME_LONG, ABBREV]))}`), (`${(setRNumber([NAME, NAME_LONG, ABBREV]))}`), (`${(setDNumber([NAME, NAME_LONG, ABBREV]))}`)]);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                      stroke: "#FFF",
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                      stroke: "#FFF",
                      strokeWidth: 0.75,
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                      stroke: "#FFF",
                      strokeWidth: 0.75,
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
        
      </ComposableMap>
    </>
  );
};


export default memo(MapChart);

