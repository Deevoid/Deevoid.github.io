function ready(){
    let div = document.querySelector('.intro');
            div.classList.add('intro-finish');
            let getName = prompt("Enter your name");
            document.getElementById('player-id').innerHTML = getName;
}

const game = () => {
    let pScore = 0;
    let cScore = 0;
    let winner = document.querySelector('.winner');

    //play match
    const play = () =>{
        const options = document.querySelectorAll('.hit-btn button');
        const playerHand = document.querySelector('.player-img');
        const computerHand = document.querySelector('.computer-img');
        const hand = document.querySelectorAll('.game-img img')
        hand.forEach(img =>{
            img.addEventListener('animationend',function(){
                this.style.animation = '';
            })
        })

        //computer options
        const computerOptions = ['rock','paper','scissor'];

        options.forEach((option) => {
            option.addEventListener('click',function() {
               //Computer choice
               const computerRandom = Math.floor(Math.random()*3);
               const choice = computerOptions[computerRandom];

               setTimeout(() => {
                   //call the compare function
               compareHands(this.innerHTML,choice);

               //Update images
               playerHand.src = `./img/${this.innerHTML}.png`
               computerHand.src = `./img/${choice}.png`
               }, 1000);
               
               
               playerHand.style.animation = 'shakePlayer 1s ease';
               computerHand.style.animation = 'shakeComputer 1s ease';

            });
        });

        
    };

    const updateScore = () => {
        const playerScore =  document.querySelector('.player p')
        const computerScore =  document.querySelector('.computer p')
        playerScore.innerHTML = pScore;
        computerScore.innerHTML = cScore;

    }

    const compareHands = (pChoice,cChoice) => {
        let winner = document.querySelector('.winner')
        if(pChoice===cChoice){
            winner.innerHTML = 'Tie';
            return;
        }
        //rock
        if(pChoice === 'rock'){
            if(cChoice=== 'scissor'){
                winner.innerHTML = 'You win';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.innerHTML = 'Computer wins'
                cScore++;
                updateScore();
                return;
            }
        }
        //paper
        if(pChoice === 'paper'){
            if(cChoice=== 'scissor'){
                winner.innerHTML = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.innerHTML = 'You win'
                pScore++;
                updateScore();
                return;
            }
        }
        //Scissor
        if(pChoice === 'scissor'){
            if(cChoice=== 'rock'){
                winner.innerHTML = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.innerHTML = 'You win'
                pScore++;
                updateScore();
                return;
            }
        }
    }

    const reset = () =>{
        let btn = document.querySelector('#reset');
        btn.addEventListener('click',() =>{
            pScore=0;
            cScore=0;
            updateScore();
            winner.innerHTML = 'Try your luck'
        });
    };



//Call inner functions here
    play();
    reset();

}
//call main function here
game();
