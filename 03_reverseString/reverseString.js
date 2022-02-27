const reverseString = function(word) {
    if(word===""){
        return("")
    }
    else{
        let palabra = word.split('').reverse().join("")
        return palabra
    }

};

// Do not edit below this line
module.exports = reverseString;
