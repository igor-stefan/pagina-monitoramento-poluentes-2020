import React from 'react'
import './Card.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CardsForGas = ({name, ppmValue, ugm3Value}) => {
    return(
      <div className="card br3 mt1 mb1 bw2 mr1 mr1 pl1 pr1">
            <div className="bg-light-yellow w-100 br3 mb0 dib v-mid">
                <h3>{name}</h3>
                <Tabs defaultIndex = {0} className = "br3 br--bottom" style = {{backgroundColor: '#505050'}}
                onSelect={index => {if(index === 0) console.log("visualizando em ppm"); else console.log("visualizando em ugm3")}}>
                  <TabList>
                    <Tab className = "f5 w-50 br0 pa2 button-a">PPM</Tab>
                    <Tab className = "f5 w-50 br0 pa2 button-a">ug/m³</Tab>
                  </TabList>
                  <div className = "v-mid dib mt0" style = {{padding: '1.25rem', color: 'white'}}>
                    <TabPanel>{ppmValue} PPM</TabPanel>
                    <TabPanel>{ugm3Value} ug/m³</TabPanel>
                  </div>
                </Tabs>
                </div>              
        </div>
    )
}  
  
export default CardsForGas;