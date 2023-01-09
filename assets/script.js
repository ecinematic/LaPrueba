var startBtn = document.getElementById('start');
var quizQuestion = document.getElementById('question');
var nxQuestion = document.getElementById('next');

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('next').style.display = "block";
    document.getElementById('start').style.display = "none";
    document.getElementById('question-container').style.display = "block";
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    document.getElementById("countdown").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = " is up!"
    }
    }, 1000);
    nextQuestion();
}

function nextQuestion() {
    selectAnswer();
}

function selectAnswer() {
    let answers = ["Houston", "San Antonio", "Dallas", "Austin"];
    let ans = document.querySelectorAll('.ans');
    console.log(ans);
    for (i = 0; i < ans.length; i++) {
        ans[i].innerHTML = answers[i];
    }

}