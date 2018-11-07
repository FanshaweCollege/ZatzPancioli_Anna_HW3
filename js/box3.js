(() => {

    function startAnimations() {
    

        //variables

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
        letterc = svgObject.querySelector('#letterC_1_');

        
        //functions and animations

        function moveLetterm(){
            TweenMax.from(letterm, 1, {
                rotation: 360, 
                transformOrigin: "50% 50%"
            })
        }
        
        function moveLettera(){
            TweenMax.from(lettera, 1, {
                rotation: 360, 
                transformOrigin: "50% 50%"
            })
        }
        
        function moveLetterg(){
            TweenMax.from(letterg, 1, {
                rotation: 360, 
                transformOrigin: "50% 50%"
            })
        }
        
        function moveLetteri(){
            TweenMax.from(letteri, 1, {
                rotation: 360, 
                transformOrigin: "50% 50%"
            })
        }
        
        function moveLetterc(){
            TweenMax.from(letterc, 1, {
                rotation: 360, 
                transformOrigin: "50% 50%"
            })
        }


        //event listeners

        number6.addEventListener('click', moveLetterm, false);
        number2.addEventListener('click', moveLettera, false);
        number4.addEventListener('click', moveLetterg, false);
        number44.addEventListener('click', moveLetteri, false);
        number22.addEventListener('click', moveLetterc, false);

    
    }
    
    
window.addEventListener("load", startAnimations, false);
    
    
})();