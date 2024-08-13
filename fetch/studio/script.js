//TODO: Add Your Code Below


window.addEventListener("load", function(){
    

    //TODO: create object for container element

    const container = document.getElementById("container");

    //TODO: Fetch using traditional syntax
    /*
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function (data){
            console.log(data);

            for (let i = 0; data.length; i++) {
                let astronaut = data[i];
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(" ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
                `;
            }

        });
    });

*/
    // TODO: fetch using modern syntax and bonus mission (You must create a function and then call it using this method)

    async function fetchAndDisplayAstronauts(){
        let response = await fetch ("https://handlers.education.launchcode.org/static/astronauts.json");
        let data = await response.json();

        //TODO: Bonus Mission 1: NOTE: how to sort on keys of an object in JS. Sorting is one of the things, that once you do, it's done. You want to do it after you fetch the data but before you loop through it.

        data.sort(function (a, b){
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1
        });

        
        //TODO: Bonus Mission 3: Note: we will set an object to be the count, and also we will go into the html file and add a div with an id="count"

        const count = document.getElementById("count");
        count.innerHTML = `There are ${data.length} astronauts recorded on this page`;

        for (let i = 0; data.length; i++) {
            let astronaut = data[i];

        //TODO: Bonus Mission 2: NOTE: Wwe will just set a variable to check if the class is active or not (line57). Then we go down to line 65 and add the class into the active list item tag. 
        let activeClass = astronaut.active ? "active" : "";

            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li class=${activeClass}>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(" ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
            `;
        }
    }


    // TODO: Call async function
    fetchAndDisplayAstronauts();

});