const add = function(num1, num2) {
	return(num1+num2)
};

const subtract = function(num1, num2) {
	if(num1<=num2){
        return(num2-num1)
    }
    else{
        return(num1-num2)
    }
};

const sum = function(...num) {
  let rpta = 0
  if(isNaN(num[0])){
      for(i=0;i<num[0].length;i++){
          rpta += num[0][i]
      }
      return Number(rpta)
  }
  for(i=0;i<num.length;i++){
      rpta += num[i]
  }
  return Number(rpta)
};

const multiply = function(...num) {
  let total = 1
  if(isNaN(num[0])){
      for(i=0;i<num[0].length;i++){
          total *= num[0][i]
      }
      return(total)
  }
for(i=0;i<num.length;i++){
      total *= num[i]
  }
  return(total)
};

const power = function(num1, num2) {
	return(num1**num2)
};

const factorial = function(num) {
    let facto = 1
	for(i=num;i>=1;i--){
        facto *= i
    }
    return(facto)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
