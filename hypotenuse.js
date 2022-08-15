const side = document.querySelectorAll(".side");
const button = document.querySelector("#find-btn");
const output = document.querySelector("#third-side");

function sumOfSquareFn(a,b){
    return a*a+b*b;
}

function sqrtFinder(){
    const sumOfSquare = sumOfSquareFn(Number(side[0].value),Number(side[1].value));
    const sqrt = Math.sqrt(sumOfSquare);
    output.innerText = "Hypotenuse of thriangle is " + sqrt;
}

button.addEventListener("click", sqrtFinder);