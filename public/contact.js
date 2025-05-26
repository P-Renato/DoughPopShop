const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone-number");
const message = document.querySelector("#message");
const send = document.querySelector(".send");


// function sending data
async function sendData() {
  const url = 'http://localhost:5000/contact';
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    }),
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    window.location.href = "http://localhost:5000/aftercontact.html";
  } catch (err) {
    console.error("Error submitting data:", err);
  }
}

send.addEventListener("click", sendData);