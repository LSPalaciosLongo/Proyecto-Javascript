const arrayNombres = [];
const arrayNotas = [];

var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');
var addBtn = document.getElementById('add-Btn');
for (var i = 0; i < li.length; i++) {
  list.addEventListener('click', activeItem);
}
function activeItem() {
  title.innerHTML = this.innerText;
  for (var i = 0; i < li.length; i++) {
    li[i].removeAttribute('class');
  }
  this.setAttribute('class', 'active');
}
addBtn.addEventListener('click', function() {
  var name = prompt('Ingrese nombre de alumno');
  list.innerHTML += '<li class="list-group-item">' + name + '</li>';
  arrayNombres.push(name);
  document.getElementById("nombre").innerHTML = arrayNombres
  console.log(arrayNombres);
});
