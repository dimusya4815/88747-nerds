var link = document.querySelector(".footer-map .btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var fieldname = popup.querySelector("[name=name]");
var fieldemail = popup.querySelector("[name=email]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  fieldname.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});