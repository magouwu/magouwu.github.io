const remainingCharsText = document.getElementById('counter')
const myTextArea = document.getElementById('mytextarea')
const MAX_CHARS = 150;
 
myTextArea.addEventListener('input', function(e) {
  const remaining = MAX_CHARS - myTextArea.value.length;
  remainingCharsText.textContent=remaining;
  if(remaining <=0){
    e.preventDefault();
    return;
  }else{
 
  const color = remaining < MAX_CHARS * 0.1 ? 'red' : null;
  console.log(remaining);
  
  remainingCharsText.style.color = color;
  }

});
/*
myTextArea.addEventListener('keydown', function(e){
  const remaining = MAX_CHARS - myTextArea.value.length;
  remainingCharsText.textContent=remaining;

if (remaining <= 0 && e.key !== 'Backspace' || remaining === 150 && e.key === 'Backspace') {
  e.preventDefault();
  return;
}
if (e.key === 'Backspace') {
  remaining = remaining + 1;
  remainingCharsText.innerHTML = remaining;
} else {
  remaining = remaining - 1;
  remainingCharsText.innerHTML = remaining;
}
});*/