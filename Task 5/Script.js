function FormValidation(){
    // alert()
    var name = document.js_form.name;
    email = document.js_form.email;
    phone = document.js_form.phone;
    subject = document.js_form.subject;
    message = document.js_form.message;

    if (name.value=="") {
        name.nextElementSibling.style.display="block";
        name.style.border = "1px solid red";
        return false;
    }
    else{
        name.nextElementSibling.style.display="none";
        name.style.border = "1px solid transparent";
    }


    if (email.value =="" || !email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        email.nextElementSibling.style.display="block";
        email.style.border = "1px solid red";
        return false;
    }
    else{
        email.nextElementSibling.style.display="none";
        email.style.border = "1px solid transparent";
    }


    if (phone.value=="" || !phone.value.match(/^\(?([0-9]{1})\)?([0-9]{10})$/)) {
        phone.nextElementSibling.style.display="block";
        phone.style.border = "1px solid red";
        return false;
    }
    else{
        phone.nextElementSibling.style.display="none";
        phone.style.border = "1px solid transparent";
    }

    if (subject.value=="") {
        name.nextElementSibling.style.display="block";
        name.style.border = "1px solid red";
        return false;
    }
    else{
        name.nextElementSibling.style.display="none";
        name.style.border = "1px solid transparent";
    }

    
    if (message.value=="") {
        name.nextElementSibling.style.display="block";
        name.style.border = "1px solid red";
        return false;
    }
    else{
        name.nextElementSibling.style.display="none";
        name.style.border = "1px solid transparent";
    }
}