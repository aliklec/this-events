//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/




var hiddenMenu = document.getElementsByClassName("name");
for(var i = 0; i<hiddenMenu.length; i++){
  hiddenMenu[i].addEventListener("click", showHidden);
  console.log(hiddenMenu[i]);
}

function showHidden(){
  var showHidden = this.querySelectorAll(".menu")[0]; //this referring to "i"?
  if(showHidden.style.display === "none"){
    showHidden.style.display = "block";
  }else{
    showHidden.style.display = "none";
  }
}

