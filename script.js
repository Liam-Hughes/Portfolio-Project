function validateForm(){
    let x = document.forms["contactForm"]["name"].value
    if (x == "") {
        alert("Enter your name.")
        return false;
    }
    let y = document.forms["contactForm"]["email"].value
    if (y == "") {
        alert("Not a valid email address.")
        return false
    }
    let z = document.forms["contactForm"]["message"].value
    if (z == "") {
        alert("Please give a brief description for the type of work you need done.")
    }
}