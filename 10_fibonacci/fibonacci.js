const fibonacci = function(num) {
    if(num<=0){
        return("OOPS")
    }
    else{
        array = [1, 1]
        for(i=3; i<=num; i++){
            array[i-1] = array[i-2] + array[i-3]
        }

        return array[num-1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
