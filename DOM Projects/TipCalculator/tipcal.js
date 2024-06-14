let btnEl=document.getElementById('btn'); 
let spanEl=document.getElementById('span'); 
let bill_AmountEl=document.getElementById('bill_Amount');
let tip_percentEl=document.getElementById('tip_percent');
let tip_AmountEl=document.getElementById('tip_Amount');
let totalEl=document.getElementById('total');


btnEl.addEventListener('click',()=>{
    if(bill_AmountEl.value==='' || tip_percentEl.value==='' ){
       
        spanEl.innerHTML='Please Enter the valid input'
       
    }
    else{
      tip_AmountEl.value=bill_AmountEl.value*(tip_percentEl.value/100)

      totalEl.value=parseInt(bill_AmountEl.value)+parseInt(tip_AmountEl.value);
      spanEl.innerHTML=''
    }
})
