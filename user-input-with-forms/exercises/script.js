//Code Your Solution Below


form.addEventListener("submit", function(event){
    if (testName.value ==="" ){
        window.alert("Must have a valid name eneterd.");
        event.preventDefault();
    }
});