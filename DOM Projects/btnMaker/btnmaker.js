let  background_colorEL=document.getElementById('background_color');
let  font_colorEL=document.getElementById('font_color');
let  font_sizeEL=document.getElementById('font_size');
let  font_weightEL=document.getElementById('font_weight');
let  paddingEL=document.getElementById('padding');
let  bg_radiusEL=document.getElementById('bg_radius');
let  applyBtnEL=document.getElementById('applyBtn');
let  custombtnEL=document.getElementById('custombtn');



applyBtnEL.addEventListener('click',()=>{
    
    custombtnEL.style.backgroundColor=background_colorEL.value;

    custombtnEL.style.color=font_colorEL.value;

    custombtnEL.style.fontSize=font_sizeEL.value;

    custombtnEL.style.fontWeight=font_weightEL.value;

    custombtnEL.style.padding=paddingEL.value;

    custombtnEL.style.borderRadius=bg_radiusEL.value;

})