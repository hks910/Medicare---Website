const validasiregistrasi = () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");
    let kota = document.getElementById("kota");
    let jenisKelamin = "";
    const lowercase = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    if (name.value == "") {
      alert("Nama Harus diisi");
    }
    if (email == "") {
      alert("email Harus diisi dan sesuai dengan format email Contoh: asd@asd.com (Benar)asd@@com (Salah)");
      return false;
    } else if (email.split("@").length > 2 || email.split("@").length == 1) {
      alert("email harus memiliki @");
      return false;
    } else if (!email.split("@")[1].includes(".com")) {
      alert("email harus memiliki .com sesudah @");
      return false;
    }
    if (male.checked) {
      jenisKelamin = male.value = "male";
    } else if (female.checked) {
      jenisKelamin = female.value = "female";
    }
    if (jenisKelamin == "") {
      alert("jenis kelamin Harus dipilih");
    }
    if (kota.value == "") {
      alert("kota harus dipilih");
      return;
    }
    if (password.value == "") {
      alert("password harus diisi");
      return;
    } else if (!password.value.match(upperCaseLetters)) {
      alert("password harus mengandung Huruf Besar");
      return;
    } else if (!password.value.match(lowercase)) {
      alert("password harus mengandung Huruf kecil");
      return;
    } else if (!password.value.match(numbers)) {
      alert("password harus mengandung angka");
      return;
    } else if (password.value.length < 8) {
      alert("password harus memiliki 8 karakter");
      return;
    } else if (confirm.value == "") {
        alert("password harus di konfirmasi");
        return;
    } else if (confirm.value != password.value) {
        alert("password tidak sama");
        return;
      }

    account.push({ name: email, password: password.value });
    console.log(account);
  };