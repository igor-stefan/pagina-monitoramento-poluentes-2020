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
      {
        a.map((x, i) => {
          let a, b;
          if(i > 0){
             a = vetorMMM[i - 1];
             b = vetorMMM[i + 2];
          }
          else{
            a = ppmValue;
            b = ugm3Value;
          }
          console.log("i = ", i, " a = ", a, " b = ", b);
            return(
            <CardsForGas
                key = {i} 
                name = {x}
                ppmValue = {a}
                ugm3Value = {b}
            />
            )
        })
      }
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