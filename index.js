let mode_button=document.getElementById('mode_button');
let dark_value=0;
let sections=document.getElementsByClassName('section_design_1');
let mode_button_text=mode_button.querySelector('span')
let scection_text_div=document.getElementsByClassName('section_hover_div')

mode_button.addEventListener('click',(event)=>{
    document.body.classList.toggle('dark')
    for(let sec of sections){
    sec.classList.toggle('dark')
    }
    for (let element of scection_text_div) {
        element.classList.toggle('dark')
    }
    if (dark_value==1){
        mode_button_text.innerText='DARK'
        dark_value=0
    }
    else{
        mode_button_text.innerText='LIGHT'
        dark_value=1
    }
})

for (let element of sections) {

    const section_div=element.querySelector('.section_hover_div')

    element.addEventListener('mouseenter', ()=>{
            section_div.classList.add('visible')
            
        }
    )
    
    element.addEventListener('mouseleave', ()=>{
        section_div.classList.remove('visible')
    }
    )
}