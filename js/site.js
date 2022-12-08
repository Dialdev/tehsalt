function galery_slider() {
 $('#big_image .active').animate({opacity:"0"},490,function(){
  obj=$('#big_image .active'); 
  obj2=obj.prev();
  obj.detach().prependTo('#big_image ').css('opacity','1').removeClass('active');
  obj2.addClass('active');
});
}

$(document).ready(function(){
	if (document.location.pathname == "/dostavka-krupnotonnazhnyim-avtotransportom.html") {
        $('#zhz-dostavka').click(function() {
			ym(20655661,'reachGoal','KT-DOSTAVKA');
			console.log('edc1e');
		});
    }
	if (document.location.pathname == "/zhd-dostavka.html") {
        $('#zhz-dostavka').click(function() {
			ym(20655661,'reachGoal','JD-DOSTAVKA');
			console.log('edc2e');
		});
    }
	if (document.location.pathname == "/dostavka-melkotonnazhnyim-avtotransportom.html") {
        $('#zhz-dostavka').click(function() {
			ym(20655661,'reachGoal','MT-DOSTAVKA');
			console.log('ed3ce');
		});
    }
	$('.btn-call').click(function() {
		ym(20655661,'reachGoal','contact-formmain');
		console.log('ed4ce');
	});
	$('.zakaz-tovara-input').click(function() {
		ym(20655661,'reachGoal','FAST-ZAKAZ');
		console.log('ed5ce');
	});
	$('#btn-callback').click(function() {
		ym(20655661,'reachGoal','zakaz_zvonka');
		console.log('ed6ce');
	});
});


/*
$(function() {
$('.produkcia_bottom_1').after("<div class='test'><div class='move'><a href='/dostavka-melkotonnazhnyim-avtotransportom.html'><img src='/img/l3.png' /></a><a href='/dostavka-krupnotonnazhnyim-avtotransportom.html'><img src='/img/l2.png' /></a><a href='/zhd-dostavka.html'><img src='/img/l1.png' /></a></div></div>");

$('.produkcia_bottom_1').click(function(){
    /*
if ($(this).hasClass('active')) {
$(this).parent("td").parent("div").find('.test').animate({"width": "-=183px"}, "slow",function(){$(this).parent().find('.produkcia_bottom_2').css('display','block');});
$(this).toggleClass("active"); return false;
}
else {
$(this).parent().parent().find('.produkcia_bottom_2').css('display','none');
$(this).parent().parent().find('.test').animate({"width": "+=183px"}, "slow");
$(this).toggleClass("active"); return false;
}
*/
/*
if ($(this).hasClass('active')) {
    $(this).parent("").parent("").find('.test').animate({"width": "-=183px"}, "slow",function(){$(this).parent().find('.produkcia_bottom_2').css('display','block');});
    $(this).toggleClass("active"); return false;
} else {
$(this).parent("td").find('.produkcia_bottom_2').css('display','none');
$(this).parent("td").find('.test').animate({"width": "+=183px"}, "slow");
$(this).toggleClass("active"); return false;
}

});




  
});
*/

$(function() {
  $('.lb ').lightBox();
  if($('.zakaz-tpl .errors').length > 0 ){
    $('.errors').parent().fadeIn();
    $('.white_block').fadeIn();
  }
  $('#question-button').click(function(){
    $('#question-form').fadeIn();
    $('.white_block').fadeIn();
  });
  $('#question-form .close,.white_block1,.white_block').click(function(){
    $('#question-form').fadeOut();
    $('.thank-tpl').fadeOut();
    $('.white_block').fadeOut();
    $('.white_block1').fadeOut();
    $('.zakaz-tpl').fadeOut();
  });	

  setInterval(galery_slider,3000);
  $('.blue_btn.buy, .produkcia_bottom_1').click(function(){
    event.preventDefault();
    $('.zakaz-tpl').fadeIn();
    $('.white_block').fadeIn();
  });
  $('.zakaz-tpl .close, .white_block, .zakaz-thank-tpl .close, .white_block2').click(function(){
    $('.zakaz-tpl').fadeOut();
    $('.zakaz-thank-tpl').fadeOut();
    $('.white_block').fadeOut();
    $('.white_block2').fadeOut();
  });	

  $(".input__phone").inputmask("+7 (999) 999-99-99");



  $(document).ready(function(){
   $('.slider1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
   $('.releated-products').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    draggable:true,

  });
   $('.slider_otz').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
   $('.sert_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
   $('.main-slider__container').slick({
    slidesToShow: 1,
    sliderToScroll:1,
    arrows: true,
    dots:true,
    infinite: true,
    prevArrow: '<div class="main-slider__arrow main-slider__arrow_prev"></div>',
    nextArrow: '<div class="main-slider__arrow main-slider__arrow_next"></div>',
    dotsClass: 'main-slider__dots',

  });
   $('.recommendation__wrapper').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    prevArrow: '<div class="recommendationr__arrow recommendation__arrow_prev"></div>',
    nextArrow: '<div class="recommendationr__arrow recommendation__arrow_next"></div>',
  });


   $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

   $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
 });



});
$(function(){
  $('#feedbackForm1').submit(function(e){
    //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
    var form = $(this);
    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize()
    }).done(function(data) {
      var result = $(data).find('.js-feedbackSuccess');
      form.replaceWith(result);
    }).fail(function() {

    });

  });
  $('.zakaz-tpl form').submit(function(e){
    //отмена действия по умолчанию для кнопки submit
    e.preventDefault();
    var cont = $('.zakaz-tpl'); 
    var form = $(this);
    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize()
    }).done(function(data) {
      var result = '';
      // var result = $(data).find('.js-thank');
      $(data).each(function(){        
        if($(this).hasClass('js-thank')){
          result = $(this);
          setTimeout(function(){
            location.reload();
          }, 2500);
        }
      })
     cont.replaceWith(result);
   }).fail(function() {

   });

 });
});

$(function() {
        $( "#contact-form").submit(function(){
            yaCounter20655661.reachGoal('zakaz zvonka');
            console.log("zakaz zvonka ok");
        });
})




