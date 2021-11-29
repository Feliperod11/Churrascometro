// effect writer

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(function() {
            element.innerHTML += letra;
        }, 75 * i)
    });
}

const titulo = document.getElementById("tittle");
const titulo2 = document.getElementById("tittle2")
typeWriter(titulo);

// click return button

const returnBtn = document.getElementById("returnBtn");
returnBtn.addEventListener("click", displayBlock);

function displayBlock(){

    const heroDiv = document.getElementById("hero");
    const resultDiv = document.getElementById("result");

    hero.style.display = "block";
    resultDiv.style.display = "none";

    typeWriter(titulo);
}

// click calc button

const calcBtn = document.getElementById("submitBtn");
calcBtn.addEventListener("click", calcResult)

const inputPeople = document.getElementById("people_value");
const inputChildren = document.getElementById("children_value");
const timer = document.getElementById("timer_value");

const beef_result = document.getElementById("beef_result");
const beer_result = document.getElementById("beer_result");
const soda_result = document.getElementById("soda_result");

function calcResult(){

    const heroDiv = document.getElementById("hero");
    const resultDiv = document.getElementById("result");


    let people = inputPeople.value;
    let children = inputChildren.value;
    let duration = timer.value;

    let amount_of_steak = steakPP(duration) * people + (steakPP(duration) / 2 * children);
    let amount_of_beer = beerPP(duration) * people;
    let amount_of_soda = sodaPP(duration) * people + (beerPP(duration) / 2 * children);

    if (people == "" || children == "" || duration == ""){
        alert("Você precisa definir os valores antes de continuar.")
    }
    else if (people == -1 || children == -1 || duration == -1){
        alert("Você não pode usar valores abaixo de 0.")
    }
    else {
        hero.style.display = "none";
        resultDiv.style.display = "block";
        typeWriter(titulo2);

        beef_result.innerHTML = Math.ceil(amount_of_steak / 1000) + " " + "KG de carne.";
        beer_result.innerHTML = Math.ceil(amount_of_beer / 350) + " " + "Latas de bebidas."
        soda_result.innerHTML = Math.ceil(amount_of_soda / 2000) + " " + "Garrafas de bebidas."
    }
}

function steakPP(duration){
    if (duration >= 6){
        return 650;
    }
    else {
        return 400;
    }
}
function beerPP(duration){
    if (duration >= 6){
        return 2000;
    }
    else {
        return 1200;
    }
}
function sodaPP(duration){
    if (duration >= 6){
        return 1500;
    }
    else {
        return 1000;
    }
}