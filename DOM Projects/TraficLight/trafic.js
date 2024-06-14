let  redEl=document.getElementById('red');
let  yellowEl=document.getElementById('yellow');
let  greenEl=document.getElementById('green');
let  StopEl=document.getElementById('Stop');
let ReadyEl=document.getElementById('Ready');
let  GoEl=document.getElementById('Go');


StopEl.addEventListener('click',(e)=>{
        StopEl.style.backgroundColor='red';
        redEl.style.backgroundColor='red';

        yellowEl.style.backgroundColor=' rgb(77, 73, 105)';
    ReadyEl.style.backgroundColor='rgb(77, 73, 105)';
   

    greenEl.style.backgroundColor=' rgb(77, 73, 105)';
    GoEl.style.backgroundColor='rgb(77, 73, 105)';



});

ReadyEl.addEventListener('click',(e)=>{
    StopEl.style.backgroundColor=' rgb(77, 73, 105)';
    redEl.style.backgroundColor=' rgb(77, 73, 105)';

    yellowEl.style.backgroundColor=' yellow';
    ReadyEl.style.backgroundColor='yellow';
   

    greenEl.style.backgroundColor=' rgb(77, 73, 105)';
    GoEl.style.backgroundColor='rgb(77, 73, 105)';



});

GoEl.addEventListener('click',(e)=>{
    StopEl.style.backgroundColor='rgb(77, 73, 105)';
    redEl.style.backgroundColor='rgb(77, 73, 105)';

    yellowEl.style.backgroundColor=' rgb(77, 73, 105)';
    ReadyEl.style.backgroundColor='rgb(77, 73, 105)';
   

    greenEl.style.backgroundColor=' green';
    GoEl.style.backgroundColor='green';


});