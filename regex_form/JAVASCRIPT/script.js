function validation() {

    const name = document.getElementById('name').value;
    const message1 = document.getElementById('message1');
    const regex_name = /^[A-Za-z]*$/;

    if (regex_name.test(name)) {
        message1.style.color = "green";
        message1.textContent = "VALID";
    }
    else {
        message1.textContent = "INVALID";
        message1.style.color = "red";
    }

    const age = document.getElementById('age').value;
    const message2 = document.getElementById('message2');
    const regex_age = /^[A-Za-z]*$/;

    if (regex_age.test(age)) {
        message2.style.color = "green";
        message2.textContent = "VALID";
    }
    else {
        message2.textContent = "INVALID";
        message2.style.color = "red";
    }

    const mobile = document.getElementById('mobile').value;
    const message3 = document.getElementById('message3');
    const regex_mobile = /^[A-Za-z]*$/;

    if (regex_name.test(mobile)) {
        message3.style.color = "green";
        message3.textContent = "VALID";
    }
    else {
        message3.textContent = "INVALID";
        message3.style.color = "red";
    }

    const email = document.getElementById('email').value;
    const message4 = document.getElementById('message4');
    const regex_email = /^[A-Za-z]*$/;

    if (regeemail.test(email)) {
        message4.style.color = "green";
        message4.textContent = "VALID";
    }
    else {
        message4.textContent = "INVALID";
        message4.style.color = "red";
    }

    const password = document.getElementById('password').value;
    const message5 = document.getElementById('message5');
    const regex_password = /^[A-Za-z]*$/;

    if (regex_password.test(password)) {
        message5.style.color = "green";
        message5.textContent = "VALID";
    }
    else {
        message5.textContent = "INVALID";
        message5.style.color = "red";
    }

    const aadhar = document.getElementById('aadhar').value;
    const message6 = document.getElementById('message6');
    const regex_aadhar = /^[A-Za-z]*$/;

    if (regex_aadhar.test(aadhar)) {
        message6.style.color = "green";
        message6.textContent = "VALID";
    }
    else {
        message6.textContent = "INVALID";
        message6.style.color = "red";
    }

    const pan = document.getElementById('pan').value;
    const message7 = document.getElementById('message7');
    const regex_pan = /^[A-Za-z]*$/;

    if (regex_name.test(pan)) {
        message7.style.color = "green";
        message7.textContent = "VALID";
    }
    else {
        message7.textContent = "INVALID";
        message7.style.color = "red";
    }
}

//name - /^[A-Za-z]*$/;
//mobile -  /^[+]{1}[91]{1}[6-9]{1}\d{9}$/;
//email - const regex = /^[A-Za-z][\w]*.@gmail.com$/;
//password -  const regex1 = /[^\w]/;
            // const regex2 = /[A-Z]/;
            // const regex3 = /\d/;
            // const regex4 = /[a-z]/;
            // const regex5 = /^\S*$/
            // const regex6 = /^.{8,32}$/;
//aadhar - /\d{12}$/;
//pan - /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/

// age ?
// space doubt in code ?
