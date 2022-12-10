

let input = document.getElementById("input");
let update = document.getElementById("update");

input.addEventListener("keyup", function(event) {
    if(event.getModifierState("CapsLock")){
        update.style.display = "block";
    } else{
        update.style.display = "none";
    }
})