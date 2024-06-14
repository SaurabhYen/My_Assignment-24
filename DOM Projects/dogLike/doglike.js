let likebtnEl=document.getElementById('likebtn');
let DogImgEL=document.getElementById('DogImg')
let iconEL=document.getElementById('icon')

let isClicked=true;

likebtnEl.addEventListener('click',()=>{
   

    if(isClicked){
        isClicked=false;
        DogImgEL.src='images/hPuppy.jpg';
        likebtnEl.style.backgroundColor='blue';
        likebtnEl.style.color='white';
        iconEL.style.color='blue'
    }
    else{
        DogImgEL.src='images/uPuppy.jpg';
        likebtnEl.style.backgroundColor=' rgb(191, 189, 189)';
        likebtnEl.style.color='black';
        iconEL.style.color=' rgb(191, 189, 189)'
        isClicked=true;
    }
})