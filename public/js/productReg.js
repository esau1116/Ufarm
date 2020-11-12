const subform = () => {
  const pName = document.registration.productName;
  const pWard = document.registration.ward;
  const oDob = document.registration.dateOfBirth;
  const oDor = document.registration.dateOfRegistration;
  const oNumber = document.registration.userNumber;
  const oNiNumber = document.registration.nin;
  const oResidence = document.registration.residence;
  const oDtr = document.registration.directionsToResidence;
  //Defining th regex for  product name.
  const regex = /^[a-zA-Z]+$/;

  //intiallising the functionn of the product.
  if (pName.value.match(regex)) {
    pName.style.border = "3px solid blue";
  } else {
    pName.style.border = "3px solid red";
  }

  //definig the regex for the ward.
  const alphanumeric = /^[0-9a-zA-Z]+$/;
  //Intiallising the function of the ward
  if (pWard.value.match(alphanumeric)) {
    pWard.style.border = "3px solid blue";
  } else {
    pWard.style.border = "3px solid red";
  }
};
