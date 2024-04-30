const red = document.getElementById("b1");
const green = document.getElementById("b2");
const blue = document.getElementById("b3");
const box = document.getElementById("out");

red.addEventListener("click", function () {
    box.value = box.value + "r";
    checkLength();
})

green.addEventListener("click", function () {
    box.value = box.value + "g";
    checkLength();
})

blue.addEventListener("click", function () {
    box.value = box.value + "b";
    checkLength();
})

function checkLength(){
    if (box.value.length == 3){
        if (box.value == "rbg"){
            alert("correct password");
        } else {
            alert("incorrect password");
            box.value = "";
        }
    }
}