const angle = document.querySelectorAll(".angle");
const button = document.querySelector("#check-button")
const showText =document.querySelector("#display-text");

function sumOfAngles(angle1, angle2, angle3){
    let totalAngles = angle1+angle2+angle3;
    return totalAngles;
}

function isTriangle(){
    const totalAngles = sumOfAngles((Number(angle[0].value)),(Number(angle[1].value)),(Number(angle[2].value)));
    if(totalAngles === 180){
        showText.innerText ="Yay! The angles form a triangle";
    }else{
        showText.innerText = "Oh-ho! The angles don't form a triangle";
    }
 }

button.addEventListener("click", isTriangle)
