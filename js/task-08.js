const formRef = document.querySelector("form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(ev) {
  ev.preventDefault();
  const {elements: { email, password }} = ev.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please, fill in all fields!");
   // console.log("Please, fill in all the fields!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  ev.currentTarget.reset();
}
