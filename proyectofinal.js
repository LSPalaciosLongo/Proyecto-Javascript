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