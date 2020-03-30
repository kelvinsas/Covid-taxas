/*  Libs  */
import React, { useState, useEffect } from 'react';
import Api from '../api.js';
import Pdados from '../util/Pdados.js';
import  LineGraph  from "../util/grafic.js";



export default function Main(){

    const [labels, setLabels ] = useState([]);
    const [datas, setDatas ] = useState([]);
    const [load, setLoad ] = useState(false);

    useEffect(() => {
        async function fetchData(){
            var { data } = await Api.get(`/historical/BRAZIL`);
            const brasil = Pdados.create(data, "Brasil");
            var { data } = await Api.get(`/historical/CHINA`);
            const china = Pdados.create(data, "China");
            setLabels(brasil.labels);
            setDatas([brasil.mortes, brasil.posMortes, brasil.casos, brasil.posCasos,china.mortes, china.posMortes, china.casos, china.posCasos]);
            setLoad(true);
        }
        fetchData();
    }, []);

    return(
        <>
            {load && <LineGraph labels={labels} datas={datas}/>}
        </>
    );
}

