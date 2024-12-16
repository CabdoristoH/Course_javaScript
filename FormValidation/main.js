const Username = document.querySelector("#Username");
const Password = document.querySelector("#Password");
const Email = document.querySelector("#Email");
const confirmpassword = document.querySelector("#confirmpassword");
const form = document.querySelector("#form");

const ShowError = (input, message) => {
    let parentElement = input.parentElement;
    parentElement.classList = "form-control error";
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = "visible";
    successIcon.style.visibility = "hidden";
    small.innerText = message;
};

const ShowSuccess = (input) => {
    let parentElement = input.parentElement;
    parentElement.classList = "form-control success";
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = "hidden";
    successIcon.style.visibility = "visible";
};

const CheckEmpty = (Elements) => {
    Elements.forEach((Element) => {
        if (Element.value.trim() === "") {
            ShowError(Element, "Input required");
        } else {
            ShowSuccess(Element);
        }
    });
};

const CheckEmail = (Email) => {
    let Reg =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    let emailValue = Email.value.trim();

    if (!Reg.test(emailValue)) {
        ShowError(Email, "Invalid email format");
    } else {
        ShowSuccess(Email);
    }
};

const CheckPassword = (Password, min, max) => {
    const passwordValue = Password.value.trim();

    if (passwordValue.length < min || passwordValue.length > max) {
        ShowError(
            Password,
            `Password must be between ${min} and ${max} characters`
        );
    } else {
        ShowSuccess(Password);
    }
};

const MatchPassword = (confirmpassword, Password) => {
    if (confirmpassword.value.trim() !== Password.value.trim()) {
        ShowError(confirmpassword, "Passwords do not match");
    } else {
        ShowSuccess(confirmpassword);
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    CheckEmpty([Username, Email, Password, confirmpassword]);
    CheckEmail(Email);
    CheckPassword(Password, 6, 8);
    MatchPassword(confirmpassword, Password);
});
