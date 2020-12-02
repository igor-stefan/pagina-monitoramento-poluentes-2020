import React from 'react';
import GasPage from './GasPage';

const coPage = ({padrao, coGraph, minMaxMed}) => {
    return(
        <div>
          <GasPage 
            id = "gas_page_co"
            ppmValue = {padrao.co[0]}
            ugm3Value = {padrao.co[1]}
            opt = {coGraph}
            seriesUpdate = {coGraph.series[0].data}
            poluente = "co"
            vetorMMM = {minMaxMed}
          />
        </div>
    );
}
export default coPage;