const palindromes = function (oracion) {    
    let r = oracion.toLowerCase();
    r = r.replace(new RegExp(/[ ]/g),"");
    r = r.replace(new RegExp(/[!]/g),"");
    r = r.replace(new RegExp(/[?]/g),"");
    r = r.replace(new RegExp(/[,]/g),"");
    r = r.replace(new RegExp(/[.]/g),"");

    if(r===r.split('').reverse().join('')){
        return true
    }
    else{
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
