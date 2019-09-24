 var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
 chocolateBars;


function addElementToBeginningOfArray (array, element){
 return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  array.slice();
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  var array=[1,2,3]
  return array.slice(0,array.length-1);
}
function removeElementFromEndOfArray(array){
  var array=[1,2,3]
  return array.pop();
}