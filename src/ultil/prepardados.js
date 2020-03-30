var utimoCalc;

function calc(valor){
        let x;
        x=((100*valor)/utimoCalc)-100;

        if(utimoCalc===1){x=0}
        utimoCalc=valor;
        return x.toFixed(2);
    }


function objPosentagem(obj){    
    let newObj = {};
    utimoCalc = 1;
    Object.keys(obj).forEach(function(item){
        newObj[item] = calc(obj[item]);
        console.log(newObj[item]);
    });
    return newObj;
}

    
const Pdados = {

    create(data){
         let newDados={
             "mortes": data.timeline.deaths,
             "casos": data.timeline.cases,
             "posMortes": objPosentagem(data.timeline.deaths),
             "posCasos":objPosentagem(data.timeline.cases),
         };


         return newDados;
    },

};

export default Pdados;