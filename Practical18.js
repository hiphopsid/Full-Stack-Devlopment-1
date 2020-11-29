//selectors
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const small=document.querySelector('small')



//evenet handler
form.addEventListener('submit', function(e)
{
    e.preventDefault();
    checkInput();
})






//functions

function checkInput()
{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const password1Value=password1.value.trim();
    const password2Value=password2.value.trim();
    console.log(usernameValue);

    if(usernameValue==='')
    {
        showError(username,"username can not be blank");
    }

    else if(!isUserNameValid(usernameValue))
    {
        showError(username,"Username is not valid")
    }
    else
    {
        showSuccess(username);
    }


    if(emailValue==='')
    {
        showError(email,"email can not be blank");
    }

    else if(!isEmailValid(emailValue))
    {
        showError(email,"email not valid")
    }
    else
    {
        showSuccess(email);
    }

    if(password1Value==='')
    {
        showError(password1,"password can not be blank");
    }
    else
    {
        showSuccess(password1);
    }
    if(password2Value==='')
    {
        showError(password2,"password can not be blank");
    }
    else
    {
        showSuccess(password2);
    }
}

function showError(input, msg)
{
    const formControl=input.parentNode;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerHTML=msg;
}

function showSuccess(input, msg)
{
    const formControl=input.parentNode;
    formControl.className='form-control success';
}

function isEmailValid(email)
{
    return /^([a-zA-Z0-9_\.\-\+]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUserNameValid(username)
{
    return /^([a-z]+)([a-z0-9])/.test(username)
}