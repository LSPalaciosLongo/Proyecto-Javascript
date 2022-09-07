/*
var maria; //declarar
let juan; //declarar
juan = 22; //asignar
let pedro = "hola"; //inicializar

let nombreUsuario = prompt("Ingresar nombre de usuario");
let apellidoUsuario = prompt("Ingresar apellido de usuario");

if(nombreUsuario == ""){
    alert("No ingresaste el nombre de usario");
}
else{
    alert("Nombre de usuario ingresado: " + nombreUsuario);
}
if ((nombreUsuario == "") && (apellidoUsuario == "")){
    alert("No ingresaste nombre ni apellido");

}

let result = num1 - num2;
console.log(x);
console.log(result);
console.log(result * 2);
console.log(result + num1);
console.log(result - num2);
console.log(result + result);
console.log(result - result);


if(true){
    let x = true;
}
if (3 === 3) {
    console.log("todo bien");
}
else if ( 4 == 4) {
    consolor.log("Stand BY");
}
else(console.log("todo mal"));


console.log(x);
console.log("hola" === "hold");
console.log("5" == 5);

var x = 'var';
let num1 = 45;
let num2 =30;


function mostrarPalabra(){
    var num = document.getElementById("n1").value;
    const palabra = stringArray[num];
    var num2 = document.getElementById("n2").value;
    const palabra2 = stringArray2[num];
    document.getElementById("resultado").innerHTML = palabra + " en " + palabra2;
}

// empty array
// const myList = [ ];

// array of numbers
// const numberArray = [ 2, 4, 6, 8];

// array with mixed data types
// const newData = ['work', 'exercise', 1, true];


var sumaNota = 0;
let cantNotasIngresadas = parseInt(prompt("Ingresar cantidad de notas a promediar."));
if (cantNotasIngresadas > 0 ){
    for (let i = 0; i < cantNotasIngresadas; i++){
        let nota = parseInt(prompt("Ingrese nota n° " + (i+1)));
        var sumaNota = sumaNota + nota;
    }
    alert("El promedio de las notas ingresadas es: " + sumaNota/cantNotasIngresadas)
}
else{
    alert("Vuelva a ingresar un número");
}


function calcularPromedio(){
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("promedio").innerHTML = pro;  
}

function solicitarNombre(indice, parametro2, parametro3) {
    if(indice % 2 == 0){
        console.log("Ejecuto funcion en la iteración", indice);
    let nombreIngresado = prompt("Ingresar Nombre");
    if(nombreIngresado.length < 3){
        alert("Error");
    }
    else
    alert("El nombre ingresado es " + nombreIngresado);
    }
}

for (let index = 0; index < 5; index++){
    console.log("Ejecuto función en la iteración ", index);
        solicitarNombre();
}
*/

// JAVASCRIPT CON LO REALIZADO EN ENTREGAS ANTERIORES O ANOTACIONES DE CLASES

// localStorage.setItem("token","1234")
// sessionStorage.setItem("token","12345")

const arrayNombres = [];
const arrayNotas = [];
const arrayUnido =[];

function agregarAlumno(){
    // var table = document.getElementById("datas");
    // table.innerHTML="";
    // var tr="";
    var name = document.getElementById("n1").value;
    var note = document.getElementById("n2").value;
    arrayNombres.push(name);
    arrayNotas.push(note);
    // arrayUnido.push(name, note);
    /* arrayUnido.push(arrayNombres, arrayNotas);
    arrayUnido.forEach(x=>{
        tr+='<tr>';
        tr+='<td>'+name+'</td>' + '<td>'+note+'</td>'
        tr+='</tr>'
   
     })
    table.innerHTML+=tr;*/

    document.getElementById("nombre").innerHTML = arrayNombres
    document.getElementById("nota").innerHTML = arrayNotas
}