const username = document.getElementById('username');
const number = document.getElementById('number');
const exp = document.getElementById('exp');
const month = document.getElementById('month');
const cvv = document.getElementById('cvv');
const form = document.getElementById('form');
const button = document.getElementById('submit');




form.addEventListener('submit', (e)=>{
  e.preventDefault();
ourForm();

})





const setError = (el,message)=>{
const element = el.parentElement;
const showError = element.querySelector('.error');

showError.innerHTML = message;
element.classList.add('error');
element.classList.remove('success');

}
const setSuccess = (el)=>{
const element = el.parentElement;
const showError = element.querySelector('.error');

showError.innerHTML = '';
element.classList.add('success');
element.classList.remove('error');
}


function allLetter(inputtxt)
  {
   var letters = /^[0-9\s]/; 
return letters.test(inputtxt);
  }
  
  
  
  

const ourForm = ()=>{
const cardHolderName = username.value.trim();
const cardNumber = number.value.trim();
const expMonth = month.value.trim();
const expDate = exp.value.trim();
const CVV = cvv.value.trim();




  if(cardHolderName === ''){
    setError(username, 'Provide Full Name')
  }else{
    setSuccess(username);
  }


  
  if(cardNumber.length < 15){
    setError(number, 'Provide the 20 digits on card')
  }else if(!allLetter(cardNumber)){
setError(number, 'Wrong format, cannot be letters')
  }
  else{
setSuccess(number);

  }


  
  if(expDate.length < 2){
    setError(exp, "can't be blank")
  }else if(!allLetter(expDate)){
setError(exp, 'Only Digits')
  }
  else{
    setSuccess(exp);
  }

  
  if(expMonth === ''){
    setError(month, "can't be blank");
  
  }else if(expMonth.length  > 2){
  setError(month, 'Check date, only digits');
  }else{
    setSuccess(month);
  }
  
  
if(CVV === ''){
setError(cvv, "can't be blank")
}
  else if(CVV.length < 2 || CVV.length > 3){
setError(cvv, 'Must be 3 digits')
  }else{
    setSuccess(cvv);

// ADDING USER CARD AND MAKING THEM KNOW THEIR CARD HAS BEEN ADDED

  const submit = ()=>{

    form.innerHTML = `
    <div class='card-added'>
    <box-icon type='solid'
    color='rgb(96, 35, 176)'   animation='tada'   size='lg'      name='check-circle'></box-icon>

  <h2>THANK YOU</h2>
  <p>${cardHolderName} we've added your card details</p>
  <button id='submit'><a
  href="https://github.com/AUSTINMOOR"
  target="blank"
  style="text-decoration: none; color: white"
  >Continue</a
>
  </button>
    </div>
  
    `
  }
    button.addEventListener('click',()=>{
            submit();
    })
  }


  
//UPDATING CUSTOMERS CARD REALTIME FROM  OUR USER INPUT

document.querySelector('#client-name').textContent = cardHolderName;
document.querySelector('#card-digit').textContent = cardNumber;
document.querySelector('#expiry-month').textContent = expMonth;
document.querySelector('#expiry-year').textContent = expDate;
document.querySelector('#cvc').textContent = CVV;




}

