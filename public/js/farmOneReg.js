const subform = () => {
  const oName = document.registration.firstName;
  const oName2 = document.registration.surName;
  const oDob = document.registration.dateOfBirth;
  const oDor = document.registration.dateOfRegistration;
  const oNumber = document.registration.userNumber;
  const oNiNumber = document.registration.nin;
  const oResidence = document.registration.residence;
  const oDtr = document.registration.directionsToResidence;

  //Defining the regex of the name
  const alphanumeric = /^[0-9a-zA-Z]+$/;
  //intiallising of function of the user name
  if (oName.value.match(alphanumeric)) {
    oName.style.border = "3px solid green";
  } else {
    oName.style.border = "3px solid blue";
  }

  //Defining the regex of the name
  //const alphanumeric = /^[0-9a-zA-Z]+$/;
  //intiallising of function of the user name
  if (oName2.value.match(alphanumeric)) {
    oName2.style.border = "3px solid green";
  } else {
    oName2.style.border = "3px solid blue";
  }
  //defining the regex of the ward.
  //const regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
  //Intiallising the function of ward.
  //if (oDor.value.match(regex)) {
  // oDor.style.border = "3px solid green";
  // } else {
  // oDor.style.border = "3px solid red";
  // }
  // Defining the regex of the number
  const numberRegex = /^\d{10}$/;
  //intiallising the function of contact
  if (oNumber.value.match(numberRegex)) {
    oNumber.style.border = "3px solid green";
  } else {
    oNumber.style.border = "3px solid blue";
  }
  //defining the regex of nin number
  //const ninRegex = /^\d{10}$/;
  //Initiallising the function of the nin number.
  if (oNiNumber.value.match(alphanumeric)) {
    oNiNumber.style.border = "3px solid green";
  } else {
    oNiNumber.style.border = "3px solid blue";
  }
  //intialliaing the function
  if (oResidence.value.match(alphanumeric)) {
    oResidence.style.border = "3px solid green";
  } else {
    oResidence.style.border = "3px solid blue";
  }
  //initiallising the function of directions to residence
  if (oDtr.value.match(alphanumeric)) {
    oDtr.style.border = "3px solid green";
  } else {
    oDtr.style.border = "3px solid blue";
  }
};
