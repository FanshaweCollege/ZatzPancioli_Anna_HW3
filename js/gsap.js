(() => {

function startAnimations() {
    let svgObject = document.querySelector('#box1').contentDocument,

    title1 = svgObject.querySelector('#magical'),
    title2 = svgObject.querySelector('#harry'),
    title3 = svgObject.querySelector('#potter'),
    title4 = svgObject.querySelector('#curiosities'),
    titlewand = svgObject.querySelector('#titleWand'),
    stamp = svgObject.querySelector('#stamp_1_'),
    julyline = svgObject.querySelector('#julyLine'),

    tl = new TimelineMax ({});

    tl.from(title1, 1, {
        x: -100,
        opacity: 0,
        delay:1
    });
    tl.from(title2, 1, {
        x: -100,
        opacity: 0
    });
    tl.from(title3, 1, {
        x: -100,
        opacity: 0
    });
    tl.from(title4, 1, {
        x: -100,
        opacity: 0
    });
    tl.from(titlewand, 1, {
        y: -200,
        opacity: 0,
        rotation: 100,
        easeIn: CircIn
    });
    tl.from(julyline, 2, {
        x: 550
    })

    function rotateStamp(){
        TweenMax.to(stamp, 1, {
            rotation: 180, 
            transformOrigin: "50% 50%"
        })
    }

    stamp.addEventListener('click', rotateStamp, false);






    
}




//event listeners

window.addEventListener("load", startAnimations, false);


})();