jQuery(function(){
  
  //Flexslider Custom
  jQuery('.flexslider').flexslider({
    animationLoop: true,
    slideshow: true,
    slideshowSpeed: 10000,
    animationSpeed : 900
  })

  //Main menu toggle
  jQuery('h3.menu-toggle').click(function(){
    jQuery('.header ul.main-navigation').slideToggle("slow");
  });

  jQuery('h3.menu-toggle, .sidebar h3.heading').click(function(){
    jQuery(this).toggleClass( 'open' );
    jQuery('div.open').slideToggle("slow");
  });
});

$(function() {
  var pgurl = window.location.href.substr(window.location.href
     .lastIndexOf("/") + 1);
  $(".main-navigation .nav-item a").each(function() {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
    $(this).addClass("active");
  })
});