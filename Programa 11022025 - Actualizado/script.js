document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".presentacion").classList.add("cargado");
});

document.getElementById('updateButton').addEventListener('click', function() {
    alert("Información actualizada");
    document.getElementById('nombre').innerText = 'Samuel Leonardo Acero Lozano - Actualizado';
    document.getElementById('titulo').innerText = 'Estudiante de Ingeniería de Sistemas';
    document.getElementById('descripcion').innerText = 'email: sacerol46560@universidad.ean.edu.co';
});