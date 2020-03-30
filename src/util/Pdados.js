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

function geraCor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

    
const Pdados = {

    create(data, titulo = "titulo"){
         let newDados={
             "labels":objLabel(data.timeline.cases) ,
             "mortes": {
                        "label":"Mortes na "+titulo ,
                        "data":objData(data.timeline.deaths),
                        "borderColor": geraCor(),
             },    
             "casos": {
                        "label":"Casos na "+titulo  ,
                        "data":objData(data.timeline.cases),
                        "borderColor": geraCor(),
             },
             "posMortes": {
                          "label":"Porsentagem de almento de Mortes na "+titulo  ,
                          "data":objPosentagem(data.timeline.deaths),
                          "borderColor": geraCor(),
             },
             "posCasos":{
                          "label":"Porsentagem de almento de Casos na "+titulo  ,
                          "data":objPosentagem(data.timeline.cases),
                          "borderColor": geraCor(),
             },
         };
         return newDados;
    },

};

export default Pdados;