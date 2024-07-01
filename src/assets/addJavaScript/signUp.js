let popup=document.getElementById("popup")
let logPopup=document.getElementById("logPopup")

function openPopup(){
popup.classList.add("open-popup")
}
function closePopup(){
popup.classList.remove("open-popup")
}
function closeSignup(){
popup.classList.remove("open-popup")

}

function openLogin(){
logPopup.classList.add("open-popup")

}
function closeLogin(){
logPopup.classList.remove("open-popup")
}


// for automatic navigation
var counter=1;
setInterval(function(){
  document.getElementById('radio'+ counter).checked=true;
  counter++;
  if(counter>4){
    counter=1;
  }
},4000);