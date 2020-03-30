/*  Libs  */
import React from 'react';
import Api from '../api.js';
import Pdados from '../util/Pdados.js';
import  LineGraph  from "../util/grafic.js";


class Main extends React.Component {

  state = {
    labels:[],
    load:false,
    datas:[]
  };

  async componentDidMount() {

    var { data } = await Api.get(`/historical/CHINA`);

    const china = Pdados.create(data, "China");

    var { data } = await Api.get(`/historical/BRAZIL`);

    const brasil = Pdados.create(data, "Brasil");

    this.setState(() => {
        return {
          labels: brasil.labels,
          datas:brasil.posCasos,
          load:true,
        };
      });

}

  render() {

  return (
        <div className="App">
            {(this.state.load)? 
            <LineGraph labels={this.state.labels} datas={this.state.datas}/>
            :
            <div></div>
            }      
        </div>
  );

  }

}

export default Main;
