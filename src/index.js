exports.min = function min (array) {
  if(array === undefined || array[0]=== undefined){return 0;}
  else{
    return Math.min.apply( Math, array );
  }

}

exports.max = function max (array) {
  if(array === undefined || array[0]=== undefined){return 0;}
  else{
    
    return Math.max.apply( Math, array );

      
  }
}

exports.avg = function avg (array) {
  if(array===undefined || array[0]===undefined){return 0;}
  else{var sum = array.reduce( function(total, amount){
    return total + amount
  });
return sum/array.length;
  }
}