function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    button.addEventListener("click", liftOff => {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener('mouseover', turnRed => {
        missionAbort.style.backgroundColor= "red"; 
    });

    /*
    Here it is written in the other way:
    
    missionAbort.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor= "red"; 
    });

    */
  
//"So it’s just syntax that doesn’t hard code. THE event is the current event we’re listening for. the target is what we added the event listener to. So event.target is equal to missionAbort" -- Ariel explained

    missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });

    missionAbort.addEventListener("click", event => {
       let abort = window.confirm("Are you sure you want to abort the mission?") 
            
    if (abort === true){
        paragraph.innerHTML = "Mission aborted! Space shuttle returning home."
    }
        
    });

    
}

window.addEventListener("load", init);
