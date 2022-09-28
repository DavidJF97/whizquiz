const start = document.getElementById("start");
const quiz =  document.getElementById("quiz");
const question = document.getElementById("question");
const questionPic = document.getElementById("question-pic");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const progress = document.getElementById("progress");
const score = document.getElementById("score");

/** All the questions*/

let questions = [
    { 
        question: "What Is The Name Of The Final Course In All 'Mario Kart' Videogames?",
        imgSrc: "assets/images/mario-kart-8-deluxe-art-a.webp",
        optionA: "Rainbow Road",
        optionB: "Ribbon Road",
        optionC: "Moo Moo Meadows",
        correct: "A"
    }, {
        question: "Solid Snake Is A Hero In Which Famous Videogame Franchise?",
        imgSrc: "assets/images/snakegames-solid.jpg",
        optionA: "Wood Gear",
        optionB: "Metal Gear",
        optionC: "Stone Gear",
        correct: "B"
    }, {
        question: "'V-Bucks' Are The In-Game Currency For Which Famous Videogame Franchise?",
        imgSrc: "assets/images/v-bucks.webp",
        optionA: "Fortnite",
        optionB: "Fork Knife",
        optionC: "Fort-night",
        correct: "A"
    }, {
        question: "Nintendo Began As A Company Selling Which Products?",
        imgSrc: "assets/images/Nintendo_logo_red_r.png",
        optionA: "Televisions",
        optionB: "Board Games",
        optionC: "Playing cards",
        correct: "C"
    }, {
        question: "In Which Game Do Players Compete In A Futuristic Version Of Soccer With Cars",
        imgSrc: "assets/images/Rocket-League-Feature-Cropped-1.avif",
        optionA: "Rocket League",
        optionB: "Car Soccer 2020",
        optionC: "Need For Speed",
        correct: "A"
    }, {
        question: "What Is The Highest-Selling Video Game Console Of All Time?",
        imgSrc: "assets/images/consoles.jpg",
        optionA: "The Xbox 360",
        optionB: "The NES",
        optionC: "The Playstation 2",
        correct: "C"
    }, {
        question: "The Kingdom Of Hyrule Is The Main Setting For Which Classic Video Game Franchise",
        imgSrc: "assets/images/hyrule.jpg",
        optionA: "Legend of Korra",
        optionB: "Legend of Zelda.",
        optionC: "Legend of Aang",
        correct: "B"
    }, {
        question: "Which French Video Game Company Publishes The Far Cry Series?",
        imgSrc: "assets/images/Far-Cry-3-4-5-and-6-cover-art-lined-up-side-by-side.avif",
        optionA: "Ubisoft",
        optionB: "Youbisoft",
        optionC: "Ewwbisoft",
        correct: "A"
    }, {
        question: "Which Game Series Features Cities Called Vice City, Liberty City, And San Andreas?",
        imgSrc: "assets/images/Los-Santos-San-Andreas-1920x1200.jpgassets/images/",
        optionA: "Different Cities: The Videogame",
        optionB: "Sim City",
        optionC: "Grand Theft Auto.",
        correct: "C"
    }, {
        question: "What Is The Name Of The Circular Object That Is Used To Collect Pokémon?",
        imgSrc: "assets/images/HD-Pokeball.jpg",
        optionA: "Poké container",
        optionB: "Poké ball",
        optionC: "Poké sphere",
        correct: "B"
    }
];

/**Variables for questions */

const lastQuestion = question.length - 1;
let runningQuestion = 0;

/**Function to render questions*/
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    questionPic.innerHTML = "<img src="+ q.imgSrc +">";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
} 

renderQuestion();
