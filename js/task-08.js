const formItem = document.querySelector(".login-form");

formItem.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповни поля");
  }

  console.log (`email: ${email.value}, password: ${password.value}`);
  event.currentTarget.reset();
}