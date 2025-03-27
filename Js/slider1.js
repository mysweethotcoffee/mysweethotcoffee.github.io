// Primeiro Slider
var counter = 1;
document.getElementById('radio' + counter).checked = true;

let interval = setInterval(function(){
       
        document.getElementById('radio' + counter).checked = false;
        counter++;
    
        if(counter > 5 || counter < 1){
                counter = 1;
        };
    
        document.getElementById('radio' + counter).checked = true;
                
    

}, 5000);