const form = document.querySelector("#form");
const ordersList = [];
  
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  ordersList.push(dataObject);

	let name = dataObject.name;
let welcomeMsg = `Welcome ${name}, you are now logged in...`;

  console.log(ordersList);
  console.log(welcomeMsg);

  form.style.display = "none";
  welcome.style.display = "block";
  

	document.getElementById("output").textContent = welcomeMsg;

  
  
  form.reset();
}




