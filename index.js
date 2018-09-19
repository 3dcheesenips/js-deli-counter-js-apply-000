function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine + 1} in line.`
}
function nowServing() {
  if (katzDeli === []){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${katzDeli.shift}`
  }
}

function currentLine(){
  if (katzDeli === []){
    return "The line is currently empty."
  }else{
    return `The line is currently: ${katzDeliLine}`
  }
}