'use strict';

// document.querySelector('.message').textContent = "Hello World"

let random_num = Math.trunc(Math.random()*19)+1
console.log(random_num)

let score = Number(document.querySelector('.score').textContent)

let high_score = 0

document.querySelector('.check').addEventListener('click', function onClick() {
   const guess= Number(document.querySelector('.guess').value)
    if (!guess){
      document.querySelector('.message').textContent ="No number 🚫"
    }else if (guess !== random_num){
      if(score > 0){
        document.querySelector('.message').textContent = guess> random_num ? "Too high🤦‍♂️" : "Too low🤦‍♂️"
        score--
        document.querySelector('.score').textContent = score
      }else{
        document.querySelector('.message').textContent ="You lost the game🤦‍♂️"
      }
    }else{
      document.querySelector('body').style.backgroundColor = "#60b347"
      document.querySelector('.number').style.width = "30rem"
      document.querySelector('.message').textContent ="Correct 💯"
      document.querySelector('.number').textContent = random_num
      document.querySelector('.score').textContent = score
      if (score > high_score){
          high_score = score
          document.querySelector('.highscore').textContent = score
      }
    }
  })


  document.querySelector(".again").addEventListener('click', function tryAgain() {
    random_num = Math.trunc(Math.random()*19)+1
    console.log(random_num)
    score = 20
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.number').style.width = "15rem"
    document.querySelector('.number').textContent = "?"
    document.querySelector('.score').textContent = "20"
    document.querySelector('.message').textContent = "Start guessing ..."
    document.querySelector('.guess').value = ""

  })