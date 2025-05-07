const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
});

//Validacion de credenciales
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita que se envíe el formulario por defecto

            const userId = document.getElementById("userId").value.trim();
            const password = document.getElementById("password").value.trim();

            // Datos de prueba
            const users = [
                { id: "100", password: "1234"},
                { id: "1001", password: "1234"},
                { id: "1002", password: "1234"},
                { id: "5001", password: "1234"}
            ];

            const userFound = users.find(user => 
                user.id === userId && user.password === password
            );
            
            if (userFound) {
                alert("¡Succesfull login!");
                // Guarda datos del usuario si quieres (opcional)
                //localStorage.setItem("loggedInUser", JSON.stringify(userFound));
                if(Number(userId) >=5000){
                    window.location.href = "doctor.html"; 
                }
                else if(Number(userId) <=100){
                    window.location.href = "admin.html"; 
                }
                else{
                    window.location.href = "home.html"; 
                }
                
            } else {
                alert("UserID or password incorrect");
            }
        });
    }
});