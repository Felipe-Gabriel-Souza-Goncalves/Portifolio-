const projetosEducacionais = [
  ["img/projects/educacional/amazon.png","Somativa Back-End","Projeto feito para testar os conhecimentos em JavaScript e comunicações CRUD com json via json-server","https://felipegsg.github.io/projeto-back-end-final-2024/"],
  ["img/projects/educacional/chat.png","Chat Online fake","Feito utilizando express, socket.io e http, simulando um chat em tempo real","https://chat-fake-classroom.onrender.com/"],
  ["img/projects/educacional/duolingo.png","Cadastro PHP","Primeiro projeto feito utilizando PHP com comunicação com banco de dados MySQL","http://fg113.infinityfreeapp.com/CRUDBanco/?i=1"],
  ["img/projects/educacional/ecommerce.png","E-commerce de jogos","Projeto para testar comunicações com API e conhecimentos de HTML, CSS e JavaScript","https://felipegsg.github.io/ecommerce-finalizado/"]
]
const projetosPessoais = [
  ["img/projects/pessoal/clique_bolinha.png","Jogo Clique-bolinha","Jogo feito para testar reflexões do jogar ao mantê-lo pressionando uma bola aleatória na tela","https://felipe-gabriel-souza-goncalves.github.io/Jogo-clique-bolinha/"],
  ["img/projects/pessoal/cookie.png","Fake Cookie Clicker","Um fan game do jogo Cookie Clicker, com uma estrutura básica de progresso e melhorias","https://felipe-gabriel-souza-goncalves.github.io/fake-cookie-clicker/"],
  ["img/projects/pessoal/projeto_relogio.png","Projeto Relógio","Contém as funcionalidades de um Relógio digital, timer e um cronômetro funcional","https://felipe-gabriel-souza-goncalves.github.io/Projeto-Relogio/"],
  ["img/projects/pessoal/rgb.png","RGB & Clip-path","Feito com o intuito de manipular as cores e os formatos dos elementos com HTML e JavaScript ","https://felipe-gabriel-souza-goncalves.github.io/RBG-Clip-Path-HTML/"],
]

feitoFull = false
indexEducacional = 0
indexPessoal = 0

function dropdownFeito(){
  feitoFull = !feitoFull
  if(feitoFull){
    document.getElementById("feitos").style.height = "100%"
    document.getElementById("dropdown").style.rotate = "90deg"
  } else{
    document.getElementById("feitos").style.height = "230px"
    document.getElementById("dropdown").style.rotate = "0deg"
  }
}

function carrosselProjetos(){
  atualizarProjetos()

  if(intervaloProjetos != undefined){
    clearInterval(intervaloProjetos)
  }

  var intervaloProjetos = setInterval(() =>{
    indexEducacional++
    indexEducacional = redefinirIndex(indexEducacional, projetosEducacionais)

    indexPessoal++
    indexPessoal = redefinirIndex(indexPessoal, projetosPessoais)

    atualizarProjetos()
  }, 20000)
}

function atualizarProjetos() {
  // Educacional
  document.querySelector("#carrosselEducacional").style.backgroundImage = `url(${projetosEducacionais[indexEducacional][0]})`
  document.querySelector("#carrosselEducacional div h2").innerHTML = projetosEducacionais[indexEducacional][1]
  document.querySelector("#carrosselEducacional div p").innerHTML = projetosEducacionais[indexEducacional][2]
  document.querySelector("#carrosselEducacional div a").innerHTML = projetosEducacionais[indexEducacional][3]
  document.querySelector("#carrosselEducacional div a").href = projetosEducacionais[indexEducacional][3]

  // Pessoal
  document.querySelector("#carrosselPessoal").style.backgroundImage = `url(${projetosPessoais[indexPessoal][0]})`
  document.querySelector("#carrosselPessoal div h2").innerHTML = projetosPessoais[indexPessoal][1]
  document.querySelector("#carrosselPessoal div p").innerHTML = projetosPessoais[indexPessoal][2]
  document.querySelector("#carrosselPessoal div a").innerHTML = projetosPessoais[indexPessoal][3]
  document.querySelector("#carrosselPessoal div a").href = projetosPessoais[indexPessoal][3]
}

function redefinirIndex(index, array){
  if(index > array.length - 1){
    index = 0
    return index

  } else if(index < 0){
    index = array.length - 1
    return index
  }
  return index
}

// Botões de controle do carrossel de projetos educacionais
document.querySelector("#voltarEducacional").addEventListener("click", () => {
  indexEducacional--
  indexEducacional = redefinirIndex(indexEducacional, projetosEducacionais)
  atualizarProjetos()
})
document.querySelector("#avancarEducacional").addEventListener("click", () => {
  indexEducacional++
  indexEducacional = redefinirIndex(indexEducacional, projetosEducacionais)
  atualizarProjetos()
})

// Botões de controle do carrossel de projetos pessoais
document.querySelector("#voltarPessoal").addEventListener("click", () => {
  indexPessoal--
  indexPessoal = redefinirIndex(indexPessoal, projetosPessoais)
  atualizarProjetos()
})
document.querySelector("#avancarPessoal").addEventListener("click", () => {
  indexPessoal++
  indexPessoal = redefinirIndex(indexPessoal, projetosPessoais)
  atualizarProjetos()
}) 
carrosselProjetos()