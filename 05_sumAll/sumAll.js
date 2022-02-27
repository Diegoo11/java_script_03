const sumAll = function(start, end) {
    if(!(start===Number(start))||!(end===Number(end))){
        return('ERROR')
    }
    else if(start<0 || end<0){
        return('ERROR')
    }
    else if(start<end){
        let sumatodo = (end*(end+1))/2
        let sumaresto = ((start-1)*(start))/2
        let resultado = sumatodo - sumaresto
        return resultado
    }
    else{
        let sumatodo = (start*(start+1))/2
        let sumaresto = ((end-1)*(end))/2
        let resultado = sumatodo - sumaresto
        return resultado
    }

};

// Do not edit below this line
module.exports = sumAll;
