let registarBtn = document.getElementById("registarBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
const pwShowHide = document.querySelectorAll(".eye-icon");

loginBtn.addEventListener("click", loginbtn);

registarBtn.addEventListener("click", registar);


pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        pwFields.forEach(password => {
            if (password.type === 'password') {
                password.type = 'text';
                eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
                return;
            }
            password.type = 'password';
            eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
        });
    })
});


const mensagem = document.getElementById("mensagem");

function registar() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Registar";
    loginBtn.classList.add('disable');
    registarBtn.classList.remove('disable');
    registarBtn.removeEventListener('click', registar);
    registarBtn.addEventListener('click', checkRegistar);
    if (document.querySelector("#title").innerHTML == "Registar") {
        loginBtn.addEventListener('click', loginbtn);
        try {
            loginBtn.removeEventListener('click', checkLogin);
        } catch (error) {
            
        }
    }
}
function checkRegistar() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    console.log(email, password, name);
    if (email == "" || password == "" || name == "") {
        mensagem.innerHTML = "Preencha todos os campos!";
        mensagem.style.color = "red";
        setTimeout(() => {
            mensagem.innerHTML = "";
        }, 1000);
    } 
    else {
        mensagem.innerHTML = "Registo efetuado com sucesso!";
        mensagem.style.color = "green";
        setTimeout(() => {
            mensagem.innerHTML = "";
        }, 1000);
        registarBtn.removeEventListener('click', checkRegistar);
        registarBtn.addEventListener('click', registar);
    }
}

function loginbtn() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Login";
    registarBtn.classList.add('disable');
    loginBtn.classList.remove('disable');
    loginBtn.removeEventListener('click', loginbtn);
    loginBtn.addEventListener('click', checkLogin);
    if (document.querySelector("#title").innerHTML == "Login") {
        registarBtn.addEventListener('click', registar);
        try {
            registarBtn.removeEventListener('click', checkRegistar);
        } catch (error) {

        }
    }
}

function checkLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    if (email == "admin@gmail.com" && password == "admin") {
        mensagem.innerHTML = "Login efetuado com sucesso!";
        mensagem.style.color = "green";
        setTimeout(() => {
            mensagem.innerHTML = "";
            window.location.href = "../index.html";
        }, 1000);
        loginBtn.removeEventListener('click', checkLogin);
        loginBtn.addEventListener('click', loginbtn);
    } else {
        mensagem.innerHTML = "Email ou password errados!";
        mensagem.style.color = "red";
        setTimeout(() => {
            mensagem.innerHTML = "";
        }, 1000);
    }
}