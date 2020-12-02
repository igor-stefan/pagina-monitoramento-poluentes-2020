import React from 'react'
import Card from './Card.js'
import MyChart from './MyChart.js'

const verificar_situacao = (ppmValue, poluente) => {
  if(poluente === 'co'){
    if(ppmValue < 9)
      return "BOM";
    if(ppmValue < 11)
      return "REGULAR";
    if(ppmValue < 13)
      return "RUIM";
    return "PÉSSIMO";
  }else if(poluente === 'co2'){
    
    if(ppmValue < 600)
      return "BOM";
    if(ppmValue < 1200)
      return "REGULAR";
    if(ppmValue < 2000)
      return "RUIM";
    return "PÉSSIMO";

  }else if(poluente === 'o3'){
    if(ppmValue < 0.0473)
      return "BOM";
    if(ppmValue < 0.0615)
      return "REGULAR";
    if(ppmValue < 0.0757)
      return "RUIM";
    return "PÉSSIMO";

  }else if(poluente === 'no2'){
    if(ppmValue < 0.0987)
      return "BOM";
    if(ppmValue < 0.118)
      return "REGULAR";
    if(ppmValue < 0.558)
      return "RUIM";
    return "PÉSSIMO";

  }else if(poluente === 'so2'){
    if(ppmValue < 0.00987)
      return "BOM";
    if(ppmValue < 0.0197)
      return "REGULAR";
    if(ppmValue < 0.395)
      return "RUIM";
    return "PÉSSIMO";

  }else if(poluente === 'mp25'){
    if(ppmValue < 600)
      return "BOM";
    if(ppmValue < 1200)
      return "REGULAR";
    if(ppmValue < 2000)
      return "RUIM";
    return "PÉSSIMO";
  }else{
    return "BOM";
  }
}

const Home = ({padrao, coGraph, co2Graph, o3Graph, no2Graph, so2Graph}) => {
    return(
    <div>
        <div className = "AllCards">
          <Card 
            title={'CO'} 
            ppmValue = {padrao.co[0]}
            ugm3Value = {padrao.co[1]}
            situacao = {verificar_situacao(padrao.co[0], 'co')} 
          />
          <Card 
            title={'CO2'} 
            ppmValue = {padrao.co2[0]}
            ugm3Value = {padrao.co2[1]}
            situacao = {verificar_situacao(padrao.co2[0], 'co2')} 
          />
          <Card 
            title={'O3'} 
            ppmValue = {padrao.o3[0]}
            ugm3Value = {padrao.o3[1]}
            situacao = {verificar_situacao(padrao.o3[0], 'o3')} 
          />
            <Card 
            title={'NO2'} 
            ppmValue = {padrao.no2[0]}
            ugm3Value = {padrao.no2[1]}
            situacao = {verificar_situacao(padrao.no2[0], 'no2')} 
          />
            <Card 
            title={'SO2'} 
            ppmValue = {padrao.so2[0]}
            ugm3Value = {padrao.so2[1]}
            situacao = {verificar_situacao(padrao.so2[0], 'so2')} 
          />
        </div>
        <div className = "Live">
        <div>
        <MyChart
            id = "home_co"
            newSeries = {coGraph.series[0].data}
            optionsDefault = {coGraph}
        />
        </div>
        <div>
         <MyChart
            id = "home_co2"
            newSeries = {co2Graph.series[0].data}
            optionsDefault = {co2Graph}
        />
        </div>
        <div>
         <MyChart
            id = "home_o3"
            newSeries = {o3Graph.series[0].data}
            optionsDefault = {o3Graph}
        />
        </div>
        <div>
         <MyChart
            id = "home_no2"
            newSeries = {no2Graph.series[0].data}
            optionsDefault = {no2Graph}
        />
        </div>
        <div>
        <MyChart
            id = "home_so2"
            newSeries = {so2Graph.series[0].data}
            optionsDefault = {so2Graph}
        />
        </div>
        </div>
      </div>
    )
}

export default Home;