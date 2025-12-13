const formRegistro=document.getElementById("registroForm")
formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const user = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        cedula: document.getElementById("cedula").value,
        fechaNac: document.getElementById("fecha").value,
        email: document.getElementById("email").value,
        direccion: document.getElementById("direccion").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };
    
    console.log("Usuario capturado:", user);

    // Leer usuarios previos
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Agregar nuevo usuario
    users.push(user);
    // Guardar en localStorage
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire({
    icon: 'success',
    title: '¡Registro exitoso. Ahora puedes iniciar sesión.!',
    text: 'Tu cuenta ha sido creada correctamente',
    timer: 1000,
    showConfirmButton: false,
}).then(() => {
    window.location.href = "login.html";
});
   
    
});