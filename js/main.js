// If user clicks anywhere outside of the modal, Modal will close
const gModalElement = document.getElementById("modal-wrapper");
const closeForm = document.getElementById("close-form");


window.addEventListener('click', (ev) => {
  if (ev.target === gModalElement || ev.target === closeForm ) {
    gModalElement.style.display = "none";
    $('#contact-form').trigger("reset");
    $('#contact-form').find('p').text('');
  }
})


function openModal() {
  gModalElement.style.display = 'block';
}