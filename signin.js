const signinBtn = document.querySelectorAll(".enterSignIn");
const signinModal = document.getElementById("signinModal");
const closeBtn2 = document.getElementById("closeBtn2");
//const registerModal = document.getElementById("registerModal");
//const signInButton = document.querySelector(".have-acc-text-2");

signInButton.addEventListener("click", () => {
  registerModal.style.display = "none";
});

signinBtn.forEach(button => {
  button.addEventListener("click", () => {
    signinModal.style.display = "block";
  });
});

//closeBtn2.onclick = function() {
//  registerModal.style.display = "none";
//  signinModal.style.display = "none";
//}

window.onclick = function(event) {
  if (event.target == signinModal) {
    registerModal.style.display = "none";
    signinModal.style.display = "none";
  }
}

$('#registerModal').on('hidden.bs.modal', function (e) {
    if ($('#signinModal').hasClass('show')) {
      $('body').addClass('modal-open');
    }
  });

  $('#signinModal').on('show.bs.modal', function (e) {
    $('#registerModal').modal('hide');
  });

  $("#signinModal").modal({
  });

//signInButton.addEventListener("click", () => {
//  registerModal.style.display = "none";
//  signinModal.style.display = "block";
//});
//
//closeBtn2.onclick = function() {
//  signinModal.style.display = "none";
//  registerModal.style.display = "block";
//}
//
//window.onclick = function(event) {
//  if (event.target == signinModal) {
//    signinModal.style.display = "none";
//    registerModal.style.display = "block";
//  }
//}