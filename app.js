let userScore = 0;
let robotScore = 0;
const user_score_span = document.getElementById("user-score");
const robot_score_span = document.getElementById("robot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getRobotChoices() {
    const choices = ['r', 'p', 's'];
    const robotRandomNumber = Math.floor(Math.random() * 3);
    return choices[robotRandomNumber];
}

function convLetterToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function userWin(userChoice, robotChoice) {
    user_score_span.innerHTML = userScore;
    robot_score_span.innerHTML = robotScore;
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallRobotWord = "robot".fontsize(3).sub();
    userScore++;
    result_p.innerHTML = `${convLetterToWord(userChoice)}${smallUserWord} Beats ${convLetterToWord(robotChoice)}${smallRobotWord} <====> Hooray :)`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function robotWin(userChoice, robotChoice) {
    robot_score_span.innerHTML = robotScore;
    user_score_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallRobotWord = "robot".fontsize(3).sub();
    robotScore++;
    result_p.innerHTML = `${convLetterToWord(robotChoice)}${smallRobotWord} Beats ${convLetterToWord(userChoice)}${smallUserWord} <====> OHH NOO :(`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function equalBoth(userChoice, robotChoice) {
    user_score_span.innerHTML = userScore;
    robot_score_span.innerHTML = robotScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallRobotWord = "robot".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convLetterToWord(userChoice)}${smallUserWord} Equal ${convLetterToWord(robotChoice)}${smallRobotWord} <====> Lets Try Again.... :|`;
    userChoice_div.classList.add('yellow-glow');
    setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 500);
}

function game(userChoice) {
    const robotChoice = getRobotChoices();
    switch (userChoice + robotChoice) {
        case "rs":
        case "pr":
        case "sp":
            userWin(userChoice, robotChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            robotWin(userChoice, robotChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            equalBoth(userChoice, robotChoice);
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
main();