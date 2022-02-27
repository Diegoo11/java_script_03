const ftoc = function(faren) {
  let respuesta1 = (faren-32)*5/9
  return Number(respuesta1.toFixed(1))
};

const ctof = function(cel) {
  let respuesta2 = 9/5*(cel)+32
  return Number(respuesta2.toFixed(1))
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
