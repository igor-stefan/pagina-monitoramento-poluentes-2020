import React from 'react';
import GasPage from './GasPage';

const so2Page = ({padrao, so2Graph, minMaxMed}) => {
    return(
        <div>
          <GasPage 
            id = "gas_page_so2" 
            ppmValue = {padrao.so2[0]}
            ugm3Value = {padrao.so2[1]}
            opt = {so2Graph}
            seriesUpdate = {so2Graph.series[0].data}
            poluente = "so2"
            vetorMMM = {minMaxMed}
          />
        </div>
    );
}
export default so2Page;