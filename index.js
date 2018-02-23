var katzDeli = [];

function takeANumber(katzDeliLine, newPerson){
  var lineNumber = katzDeliLine.length;
  var yourPlace = lineNumber++;
  katzDeliLine.push(`${newPerson}`);
  var newLine = [];
  newLine.push(`Welcome, ${newPerson}. You are number ${lineNumber} in line.`)
  return newLine;
}
function nowServing(katzDeliLine){
 /*if (katzDeliLine.length > 0){
  return katzDeliLine.unshift()}
  else {
    return `There is nobody waiting to be served!`
  }*/
  var i = 0
  while (i < katzDeliLine.length){
    var serving = katzDeliLine[i];
    return `Currently serving ${serving}.`
    i++;
  }
  
}