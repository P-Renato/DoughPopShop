const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone-number");
const message = document.querySelector("#message");
const send = document.querySelector(".send");
const afterContact = document.querySelector(".after-contact");
const contactForm = document.querySelector("#contact-form");

// function sending data
/*async function sendData() {
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
    const port = window.location.port;
    window.location.href = `http://127.0.0.1:${port}/DoughPopShop/public/aftercontact.html`;
    //afterContact.style.display = "block";
    //contactForm.style.display = "none"

  } catch (err) {
    console.error("Error submitting data:", err);
  }
}

send.addEventListener("click", sendData);*/

document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Stop default form submission

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // ✅ 1. Send to your backend
    await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        message: message.value
      }),
    });

    // ✅ 2. Dynamically create and submit to FormSubmit
    const tempForm = document.createElement('form');
    tempForm.action = 'https://formsubmit.co/thi.vu@dci-student.org';
    tempForm.method = 'POST';

    for (const [key, value] of formData.entries()) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    }

    document.body.appendChild(tempForm);
    tempForm.submit();
  });