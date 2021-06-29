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

let TO=document.querySelector('.TO');
let TOtimes=document.querySelector('.TO-times');
let TOProj=document.querySelector('.container-TO');

let bridge=document.querySelector('.bridge');
let bridgetimes=document.querySelector('.bridge-times');
let bridgeProj=document.querySelector('.bridge-proj');

let rev=document.querySelector('.rev');
let revtimes2=document.querySelector('.rev-times2');
let revProj=document.querySelector('.rev-proj');

let wear=document.querySelector('.wear');
let weartimes=document.querySelector('.wear-times');
let wearProj=document.querySelector('.wear-proj');

let spit=document.querySelector('.spit');
let spittimes=document.querySelector('.spit-times');
let spitProj=document.querySelector('.spit-proj');

let cad=document.querySelector('.cad');
let cadtimes=document.querySelector('.cad-times');
let cadProj=document.querySelector('.cad-proj');

let generative=document.querySelector('.generative');
let gentimes=document.querySelector('.gen-times');
let generativeDesc=document.querySelector('.generative-desc');

let topology=document.querySelector('.topology');
let topotimes=document.querySelector('.topo-times');
let topologyDesc=document.querySelector('.topology-desc');



let reverse=document.querySelector('.reverse');
let revtimes=document.querySelector('.rev-times');
let reverseDesc=document.querySelector('.reverse-desc');

let vehicle=document.querySelector('.vehicle');
let vehtimes=document.querySelector('.veh-times');
let vehicleDesc=document.querySelector('.vehicle-desc');

let biomimetics=document.querySelector('.biomimetics');
let biotimes=document.querySelector('.bio-times');
let biomimeticsDesc=document.querySelector('.biomimetics-desc');

let electric=document.querySelector('.electric');
let electimes=document.querySelector('.elec-times');
let electricDesc=document.querySelector('.electric-desc');


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




TO.addEventListener('click', function(){
    TOProj.classList.add('open')

});

TOtimes.addEventListener('click', function(){
    TOProj.classList.remove('open')
    

});

bridge.addEventListener('click', function(){
    bridgeProj.classList.add('open')

});

bridgetimes.addEventListener('click', function(){
    bridgeProj.classList.remove('open')
    

});

rev.addEventListener('click', function(){
    revProj.classList.add('open')

});

revtimes2.addEventListener('click', function(){
    revProj.classList.remove('open')
    

});

wear.addEventListener('click', function(){
    wearProj.classList.add('open')

});

weartimes.addEventListener('click', function(){
    wearProj.classList.remove('open')
    

});

spit.addEventListener('click', function(){
    spitProj.classList.add('open')

});

spittimes.addEventListener('click', function(){
    spitProj.classList.remove('open')
    

});

cad.addEventListener('click', function(){
    cadProj.classList.add('open')

});

cadtimes.addEventListener('click', function(){
    cadProj.classList.remove('open')
    

});

generative.addEventListener('click', function(){
    generativeDesc.classList.add('open')

});

gentimes.addEventListener('click', function(){
    generativeDesc.classList.remove('open')
    

});







topology.addEventListener('click', function(){
    topologyDesc.classList.add('open')


});



topotimes.addEventListener('click', function(){
    topologyDesc.classList.remove('open')
    

});

reverse.addEventListener('click',function(){
    reverseDesc.classList.add('open')
});

revtimes.addEventListener('click',function(){
    reverseDesc.classList.remove('open')
});

vehicle.addEventListener('click',function(){
    vehicleDesc.classList.add('open')
});

vehtimes.addEventListener('click',function(){
    vehicleDesc.classList.remove('open')
});

biomimetics.addEventListener('click',function(){
    biomimeticsDesc.classList.add('open')
});

biotimes.addEventListener('click',function(){
    biomimeticsDesc.classList.remove('open')
});

electric.addEventListener('click',function(){
    electricDesc.classList.add('open')
});

electimes.addEventListener('click',function(){
    electricDesc.classList.remove('open')
});

});