import React from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './api.js';
import Pdados from './ultil/prepardados.js';

(async () => {

    // Now we await it.
    var { data } = await Api.get(`/historical/CHINA`);

    // Make sure you return it, this usually implies if you are using this inside a function.
    // Use \n to break lines.

    console.log(Pdados.create(data));
/*
    const nome = data.country;
    const casos = data.timeline.cases;
    const mortes = data.timeline.deaths;
    var posMortes = {};
    var posCasos = {};

    let pais = {};
    var ut=1;

Object.keys(casos).forEach(function(item){
     posCasos[item] =   calc(casos[item]);
});

ut=1;

Object.keys(mortes).forEach(function(item){

    posMortes[item] =   calc(mortes[item]);
});


data.timeline.posCasos = posCasos;
data.timeline.posMortes= posMortes;
console.log(data)




function calc(vl){
    let x
    x=((100*vl)/ut)-100
    if(ut===1){x=0}
    ut=vl;
    return x.toFixed(2);
}
*/
})()


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
