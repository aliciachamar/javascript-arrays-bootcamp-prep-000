var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(existingArray, newElement){
  var newArray = existingArray;
  newArray.unshift(newElement);
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(existingArray, newElement){
  existingArray = [newElement, ...existingArray];
  return existingArray;
}
function addElementToEndOfArray(existingArray, newElement){
  var newArray = existingArray;
  newArray.push(newElement);
  return newArray;
}
function destructivelyAddElementToEndOfArray(existingArray, newElement){
  existingArray = [...existingArray, newElement];
  return existingArray;
}
function accessElementInArray(array, index){
  return array[index];
}