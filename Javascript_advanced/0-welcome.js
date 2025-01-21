function welcome(firstName, lastName) {
    let fullname = firstName + " " + lastName;  

    function displayname() {
        alert("Welcome " + fullname + "!");
    }

    displayname();  
}

welcome('holberton', 'school');  
