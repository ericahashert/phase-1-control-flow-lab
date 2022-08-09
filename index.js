function scuberGreetingForFeet(someFeet){
  let result
  if (someFeet <= 400) {
    result = "This one is on me!"
  }

  else if (someFeet > 400 && someFeet < 2000) {
    result = 'That will be twenty bucks.'
  }

  else if (someFeet > 2000 && someFeet < 2500) {
    result = 'I will gladly take your thirty bucks.'
  }

  else if (someFeet > 2500) {
      result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(someCity){
 return someCity === "NYC" ? "Ok, sounds good." : "No go.";

}


const tipType = 'generous'

function switchOnCharmFromTip(tipType){

switch (tipType) {
  case 'generous':
    return "Thank you so much."
  case 'not as generous':
    return "Thank you."
    break;
  default:
    return "Bye."
}
}