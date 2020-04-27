const form = document.querySelector('#form');
const email = document.querySelector('#email');
const button = document.querySelector('#button');
const icon = document.querySelector('#icon');
const errordiv = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

email.addEventListener('change', (event) => {
  const value = event.target.value;
  const atpos = value.indexOf('@');
  const dotpos = value.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= value.length) {
    email.className = 'invalid';
    icon.className = 'icon show';
    errordiv.className = 'error show';
    // console.log('NOT A VALID EMAIL ADDRESS');
    return false;
  }
});
// console.log(email);

//   var x = document.forms['myForm']['email'].value;
//   var atpos = x.indexOf('@');
//   var dotpos = x.lastIndexOf('.');
//   if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
//     alert('Not a valid e-mail address');
//     return false;
//   }
