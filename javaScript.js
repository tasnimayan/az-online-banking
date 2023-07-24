const loginBtn = document.getElementById('login');





loginBtn.addEventListener('click', function(){
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (email == "tasnimayan" && password == "1234"){
    alert('Login Successful');
    let rem = document.querySelector('.login-area');
    rem.style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
  }
  else{
    alert('Wrong information');
  }
});

