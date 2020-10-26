var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
selExercises.clear()

 for (i = 0; i<= exercises.length-1;i++){
   selExercises.addItem(exercises[i])
   }
for (i = 0;i<=coreExercises.length-1;i++){
  selExercises.addItem(coreExercises[i])
  }
}

selExercises.onfocusout=function(){

}



btnSubmit.onclick=function(){
  if (selExercises.text[0]=="situps" && selExercises.text[1]=="plank"){
  lblExercises.value = `You chose ${selExercises.text[0]} and ${selExercises.text[1]} - those are the two core exercises.` 
  }
else { lblExercises.value = "You did not pick the two core exercises"
  }
  
}

btnForm2.onclick=function(){
  ChangeForm(mobileNav)
}