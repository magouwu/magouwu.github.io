var maxCount = 150;
const counter = document.querySelector('.container-contact .counter');
const limitedtextarea = document.querySelector('#msg');

limitedtextarea.addEventListener('keydown', function(e){
    if (maxCount === 0 && e.key !== 'Backspace' || maxCount === 150 && e.key === 'Backspace') {
        e.preventDefault();
        return;
      }
      if (e.key === 'Backspace') {
        maxCount = maxCount + 1;
        counter.innerHTML = maxCount;
      } else {
        maxCount = maxCount - 1;
        counter.innerHTML = maxCount;
      }
    });