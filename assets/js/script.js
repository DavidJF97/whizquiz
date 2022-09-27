const start = document.getElementbyId("start");
const quiz =  document.getElementbyId("quiz");
const question = document.getElementbyId("question");
const questionPic = document.getElementbyId("question-pic");
const optionA = document.getElementbyId("A");
const optionB = document.getElementbyId("B");
const optionC = document.getElementbyId("C");
const progress = document.getElementbyId("progress");
const score = document.getElementbyId("score");

/** All the questions*/

let questions = [
    {
        question: "What Is The Name Of The Final Course In All 'Mario Kart' Videogames?",
        imgSrc: "",
        optionA: "Rainbow Road",
        optionB: "Ribbon Road",
        optionC: "Moo Moo Meadows",
        correct: "A"
    }, {
        question: "Solid Snake Is A Hero In Which Famous Videogame Franchise?",
        imgSrc: "",
        optionA: "Wood Gear",
        optionB: "Metal Gear",
        optionC: "Stone Gear",
        correct: "B"
    }, {
        question: "'V-Bucks' Are The In-Game Currency For Which Famous Videogame Franchise?",
        imgSrc: "",
        optionA: "Fortnite",
        optionB: "Fork Knife",
        optionC: "Fort-night",
        correct: "A"
    }, {
        question: "Nintendo Began As A Company Selling Which Products?",
        imgSrc: "",
        optionA: "Televisions",
        optionB: "Board Games",
        optionC: "Playing cards",
        correct: "C"
    }, {
        question: "In Which Game Do Players Compete In A Futuristic Version Of Soccer With Cars",
        imgSrc: "assets/images/",
        optionA: "Rocket League",
        optionB: "Car Soccer 2020",
        optionC: "Need For Speed",
        correct: "A"
    }, {
        question: "What Is The Highest-Selling Video Game Console Of All Time?",
        imgSrc: "",
        optionA: "The Xbox 360",
        optionB: "The NES",
        optionC: "The Playstation 2",
        correct: "C"
    }, {
        question: "The Kingdom Of Hyrule Is The Main Setting For Which Classic Video Game Franchise",
        imgSrc: "",
        optionA: "Legend of Korra",
        optionB: "Legend of Zelda.",
        optionC: "Legend of Aang",
        correct: "B"
    }, {
        question: "Which French Video Game Company Publishes The Far Cry Series?",
        imgSrc: "",
        optionA: "Ubisoft",
        optionB: "Youbisoft",
        optionC: "Ewwbisoft",
        correct: "A"
    }, {
        question: "Which Game Series Features Cities Called Vice City, Liberty City, And San Andreas?",
        imgSrc: "",
        optionA: "Different Cities: The Videogame",
        optionB: "Sim City",
        optionC: "Grand Theft Auto.",
        correct: "C"
    }, {
        question: "What Is The Name Of The Circular Object That Is Used To Collect Pokémon?",
        imgSrc: "",
        optionA: "Poké container",
        optionB: "Poké ball",
        optionC: "Poké sphere",
        correct: "B"
    }
];