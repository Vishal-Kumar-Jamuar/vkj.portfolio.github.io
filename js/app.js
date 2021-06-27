$(document).ready(function(){

$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
})

let hamburger=document.querySelector('.hamburger');
let times=document.querySelector('.times');
let lookcv=document.querySelector('.lookcvbtn');
let lookatCV=document.querySelector('.look-at-cv');
let times2=document.querySelector('.times2');
let mobileNav=document.querySelector('.mobile-nav');
let home=document.querySelector('.home-click');
let about=document.querySelector('.about-click');
let services=document.querySelector('.services-click');
let work=document.querySelector('.work-click');
let blog=document.querySelector('.blog-click');


hamburger.addEventListener('click', function(){
    mobileNav.classList.add('open')

});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open')

});

lookcv.addEventListener('click', function(){
    lookatCV.classList.add('open')
});

times2.addEventListener('click', function(){
    lookatCV.classList.remove('open')


    

});
home.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});
about.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});
services.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});
work.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});
blog.addEventListener('click', function(){
    mobileNav.classList.remove('open')
});




});