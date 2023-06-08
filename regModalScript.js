const registerBtn = document.getElementById("registerButton");
const registerModal = document.getElementById("registerModal");
const closeBtn = registerModal.querySelector(".close");
//const signInButton = document.querySelector(".have-acc-text-2");
//const closeBtn2 = document.getElementById("closeBtn2");

registerBtn.addEventListener("click", () => {
  registerModal.style.display = "block";
});


closeBtn.addEventListener("click", () => {
  registerModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === registerModal) {
    registerModal.style.display = "none";
  }
});

//signInButton.addEventListener("click", () => {
//  registerModal.style.display = "none";
//  signinModal.style.display = "block";
//});

closeBtn2.onclick = function() {
  signinModal.style.display = "none";
  registerModal.style.display = "block";
}

//window.onclick = function(event) {
//  if (event.target == signinModal) {
//    signinModal.style.display = "none";
//    registerModal.style.display = "block";
//  }
//}