let lightEl=document.getElementById('light');
let catEl=document.getElementById('cat');

let btn1El=document.getElementById('btn1');
let btn2El=document.getElementById('btn2');


function offbtn(){
    lightEl.src='images/offbulb.jpeg'
    catEl.src='images/cate.jpg'
    btn1El.style.backgroundColor='red';
    btn2El.style.backgroundColor='white';

}
function oNbtn(){
    lightEl.src='images/bulbon.jpg'
    catEl.src='images/black-cat-cartoon-illustration-png.webp'
    btn1El.style.backgroundColor='white';
    btn2El.style.backgroundColor='green';
}