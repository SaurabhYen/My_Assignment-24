let spanEl=document.getElementById('span');
let imageEl=document.getElementById('image');
let paraEl=document.getElementById('para');
let minusbtnEl=document.getElementById('minusbtn');
let plusbtnEl=document.getElementById('plusbtn');

let increase=200;

minusbtnEl.addEventListener('click',()=>{
    if(increase===100){
        spanEl.innerText='To Small ,Increase Size of image';
    }
    else{
        increase=increase-5;

        imageEl.style.height=`${increase}px`;
    
        imageEl.style.width=`${increase}px`;
    
        paraEl.innerText=`width :${increase}px`;

        spanEl.innerText='';
    }
    
});

plusbtnEl.addEventListener('click',()=>{
    if(increase===300){
        spanEl.innerText='To Big ,Decrease Size of image';
    }
    else{
    increase=increase+5;

    imageEl.style.height=`${increase}px`;

    imageEl.style.width=`${increase}px`;

    paraEl.innerText=`width :${increase}px`;

    spanEl.innerText='';
    }
})