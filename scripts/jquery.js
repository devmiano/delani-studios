import $ from 'jquery';

// Toggle
$('#icon').on('click', function () {
  $('#img').toggle('slow');
});

// Toggle multiple elements

$('.icon-text').on('click', function () {
  $('.text').toggle('slow');
});

// activity animation for the activity cards
$('.card1').on('click', function () {
  $('.content1').toggle('fast');
});

$('.card2').on('click', function () {
  $('.content2').toggle('fast');
});

$('.card3').on('click', function () {
  $('.content3').toggle('fast');
});
