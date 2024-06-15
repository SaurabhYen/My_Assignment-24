let number1El=document.getElementById('number1')
let number2El=document.getElementById('number2')
let userInpEl=document.getElementById('userInp')
let checkbtnEl=document.getElementById('checkbtn')
let restartbtnEl=document.getElementById('restartbtn')
let ParaEl=document.getElementById('Para')


let number1RandomNum=Math.floor(Math.random()*100)+1;
let number2RandomNum=Math.floor(Math.random()*100)+1;

console.log(number1RandomNum)
console.log(number2RandomNum)

number1El.innerText=`${number1RandomNum}`;
number2El.innerText=`${number2RandomNum}`;
let SumOf_1_And_2=number1RandomNum+number2RandomNum;

console.log(SumOf_1_And_2);
userInpEl.addEventListener('click',(e)=>{
    
})

checkbtnEl.addEventListener('click',()=>{
    if(userInpEl.value===''){
        ParaEl.innerText='Enter Valid Number !';
        ParaEl.style.backgroundColor="red"
        ParaEl.style.color="black"
    }
    else if(SumOf_1_And_2 == userInpEl.value){
        ParaEl.innerText='Congratulation ! You Got It Right';
        ParaEl.style.backgroundColor="green"
        ParaEl.style.color="white"

    }
    else if(SumOf_1_And_2 !== userInpEl.value){
        ParaEl.innerText='Please Try Again !';
        ParaEl.style.backgroundColor="blue"
        ParaEl.style.color="black"
    }
  
})
    restartbtnEl.addEventListener('click',()=>{
    ParaEl.innerText='';
    ParaEl.style.backgroundColor="";
    ParaEl.style.color="";
    userInpEl.value='';
    
    number1RandomNum=Math.floor(Math.random()*100)+1;
    number2RandomNum=Math.floor(Math.random()*100)+1;
    SumOf_1_And_2=number1RandomNum+number2RandomNum;
    number1El.innerText=`${number1RandomNum}`;
    number2El.innerText=`${number2RandomNum}`;
   
    
    
});







