(() => {

    let svgBox2 = document.querySelector('#container2');

    function startAnimations() {
    
        //box1
        let svgObject = document.querySelector('#box2').contentDocument,
    
        owlline = svgObject.querySelector('#owlLine'),
        owlletter = svgObject.querySelector('#owlLetters'),

        tl = new TimelineMax ({});

        tl.from(owlline, 1, {
            x: 550
        });

        TweenMax.from(owlletter, 2, {
            x:300,
            delay:1
        })


    }
    
    
    
    
    //event listeners
    
    svgBox2.addEventListener("load", startAnimations, false);
    
    
    })();