const bars = document.getElementById('bars3');
const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.getElementById('nav');


bars.addEventListener('click' , ()=>{
    
if(nav.style.top === '-500px'){
    nav.style.top = '100%';
    open.style.display = 'none'
    close.style.display = 'block'
}
    
else{
    nav.style.top = '-500px'
    open.style.display = 'block'
    close.style.display = 'none'
}
    
  
})



const  topHeader = document.getElementById('topHeader');

window.addEventListener('scroll' , ()=>{
    if(window.scrollY >70){
        topHeader.classList.add('scroll-header')
    }
    else if(window.scrollY <=70){
        topHeader.classList.remove('scroll-header')
    }
})

// number counter animation



const number = document.querySelectorAll('.number');

console.log(number.innerHtml)