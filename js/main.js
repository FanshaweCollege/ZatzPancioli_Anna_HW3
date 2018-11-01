(() => {



//elements

//title
let title1 = document.querySelector('#magical'),
title2 = document.querySelector('#harry'),
title3 = document.querySelector('#curiosities'),
titlewand = document.querySelector('#titleWand'),
letterstamp = document.querySelector('#stamp_1_'),

/*julytext = document.querySelector('#julyText'),
owltext = document.querySelector('#owlBold'),
harrytext = document.querySelector('#harryText'),
hermionetext = document.querySelector('#hermioneText'),
frogtext = document.querySelector('#frogText'),*/

//july 31
julyline = document.querySelector('#julyLine'),
/*owlline = document.querySelector('#owlLine'),
harryline = document.querySelector('#harryLine'),
hermioneline = document.querySelector('#hermioneLine'),
frogline = document.querySelector('#frogLine'),

lefteye = document.querySelector('#leftEye'),
lefteyecl = document.querySelector('#leftEyeClosed'),

//numbers magic
numberbg = document.querySelector('#numberBG'),*/
number6 = document.querySelector('#number6_1_'),
number2 = document.querySelector('#number2_2_'),
number4 = document.querySelector('#number4_1_'),
number44 = document.querySelector('#number42_1_'),
number22 = document.querySelector('#number22_1_'),
/*dash1 = document.querySelector('#dash1_1_'),
dash2 = document.querySelector('#dash2_1_'),
dash3 = document.querySelector('#dash3_1_'),
dash4 = document.querySelector('#dash4_1_'),*/
letterm = document.querySelector('#letterM_1_'),
lettera = document.querySelector('#letterA_1_'),
letterg = document.querySelector('#letterG_1_'),
letteri = document.querySelector('#letterI_1_'),
letterc = document.querySelector('#letterC_1_'),

//harry
glass = document.querySelector('#harryGlass'),
thunder = document.querySelector('#harryThunder'),

//dumbledore
heart = document.querySelector('#dumbleHeart'),

//frog figures
frogfig = document.querySelector('#frogFig'),
frog = document.querySelector('#frog'),

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

    TweenMax.to(number6, 0.6, {scale: 1.1,repeat: -1})
    TweenMax.to(number2, 0.6, {scale: 1.1,repeat: -1})
    TweenMax.to(number4, 0.6, {scale: 1.1,repeat: -1})
    TweenMax.to(number44, 0.6, {scale: 1.1,repeat: -1})
    TweenMax.to(number22, 0.6, {scale: 1.1,repeat: -1})

    TweenMax.to(heart, 0.8, {scale: 1.1, x:-5, repeat: -1})
}

//animations that start with a mouse over

function rotateStamp(){
    TweenMax.to(letterstamp, 1, {
        rotation: 180, 
        transformOrigin: "50% 50%"
    });
}

function stopStamp(){
    TweenMax.to(letterstamp, 1, {
        rotation: 0, 
        transformOrigin: "50% 50%"
    });
}

/*function showJulyLine(){
    TweenMax.fromTo(julyline, 1, 
        {x:400, opacity:100}, 
        {x:0, opacity:100}
    )
}

function showOwlLine(){
    TweenMax.fromTo(owlline, 1, 
        {x:400, opacity:100}, 
        {x:0, opacity:100}
    )
}

function showHarryLine(){
    TweenMax.fromTo(harryline, 1, 
        {x:-200, opacity:100}, 
        {x:0, opacity:100}
    )
}

function showHermioneLine(){
    TweenMax.fromTo(hermioneline, 1, 
        {x:-400, opacity:100}, 
        {x:0, opacity:100}
    )
}

function showFrogLine(){
    TweenMax.fromTo(frogline, 1, 
        {x:400, opacity:100}, 
        {x:0, opacity:100}
    )
}


function closeEye(){
TweenMax.to(lefteye, 1, {
    morphSVG:lefteyecl
    })
}

function showNumbers(){
    tl.fromTo(number6, 0.5, 
        {x:-100, opacity:0}, 
        {x:0, opacity:100}
    );
    tl.fromTo(dash1, 0.5, 
        {x:-150, opacity:0}, 
        {x:0, opacity:100}
    );
    tl.fromTo(number2, 0.5, 
        {x:-200, opacity:0}, 
        {x:0, opacity:100}
    );
    tl.fromTo(dash2, 0.5, 
        {x:-250, opacity:0}, 
        {x:0, opacity:100}
    );
    tl.fromTo(number4, 0.5, 
        {x:-300, opacity:0}, 
        {x:0, opacity:100}
    );
    tl.fromTo(dash3, 0.5, 
        {x:-350, opacity:0}, 
        {x:0, opacity:100}
    );
    tl.fromTo(number44, 0.5, 
        {x:-400, opacity:0}, 
        {x:0, opacity:100}
    );
    tl.fromTo(dash4, 0.5, 
        {x:-450, opacity:0}, 
        {x:0, opacity:100}
    );
    tl.fromTo(number22, 0.5, 
        {x:-500, opacity:0}, 
        {x:0, opacity:100}
    );
}*/

function hideElements(){
    /*julyline.style.opacity = "0";
    owlline.style.opacity = "0";
    harryline.style.opacity = "0";
    hermioneline.style.opacity = "0";
    number6.style.opacity = "0";
    number2.style.opacity = "0";
    number4.style.opacity = "0";
    number44.style.opacity = "0";
    number22.style.opacity = "0";
    dash1.style.opacity = "0";
    dash2.style.opacity = "0";
    dash3.style.opacity = "0";
    dash4.style.opacity = "0";*/
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
    TweenMax.fromTo(letterg, 1, {
        x:-200, opacity: 0},
        {x:0, opacity:100}
    )
}

function moveLetteri(){
    TweenMax.fromTo(letteri, 1, {
        x:-250, opacity: 0},
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

/*julytext.addEventListener('mouseover', showJulyLine, false);
owltext.addEventListener('mouseover', showOwlLine, false);
harrytext.addEventListener('mouseover', showHarryLine, false);
hermionetext.addEventListener('mouseover', showHermioneLine, false);
frogtext.addEventListener('mouseover', showFrogLine, false);

lefteye.addEventListener('mouseover', closeEye, false);

numberbg.addEventListener('mouseover', showNumbers, false);*/




})();