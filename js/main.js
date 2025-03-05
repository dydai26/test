$(document).ready(function () {

  /* scroll */
  $('a[href^=\'#\']').click(function () {
    var _href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });

  /* phone */
  function phoneMask() {
    var phoneInput = $('input[name="phone"]');

    phoneInput.on('input change', function (e) {
      if (e.currentTarget.value.length === 17) {
        e.currentTarget.setCustomValidity('');
        return;
      }

      e.currentTarget.setCustomValidity('Phone number is invalid');
    });

    phoneInput
      .mask(
        '+380 99 999-99-99',
        {
          translation: {
            0: null,
            9: { pattern: /\d/ }
          }
        }
      );
  }

  /* timer */
  function update() {
    var Now = new Date(), Finish = new Date();
    Finish.setHours(23);
    Finish.setMinutes(59);
    Finish.setSeconds(59);
    if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
      Finish.setDate(Finish.getDate() + 1);
    }
    var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
    var hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    var min = Math.floor(sec / 60);
    sec -= min * 60;
    $('.timer .hours').text(pad(hrs));
    $('.timer .minutes').text(pad(min));
    $('.timer .seconds').text(pad(sec));
    setTimeout(update, 200);
  }

  function pad(s) {
    return ('00' + s).substr(-2)
  }

  update();
  // phoneMask();

});
