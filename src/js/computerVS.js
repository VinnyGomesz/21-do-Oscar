// // var btnso1oes = document.getElementById("menu");
// var rules1 = document.getElementById("rules1");
// var computerGame1 = document.getElementById("computergame1");
// function computer(){
//     document.getElementById("btnsop4coes").style.display = "none";
//     rules1.style.display = "block";
    
// }
// var btn_next1 = document.getElementById("btn-next1")
// btn_next1.onclick = function () {
//     rules1.style.display = "none";
//     computerGame1.style.display = "flex";
//     computerGame1.style.display = "block";
// };

//  const btnscomputerPlayer = document.getElementById("btnscomputergame1");
//  const btns1 = btnscomputerPlayer.querySelectorAll("div");


// btns1.forEach(function (el, i) {
//   btns1[i].innerText = i + 1;
// });
// console.log(btns1);

// btns1[0].onclick = function () {
//   contador(Number(btns1[0].firstChild.data));
 
// };
// btns1[1].onclick = function () {
//   contador(Number(btns1[1].firstChild.data));

// };
// btns1[2].onclick = function () {
//   contador(Number(btns1[2].firstChild.data));
// };
// function contador(vlr) {
//   btns1[0].firstChild.data = vlr + 1;
//   btns1[1].firstChild.data = vlr + 2;
//   btns1[2].firstChild.data = vlr + 3;

//   if (vlr == 21) {
//     exibirV();
//     setTimeout(() => {
//       document.getElementById("victory").style.display = "none";
//       document.getElementById("screenScore").style.display = "block";
//       document.getElementById("screenScore").style.display = "flex";
//       }, 2800)   
//   }
//   if(vlr > 21) {
//     document.getElementById("defeat").style.display = "block";
//     document.getElementById("defeat").style.display = "flex";
//     document.getElementById("display").style.display = "none";
//   }
// }
// function exibirV() {
//   document.getElementById("playervictory").innerText = `Player 1`;
//   document.getElementById("victory").style.display = "block";
//   document.getElementById("victory").style.display = "flex";
//   document.getElementById("display").style.display = "none";
// }
// var retunrDefeat = document.getElementsByClassName("returnDefeat");
// returnDefeat.onclick = () => {  
//   document.getElementById("screenScore").style.display = "none";
//   document.getElementById("display").style.display = "block";
//   document.getElementById("display").style.display = "flex";
//   document.getElementById("singlegame").style.display = "block";
//     document.getElementById("defeat").style.display = "none";
//     btns[0].firstChild.data = 1;
//     btns[1].firstChild.data = 2;
//     btns[2].firstChild.data = 3;
// }
// var returnScore = document.getElementById("returnScore");

// returnScore.onclick = () => { 
//     document.getElementById("screenScore").style.display = "none";
//     document.getElementById("display").style.display = "block";
//     document.getElementById("display").style.display = "flex";
//     document.getElementById("btnsopcoes").style.display = "block";
//     document.getElementById("singlegame").style.display = "none";
//     document.getElementById("defeat").style.display = "none";  
    
// }
// score.onclick = () => {
//    document.getElementById("screenScore").style.display = "block";
//    document.getElementById("screencore").style.display = "flex";
//    document.getElementById("btnsopcoes").style.display = "none";
//    document.getElementById("display").style.display = "none";
//  }
