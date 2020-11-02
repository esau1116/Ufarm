const subForm = () => {
  const uName = document.registration.username;
  const uDob = document.registration.dateOfBirth;
  const uDor = document.registration.dateOfRegiration;

  //Defining regex for name
  const alphanumeric = /^[0-9a-zA-Z]+$/;

  // Initializing if function for username
  if (uName.value.match(alphanumeric)) {
    uName.style.border = "2px solid green";
  } else {
    uName.style.border = "2px solid red";
  }

  // Defining regex for date
  const dregex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;

  // Initializiing function for date of birth
  if (uDob.value.match(dregex)) {
    uDob.style.border = "2px solid green";
  } else {
    uDob.style.border = "2px solid red";
  }

  //Initialising function for date of registration
  if (uDor.value.match(dregex)) {
    uDor.style.border = "2px solid green";
  } else {
    uDor.style.border = "2px solid red";
  }
};
