const caesar = function(texto, num) {
    let respuesta = []
    let mate
    let incog
    if(num<=-26 || num>=26){
        if(num<=-26){
            mate = num % 26
        }
        else if(num>=26){
            mate = num % 26
        }
    }
    else{
        mate = num
    }
    console.log(mate)

    for (i=0; i<texto.length; i++){
        if(texto[i]===" "||texto[i]===","||texto[i]==="!"||texto[i]==="?"){
            respuesta[i] = texto[i]
        }
        else if((65<=texto[i].charCodeAt(0))&&(texto[i].charCodeAt(0)<=90)){
            incog = String.fromCharCode(texto[i].charCodeAt(0)+mate)
            if((65<=(texto[i].charCodeAt(0)+mate))&&((texto[i].charCodeAt(0)+mate)<=90)){
                respuesta[i] = incog
            }
            else if(mate<0){
                respuesta[i] = String.fromCharCode(texto[i].charCodeAt(0)+mate+26)
            }
            else{
                respuesta[i] = String.fromCharCode(texto[i].charCodeAt(0)+mate-26)
            }
        }
        else if((97<=texto[i].charCodeAt(0))&&(texto[i].charCodeAt(0)<=122)){
            incog = String.fromCharCode(texto[i].charCodeAt(0)+mate)
            if((97<=(texto[i].charCodeAt(0)+mate))&&((texto[i].charCodeAt(0)+mate)<=122)){
                respuesta[i] = incog
            }
            else if(mate<0){
                respuesta[i] = String.fromCharCode(texto[i].charCodeAt(0)+mate+26)
            }
            else{
                respuesta[i] = String.fromCharCode(texto[i].charCodeAt(0)+mate-26)
            }
        }
    }
    return respuesta.join("")
};

// Do not edit below this line
module.exports = caesar;
