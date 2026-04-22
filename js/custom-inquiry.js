const form = document.querySelector("#form");
const ordersList = [];

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  ordersList.push(dataObject);
  let name = dataObject.name;
  let inquiry = dataObject.inquire;
  let flavor = dataObject.flavor;
  let comments = dataObject.comments;
  let email = dataObject.user_email;
  let phone = dataObject.phonenumber;
  let message = `Thank you ${name}! We appreciate your interest in ${inquiry}. Your favorite coffee flavor is ${flavor} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`
  console.log(message);

  console.log(ordersList);
  form.style.display = "none"; //form disappears when submitted
	document.getElementById("output").textContent = message;

  form.reset();
}

form.addEventListener("submit", onFormSubmit);

