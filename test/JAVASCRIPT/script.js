document.getElementById('button').addEventListener('click',(event)=>{
    event.preventDefault();
    const user_name = document.getElementById('user_name').value;
    const user_name_regex = /^[A-Za-z]{5,12}$/;

    if (user_name_regex.test(user_name)) {
        document.getElementById('user_name_message').style.display="none";
        document.getElementById('user_name').style.border="3px solid green";
    }
    else{
        document.getElementById('user_name_message').style.display="block";
        document.getElementById('user_name_message').style.color="orange";
        document.getElementById('user_name').style.border="1px solid orange";
    }

    const email=document.getElementById('email').value;
    const email_regex = /^[A-Za-z][\w]*@gmail.com$/;

    if (email_regex.test(email)) {
        document.getElementById('email_message').style.display="none";
        document.getElementById('email').style.border="3px solid green";
    }
    else{
        document.getElementById('email_message').style.display="block";
        document.getElementById('email_message').style.color="orange";
        document.getElementById('email').style.border="1px solid orange";
    }

    const password=document.getElementById('password').value;
    const password_regex = /[\w@\-_]{8,20}$/;
   
    if (password_regex.test(password)){
        document.getElementById('password_message').style.display="none";
        document.getElementById('password').style.border="3px solid green";
    }
    else{
        document.getElementById('password_message').style.display="block";
        document.getElementById('password_message').style.color="orange";
        document.getElementById('password').style.border="1px solid orange";
    }

    const telephone=document.getElementById('telephone').value;
    const telephone_regex = /^[6-9]\d{9}$/;

    if(telephone_regex.test(telephone)) {
        document.getElementById('telephone_message').style.display="none";
        document.getElementById('telephone').style.border="3px solid green";
    }
    else{
        document.getElementById('telephone_message').style.display="block";
        document.getElementById('telephone_message').style.color="orange";
        document.getElementById('telephone').style.border="1px solid orange";
    }
})

// function validation(){
// 
// }