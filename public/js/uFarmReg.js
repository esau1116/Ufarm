const subform = () => {
  const uName = document.registration.username;
  const uDob = document.registration.dateOfBirth;
  const uDor = document.registration.dateOfRegiration;
  const uNinn = document.registration.nationalIdentificationNumber;
  const uContact = document.registration.contact;
  //Defining regex for name
  const alphanumeric = /^[0-9a-zA-Z]+$/;

  // Initializing if function for username
  if (uName.value.match(alphanumeric)) {
    uName.style.border = "2px solid green";
  } else {
    uName.style.border = "2px solid red";
  }

  // Defining regex for date
  //const regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;

  // Initializiing function for date of birth
  //if (uDob.value.match(regex)) {
  // uDob.style.border = "2px solid green";
  //} else {
  //uDob.style.border = "2px solid red";
  //}
  //const dregex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
  //Initialising function for date of birth
  //if (uDor.value.match(regex)) {
  // uDor.style.border = "3px solid green";
  //} else {
  //uDor.style.border = "3px solid red";
  //}
  //Defining regex for nin
  //const alphanumeric = /^[0-9a-zA-Z]+$/;
  // Initializing if function for username
  if (uNinn.value.match(alphanumeric)) {
    uNinn.style.border = "2px solid green";
  } else {
    uNinn.style.border = "2px solid red";
  }
  //definig regex for contact
  const contactRegex = /^\d{10}$/;

  //Initiallising the function of contact
  if (uContact.value.match(contactRegex)) {
    uContact.style.border = "3px solid green";
  } else {
    uContact.style.border = "3px solid green";
  }
};
