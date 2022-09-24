const dataUser = JSON.parse(localStorage.getItem('task')) 
const use = (sessionStorage.getItem('logged'))    

const form = document.getElementById('enterForm');
const email = document.getElementById('input-email');
const senha = document.getElementById('input-senha');

if(use) {
    window.location.href = 'messags.html';
}

document.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = dataUser.find(usuario => usuario.email == email.value)

    if (!dataUser) {
        alert('Você não tem uma conta! ');
        return;
    }

    if(user.email != email.value || user.senha != senha.value) {
        alert('E-mail ou senha errdo.');
        return;
    }

    sessionStorage.setItem('logged', (email.value))
    window.location.href = 'messags.html';
  
});
