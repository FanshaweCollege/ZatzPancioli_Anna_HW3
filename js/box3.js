(() => {

    function startAnimations() {
    
        //box1
        let svgObject = document.querySelector('#box3').contentDocument,
    
        number6 = svgObject.querySelector('#number6_1_'),
        number2 = svgObject.querySelector('#number2_2_'),
        number4 = svgObject.querySelector('#number4_1_'),
        number44 = svgObject.querySelector('#number42_1_'),
        number22 = svgObject.querySelector('#number22_1_'),
        letterm = svgObject.querySelector('#letterM_1_'),
        lettera = svgObject.querySelector('#letterA_1_'),
        letterg = svgObject.querySelector('#letterG_1_'),
        letteri = svgObject.querySelector('#letterI_1_'),
        letterc = svgObject.querySelector('#letterC_1_'),
    
        tl = new TimelineMax ({});
    

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

        number6.addEventListener('click', moveLetterm, false);
        number2.addEventListener('click', moveLettera, false);
        number4.addEventListener('click', moveLetterg, false);
        number44.addEventListener('click', moveLetteri, false);
        number22.addEventListener('click', moveLetterc, false);
    
    
    
    }
    
    
    
    
    //event listeners
    
    window.addEventListener("load", startAnimations, false);
    
    
    })();