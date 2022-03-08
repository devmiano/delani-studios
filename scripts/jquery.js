import $ from 'jquery';

// Toggle
$('#icon').on('click', function () {
  $('#img').toggle('slow');
});

$('.icon-text').on('click', function () {
  $('.text').toggle('slow');
});
