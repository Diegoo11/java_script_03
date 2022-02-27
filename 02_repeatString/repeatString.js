const repeatString = function(string, num) {
    let xd
    if(num===0){
        return ("")
    }
    else if(num<0){
        return("ERROR")
    }
    for(i=1; i<=num; i++){
        if(i===1){
            xd = string
        }
        else{
            xd += string
        }
    }
    return xd
};

// Do not edit below this line
module.exports = repeatString;
