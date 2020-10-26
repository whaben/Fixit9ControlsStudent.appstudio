rdoYou.onclick=function(){
if (rdoYou.value == 0){
  userChoice = "Optimistic"
} else if (rdoYou.value ==1){
  userChoice = "Pessimistic"
} else if (rdoYou.value == 2){
  userChoice = "Trusting"
} else {
  userChoice = "Envious"
  }
  lblChoice.value = `I would agree that you are a ${userChoice} person too!`
}

btnForm.onclick=function(){
  ChangeForm(favExercises)
}









