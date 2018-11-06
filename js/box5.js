(() => {

    function startAnimations() {
    
        //box1
        let svgObject = document.querySelector('#box5').contentDocument,
    
        feather = svgObject.querySelector('#hermioneFeather'),
        book = svgObject.querySelector('#hermioneBook');
    
        function moveFeather(){
            TweenMax.to(feather, 2, {
                x:350,
            })
            }
    

        book.addEventListener('mouseover', moveFeather, false);
    
    }
    
    
    
    
    //event listeners
    
    window.addEventListener("load", startAnimations, false);
    
    
    })();