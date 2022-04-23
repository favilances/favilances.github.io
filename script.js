//aptal sıtenın aptal js si

$(window).on('resize', function() {

	var width = $(window).width();
  var vert_pad = ['300px', '150px', '50px'];

  var padding_socials = ['30px', '25px', '20px'];
  var img_width_socials = ['30px', '28px', '26px'];
  var i = 0;

	if (width <= 840) {
  	i = 2;
  } else if (width <= 1280) {
  	i = 1;
  } else {
  	i = 0;
  }
  
  $('.header').css('padding-left', vert_pad[i]);
  $('.header').css('padding-right', vert_pad[i]);
  
  $('.jumbo').css('padding-left', vert_pad[i]);
  $('.jumbo').css('padding-right', vert_pad[i]);
  
  $('.section').css('padding-left', vert_pad[i]);
  $('.section').css('padding-right', vert_pad[i]);
  
  $('.socials').css('padding-left', vert_pad[i]);
  $('.socials').css('padding-right', vert_pad[i]);
  $('.socials a').css('padding-left', padding_socials[i]);
  $('.socials a').css('padding-right', padding_socials[i]);
  $('.socials a img').css('width', img_width_socials[i]);
  
  $('.boxes').css('padding-left', vert_pad[i]);
  $('.boxes').css('padding-right', vert_pad[i]);
  
  $('.footer').css('padding-left', vert_pad[i]);
  $('.footer').css('padding-right', vert_pad[i]);

});


//aptal sıtenın preloader js sı
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
})
