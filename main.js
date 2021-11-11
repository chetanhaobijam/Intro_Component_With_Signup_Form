const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
})

const checkInputs = () => {
  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  if(firstNameValue === "") {
    showError(firstName, `First Name cannot be empty`);
  } else {
    removeError(firstName);
  }
  if(lastNameValue === "") {
    showError(lastName, `Last Name cannot be empty`);
  } else {
    removeError(lastName);
  }
  if(emailValue === "") {
    showError(email, `Email cannot be empty`)
  } else if(!emailValid(emailValue)) {
    showError(email, `Looks like this is not an email`);
  } else {
    removeError(email);
  }
  if(passwordValue === "") {
    showError(password, `Password cannot be empty`)
  } else {
    removeError(password);
  }
  if (
    // Alerts a success message if the form is successfully submitted
    firstNameValue !== "" &&
    lastNameValue !== "" &&
    emailValue !== "" &&
    emailValid(emailValue) &&
    passwordValue !== ""
  ) {
    alert(`Form Successfully Submitted`);
  }
}

const showError = (input, message) => {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  formGroup.classList.remove("success");
  formGroup.classList.add("error");
  small.innerText = message;
}

const removeError = (input) => {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error");
  formGroup.classList.add("success");
}

const emailValid = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}