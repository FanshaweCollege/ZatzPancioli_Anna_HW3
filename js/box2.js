(() => {


    function startAnimations() {
    

        //variables
        
        let svgObject = document.querySelector('#box2').contentDocument,
    
        owlletter = svgObject.querySelector('#XMLID_248_');


        //functions and animations

        TweenMax.from(owlletter, 2, {
            x:300,
            delay:10
        })


    }
    
    
window.addEventListener("load", startAnimations, false);
    
    
})();