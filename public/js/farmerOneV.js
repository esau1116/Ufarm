const oName = document.registration.firstName;
const oName2 = document.registration.surName;
const oDob = document.registration.dateOfBirth;
const oDor = document.registration.dateOfRegistration;
const oNumber = document.registration.userNumber;
const oNiNumber = document.registration.nin;
const oResidence = document.registration.residence;
const oDtr = document.registration.directionsToResidence;

//Errors
const name_err = document.getElementById("err1");
const sname_err = document.getElementById("err2");
// const oDob_err = document.getElementById("err3");
// const oDor_err = document.getElementById("err4");
const oNumber_err = document.getElementById("err5");
// const oNiNumber_err = document.getElementById("err6");
const oResidence_err = document.getElementById("err7");
// const oDtr_err = document.getElementById("err8");

//Event listeners
oName.addEventListener("blur", Fname_verify, true);
oName2.addEventListener("blur", surName_verify, true);
// oDob.addEventListener("blur", Dob_verify, true);
// oDor.addEventListener("blur", Dor_verify, true);
oNumber.addEventListener("blur", Number_verify, true);
// oNiNumber.addEventListener("blur", Nin_verify, true);
oResidence.addEventListener("blur", Residence_verify, true);
// oDtr.addEventListener("blur", Dtr_verify, true);

// Validating fileds

function subform() {
  if (oName.value == "") {
    oName.style.border = "3px solid red";
    name_err.textContent = "First Name input is required";
    oName.focus();
    return false;
  }

  if (oName2.value == "") {
    oName2.style.border = "3px solid red";
    sname_err.textContent = "Surname input is required";
    oName2.focus();
    return false;
  }

  if (oNumber.value == "") {
    oNumber.style.border = "3px solid red";
    oNumber_err.textContent = "Phonenumber is required";
    oNumber.focus();
    return false;
  }

  if (oResidence.value == "") {
    oResidence.style.border = "3px solid red";
    oResidence_err.textContent = "Residence is required";
    oResidence.focus();
    return false;
  }
}

const alphanumeric = /^[0-9a-zA-Z]+$/;
const regex = /^[a-zA-Z]+$/;
//   firstname

// Event handlers
// First name
function Fname_verify() {
  if (oName.value.match(regex)) {
    oName.style.border = "3px solid green";
    name_err.innerHTML = "";
    return true;
  } else {
    oName.style.border = "3px solid red";
    name_err.textContent = "Insert correct first name";
    oName.focus();
    return false;
  }
}

// surname
function surName_verify() {
  if (oName2.value.match(regex)) {
    oName2.style.border = "3px solid green";
    sname_err.innerHTML = "";
    return true;
  } else {
    oName2.style.border = "3px solid red";
    sname_err.textContent = "Insert correct surname";
    oName2.focus();
    return false;
  }
}
//Number
const numberRegex = /^\d{10}$/;
function Number_verify() {
  if (oNumber.value.match(numberRegex)) {
    oNumber.style.border = "3px solid green";
    oNumber_err.innerHTML = "";
    return true;
  } else {
    oNumber.style.border = "3px solid red";
    oNumber_err.textContent = "Insert correct number";
    oNumber.focus();
    return false;
  }
}

function Residence_verify() {
  if (oResidence.value.match(alphanumeric)) {
    oResidence.style.border = "3px solid green";
    oResidence_err.innerHTML = "";
    return true;
  } else {
    oResidence.style.border = "3px solid red";
    oResidence_err.textContent = "Insert correct residence";
    oResidence.focus();
    return false;
  }
}
