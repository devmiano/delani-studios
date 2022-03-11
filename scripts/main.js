import { formReset } from './reset';

var send = document.getElementById('send');

send.onclick = function () {
  var addName = document.getElementById('name').value;
  alert('We got your message ' + addName + ', Thank you for your feedback.');

  formReset();
};
