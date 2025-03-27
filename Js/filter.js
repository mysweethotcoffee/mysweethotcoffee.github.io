//select all filter buttons and filterable cards

const filterButtons = document.querySelectorAll('.button-group button');
const sliderWrapper = document.querySelectorAll('.slider .sliderwrapper');

//Add click event listener to each filter button

const filterSlides = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    console.log(e.target)

    // Iterate over each filterable slide
    sliderWrapper.forEach(sliderwrapper => {

        // Add "hide" class to hide the slide initially
        sliderwrapper.classList.add("hide");

        // Check if the slide matches the selected filter or "all" is selected
        if(sliderwrapper.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            sliderwrapper.classList.remove("hide");
        }
        
        // Check if the slide has a second category
        if(sliderwrapper.dataset.name2 === e.target.dataset.name || e.target.dataset.name2 === "all"){
            sliderwrapper.classList.remove("hide");
        }

    })

}
filterButtons.forEach(button => button.addEventListener ("click", filterSlides))
