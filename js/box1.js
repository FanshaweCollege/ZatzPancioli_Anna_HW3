(() => {

    function startAnimations() {


        //variables

        let svgObject = document.querySelector('#box1').contentDocument,

        title1 = svgObject.querySelector('#magical'),
        title2 = svgObject.querySelector('#harry'),
        title3 = svgObject.querySelector('#potter'),
        title4 = svgObject.querySelector('#curiosities'),
        titlewand = svgObject.querySelector('#titleWand'),
        stamp = svgObject.querySelector('#stamp_1_'),
        julyline = svgObject.querySelector('#julyLine'),

        tl = new TimelineMax ({});


        //functions and animations

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
        };

        function stopStamp(){
            TweenMax.to(stamp, 1, {
                rotation: 0, 
                transformOrigin: "50% 50%"
            })
        };


        //event listeners

        stamp.addEventListener('mouseover', rotateStamp, false);
        stamp.addEventListener('mouseout', stopStamp, false);


    }


window.addEventListener("load", startAnimations, false);


})();