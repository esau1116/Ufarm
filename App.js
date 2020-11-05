// Initializing the function firstfocus.

const subForm = () => {
    // Accessing the form porperties by form name and property name.
    const userID = document.registration.userid;
    const passWord = document.registration.passid;
    const userName = document.registration.username;
    const userAdress = document.registration.address;
    const userCountry = document.registration.country;
    const zCode = document.registration.zip;
    const userEmail = document.registration.email;

    // Accessing the form properties by id.
    const userSexM = document.getElementById("sexM");
    const userSexF = document.getElementById("sexF");
    const langE = document.getElementById("Eng");
    const langN = document.getElementById("Neng");

    // Initializing a constant regex with required conditions for ID.
    const idRegex = /^\w{5,12}$/;

    //Checking if the conditions of the regex are fulfilled
    if (userID.value.match(idRegex)) {
        // alert('Correct ID input');
        userID.style.border = "2px solid #00FF00";
    } else {
        alert("Wrong ID input");
        userID.style.border = "2px solid red";
    }

    // Initializing a constant regex with required conditions for password.
    const passRegex = /^\w{7,12}$/;

    //Checking if the conditions of the regex are fulfilled
    if (passWord.value.match(passRegex)) {
        // alert('Correct password input');
        passWord.style.border = "2px solid #00FF00";
    } else {
        alert("Wrong password input");
        passWord.style.border = "2px solid red";
    }

    // Initializing a constant regex with required conditions for username.
    const nameRegex = /^[A-Za-z]+$/;

    //Checking if the conditions of the regex are fulfilled.
    if (userName.value.match(nameRegex)) {
        // alert('Correct name input');
        userName.style.border = "2px solid #00FF00";
    } else {
        alert("Wrong name input");
        userName.style.border = "2px solid red";
    }

    // Initializing a constant regex with required conditions for adress.
    const alphaNumeric = /^[0-9a-zA-Z]+$/;

    //Checking if the conditions of the alphanumeric regex are fulfilled.
    if (userAdress.value.match(alphaNumeric)) {
        // alert('Correct addess input');
        userAdress.style.border = "2px solid #00FF00";
    } else {
        alert("Wrong address input");
        userAdress.style.border = "2px solid red";
    }

    // Declairing an if statement for country and styling outcome.
    if (userCountry.value == "Default") {
        alert("Please select a country");
        userCountry.style.border = "2px solid red";
    } else {
        // alert('Country selected');
        userCountry.style.border = "2px solid #00FF00";
    }

    // Initializing a constant regex with required conditions for zip code.
    const numeric = /^[0-9]+$/;

    //Checking if the conditions of the regex for numeric are fulfilled and styling the outcome.
    if (zCode.value.match(numeric)) {
        // alert('Correct zip code input');
        zCode.style.border = "2px solid #00FF00";
    } else {
        alert("Wrong zip code input");
        zCode.style.border = "2px solid red";
    }

    // Initializing a constant regex with required conditions for email.
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //Checking if the conditions of the regex for email are fulfilled and styling the outcome.
    if (userEmail.value.match(emailRegex)) {
        // alert('Correct email input');
        userEmail.style.border = "2px solid #00FF00";
    } else {
        alert("Wrong email");
        userEmail.style.border = "2px solid red";
    }

    // Declairing an if statement for sex and styling the outcome.
    if (userSexM.checked == false && userSexF.checked == false) {
        alert("Select Male or Female");
    } else {
        alert("Sex selected");
    }

    // Declairing an if statement for language and styling the outcome.
    if (langE.checked == true || langN.checked == true) {
        alert("Language selected");
    } else {
        alert("Please select a language");
    }
};