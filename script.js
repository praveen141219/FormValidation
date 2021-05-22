"use-strict";

const usernameField = document.querySelector(".username");
const passwprdField = document.querySelector(".password");
const submitBtn = document.querySelector(".btn");
const usernameWarning = document.querySelector(".usernameWarning");
const PasswordWarning = document.querySelector(".passwordWarning");

// const username = usernameField.value;
// const password = passwprdField.value;

let value = true;
const splChars = "*|,\":<>[]{}`';()@&$#%";

const display = () => {
  if (usernameField.value === "") {
    usernameWarning.textContent = "Username Is Empty!";
    value = false;
  } else if (usernameField.value.length < 6) {
    usernameWarning.textContent = "Atleast 6 Characters Required!";
    value = false;
  } else if (1) {
    for (let i = 0; i < usernameField.value.length; i++) {
      if (splChars.indexOf(usernameField.value.charAt(i)) === -1) {
        usernameWarning.textContent = " Special Characters Required!";
        value = false;
      } else {
        usernameWarning.textContent = "";
      }
    }
  }
  if (passwprdField.value === "") {
    PasswordWarning.textContent = "Password Is Empty!";
    value = false;
  } else if (passwprdField.value.length < 8) {
    PasswordWarning.textContent = "Atleast 8 Characters Required!";
    value = false;
  } else if (1) {
    const splChars = "*|,\":<>[]{}`';()@&$#%";
    for (let i = 0; i < passwprdField.value.length; i++) {
      if (splChars.indexOf(passwprdField.value.charAt(i)) === -1) {
        PasswordWarning.textContent = " Special Characters Required!";
        value = false;
      } else {
        usernameWarning.textContent = "";
        passwprdField.textContent = "";
        value = true;
      }
    }
  }

  if (value === true) {
    return value;
  } else {
    return value;
  }
};
