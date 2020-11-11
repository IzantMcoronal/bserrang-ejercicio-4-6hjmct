// En este ejercicio tenéis que sustituir TODAS las funciones tradicionales por funciones flecha y que siga funcionando igual.

const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);

//funcion original antes de cambiarla. Con las flechas simplificamos y lo de abajo seria el resultado. Para que funcione tenemos que sustituir el "this" por la constante.
//changeBackgroundButton.addEventListener("click", function() {
//  this.style.backgroundColor = getRandomColor();
//}); 
changeBackgroundButton.addEventListener("click", () => (
changeBackgroundButton.style.backgroundColor = getRandomColor()));

// funcion Original antes de cambiarla. Con las flechas simplificamos y lo de abajo seria el resultado.
//function getRandomColor() {
//  const letters = getLetters();
//  let color = '#';
//  for (var i = 0; i < 6; i++) {
//    color += letters[Math.floor(Math.random() * 16)];
//  }
//  return color;
//}

let getRandomColor = () => {
  const letters = getLetters();
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


// funcion Original antes de cambiarla. Con las flechas simplificamos y lo de abajo seria el resultado.
//function getLetters(){
//  return '0123456789ABCDEF';
//}
let getLetters = ()=>'0123456789ABCDEF';


