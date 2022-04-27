function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
    return 'This one is on me!'
  }else if (feet > 400 && feet < 2000) {
    return 'That will be twenty bucks.'
  }else if (feet > 2000 && feet <= 2500){
    return 'I will gladly take your thirty bucks.'
  }else if (feet > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }else if (city !== 'NYC') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(amount){
  // Write your code here!
  if (amount === 'generous') {
    return 'Thank you so much.'
  }else if(amount === 'not as generous') {
    return 'Thank you.'
  }else if (amount === 'thanks for everything') {
    return 'Bye.'
  }
}