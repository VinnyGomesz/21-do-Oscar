
// var btnsopcoes = document.getElementById("btnsopcoes");
var rules = document.getElementById("rules");
var displayGame = document.getElementById("gameMult");

document.querySelector("button").onclick = function () {
  document.getElementById("start").style.display = "none";
  setTimeout(() => {
    document.getElementById("btnsopcoes").style.display = "block";
  }, 500);
  // a função setTimeout esta esperando o clique no botão start para mostrar a tela de opções
  //trasformando a tela de start em diplay none e deixando a tela de opções de jogo com display block
};
function  player() {
  btnsopcoes.style.display = "none";
  rules.style.display = "block";
  // a função player faz com que o assim que o jogador clicar na função de player vs player
  // a tela de opções suma e a de regras ue estava com display none no css apareça
  //virando display block 
}

document.querySelector("#btn-next").onclick = function () {
  rules.style.display = "none";
  displayGame.style.display = "flex";
  displayGame.style.display = "block";
  // essa função btn-next esta na tela de regras para que o usuario saia da tela e entre no jogo
  // sendo assim o display de regras vira "none" e a tela de jogo, que estava none no css aparece virando display block

};
const btnssGameMult = document.getElementById("btnssGameMult");
const btns = btnssGameMult.querySelectorAll("div");
//declaração de variaves que chama todas divis dentro de btns qque são os botoes do jogo

btns.forEach(function (el, i) {
  btns[i].innerText = i + 1;
  //a função varre todos os boteoes e acresenta a eles mais +1
});

btns[0].onclick = function () {
  soma(Number(btns[0].firstChild.data));
 
};
btns[1].onclick = function () {
  soma(Number(btns[1].firstChild.data));

};
btns[2].onclick = function () {
  soma(Number(btns[2].firstChild.data));
};
function soma(valor) {
  btns[0].firstChild.data = valor + 1;
  btns[1].firstChild.data = valor + 2;
  btns[2].firstChild.data = valor + 3;

  if (valor == 21) {
    exibirV(); // exibirV chama a tela de vitoria
    setTimeout(() => {
      document.getElementById("victory").style.display = "none";
      document.getElementById("screenScore").style.display = "block";
      document.getElementById("screenScore").style.display = "flex";
      }, 2900) ///depois de alguns segundo que exibe a tela de vitoria, a parece a tela do score  
                //ela é feita tambem com a mudança dos displays, tornando a tela de vitoria display none
                // e trazendo a tela do score
  }
  if(valor > 21) {
    document.getElementById("defeat").style.display = "block";
    document.getElementById("defeat").style.display = "flex";
    document.getElementById("display").style.display = "none";
    //quando o jogador atinge mais de 21 e perde aparece a tela de derrota
    // tornando o display de derrota fixo na tela 
  }
}
function exibirV() {
  document.getElementById("playervictory").innerText = `Player 1`;
  document.getElementById("victory").style.display = "block";
  document.getElementById("victory").style.display = "flex";
  document.getElementById("display").style.display = "none";
  //quando o jogador atinge o numero 21 a função setTimeout abre a tela de vitoria
  //tornando a tela de vitoria display block e a tela de jogo display none
}

var retunrDefeat = document.getElementsByClassName("returnDefeat");
returnDefeat.onclick = () => {  
  document.getElementById("screenScore").style.display = "none";
  document.getElementById("display").style.display = "block";
  document.getElementById("display").style.display = "flex";
  document.getElementById("gameMult").style.display = "block";
    document.getElementById("defeat").style.display = "none";
    btns[0].firstChild.data = 1;
    btns[1].firstChild.data = 2;
    btns[2].firstChild.data = 3;
    //função de retorno ao jogo, do botao return que esta na tela de 
    //derrota, tira todos os display os tornando none
    // e retorna a tela de jogo com os botoes com os valores em 123

}
var returnScore = document.getElementById("returnScore");

returnScore.onclick = () => { 
    document.getElementById("screenScore").style.display = "none";
    document.getElementById("display").style.display = "block";
    document.getElementById("display").style.display = "flex";
    document.getElementById("btnsopcoes").style.display = "block";
    document.getElementById("gameMult").style.display = "none";
    document.getElementById("defeat").style.display = "none";  
    //função de return que esta na tela do score que esta na tela do score
    //ela volta a tela de opções
    
}
score.onclick = () => {
   document.getElementById("screenScore").style.display = "block";
   document.getElementById("screenScore").style.display = "flex";
   document.getElementById("btnsopcoes").style.display = "none";
   document.getElementById("display").style.display = "none";
   //essa é a função do score que aparece na tela de opções
   //ela tira o display de opções da tela com o display none e torna o score display block
 }
