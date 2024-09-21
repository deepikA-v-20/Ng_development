function Validate() {
    let valid = true;

    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        nameError.style.display = "block";
        name.classList.add("error");
        valid = false;
    } else {
        nameError.style.display = "none";
        name.classList.remove("error");
    }

    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email.value)) {
        emailError.style.display = "block";
        email.classList.add("error");
        valid = false;
    } else {
        emailError.style.display = "none";
        email.classList.remove("error");
    }

    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (password.value.length < 8) {
        passwordError.style.display = "block";
        password.classList.add("error");
        valid = false;
    } else {
        passwordError.style.display = "none";
        password.classList.remove("error");
    }

    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.style.display = "block";
        confirmPassword.classList.add("error");
        valid = false;
    } else {
        confirmPasswordError.style.display = "none";
        confirmPassword.classList.remove("error");
    }

    const address = document.getElementById("address");
    const addressError = document.getElementById("addressError");
    if (address.value.trim() === "") {
        addressError.style.display = "block";
        address.classList.add("error");
        valid = false;
    } else {
        addressError.style.display = "none";
        address.classList.remove("error");
    }

    const dob = document.getElementById("DOB");
    const dobError = document.getElementById("dobError");
    if (dob.value === "") {
        dobError.style.display = "block";
        dob.classList.add("error");
        valid = false;
    } else {
        dobError.style.display = "none";
        dob.classList.remove("error");
    }

    const course = document.getElementById("course");
    const courseError = document.getElementById("courseError");
    if (course.value === "") {
        courseError.style.display = "block";
        course.classList.add("error");
        valid = false;
    } else {
        courseError.style.display = "none";
        course.classList.remove("error");
    }

    const terms = document.getElementById("term");
    const termsError = document.getElementById("termError");
    if (!terms.checked) {
        termsError.style.display = "block";
        valid = false;
    } else {
        termsError.style.display = "none";
    }

    return valid;
}
