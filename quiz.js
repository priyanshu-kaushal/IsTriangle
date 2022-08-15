const form = document.querySelector(".form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#score-output");

const answers = ["90","right angle"];



submitBtn.addEventListener("click", scoreCalculator)

function scoreCalculator(){
    let score = 0;
    let index = 0;
    const result = new FormData(form)
    for(let value of result.values()){
        if(value === answers[index]){
            score=score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your score is: " + score;
}