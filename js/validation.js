$('#contact-form').on('submit', function (event) {

  $(this).find('p').text('');

  let emailRegExp = /^(?!.*\.\.)[\w.\-#!$%&'*+\/=?^_`{}|~]{1,35}@[\w.\-]+\.[a-zA-Z]{2,15}$/,
    phoneRegExp = /^[0-9]{1,15}$/,
    $name = $('#name'),
    $email = $('#email'),
    $phone = $('#phone'),
    $submit = $('#submit'),
    userData = {
      name: $name.val().trim(),
      email: $email.val().trim(),
      phone: $phone.val().trim()
    },
    isValid = true;

  $submit.attr('disabled', true);

  if (userData.name.length < 2 || userData.name.length > 50) {
    $name.next().text(' * Name is required minimum 2 characters');
    isValid = false;
  }

  if (!emailRegExp.test(userData.email)) {
    $email.next().text(' * A valid email is required');
    isValid = false;
  }

  if (!phoneRegExp.test(userData.phone)) {
    $phone.next().text(' * A valid phone is required');
    isValid = false;
  }


  if (!isValid) {
    $submit.attr('disabled', false);
  } else {

    $.ajax({
      url: 'app/server.php',
      type: 'POST',
      dataType: 'html',
      data: userData,
      success: function (res) {

        if (res == 1) {
          // approve 
        } else {
          // ‏show error to the user
        }
      }
    });

  }

  event.preventDefault();
});