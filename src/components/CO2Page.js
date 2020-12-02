import React from 'react';
import GasPage from './GasPage';

const co2Page = ({padrao, co2Graph, minMaxMed}) => {
    return(
        <div>
          <GasPage
            id = "gas_page_co2" 
            ppmValue = {padrao.co2[0]}
            ugm3Value = {padrao.co2[1]}
            opt = {co2Graph}
            seriesUpdate = {co2Graph.series[0].data}
            poluente = "co2"
            vetorMMM = {minMaxMed}
          />
        </div>
    );
}
export default co2Page;