const registrationForm = document.getElementById('reg-form');
const errorMessage = document.getElementById('error');




function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(pass)
{
    return /^[A-Z]([a-zA-Z0-9_\.\#\?\$]{5,})$/.test(pass);
}

function isPhone (phone)
{

    return /^[+8801][3-9][0-9]{8}$/.test(phone);

}



 registrationForm.addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const password2Value = document.getElementById('password2').value;
    const emailValue = document.getElementById('email').value;

    let messages = []
   
    if(name ===''  || name === null )
    {
        messages.push('Name is required')
    }
    
   

   if(emailValue === '') 
   {
      messages.push('Email is required');
   } 
   else if (!isEmail(emailValue))
   {
     messages.push('Not a valid email');
   } 

   if(phone ==='' )
   {
       messages.push('Phone is required')
   }
   else if (!isPhone(phone))
   {
     messages.push('Not a valid phone');
   } 

     
   if(password ===''  || password === null )
   {
       messages.push('Password is required')
   }
  else if(!isPassword(password))
   {
       messages.push('Password must start with uppercase and contain atleast 6 characters')
   }
 
   if(password2Value === '') 
   {
    messages.push('Confirm password is required');
   } 
   else if(password !== password2Value) 
   {
    messages.push('Passwords does not match');
   } 

    if(messages.length>0)
    {
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')

    }
  
 });     