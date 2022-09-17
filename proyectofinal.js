class Alumno {
  constructor(id, name, apellido, note) {
    this.id = id;
    this.name = name;
    this.apellido = apellido;
    this.note = note;
  }
}

// Operador lógico (desafío complementario)
const alumnoEnLocalStorage = localStorage.getItem("alumno")||"[]";
let alumno = JSON.parse(alumnoEnLocalStorage);
const tableAlumno = document.querySelector("#alumnoTable tbody");
const alumnoForm = document.querySelector("#addAlumno");
updateAlumnoTable();



function saveAlumno() {
  console.log(alumnoForm.idStudent);
  if (alumnoForm.idStudent && alumnoForm.idStudent != 0) {
    for (let index = 0; index < alumno.length; index++) {
      if (alumno[index].id == alumnoForm.idStudent) {
        alumno[index].name = alumnoForm.alumnoName.value;
        alumno[index].apellido = alumnoForm.alumnoApellido.value;
        alumno[index].note = alumnoForm.alumnoNote.value;
        break;
      }
    }
    alumnoForm["idStudent"] = 0;
    updateAlumnoTable();
    Toastify({

      text: "Se modificó correctamente",
      
      duration: 3000,

      position: "center",

      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      
      }).showToast();
  } else {
    //crear 
    const newAlumno = new Alumno(
      //spread de arrays (desafío complementario)
      Math.max(0,...alumno.map((alumno)=>alumno.id)) + 1,
      alumnoForm.alumnoName.value,
      alumnoForm.alumnoApellido.value,
      alumnoForm.alumnoNote.value
    );
    alumno.push(newAlumno);
    updateAlumnoTable();
    Toastify({

      text: "Se agregó correctamente",

      position: "center",
      
      duration: 3000
      
      }).showToast();
  }
 
}

function updateAlumnoTable() {
  tableAlumno.innerHTML = "";
  console.log(alumno);
  alumno.forEach((student) => {
    const studentHTML = document.createElement("tr");
    studentHTML.innerHTML = `<th scope="row">${student.id}</th>
        <td>${student.name}</td>
        <td>${student.apellido}</td>
        <td>${student.note}</td>
        <td><button
                id="editBtn_${student.id}"
                type="button"
                class="btn btn-primary"
                onclick="editAlumno(event)"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                Editar
                </button>
            <button
                id="deleteBtn_${student.id}"
                type="button"
                class="btn btn-danger"
                onclick="deleteAlumno(event)">
                Borrar
                </button>
            </td>
        `;
    tableAlumno.appendChild(studentHTML);
  });
  agregarEnLocalStorage();
}

function deleteAlumno(event) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      const btn = event.target;
      const id = btn.id.split("_")[1];
      alumno = alumno.filter((student) => student.id != id);
      updateAlumnoTable();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  
}

function editAlumno(event) {
  const btn = event.target;
  const id = btn.id.split("_")[1];
  const plato = alumno.filter((student) => student.id == id)[0];
  alumnoForm.alumnoName.value = plato.name;
  alumnoForm.alumnoApellido.value = plato.apellido;
  alumnoForm.alumnoNote.value = plato.note;
  alumnoForm["idStudent"] = plato.id;
  console.dir(alumnoForm);
}

function agregarEnLocalStorage(){

  const alumnoJSON = JSON.stringify(alumno);
  localStorage.setItem("alumno", alumnoJSON)

}