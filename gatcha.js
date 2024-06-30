const button1 = document.querySelector("#happy");
const button2 = document.querySelector("#play");
const button3 = document.querySelector("#clean");
const petting = document.querySelector("#img1");
const l = document.querySelector("#progresbar");
let progresBarProgres = 0;

//milo heeft me geholpen met de progresbar, ik heb video's opgezocht over arrays deze heeft het best gehlopen https://www.youtube.com/watch?v=yQ1fz8LY354
function progresBar() {
    const images = ["images/progressbar0.png","images/progresbar1.png", "images/progresbar2.png", "images/progresbar3.png", "images/progresbar4.png", "images/progresbar5.png", "images/progresbar6.png", "images/progresbar7.png"];
    
    if (progresBarProgres < 0) {
        progresBarProgres = 0;
    }
    if (progresBarProgres > 8) {
        progresBarProgres = 7;
    }
    //het zorgt ervoor dat progressesBarProgres groter is dan of gelijk is aan 0 en kleiner is dan de lengte van de afbeeldingenarray.
    if (progresBarProgres >= 0 && progresBarProgres < images.length) {
        l.src = images[progresBarProgres];
    }
}

function randomizeChange() {
    const randomplusorminus = Math.floor(Math.random() * 3);
    if (randomplusorminus === 1) {
        changeimage5();
    } else {
        progresBarProgres++;
    }
}

function changeimage1() {
    document.getElementById("img1").src = "images/happy.png";
    document.querySelector('p').textContent = "hmmmm tasty";
    randomizeChange();
    progresBar();
    if (progresBarProgres === 7) {
        win();
    }
}

function changeimage2() {
    document.getElementById("img1").src = "images/silly.png";
    document.querySelector('p').textContent = "haha so silly";
    randomizeChange();
    progresBar();
    if (progresBarProgres === 8) {
        win();
    }
}

function changeimage3() {
    document.getElementById("img1").src = "images/clean.png";
    document.querySelector('p').textContent = "wow so pretty!";
    randomizeChange();
    progresBar();
    if (progresBarProgres === 8) {
        win();
    }
}

function changeimage4() {
    document.getElementById("img1").src = "images/comfy.png";
    document.querySelector('p').textContent = "that hits the spot";
    randomizeChange();
    progresBar();
    if (progresBarProgres === 8) {
        win();
    }
}

function changeimage0() {
    document.getElementById("img1").src = "images/normal.png";
    document.querySelector('p').textContent = "what choice will you make";
    if (progresBarProgres === 8) {
        win();
    }
}

function changeimage5() {
    document.getElementById("img1").src = "images/anger.png";
    document.querySelector('p').textContent = "uh oh he did not like that";
    progresBarProgres--;
    progresBar();
}

function win(){
    document.getElementById("img1").src = "images/win.png";
    document.querySelector('p').textContent = "you've made them the happiest they can be, well done!";
}

button1.addEventListener('click', changeimage1);
button2.addEventListener('click', changeimage2);
button3.addEventListener('click', changeimage3);
petting.addEventListener('mouseenter', changeimage4); //w3 schools
petting.addEventListener('mouseleave', changeimage0); //w3 schools 