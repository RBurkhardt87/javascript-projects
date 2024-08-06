// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    
    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;
    
    let flightStatus = document.getElementById("flightStatus");
    let background = document.getElementById('shuttleBackground');
    let height = document.getElementById('spaceShuttleHeight');
    let rocket = document.getElementById('rocket');
       
  
    let takeOffButton = document.getElementById('takeoff');

    takeOffButton.addEventListener('click', function () {  
    let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff."); 

        if(confirmation) {
            flightStatus.innerHTML = "Shuttle in flight";
            background.style.backgroundColor = "blue";
            altitude = 10000;
            height.innerHTML = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';

        };
    });

    let landButton = document.getElementById("landing"); 

    landButton.addEventListener('click', event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        resetRocket();
    });
  
    let abortButton = document.getElementById("missionAbort"); 

    abortButton.addEventListener('click', event => {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
  
        if(confirmAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            resetRocket();
        }
    });

    document.addEventListener('click', function(event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 -40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "right" && rocketPosX < (bkgWidth / 2 -40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px'
        }
        if (event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px'
            altitude += 10000;
            height.innerHTML = altitude;
        }
        if (event.target.id === "down" && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px'
            altitude -= 10000;
            height.innerHTML = altitude;
        }
    });

    function resetRocket(){
        background.style.backgroundColor = "green";
        altitude = 0;
        height.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';
    }

};
  
  
  window.addEventListener('load', init);