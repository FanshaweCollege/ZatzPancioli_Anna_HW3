(() => {

//selected elements

let title1 = document.querySelector('#magical'),
title2 = document.querySelector('#harry'),
title3 = document.querySelector('#curiosities'),
titlewand = document.querySelector('#titleWand'),
letterstamp = document.querySelector('#stamp_1_');


//functions

//title
TweenMax.from(title1, 2, {
    x: -100,
    opacity: 0
  })

TweenMax.from(title2, 2, {
    x: -100,
    opacity: 0,
    delay: 0.5
})

TweenMax.from(title3, 2, {
    x: -100,
    opacity: 0,
    delay: 1
})

TweenMax.from(titlewand, 2, {
    y: -200,
    opacity: 0,
    rotation: 100,
    easeIn: CircIn,
    delay: 1.5
})

function rotateStamp(){
    TweenMax.to(mainText, 2, {
        rotation: 60, 
        transformOrigin: "50% 50%"
    });
}




//event listeners

letterstamp.addEventListener('click', rotateStamp);

})();