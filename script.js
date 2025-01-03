let isFirstYesClicked = false;

function answer1(answer) {
  if (answer === 'yes') {
    document.getElementById('round-1').classList.add('hidden');
    document.getElementById('round-2').classList.remove('hidden');
  } else {
    document.getElementById('try-again').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('try-again').classList.add('hidden');
    }, 2000);
  }
}

function answer2(answer) {
  if (answer === 'yes') {
    document.getElementById('round-2').classList.add('hidden');
    document.getElementById('round-3').classList.remove('hidden');
  } else {
    document.getElementById('try-again-2').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('try-again-2').classList.add('hidden');
    }, 2000);
  }
}

function answer3(answer) {
  const noButton = document.getElementById('no-button');
  const yesButton = document.getElementById('yes-button');
  
  if (answer === 'yes') {
    if (!isFirstYesClicked) {
      document.getElementById('thank-you').innerHTML = "<p>Shotti maaf korse!</p>";
      document.getElementById('thank-you').classList.remove('hidden');

      setTimeout(() => {
        document.getElementById('thank-you').innerHTML = "<p>Thank you Faija!</p>";
        document.getElementById('thank-you').classList.remove('hidden');
        
        startConfetti();

        setTimeout(() => {
          document.getElementById('thank-you').classList.add('hidden');
          document.getElementById('round-3').classList.add('hidden');
        }, 5000);
      }, 2000);

      isFirstYesClicked = true;
    }
  } else {
    noButton.classList.add('dodged');
    setTimeout(() => {
      noButton.classList.remove('dodged');
    }, 1000);
    
    document.getElementById('thank-you').innerHTML = "<p>Plz maaf koro!</p>";
    document.getElementById('thank-you').classList.remove('hidden');
  }
}

function startConfetti() {
  let confetti = document.createElement('div');
  confetti.id = 'confetti';
  document.body.appendChild(confetti);

  let confettiInterval = setInterval(() => {
    let confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti');
    confettiPiece.style.left = `${Math.random() * 100}vw`;
    confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.getElementById('confetti').appendChild(confettiPiece);

    setTimeout(() => {
      confettiPiece.remove();
    }, 3000);
  }, 200);
}
