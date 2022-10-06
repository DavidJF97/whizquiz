const start = document.getElementById("start");
const quiz =  document.getElementById("quiz");
const progress = document.getElementById("question-num")
const question = document.getElementById("question");
const questionPic = document.getElementById("question-pic");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
let scoreDisplay = document.getElementById("score-display");

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
        optionA: "TVs",
        optionB: "Board Games",
        optionC: "Playing cards",
        correct: "C"
    }, {
        question: "In Which Game Do Players Compete In A Futuristic Version Of Soccer With Cars?",
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
        optionC: "The PS2",
        correct: "C"
    }, {
        question: "The Kingdom Of Hyrule Is The Main Setting For Which Classic Video Game Franchise? ",
        imgSrc: "assets/images/hyrule.jpg",
        optionA: "Legend of Korra",
        optionB: "Legend of Zelda",
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
        imgSrc: "assets/images/Los-Santos-San-Andreas-1920x1200.jpg",
        optionA: "Cities: The Videogame",
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

/**Variables for questions and score*/

let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

/** Rendering display of progress through quiz*/
progress.textContent= runningQuestion+1+"/10";

/**Rendering score */
scoreDisplay.textContent = score;

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

/**Event listeners for answer selection */
optionA.addEventListener("click", checkAnswer);
optionB.addEventListener("click", checkAnswer);
optionC.addEventListener("click", checkAnswer);

/**Function to check answers */
function checkAnswer() {

    if ( this.value == questions[runningQuestion].correct) {
        score++;
        scoreDisplay.textContent = score;
        this.style.backgroundColor = "green";
        this.style.color = "white";
        runningQuestion++;;
        
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
        runningQuestion++;;
        
    }

    if (runningQuestion <= lastQuestion){
        setTimeout(nextQuestion, 500)
    } else {
        setTimeout(endGame, 500);
    }
}

/**Function to move on to next question after player's choice is checked */
function nextQuestion() {

    resetOptions();
    renderQuestion();
    window.scrollTo(0, 0);
    progress.textContent= runningQuestion+1+"/10";
}

/** Function to reset options divs after timeout post-selection*/
function resetOptions() {

    optionA.style.backgroundColor = "white";
    optionA.style.color = "grey";

    optionB.style.backgroundColor = "white";
    optionB.style.color = "grey";

    optionC.style.backgroundColor = "white";
    optionC.style.color = "grey";
}

/**Function to redirect to end page at end of quiz */
function endGame() {
    /**Saving players score to local storage */
    localStorage.setItem("playerScore", score);
    window.location = "quizend.html";
}
