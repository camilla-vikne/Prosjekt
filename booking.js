//ensures the information filled in the form
//is correct and follows the required formatting

function validateForm() {
  let x = document.forms["booking"]["name"].value;
  if (x === "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["booking"]["email"].value;
  if (y === "") {
    alert("Email must be filled out. (@ and .domain required)");
    return false;
  }
  let z = document.forms["booking"]["phone"].value;
  if (z === "") {
    alert("Phone number must be filled out. 8 digits required (12345678).");
    return false;
  }
}

//functionality for the hamburger menu present
//on smaller screens

const menuSlide = document.getElementById("menuSlide");

function hamburger() {
  if (menuSlide.classList.contains("sidebar")) {
    menuSlide.classList.remove("sidebar");
    menuSlide.classList.add("sidebar-active");
  } else {
    menuSlide.classList.remove("sidebar-active");
    menuSlide.classList.add("sidebar");
  }
}
