const submitButton = document.getElementById("submit");
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value === "") {
    error.innerHTML = "Oops! Please add your email";
  } else if (!re.test(email.value)) {
    error.innerHTML = "Oops! Please check your email";
  }
});
