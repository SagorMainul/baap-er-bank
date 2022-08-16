//step-1: add click event handler with the login button
document.getElementById('btn-submit').addEventListener('click', function () {
  //step-2: get the email address  from the flied
  //alawasy remeber to use .valeue to get text from the input
  const emailField = document.getElementById('user-email')
  const email = emailField.value
  //step-3: get password
  //3.1.set id on the html element
  //3.2. get the element
  //3.3. get the value from the element
  const passwordField = document.getElementById('password-user')
  const password = passwordField.value

  //DANGER!!! DANGER!!! DANGER!!!do not or check verify email password on the client site
  //step-4: verify email and password
  if (email === 'mainulhasan@gmail.com' && password === '12345678') {
    window.location.href = 'bank.html'
  } else {
    alert('Ory Batpar Churi Korty Aisos!!!')
  }
})
