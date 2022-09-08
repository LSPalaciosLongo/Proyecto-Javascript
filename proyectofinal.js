const arrayNotas = [];
var arrayNombresStorage = window.localStorage.getItem("arrayNombres");
console.log(arrayNombresStorage);
console.log(typeof(arrayNombresStorage));
var arrayLocal = [];
if(arrayNombresStorage != null){
  var arraySplit = arrayNombresStorage.split(",");
  arraySplit.forEach(element => {
    arrayLocal.push(element);  
  });
}

var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');
var addBtn = document.getElementById('add-Btn');
var borrar = document.getElementsByClassName('borrar');
console.log(borrar);
// for (var i = 0; i < li.length; i++) {
//   list.addEventListener('click', activeItem);
// }
// function activeItem() {
//   title.innerHTML = this.innerText;
//   for (var i = 0; i < li.length; i++) {
//     li[i].removeAttribute('class');
//   }
//   this.setAttribute('class', 'active');
// }
addBtn.addEventListener('click', function() {
  
  var name = prompt('Ingrese nombre de alumno');
  while (isNaN(note = parseInt(prompt("Ingrese nota de alumno"))));
  // while(true){
  //   var note = parseInt(prompt('Ingrese nota de alumno'));  
  //   if (note != NaN) {
  //     break;
  //   }
  //   alert("Nota incorrecta");
  // }
  //   if(typeof(note) != int)
  // }
  
  list.innerHTML += '<li class="list-group-item flex"><p class="nombre">' + name + '</p><p class="nota">' + note +' </p><span class="borrar">X</span></li>';
  arrayLocal.push(name);
  // window.localStorage.setItem("arrayNombres", "");
  // document.getElementById("nombre").innerHTML = arrayNombres
  console.log(arrayNombresStorage);
  actualizarBorrado();
});

actualizarBorrado();
function actualizarBorrado() {
  var borrar = document.querySelectorAll(".borrar");
  borrar.forEach(function(element) {
    element.addEventListener("click", function() {
      //logica de borrar la fila actual
      element.parentElement.remove();
      console.log("borrar");
    });
  });
}
// document.querySelectorAll('.borrar').click(
//   console.log("borrar")
// );