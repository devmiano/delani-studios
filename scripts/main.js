import { formReset } from './reset';

var send = document.getElementById('send');
var output = document.getElementById('output');

send.onclick = function () {
  var addName = document.getElementById('name').value;
  output.innerHTML =
    'We got your message ' + addName + ', Thank you for your feedback.';

  formReset();
};
