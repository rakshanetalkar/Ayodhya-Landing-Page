var header=document.querySelector('#header')
var customCursor=document.querySelector('.customCursor')

document.addEventListener('scroll',function(){
    console.log(window.scrollY)

    if(window.scrollY>=6){
        header.classList.remove('header')
        header.classList.add('fixed-top')
    }
    if(window.scrollY==0){
        header.classList.remove('fixed-top')
        header.classList.add('header')
    }
})

document.addEventListener('mousemove',function(event){
    customCursor.style.left=event.clientX+'px'
    customCursor.style.top=event.clientY+'px'
})
document.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block';
});