const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
function onClick(e) {
    console.log('Clicked inside the form');
  }
  
  function onMouseOver(e) {
    console.log('Mouse over the form');
  }
  
  function onMouseOut(e) {
    console.log('Mouse out of the form');
  }
  
  // Separate event listeners for click, mouseover, and mouseout on form fields
  nameInput.addEventListener('click', onClick);
  nameInput.addEventListener('mouseover', onMouseOver);
  nameInput.addEventListener('mouseout', onMouseOut);
  
  emailInput.addEventListener('click', onClick);
  emailInput.addEventListener('mouseover', onMouseOver);
  emailInput.addEventListener('mouseout', onMouseOut);
  
// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  if (nameValue === '' || emailValue === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => {
      msg.classList.remove('error');
      msg.innerHTML = '';
    }, 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameValue}: ${emailValue}`));
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';

    // Log form values
    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
  }
}
