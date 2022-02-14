function show_alert() {
    // Funcion para mostrar una alerta en la pagina con los datos del usuario
    let name = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("telefono").value;
    let asun = document.getElementById("asunto").value;
    let msg = document.getElementById("mensaje").value;
    alert("Apreciado " + name + "\n" + "Email: " + email + "\n" + "Telefono: " + tel + "\nSe ha escrito un mensaje con asunto " + asun + " y contenido:\n" + msg);
}