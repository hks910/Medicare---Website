function Validasilogin() {
    let email = document.getElementById("emailinput").value;
    let password = document.getElementById("passwordinput");
    let lowercase = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    if (email == "") {
      alert("email harus diisi");
      return false;
    } else if (email.split("@").length > 2 || email.split("@").length == 1 || !email.split("@")[1].includes(".com")) {
      alert("email tidak valid");
      return false;
    } else if (password.value == "") {
        alert("password harus diisi"); 
        return false;
    } else if (!password.value.match(upperCaseLetters) || !password.value.match(lowercase) || !password.value.match(numbers) || password.value.length < 8 ) {
        alert("password tidak valid");
        return false;
      } 


    
  }
  