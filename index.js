function scuberGreetingForFeet(x){
  // Write your code here!
  if (x <= 400) {
    return 'This one is on me!'
  } else if (x > 2000 & x <= 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(y){
  // Write your code here!
  if (y === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  switch (tipAmount) {
    case 'generous':
      return 'Thank you so much.';
      case 'not as generous':
      return 'Thank you.';
      default:
        return 'Bye.';
  }
}