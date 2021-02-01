// exercice1 
let myImput = document.querySelector('input');

myImput.addEventListener('focus', () => {
    myImput.style.backgroundColor = "blue"
})

// exercice 2
let myImput2 = document.querySelectorAll("input")[1];

myImput2.addEventListener('focus', () => {
    myImput2.style.backgroundColor = "blue"
});

myImput2.addEventListener('focusout', () => {
    myImput2.style.backgroundColor = "white"
});

// exercice 3
let firstPara = document.getElementsByClassName('premierParagraphe')[0];
let secondPara = document.getElementsByClassName('secondParagraphe')[0];
let threePara = document.getElementsByClassName('dernierParagraphe')[0];
let bouton = document.getElementsByClassName("buttonExo")[0];

firstPara.innerHTML = secondPara.innerText
threePara.innerHTML = secondPara.innerText


// exercice 4

let myText = document.querySelector('#exo4') ;
let myImput3 = document.querySelectorAll("input")[2];
let boutonExo4 = document.getElementsByClassName("buttonExo")[1];

//.value

boutonExo4.addEventListener('click', ()=> {
    myText.innerHTML = myImput3.value;

})

// exercice 5

let myImg = document.querySelector("img");
let boutonExo5 = myImg.nextElementSibling;

boutonExo5.addEventListener("click", ()=> {
    myImg.setAttribute('src', './src/image/tartine.png' )
})

// exercice 6

let tartine1 = document.querySelectorAll('img')[1];
let tartine2 = document.querySelectorAll('img')[2];


tartine1.addEventListener ('click', () => {
    copy = tartine1.getAttribute('src')
})


tartine2.addEventListener('click', () => {
    tartine2.setAttribute('src', copy)
})


// exercice 7

let text1 = document.querySelectorAll('p')[5];
let text2 = document.querySelectorAll('p')[6];
let button7 = document.querySelectorAll('.btn')[3];

button7.addEventListener("click", () => {
    let text = text1.innerText;
    text1.innerHTML = text2.innerText
    text2.innerHTML = text
})