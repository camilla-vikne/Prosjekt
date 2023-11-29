const picker = document.getElementById("date");
picker.addEventListener("input", function (e) {
  var day = new Date(this.value).getUTCDay();
  if ([6, 0].includes(day)) {
    e.preventDefault();
    this.value = "";
    alert("Weekends not allowed");
  }
});
