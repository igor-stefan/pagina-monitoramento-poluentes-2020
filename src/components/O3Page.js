import React from 'react';
import GasPage from './GasPage';

const o3Page = ({padrao, o3Graph, minMaxMed}) => {
    return(
        <div>
          <GasPage
            id = "gas_page_o3" 
            ppmValue = {padrao.o3[0]}
            ugm3Value = {padrao.o3[1]}
            opt = {o3Graph}
            seriesUpdate = {o3Graph.series[0].data}
            poluente = "o3"
            vetorMMM = {minMaxMed}
          />
        </div>
    );
}
export default o3Page;