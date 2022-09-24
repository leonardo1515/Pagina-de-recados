const form = document.getElementById('enterForm');
const creatEmail = document.getElementById('creat-input-email');
const creatSenha = document.getElementById('creat-input-senha');

const Users = JSON.parse(localStorage.getItem('task')) || [] 
document.addEventListener('submit', (e) => {
    e.preventDefault()
    
    if(creatEmail.value == '' ||creatSenha.value == '') {
        alert('Por favor preencha os campos para proseguir.');
        return;
    }

    if ( creatEmail.value.length < 9 || creatSenha.value.length < 4  ) {
        alert('Por favor preencha os campos corretament para proseguir.');
        return;
    }

    if(Users.find(usuarios => usuarios.email == creatEmail.value)){
            alert('E-mail já cadastrado')
            return
    }

    const dataUser = {
        email: creatEmail.value,
        senha: creatSenha.value,
        data: newTasks = [],
    };

    Users.push(dataUser)


    localStorage.setItem('task', JSON.stringify(Users))
      window.location.href = 'login.html'
})