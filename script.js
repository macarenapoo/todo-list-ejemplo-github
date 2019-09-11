var pendientes = [
    { descripcion: "Tarea de Agenda de JS", completado: false },
    { descripcion: "Comer", completado: false },
    { descripcion: "Dormir", completado: true },
    { descripcion: "Cortarse el pelo", completado: false }
];

function imprimirPendiente(pendiente, index) {
    var lista = document.getElementById("lista");
    lista.insertAdjacentHTML('beforeend',
        `<li ` + estaCompletado(pendiente.completado) + ` onClick="marcarCompletado(` + index + `)">
            <div class="checkbox">
                <i class="fa fa-check"></i>
            </div>
            <div class="descripcion">`+ pendiente.descripcion + `</div>
        </li>`
    );
}

function estaCompletado(completado) {
    if (completado) {
        return 'class="done pendiente"';
    } else {
        return 'class="pendiente"';
    }
}

function marcarCompletado(index) {
    // var pendientesInterfaz = document.getElementsByClassName("pendiente");
    // pendientesInterfaz[index].classList.toggle("done");
    pendientes[index].completado = !pendientes[index].completado;
    imprimirTodosLosPendientes();
}

function imprimirTodosLosPendientes() {
    document.getElementById("lista").innerHTML = "";
    pendientes.forEach(imprimirPendiente);
}

function agregarPendiente() {
    var pendiente = document.getElementById("item").value;
    pendientes.push({ descripcion: pendiente, completado: false });
    imprimirTodosLosPendientes();
}

imprimirTodosLosPendientes();
