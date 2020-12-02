import React from 'react';
import GasPage from './GasPage';

const no2Page = ({padrao, no2Graph, minMaxMed}) => {
    return(
        <div>
          <GasPage 
            id = "gas_page_no2" 
            ppmValue = {padrao.no2[0]}
            ugm3Value = {padrao.no2[1]}
            opt = {no2Graph}
            seriesUpdate = {no2Graph.series[0].data}
            poluente = "no2"
            vetorMMM = {minMaxMed}
          />
        </div>
    );
}
export default no2Page;