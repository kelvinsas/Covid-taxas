var utimoCalc;

function calc(valor){
        if(valor < 1){ return "0.00"}
        let x;

        x=((100*valor)/utimoCalc)-100;

        if(utimoCalc===1){x=0}
        utimoCalc=valor;
        return x.toFixed(2);
    }


function objPosentagem(obj){    
    let newObj = [];
    utimoCalc = 1;
    Object.keys(obj).forEach(function(item){
        newObj.push(calc(obj[item]));
    });
    return newObj;
}

function objLabel(obj){    
    let newObj = [];
    Object.keys(obj).forEach(function(item){
        newObj.push(item);
    });
    return newObj;
}

function objData(obj){    
    let newObj = [];
    Object.keys(obj).forEach(function(item){
        newObj.push(obj[item]);
    });
    return newObj;
}


    
const Pdados = {

    create(data, titulo = "titulo"){
         let newDados={
             "labels":objLabel(data.timeline.cases) ,
             "mortes": {
                        "label":"Mortes na "+titulo ,
                        "data":objData(data.timeline.deaths),
             },    
             "casos": {
                        "label":"Casos na "+titulo  ,
                        "data":objData(data.timeline.cases),
             },
             "posMortes": {
                          "label":"Porsentagem de almento de Mortes na "+titulo  ,
                          "data":objPosentagem(data.timeline.deaths),
             },
             "posCasos":{
                          "label":"Porsentagem de almento de Casos na "+titulo  ,
                          "data":objPosentagem(data.timeline.cases),
             },
         };
         return newDados;
    },

};

export default Pdados;