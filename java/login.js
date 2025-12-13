document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // Leer usuarios guardados
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Buscar usuario con correo o username
    const userFound = users.find(
        u => (u.email === email || u.username === email) && u.password === password
    );
    
    console.log("Usuarios registrados:", users);
    console.log("Usuario ingresado:", email, password);
    
    if (!userFound) {
            Swal.fire({
    icon: 'error',
    title: '¡ :( !',
    text: 'Usuario o contraseña incorrectos',
    timer: 1000,
    showConfirmButton: false,
}).then(() => {
    window.location.href="login.html";
});
        return;
    }
    
    // Guardar usuario actual
    localStorage.setItem("currentUser", JSON.stringify(userFound));
    
    // ... (El código de redirección a la página principal probablemente continuaría aquí)
    Swal.fire({
    icon: 'success',
    title: '¡login exitoso!',
    text: 'Tu cuenta ha sido creada correctamente',
    timer: 1000,
    showConfirmButton: false,
}).then(() => {
    window.location.href="dashboard.html";
});
});
// Mostrar/ocultar contraseña
document.getElementById("togglePass").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "Ocultar";
    } else {
        passwordInput.type = "password";
        this.textContent = "Mostrar";
    }
});