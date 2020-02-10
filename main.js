const signUpButton=document.getElementById("signUp");
const signInButton=document.getElementById("signIn");
const container=document.getElementById("container");
signUpButton.addEventListener('click',() => container.classList.add('right-panel-active'));
signInButton.addEventListener('click',() => container.classList.remove('right-panel-active'));
function play(){
  var email=document.getElementById('email2');
  var password=document.getElementById('password');
  if(email.value==""){alert("Email can't be empty");return false;}
else if(password.value==""){alert("Password can't be empty");return false;}
}
function pswdvisible() {
  var x=document.getElementById("pswd");
  if(x.type=="password"){x.type="text"}
  else x.type="password"
}
function repswdvisible() {
  var x=document.getElementById("repswd");
  if(x.type=="password"){x.type="text"}
  else x.type="password"
}
function check(){
  var letters=/^[a-zA-Z]+$/;
  var name=document.getElementById('name')
  var email=document.getElementById('email')
  var mobile=document.getElementById('mobile')
  var age=document.getElementById('age')
  var city=document.getElementById('city')
  var country=document.getElementById('country')
  var pswd=document.getElementById('pswd')
  var repswd=document.getElementById('repswd')
  if(name.value==""){alert("Name can't be empty!!");return false;}
  else if(email.value==""){alert("Email can't be empty!!");return false;}
  else if(mobile.value==""){alert("Mobile Number can't be empty!!");return false;}
  else if(mobile.value.length!=10){alert("Invalid Mobile Number!!");return false;}
  else if(age.value==""){alert("Age can't be empty!!");return false;}
  else if(age.value<18){alert("You are not eligible at the moment.Come back after "+ parseInt(18-parseInt(age.value)) +" years!!");return false;}
  else if(city.value==""){alert("City name can't be empty!!");return false;}
  else if(!city.value.match(letters)){alert("City name can't have numbers or special characters!!");return false;}
  else if(country.value==""){alert("Country name can't be empty!!");return false;}
  else if(!country.value.match(letters)){alert("Country name can't have numbers or special characters!!");return false;}
  else if(pswd.value==""){alert("Password can't be empty!!");return false;}
  else if(repswd.value==""){alert("Password can't be empty!!");return false;}
  else if(pswd.value.length<6){alert("Password can't be less than 6 characters!!");return false;}
else if(pswd.value!=repswd.value){alert("Password doesn't match!!");return false;}

}
