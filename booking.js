function validateForm() {
  let x = document.forms["booking"]["name"].value;
  if (x === "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["booking"]["email"].value;
  if (y === "") {
    alert("Email must be filled out");
    return false;
  }
  let z = document.forms["booking"]["phone"].value;
  if (z === "") {
    alert("Phone number must be filled out");
    return false;
  }
}

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
