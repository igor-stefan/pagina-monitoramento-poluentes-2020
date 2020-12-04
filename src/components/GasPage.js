import React from 'react'
import CardsForGas from './CardsForGas'
import MyChart from './MyChart'

const verify_sit = (ppmValue, poluente) =>{
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

const cor_background = (sit) => {
  let estilos = {};
  switch(sit){
    case "BOM":
      const bom = { backgroundColor: '#3CB371' };
      Object.assign(estilos, bom);
      break;
    case "REGULAR":
      const regular = { backgroundColor: '#FFFF00' };
      Object.assign(estilos, regular);
      break;
    case "RUIM":
      const ruim = { backgroundColor: '#FF8C00' };
      Object.assign(estilos, ruim);
      break;
    case "PÉSSIMO":
      const pessimo = { backgroundColor: '#FF0000' };
      Object.assign(estilos, pessimo);
      break;
    default:
      console.log("ERRO AO DEFINIR SITUAÇÃO DO POLUENTE");
  }
  return estilos;
}

const GasPage = ({ppmValue, ugm3Value, opt, seriesUpdate, id, vetorMMM, poluente }) => {
    console.log("series graph = ", opt.series[0].data);
    let a = ['Atual', 'Média','Máximo', 'Mínimo'];
    return(
    <div>
    <div className = "Live">
      <MyChart
            id = {id}
            newSeries = {seriesUpdate}
            optionsDefault = {opt}
      />
      </div>
    <div className = "AllCards" style = {{margin: '0px 10px 0px'}}>
      <CardsForGas 
                name = "Atual"
                ppmValue = {ppmValue}
                ugm3Value = {ugm3Value}
      />
      <CardsForGas
                name = "Média"
                ppmValue = {vetorMMM[2].toFixed(7)}
                ugm3Value = {vetorMMM[5].toFixed(7)}
      />
      <CardsForGas
                name = "Máximo"
                ppmValue = {vetorMMM[1].toFixed(7)}
                ugm3Value = {vetorMMM[4].toFixed(7)}
        />
      <CardsForGas
                name = "Mínimo"
                ppmValue = {vetorMMM[0].toFixed(7)}
                ugm3Value = {vetorMMM[3].toFixed(7)}
        />
      <div className = "card br3 mt1 mb1 bw2 mr1 mr1 pl1 pr1">
        <div className="bg-light-yellow w-100 br3 mb0 dib v-mid">
            <h3>Situação:</h3>
            <div className = "indicative" style = {cor_background(verify_sit(ppmValue, poluente))}>
                {verify_sit(ppmValue, poluente)}   
            </div>
      </div>
      </div>
    </div>
    </div>
    )
}  
  
export default GasPage;