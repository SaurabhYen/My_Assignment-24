let SpringEl=document.getElementById('Spring');
let SummerEl=document.getElementById('Summer');
let AuntumnEl=document.getElementById('Auntumn');
let WinterEl=document.getElementById('Winter');
let changeImgEl=document.getElementById('changeImg')

SpringEl.addEventListener('click',()=>{
    changeImgEl.src='images/springtree.jpg';
  
});
SummerEl.addEventListener('click',()=>{
    changeImgEl.src='images/summert.jpg';
 
});
AuntumnEl.addEventListener('click',()=>{
    changeImgEl.src='images/autumnt.jpg';
    
});
WinterEl.addEventListener('click',()=>{
    changeImgEl.src='images/wintt.jpg';
   
});