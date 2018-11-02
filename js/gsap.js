(() => {

//elements

//title
let title1 = document.querySelector('#magical'),
title2 = document.querySelector('#harry'),
title3 = document.querySelector('#curiosities'),
titlewand = document.querySelector('#titleWand'),
letterstamp = document.querySelector('#stamp_1_'),

//lines
julyline = document.querySelector('#julyLine'),
owlline = document.querySelector('#owlLine'),
harryline = document.querySelector('#harryLine'),
hermioneline = document.querySelector('#hermioneLine'),
frogline = document.querySelector('#frogLine'),

//owl
owlletters = document.querySelector('#owlLetters'),

//numbers magic
number6 = document.querySelector('#number6_1_'),
number2 = document.querySelector('#number2_2_'),
number4 = document.querySelector('#number4_1_'),
number44 = document.querySelector('#number42_1_'),
number22 = document.querySelector('#number22_1_'),
letterm = document.querySelector('#letterM_1_'),
lettera = document.querySelector('#letterA_1_'),
letterg = document.querySelector('#letterG_1_'),
letteri = document.querySelector('#letterI_1_'),
letterc = document.querySelector('#letterC_1_'),

//harry
glass = document.querySelector('#harryGlass'),
thunder = document.querySelector('#harryThunder'),

//ron
broom = document.querySelector('#broom'),

//hermione
feather = document.querySelector('#hermioneFeather'),

//dumbledore
heart = document.querySelector('#dumbleHeart'),

//frog figures
frogfig = document.querySelector('#frogFig'),
frog = document.querySelector('#frog'),

//hat
hat = document.querySelector('#hat'),

//timeline
tl = new TimelineMax ({});




//animations that start automatically when the page loads

function starAnimations(){
    tl.from(title1, 0.8, {
        x: -100,
        opacity: 0
    });
    tl.from(title2, 0.8, {
        x: -100,
        opacity: 0
    });
    tl.from(title3, 0.8, {
        x: -100,
        opacity: 0
    });
    tl.from(titlewand, 0.8, {
        y: -200,
        opacity: 0,
        rotation: 100,
        easeIn: CircIn
    })
    tl.from(julyline, 2, {
        x: 550
    })
    tl.from(owlletters, 2, {
        x: 550
    })
    tl.from(owlline, 2, {
        x:300,
        delay: 3
    })
    tl.from(harryline, 2, {
        x:-250,
        delay: 8
    })
    tl.from(feather, 2, {
        x:-700,
        delay: 9
    })
    tl.from(hermioneline, 2, {
        x:-430,
        delay: 2
    })
    tl.from(frogline, 2, {
        x:270,
        delay: 12
    })
    tl.from(hat, 2, {
        y:350,
        delay: 1
    })
    TweenMax.to(heart, 0.8, {
        scale: 1.1, x:-5, repeat: -1
    })
}




//animations that start with a mouse over

function rotateStamp(){
    TweenMax.to(letterstamp, 1, {
        rotation: 180, 
        transformOrigin: "50% 50%"
    })
}

function stopStamp(){
    TweenMax.to(letterstamp, 1, {
        rotation: 0, 
        transformOrigin: "50% 50%"
    })
}

function rotateBroom(){
    TweenMax.to(broom, 1, {
        x: 30,
        transformOrigin: "50% 50%"
    })
}

function stopBroom(){
    TweenMax.to(broom, 1, {
        x: 0
    })
}

function closeEye(){
TweenMax.to(lefteye, 1, {
    morphSVG:lefteyecl
    })
}

function hideElements(){
    letterm.style.opacity = "0";
    lettera.style.opacity = "0";
    letterg.style.opacity = "0";
    letteri.style.opacity = "0";
    letterc.style.opacity = "0";
}





//animations that happen when you click on the element

function scaleFig(){
    TweenMax.to(frogfig, 1, {
        scale: 1.8,
        x:-10,
        y:-20
    });
    TweenMax.to(frog, 1, {
        scale: 0.9,
        x:-30,
        y:-13
    })
}

function moveLetterm(){
    TweenMax.fromTo(letterm, 1, {
        x:-100, opacity: 0},
        {x:0, opacity:100}
    )
}

function moveLettera(){
    TweenMax.fromTo(lettera, 1, {
        x:-150, opacity: 0},
        {x:0, opacity:100}
    )
}

function moveLetterg(){
    TweenMax.fromTo(letterg, 1, 
        {x:-200, opacity: 0},
        {x:0, opacity:100}
    )
}

function moveLetteri(){
    TweenMax.fromTo(letteri, 1, 
        {x:-250, opacity: 0},
        {x:0, opacity:100}
    )
}

function moveLetterc(){
    TweenMax.fromTo(letterc, 1, {
        x:-300, opacity: 0},
        {x:0, opacity:100}
    )
}

function moveScar(){
    TweenMax.to(glass, 1, {
        scale: 0.8,
        x:-20,
        y:30
    });
    TweenMax.to(thunder, 1, {
        scale: 0.7,
        x:90,
        y:-20
    })
}





//event listeners

window.addEventListener('load', starAnimations, false);

letterstamp.addEventListener('mouseover', rotateStamp, false);
letterstamp.addEventListener('mouseout', stopStamp, false);

frogfig.addEventListener('click', scaleFig, false);

number6.addEventListener('click', moveLetterm, false);
number2.addEventListener('click', moveLettera, false);
number4.addEventListener('click', moveLetterg, false);
number44.addEventListener('click', moveLetteri, false);
number22.addEventListener('click', moveLetterc, false);

window.addEventListener('load', hideElements, false);

glass.addEventListener('click', moveScar, false);

broom.addEventListener('mouseover', rotateBroom, false);
broom.addEventListener('mouseout', stopBroom, false);


})();