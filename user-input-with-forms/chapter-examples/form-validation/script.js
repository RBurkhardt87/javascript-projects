//Add Your Code Below
<script>
    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
        let usernameInput = document.querySelector("input[name=username]");
        let teamName = document.querySelector("input[name=team]");
        if (usernameInput.value === "" || teamName.value === "") {
            alert("All fields are required!");
        }
        });
    });
</script>