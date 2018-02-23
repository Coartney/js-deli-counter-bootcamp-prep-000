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
  var i = 0
  while (i < katzDeliLine.length){
    var serving = katzDeliLine[i];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`
    i++;
  }
  return 'There is nobody waiting to be served!'
}
function currentLine(katzDeliLine){
  var n = 0;
  var i = 0;
  if (katzDeliLine.length> 0){
  while (i < katzDeliLine.length){
    n++;
    var customer = katzDeliLine[i];
    var newLine = []
    newLine.push(`${n}. ${customer} `)
    i++;
  } return `The line is currently: ${newLine}`
  
  } else {
  return 'The line is currently empty.'
  }
}