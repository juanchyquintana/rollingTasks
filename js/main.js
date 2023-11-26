const zonaAlerta = document.querySelector("#zonaAlerta");

const agregarTarea = () => {
  const tarea = document.querySelector("#tareaInput").value;

  if (tarea === "") {
    const alerta = document.createElement("div");
    alerta.className = "d-flex flex-column justify-content-center";
    alerta.innerHTML = `        
        <div class="d-flex flex-column justify-content-center">
            <p class="text-white text-center fw-bold bg-danger rounded mt-2 shadow"
              id="dniAlert"
            >Hay campos vacios. Introduzca una tarea, por favor</p>
        </div>
    
        `;
    zonaAlerta.appendChild(alerta);

    setTimeout(() => {
      zonaAlerta.removeChild(alerta);
    }, 1500);
    return;
  }

  const nuevaTarea = document.createElement("li");
  nuevaTarea.className =
    "d-flex justify-content-between align-items-center m-2 pb-2 border-bottom border-black";
  nuevaTarea.appendChild(document.createTextNode(tarea));

  const botonEliminar = document.createElement("button");
  botonEliminar.className = "btn btn-danger text-uppercase fw-bold";
  botonEliminar.appendChild(document.createTextNode("Eliminar"));
  botonEliminar.addEventListener("click", () => {
    nuevaTarea.remove();
  });

  nuevaTarea.appendChild(botonEliminar);

  document.querySelector("#listaTareas").appendChild(nuevaTarea);
  document.querySelector("#tareaInput").value = "";
};
