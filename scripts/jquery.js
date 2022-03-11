import $ from 'jquery';

$(function () {
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

  // activity animation for the portfolio cards

  $('#work1')
    .on('mouseenter', function () {
      $('#title1').show('fast');
    })
    .on('mouseleave', function () {
      $('#title1').hide('fast');
    });

  $('#work2')
    .on('mouseenter', function () {
      $('#title2').show('fast');
    })
    .on('mouseleave', function () {
      $('#title2').hide('fast');
    });

  $('#work3')
    .on('mouseenter', function () {
      $('#title3').show('fast');
    })
    .on('mouseleave', function () {
      $('#title3').hide('fast');
    });

  $('#work4')
    .on('mouseenter', function () {
      $('#title4').show('fast');
    })
    .on('mouseleave', function () {
      $('#title4').hide('fast');
    });

  $('#work5')
    .on('mouseenter', function () {
      $('#title5').show('fast');
    })
    .on('mouseleave', function () {
      $('#title5').hide('fast');
    });

  $('#work6')
    .on('mouseenter', function () {
      $('#title6').show('fast');
    })
    .on('mouseleave', function () {
      $('#title6').hide('fast');
    });

  $('#work7')
    .on('mouseenter', function () {
      $('#title7').show('fast');
    })
    .on('mouseleave', function () {
      $('#title7').hide('fast');
    });

  $('#work8')
    .on('mouseenter', function () {
      $('#title8').show('fast');
    })
    .on('mouseleave', function () {
      $('#title8').hide('fast');
    });
});
