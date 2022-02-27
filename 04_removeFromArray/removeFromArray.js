const removeFromArray = function(matriz, ...remove) {
    let posicion
    for(i=0;i<remove.length;i++){
        posicion = matriz.indexOf(remove[i])
        if(posicion===-1){
            continue
        }
        else{
            matriz.splice(posicion, 1)
        }
    }
    return matriz
};

// Do not edit below this line
module.exports = removeFromArray;
