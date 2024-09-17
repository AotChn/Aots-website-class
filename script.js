
//this is a javascript function with 2 parameters 
function changeContent(t_container, t_content){
    //this is finding the element with the name in the parameters
    const container = document.querySelector(t_container);
    const content = document.querySelector(t_content);

    //controls when mouse is over container
    container.addEventListener('mouseover', function() {
        //console log outputs a print statement
        console.log("hovered");
        content.textContent = "hovered";

    });

    //controls when mouse is not over container
    container.addEventListener('mouseout', function() {
        console.log("not-hovered");
        content.textContent = "non-hovered";
    });
}

//we call this function on the elements ".div-box" and #word
changeContent(".div-box", "#word");