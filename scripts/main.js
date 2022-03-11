function formReset() {
  document.getElementById('form_data').reset();
}

function addForm() {
  var addName = document.getElementById('name').value;

  output = alert(
    'We got your message ' + addName + ', Thank you for your feedback.'
  );

  formReset();
}
