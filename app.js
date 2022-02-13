const randomGenarator = document.querySelector('.generate-btn');
const displayRandom = document.getElementById('display-random');
const allInputBtn = document.getElementsByClassName('button');
const showRandom = document.getElementById('match-random');

randomGenarator.addEventListener('click', (e) => {
  displayRandom.value = getRndInteger(1000, 9999)
})
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Submit Random 
const submit = document.querySelector('.submit-btn');
const actionLeft = document.getElementById('action-left');
submit.addEventListener('click', (e) => {
  const showOutput = document.querySelector('.notify-section');

  

  if (actionLeft.innerText == 0) {
    submit.setAttribute('disabled', false);
    document.getElementById('try-again').innerHTML = 'Please Generate Random Number Again';
  }

  if (showRandom.value === '' || displayRandom.value === '') {
    alert('please Generate Pin');
    return false
  }else {
    actionLeft.innerText = parseInt(actionLeft.innerText) - 1;
  }

  if (showRandom.value === displayRandom.value) {
    showOutput.lastElementChild.classList.add('show');
    showOutput.firstElementChild.classList.remove('show');
    actionLeft.innerText = 3;
  } else {
    showOutput.firstElementChild.classList.add('show');
    showOutput.lastElementChild.classList.remove('show');
  }
  showRandom.value = '';
  displayRandom.value = '';
})



for (const inputBtn of allInputBtn) {
  inputBtn.addEventListener('click', (e) => {
    if (e.target.innerText === 'C') {
      showRandom.value = '';
    } else if (e.target.innerText === '<') {
      showRandom.value = showRandom.value.slice(0, -1)
    }
    else if (showRandom.value.length == 4) {
      return '';
    } else {
      showRandom.value += e.target.innerText;
    }
  })
}

