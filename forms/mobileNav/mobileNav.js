hmbMenu.onclick=function(s){ // when just click the control. 's' is
                              // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Dessert Voting":
                ChangeForm(dessertVoting)
                break
            case "Describe Me":
                ChangeForm(describeYou)
                break
            case "Favorite Exercises":
               ChangeForm(favExercises)
               console.log(s)
               break
       }  //switch
   } //else
}
