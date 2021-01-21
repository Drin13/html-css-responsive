function copyEmail() {
    var copyEmail = document.getElementById("email");
    copyEmail.select();
    copyEmail.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied Email: " + copyEmail.value);
  }

  function copyNumber() {
    var copyNumber = document.getElementById("number");
    copyNumber.select();
    copyNumber.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied Number: " + copyNumber.value);
  }
