document.addEventListener("DOMContentLoaded", function (){
    // An automatic slideshow with the ability to manually move to whatever picture the user wants
    let slideIndex = 0; //the starting pic
    let intervalID; //the click of which the pics slide at

    function showSlides(){
        const slides = document.getElementsByClassName("slide"); //identify what slides from html we are using
        const dot = document.getElementsByClassName("dot");
        
        //manual mode of the slideshow 
        for (let i = 0; i < slides.length; i++){
            //loop through each slide and hide it, also remove the "active" class from their respective dots
            slides[i].style.display = "none";
            dot[i].classList.remove("active");
        }
        //increment the slide index
        //indexes start at 0     example: 18 = indexes 0-17
        slideIndex++;

        //if statement conditional statements 
        //if slideIndex is more than five reset the index
        if (slideIndex > slides.length){
            slideIndex = 1;
        }
        //display the current slide and set the corresponding dots as active
        //this is where the automatic part comes in
        slides[slideIndex - 1].style.display = "block";
        dot[slideIndex - 1].classList.add("active");
    }

    //to set the current slide when a dot is clicked
    function currentSlide(n){
        //stop the automatic slideshow from the click
        clearInterval(intervalID);
        //set the current slide index
        slideIndex = n - 1 ;
        //display the selected slide index
        showSlides()
        //restart the automatic slideshow
        startSlideShow();
    }
    // to start the automatic slideshow
    function startSlideShow(){
        //set an interval to call showSlides fucntion every 5000 milliseconds (5 sec)
        intervalID = setInterval(() => {
            showSlides();
        }, 5000);
    }

    //initial setup 
    showSlides();
    startSlideShow();

    //attach the click event listenrs to the manual buttons
    const dots = document.getElementsByClassName("dot");
    for(let i = 0; i < dots.length; i++){
        dots[i].addEventListener("click", function(){
            //calling the currentslide function (down below) when a dot is clicked
            currentSlide(i + 1 );
        })
    }
})