import React, {Component} from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import COPage from './components/COPage';
import CO2Page from './components/CO2Page';
import O3Page from './components/O3Page';
import NO2Page from './components/NO2Page';
import SO2Page from './components/SO2Page';
import './App.css';
import {optionsCO, optionsCO2, optionsO3, optionsNO2, optionsSO2} from './All_ops'
import throttle from 'lodash.throttle';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// console.log('Options = ', optionsCO);

class App extends Component{
  constructor(){
    super();
    this.onRouteChange = this.onRouteChange.bind(this);
    this.onRouteChangeThrottled = throttle(this.onRouteChange, 3000);
    this.state = {
      route: 'home',
      padrao : {
        'co':[0, 0],
        'co2':[0, 0],
        'o3':[0, 0],
        'no2':[0, 0],
        'so2':[0, 0]
      },
      coGraph: optionsCO,
      co2Graph: optionsCO2,
      o3Graph: optionsO3,
      no2Graph: optionsNO2,
      so2Graph: optionsSO2,
      minMaxMed:{
        'co':[0, 0, 0, 0, 0, 0],
        'co2':[0, 0, 0, 0, 0, 0],
        'o3':[0, 0, 0, 0, 0, 0],
        'no2':[0, 0, 0, 0, 0, 0],
        'so2':[0, 0, 0, 0, 0, 0]
      }

    }
  }

  onRouteChange = (place) => {
    this.setState({route:place})
  }
  alterar_padrao(obj){
    this.setState({padrao: obj})
  }
  alterar_opcoes_graph(obj){
    optionsCO.series[0].data.push(obj.co[0]);
    optionsCO2.series[0].data.push(obj.co2[0]);
    optionsO3.series[0].data.push(obj.o3[0]);
    optionsNO2.series[0].data.push(obj.no2[0]);
    optionsSO2.series[0].data.push(obj.so2[0]);
    this.setState({
      coGraph: optionsCO,
      co2Graph: optionsCO2,
      o3Graph: optionsO3,
      no2Graph: optionsNO2,
      so2Graph: optionsSO2,
    })
  }
  alterar_min_max_med(obj){
    this.setState({minMaxMed: obj})
  }
  
  componentDidMount() {
   // cria a conexão persistente
   this.source = new EventSource('http://still-earth-23257.herokuapp.com/startsend');
   // define um evento que é executado quando o servidor envia uma mensagem
  this.source.onmessage =  event => {
    console.log("DADOS RECEBIDOS APÓS NOVO POST NO SERVIDOR SOURCE1");
    let k = event.data;
    k = JSON.parse(k);
    console.log(k);
    this.alterar_padrao(k);
    this.alterar_opcoes_graph(k);
  }
  this.source.onopen = function() {
    console.log("CONEXAO INICIADA SOURCE1");
  };
  this.source.onerror = function() {
    console.log("OCORREU ALGUM ERRO, VERIFIQUE A COMUNICAÇÃO SOURCE1");
  };
  // GET request using fetch with async/await
  this.source2 = new EventSource('http://still-earth-23257.herokuapp.com/minmaxmed');
  this.source2.onmessage =  event => {
    console.log("DADOS RECEBIDOS APÓS BUSCA NO BANCO DE DADOS SOURCE2");
    let k = event.data;
    k = JSON.parse(k);
    console.log(JSON.parse(event.data));
    this.alterar_min_max_med(k);
  }
  this.source2.onopen = function() {
    console.log("CONEXAO INICIADA SOURCE2");
  };
  this.source2.onerror = function() {
    console.log("OCORREU ALGUM ERRO, VERIFIQUE A COMUNICAÇÃO SOURCE2");
  };
}

componentWillUnmount() {
  this.onRouteChangeThrottled.cancel();
  this.source.close();
  this.source2.close();
}
  render(){
    return (
      <BrowserRouter>
          <Navigation onRouteChange = {this.onRouteChangeThrottled}/>
        <div className = "App" >
        <Routes>
          <Route path = "/" element = {<Home
                                        padrao = {this.state.padrao}
                                        coGraph = {this.state.coGraph}
                                        co2Graph = {this.state.co2Graph}
                                        o3Graph = {this.state.o3Graph}
                                        no2Graph = {this.state.no2Graph}
                                        so2Graph = {this.state.so2Graph}
                                        />}/>
          <Route path = "/co" element = {<COPage
                                          padrao = {this.state.padrao}
                                          coGraph = {this.state.coGraph}
                                          minMaxMed = {this.state.minMaxMed.co}
                                           />} />
          <Route path = "/co2" element = {<CO2Page 
                                          padrao = {this.state.padrao}
                                          co2Graph = {this.state.co2Graph}
                                          minMaxMed = {this.state.minMaxMed.co2}
                                          />} />
          <Route path = "/o3" element = {<O3Page 
                                          padrao = {this.state.padrao}
                                          o3Graph = {this.state.o3Graph}
                                          minMaxMed = {this.state.minMaxMed.o3}
                                        />} />
          <Route path = "/no2" element = {<NO2Page 
                                          padrao = {this.state.padrao}
                                          no2Graph = {this.state.no2Graph}
                                          minMaxMed = {this.state.minMaxMed.no2}
                                          />} />
          <Route path = "/so2" element = {<SO2Page 
                                          padrao = {this.state.padrao}
                                          so2Graph = {this.state.so2Graph}
                                          minMaxMed = {this.state.minMaxMed.so2}            
                                          />} />      
        </Routes>
        </div>
    </BrowserRouter>
    )
  } 
}

export default App;
