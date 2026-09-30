document.querySelector("#submit").addEventListener("click", function () {
    let username = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let job = document.querySelector("#jop").value;

    if (username === "" || age === "" || job === "") {
        alert("Please complete data");
    } else {
        if (Number(age) < 18) {
            alert("You're under age");
        } else {
            console.log(`Name: ${username}`);
            console.log(`Age: ${age}`);
            console.log(`Job: ${job}`);
            alert("Registration Completed");
        }
    }
});