const length = document.querySelectorAll(".length");
const button = document.querySelector("#check-area");
const output = document.querySelector("#output");

function areaFinder(){
    const area = .5*Number(length[0].value)*Number(length[1].value);
    output.innerText= "Area of triangle is "+ area;
}

button.addEventListener("click", areaFinder);