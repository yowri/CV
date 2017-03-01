//document ready
function init(){
    anim();
    sideMenu();
    $('#content').load('about_me');
}

function navigatTo(pagina,setText){
  $('#width-text').text(setText);

  $('#content').hide().load(pagina).show();
}
function sideMenu(){
  $('.side-menu').on('click',function(event){
       event.stopPropagation();
       $('#myNav').fadeIn(200);
       $(this).hide();
  });

  $('html').click(function() {
       $('#myNav').fadeOut(200);
       $('.side-menu').show();
   } );
}
function anim(){
  $('.button-collapse').sideNav('hide');

  var navElements = $('#myNav').find('li');

  navElements.click(function(){
    if(navElements.hasClass('active-page')){
      navElements.removeClass('active-page');
      $('.li-border').removeClass('border-dotted');
    }
    $(this).addClass('active-page');
    $(this).find('.li-border').addClass('border-dotted');
  });

  console.log($('#skills').hasClass('active-page'));
}
