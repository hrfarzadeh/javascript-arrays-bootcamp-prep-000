 var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
 chocolateBars;


function addElementToBeginningOfArray (array, element){
 return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var myArray= [element,...array]
  return myArray
}

function addElementToEndOfArray(array, element){
  var array=[1]
  var element="foo"
  return array.push(element);
}

function destructivelyAddElementToEndOfArray(array, element){
  var array=[1]
  var element="foo"
  return [...array, element];
}

function accessElementInArray(array, index){
  var array=[1,2,3]
  var index=2
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var array=[1,2,3]
  return array.slice(1);
}

function removeElementFromBeginningOfArray(array){
  var array=[1,2,3]
  return array.shift();
}

function destructivelyRemoveElementFromEndOfArray(array){
  var array=[1,2,3]
  return array.slice(0,array.length-1);
}
function removeElementFromEndOfArray(array){
  var array=[1,2,3]
  return array.pop();
}