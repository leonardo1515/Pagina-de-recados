let newTasks = JSON.parse(localStorage.getItem('task'))
const use = (sessionStorage.getItem('logged'))

if(!use) {
    window.location.href = 'creatAcoot.html'
}

const form = document.getElementById('cadform')
const messag = document.getElementById('input-mensagem')
const desccript = document.getElementById('input-descricao')
const bodyTable = document.getElementById('tbody')
const sav = document.getElementById('save').hidden = true

let dados = newTasks.find((usuario) => {
   return usuario.email == use 
})

window.addEventListener('load', () => {
   
  let oloadTable = dados.data.forEach((item) => {
       
  let data = {
      id: item.id,
      messag: item.messag,
      desccript: item.desccript,
    }
    
      const tasks = adicionar (data)
      bodyTable.appendChild(tasks)
     })
})

function getDefaultTask () {
  return   {
      data: []
    }
} 

document.addEventListener('submit', (e) => {
    e.preventDefault()
    // let newTasks = JSON.parse(localStorage.getItem('task'))

    if (!dados) {
        newTasks = getDefaultTask()
     
    }

    let data = {
        id:  generateId(dados.data),
        messag: messag.value,
        desccript: desccript.value,
    }

    if (messag.value == '' || desccript.value == '') {
        alert('Preencha os campos para salvar.');
        return;
    }
    
    dados.data.push(data)
    newTasks.forEach((item) => {
      if(item.email == use ) {
        item.data = dados.data
      }
    })

    localStorage.setItem('task', JSON.stringify(newTasks))
    const tasks = adicionar (data)
    bodyTable.appendChild(tasks)

    messag.value = ''
    desccript.value = ''
    
})

function adicionar (tas) {
    const newTr = document.createElement('tr')
    
    const priTd = document.createElement('td')
    priTd.innerText = tas.messag
    newTr.appendChild(priTd)
    
    const segTd = document.createElement('td')
    segTd.innerText = tas.desccript
    newTr.appendChild(segTd)
    
    const actTd = document.createElement('td')
    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Delete'
    btnDelete.setAttribute("class", "delet")
    btnDelete.setAttribute ('id', tas.id)
    btnDelete.addEventListener('click', deleteLinha)
    actTd.appendChild(btnDelete)

    const btnEdit = document.createElement('button')
    btnEdit.innerText = 'Editar'
    btnEdit.setAttribute ('class', 'edit')
    btnEdit.setAttribute ('id', tas.id)
    btnEdit.addEventListener('click', edidlinha)
    actTd.appendChild(btnEdit)

    newTr.appendChild(actTd)
    return newTr
}

 const generateId = (tasks) => {
    let nextId = tasks.length + 1;

    let index = tasks.findIndex((task) => task.id === nextId);

    while (index >= 0) {
        nextId++;
        index = task.findIndex((task) => task.id === nextId);
    }

    return nextId;
}

function deleteLinha (event) {
  let newTasks = JSON.parse(localStorage.getItem('task')) || getDefaultTask()

  const linhaId = event.target.getAttribute('id')
  let idx = dados.data.findIndex((linha) => linha.id == linhaId )

  if(idx >= 0) {
    dados.data.splice(idx, 1)
  }
  
  newTasks.forEach((item) => {
    if(item.email == use ) {
      item.data = dados.data
    }
  })
     localStorage.setItem('task', JSON.stringify(newTasks))
     bodyTable.removeChild(event.target.parentNode.parentNode)
}

let res = 1
let edidlinha = (event) =>{
  let newTasks = JSON.parse(localStorage.getItem('task')) || getDefaultTask()
  const sav = document.getElementById('save').hidden = false
  const subm = document.getElementById('submeter').hidden = true

  const linhaId = event.target.getAttribute('id')
  let idx = dados.data.findIndex((linha) => linha.id == linhaId )
  console.log(linhaId)
      dados.data.forEach((linha) => {
      if(linha.id == linhaId) {
        messag.value    = linha.messag
        desccript.value = linha.desccript
      }
    })

  res = idx
} 
function save(i) {
  let newTasks = JSON.parse(localStorage.getItem('task')) || getDefaultTask()

dados.data.forEach((linha) =>{
  if(linha.id ==i+1 ) {
    linha.messag = messag.value
    linha.desccript = desccript.value
    console.log(linha.messag)
    console.log(linha.desccript)

  }
})

if(messag.value == '' || desccript.value == '') {
  alert('Preencha os campos para proseguir')
  return
}
newTasks.forEach((item) => {
  if(item.email == use ) {
    item.data = dados.data
  }
})
  localStorage.setItem('task', JSON.stringify(newTasks))
  const subm = document.getElementById('submeter').hidden = false

  messag.value = ''
  desccript.value = ''

  location.reload()
  res = 0
}

function exit() {
  
  sessionStorage.removeItem('logged')
  window.location.href = 'login.html'
}   
