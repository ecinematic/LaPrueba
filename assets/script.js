document.getElementById("start").addEventListener("click", function(){
    document.getElementById("question-container").style.visibility = "visible";
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
});