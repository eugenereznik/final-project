console.log('js working')
const startButton = document.getElementById('start')
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const replay = document.getElementById("replay");
const restart = document.getElementById("restart")
const firstSlide = document.getElementById("first-slide");
const secondSlide = document.getElementById("second-slide");
const thirdSlide = document.getElementById("third-slide");
const forthSlide = document.getElementById("forth-slide");
const fifthSlide = document.getElementById("fifth-slide");
const play = document.getElementById("play")
const gameboard = document.getElementById("gb")
const turns = document.querySelector(".remaining")
const playerOne = document.getElementById('player-one')
const revCounter = document.querySelector("#rev-counter")
const liaCounter = document.querySelector("#lia-counter")
const musicControls = document.querySelector('#music')
const alerts = [
    "National Labor Relations Board slaps you with a fine, while turnover skyrockets eating away at your profit margin.",
    "Subscription revenue trickles in, but now you're forced to hire a full-time engineer to stay one step of ahead of readers who manage to disable the paywall.",
    "Theter Piel's tiny humanoid minion Zark Muckerberg has falsified engagement metrics. Nobody actually wants to watch videos while reading the news. Traffic plummets. You publish less fequently because you've laid off 17% of your writers. Pivot to doom loop.",
    "Glem attacts a swarm of 8chan chuds which boosts banner ad impressions, but advertisers are not thrilled because of audience mismatch. Before long, Glem is indicted on 54 felony counts of spying on behalf of the Russian SVR over the last three decades since being caught on tape in a compromising situation. You're hauled in to testify before congress. You're forced to hire white shoe lawfirm Dewey, Cheetem & Howe. Legal fees are substantial.",
    "Good choice. No notes.",
    "Typos cause reputational damage to your advertisers and you're sued for libel. Google downranks your website when they catch you engaged in unscrupulous SEO practices.",
    "A third of your readers abondon your publication when they get the impression that you only write about home remedies for varicose veins, how unbelievable child actor stars look grown up, and the one weird trick that can prevent the government from socializing your Medicare.",
    "The podcast gold rush comes to an abrupt end when it finally occurs to advertisers that everyone's been clicking the skip-ahead-15-seconds button whenever an ad comes on.",
    "Fyre Festival II is a huge success but only among your existing audience. The effort fails to exand your readership. Catering expenses threaten to leave you penniless.",
    "You spend a fortune, and your campaign is successful. Theter Piel and his Mendacious Band of Intellectual Property Tshieves watch their social media fortunes evaporate as they're forced to pay you a syndication fee every time they display a preview card when their users link to your stories.",
]

startButton.addEventListener('click', ()=>{
    const playerName = document.querySelector('input').value;
    if(playerName !== ""){
    document.getElementById("start-screen").style.display = "none";
    firstSlide.style.display = "block";
    playerOne.innerText = `${playerName}`;
    document.getElementById("next1").style.display = "block";
    playAudio();
    musicControls.style.visibility = "visible"
    }
} )
next1.addEventListener('click', ()=>{
    firstSlide.style.display = "none";
    secondSlide.style.display = "block";
    next1.style.display = "none";
    next2.style.display = "block";
})
next2.addEventListener('click', ()=>{
    secondSlide.style.display = "none";
    thirdSlide.style.display = "block";
    next2.style.display = "none";
    next3.style.display = "block";
})
next3.addEventListener('click', ()=>{
    thirdSlide.style.display = "none";
    forthSlide.style.display = "block";
    next3.style.display = "none";
    next4.style.display = "block";
})
next4.addEventListener('click', ()=>{
    forthSlide.style.display = "none";
    fifthSlide.style.display = "block";
    next4.style.display = "none";
    play.style.display = "block";
})
play.addEventListener('click', ()=>{
    fifthSlide.style.display = "none";
    play.style.display = "none";
    gameboard.style.display = "flex"
    restart.style.display = "block"
    replay.style.display = "block"
})

function myFunction(evt){
    evt.currentTarget.querySelector('img').style.display = "none"
    evt.currentTarget.querySelector('p').style.display = "block"
    let rev = evt.currentTarget.dataset.revenue
    let lia = evt.currentTarget.dataset.liabilities
    let index = evt.currentTarget.dataset.index

    console.log(index)
    console.log(rev)
    console.log(lia)
    console.log(turns.innerText)
    if (turns.innerText > 0){
        revCounter.innerText = parseInt(revCounter.innerText) + parseInt(rev);
        liaCounter.innerText = parseInt(liaCounter.innerText) + parseInt(lia);
        turns.innerText--
        setTimeout(function() {
            isGameOver()
        },10)
        alert(alerts[index]);
        square.removeEventListener('click', myFunction)
    }
}
const choices = document.querySelectorAll(".choice");
choices.forEach((square)=>{
  square.addEventListener('click',  myFunction)})

function isGameOver () {
    if (turns.innerText == 0 && parseInt(revCounter.innerText) < parseInt(liaCounter.innerText)){
        turns.innerText == 0
        alert("GAME OVER! SEE YOU IN BANKRUPTCY COURT!")   
    }
    else if (turns.innerText == 0 && parseInt(revCounter.innerText) > parseInt(liaCounter.innerText)){
        turns.innerText == 0
        alert("YOU WIN! GREAT SUCCESS!")   
    }
    else{
        console.log("Game is not over")
    }
}

const replayBtn = document.getElementById('replay');
const restartBtn = document.getElementById('restart')

restartBtn.addEventListener('click', ()=>{
    location.reload();
})

replayBtn.addEventListener('click', ()=>{
    revCounter.innerText = 0;
    liaCounter.innerText = 0;
    turns.innerText = 5;
    document.querySelectorAll('p').forEach(e => e.style.display = "none");
    document.querySelectorAll('img').forEach(e => e.style.display = "block");
})
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 
