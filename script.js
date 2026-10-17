const form = document.getElementById("registrationForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");
const country = document.getElementById("country");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const phoneError = document.getElementById("phoneError");
const genderError = document.getElementById("genderError");
const hobbyError = document.getElementById("hobbyError");
const countryError = document.getElementById("countryError");

const successMessage = document.getElementById("successMessage");


// ===============================
// FULL NAME VALIDATION
// ===============================

function validateName() {

    if (fullName.value.trim() === "") {

        nameError.textContent = "Full Name cannot be empty.";
        fullName.classList.add("invalid");
        fullName.classList.remove("valid");

        return false;

    } else {

        nameError.textContent = "";
        fullName.classList.remove("invalid");
        fullName.classList.add("valid");

        return true;
    }
}


// ===============================
// EMAIL VALIDATION
// ===============================

function validateEmail() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent = "Email is required.";
        email.classList.add("invalid");
        email.classList.remove("valid");

        return false;

    } else if (!emailPattern.test(email.value)) {

        emailError.textContent = "Please enter a valid email.";
        email.classList.add("invalid");
        email.classList.remove("valid");

        return false;

    } else {

        emailError.textContent = "";
        email.classList.remove("invalid");
        email.classList.add("valid");

        return true;
    }
}


// ===============================
// PASSWORD VALIDATION
// ===============================

function validatePassword() {

    if (password.value.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters.";

        password.classList.add("invalid");
        password.classList.remove("valid");

        return false;

    } else {

        passwordError.textContent = "";
        password.classList.remove("invalid");
        password.classList.add("valid");

        return true;
    }
}


// ===============================
// CONFIRM PASSWORD
// ===============================

function validateConfirmPassword() {

    if (confirmPassword.value === "") {

        confirmPasswordError.textContent =
            "Please confirm your password.";

        confirmPassword.classList.add("invalid");
        confirmPassword.classList.remove("valid");

        return false;

    } else if (confirmPassword.value !== password.value) {

        confirmPasswordError.textContent =
            "Passwords do not match.";

        confirmPassword.classList.add("invalid");
        confirmPassword.classList.remove("valid");

        return false;

    } else {

        confirmPasswordError.textContent = "";
        confirmPassword.classList.remove("invalid");
        confirmPassword.classList.add("valid");

        return true;
    }
}


// ===============================
// PHONE VALIDATION
// ===============================

function validatePhone() {

    const phonePattern = /^[0-9]+$/;

    if (phone.value.trim() === "") {

        phoneError.textContent = "Phone number is required.";

        phone.classList.add("invalid");
        phone.classList.remove("valid");

        return false;

    } else if (!phonePattern.test(phone.value)) {

        phoneError.textContent =
            "Phone number must contain numbers only.";

        phone.classList.add("invalid");
        phone.classList.remove("valid");

        return false;

    } else if (phone.value.length < 10) {

        phoneError.textContent =
            "Phone number must be at least 10 digits.";

        phone.classList.add("invalid");
        phone.classList.remove("valid");

        return false;

    } else {

        phoneError.textContent = "";
        phone.classList.remove("invalid");
        phone.classList.add("valid");

        return true;
    }
}


// ===============================
// GENDER VALIDATION
// ===============================

function validateGender() {

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!gender) {

        genderError.textContent =
            "Please select your gender.";

        return false;

    } else {

        genderError.textContent = "";

        return true;
    }
}


// ===============================
// HOBBY VALIDATION
// ===============================

function validateHobby() {

    const hobbies = document.querySelectorAll(
        'input[name="hobby"]:checked'
    );

    if (hobbies.length === 0) {

        hobbyError.textContent =
            "Please select at least one hobby.";

        return false;

    } else {

        hobbyError.textContent = "";

        return true;
    }
}


// ===============================
// COUNTRY VALIDATION
// ===============================

function validateCountry() {

    if (country.value === "") {

        countryError.textContent =
            "Please select a country.";

        country.classList.add("invalid");
        country.classList.remove("valid");

        return false;

    } else {

        countryError.textContent = "";
        country.classList.remove("invalid");
        country.classList.add("valid");

        return true;
    }
}


// ===============================
// REAL-TIME VALIDATION
// ===============================

fullName.addEventListener("input", validateName);

email.addEventListener("input", validateEmail);

password.addEventListener("input", function() {
    validatePassword();

    if (confirmPassword.value !== "") {
        validateConfirmPassword();
    }
});

confirmPassword.addEventListener(
    "input",
    validateConfirmPassword
);

phone.addEventListener("input", validatePhone);

country.addEventListener("change", validateCountry);

document.querySelectorAll(
    'input[name="gender"]'
).forEach(function(gender) {

    gender.addEventListener(
        "change",
        validateGender
    );

});

document.querySelectorAll(
    'input[name="hobby"]'
).forEach(function(hobby) {

    hobby.addEventListener(
        "change",
        validateHobby
    );

});


// ===============================
// FORM SUBMISSION
// ===============================

form.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Validate everything
    const validName = validateName();
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    const validConfirmPassword = validateConfirmPassword();
    const validPhone = validatePhone();
    const validGender = validateGender();
    const validHobby = validateHobby();
    const validCountry = validateCountry();

    if (
        validName &&
        validEmail &&
        validPassword &&
        validConfirmPassword &&
        validPhone &&
        validGender &&
        validHobby &&
        validCountry
    ) {

        successMessage.textContent =
            "Registration successful!";

        form.reset();

        // Remove green borders
        fullName.classList.remove("valid");
        email.classList.remove("valid");
        password.classList.remove("valid");
        confirmPassword.classList.remove("valid");
        phone.classList.remove("valid");
        country.classList.remove("valid");

    } else {

        successMessage.textContent = "";
    }

});