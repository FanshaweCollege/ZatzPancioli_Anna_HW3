(() => {

    function startAnimations() {
    

        //variables

        let svgObject = document.querySelector('#box4').contentDocument,
    
        glass = svgObject.querySelector('#harryGlass'),
        thunder = svgObject.querySelector('#harryThunder'),
        broom = svgObject.querySelector('#broom'),
    
        tl = new TimelineMax ({});
    

        //functions and animations

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

        function moveBroom(){
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


        //event listeners

        glass.addEventListener('click', moveScar, false);
        thunder.addEventListener('click', moveScar, false);

        broom.addEventListener('mouseover', moveBroom, false);
        broom.addEventListener('mouseout', stopBroom, false);
    
    
    }

    
    window.addEventListener("load", startAnimations, false);
    
    
    })();