$(function () {
  $menuOut = false;

  $('.MenuArrow i').on('click', function () {
    if ($menuOut) {
      $('nav .MenuArrow').css({
        transform: 'scaleX(1) translateY(-50%)',
      })
      $('nav').animate({
        left: '0px'
      }, 300);
      $menuOut = false;
    } else {
      $('nav .MenuArrow').css({
        transform: 'scaleX(-1) translateY(-50%)',
      })
      $('nav').animate({
        left: '350px',
      }, 300);
      $menuOut = true;
    }
  });

});
