document.getElementById("login-submit").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-pass").value;
  if (email === "ras@gmail.com" && password === "rashedul") {
    window.location.href = "banking.html";
    document.getElementById("warnings").innerText = "success";
  } else if (email === "programming@gmail.com" && password === "programming") {
    window.location.href = "banking.html";
    document.getElementById("warnings").innerText = "success";
  } else if (email === "rashedul360rs@gmail.com" && password === "rashedul") {
    window.location.href = "banking.html";
    document.getElementById("warnings").innerText = "success";
  } else {
    document.getElementById("warning").innerText = "invalid input";
  }
});

//banking page
