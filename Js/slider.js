// Primeiro Slider
var counter = 1;
document.getElementById('radio' + counter).checked = true;

let interval = setInterval(function(){
       
        document.getElementById('radio' + counter).checked = false;
        counter++;
    
        if(counter > 3 || counter < 1){
                counter=1;
        };
    
        document.getElementById('radio' + counter).checked = true;
                
    

}, 5000);


// Segundo Slider
var counter2 = 4;
document.getElementById('radio' + counter2).checked = true;
let interval2 = setInterval(function(){
       
    document.getElementById('radio' + counter2).checked = false;
    counter2++;

    if(counter2 > 6 || counter2 < 4){
            counter2=4;
    };

    document.getElementById('radio' + counter2).checked = true;
            


}, 5000);


// Terceiro Slider
var counter3 = 7;
document.getElementById('radio' + counter3).checked = true;
let interval3 = setInterval(function(){
       
    document.getElementById('radio' + counter3).checked = false;
    counter3++;

    if(counter3 > 8 || counter3 < 7){
            counter3=7;
    };

    document.getElementById('radio' + counter3).checked = true;
            


}, 5000);
