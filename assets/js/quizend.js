const highscore = localStorage.getItem("playerScore");
finalScore = document.getElementById("final-score");
finalScore.textContent = highscore;