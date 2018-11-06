(() => {

    function startAnimations() {
    
        //box1
        let svgObject = document.querySelector('#box7').contentDocument,
    
        hat = svgObject.querySelector('#hat'),
        frogfig = svgObject.querySelector('#frogFig'),
        frog = svgObject.querySelector('#frog');

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

        function moveHat(){
        TweenMax.from(hat, 2, {
            y:350,
            delay: 10
        })
        }


        frogfig.addEventListener('click', scaleFig, false);
        frog.addEventListener('click', scaleFig, false);
        hat.addEventListener('click', moveHat, false);


    
    
    }
    
    
    
    
    //event listeners
    
    window.addEventListener("load", startAnimations, false);
    
    
    })();