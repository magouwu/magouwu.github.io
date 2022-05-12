const remainingCharsText = document.getElementById("counter");
const myTextArea = document.getElementById("mytextarea");
const MAX_CHARS = 150;
var abrirMas = document.getElementById("popup-container");
var mode = document.getElementById("mode");
var close = document.getElementById("closebtn");

abrirMas?.addEventListener("click", function () {
  console.log("boton picado");
  mode.classList.toggle("display-active");
});

close?.addEventListener("click", function () {
  console.log("boton cerrar picado");
  mode.classList.toggle("display-active");
});

myTextArea?.addEventListener("input", function (e) {
  const remaining = MAX_CHARS - myTextArea.value.length;
  remainingCharsText.textContent = remaining;
  if (remaining <= 0) {
    e.preventDefault();
    return;
  } else {
    const color = remaining < MAX_CHARS * 0.1 ? "red" : null;
    console.log(remaining);

    remainingCharsText.style.color = color;
  }
});
