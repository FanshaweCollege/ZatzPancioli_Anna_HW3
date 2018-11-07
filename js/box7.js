(() => {


    function startAnimations() {
    

        //variables

        let svgObject = document.querySelector('#box7').contentDocument,

        frogfig = svgObject.querySelector('#frogFig'),
        frog = svgObject.querySelector('#frog'),
        heart = svgObject.querySelector('#dumbleHeart');


        //functions and animations

        function scaleFig(){
            TweenMax.to(frogfig, 1, {
                scale: 1.7,
                x:-10,
                y:-13
            });
            TweenMax.to(frog, 1, {
                scale: 0.8,
                x:-30,
                y:-8
            })
        }

        TweenMax.to(heart, 0.8, {
            scale: 1.1, x:-5, repeat: -1
        })


        //event listeners

        frogfig.addEventListener('click', scaleFig, false);
        frog.addEventListener('click', scaleFig, false);

    
    }
    
    
window.addEventListener("load", startAnimations, false);
    

})();