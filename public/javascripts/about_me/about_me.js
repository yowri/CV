function init(){
	setToMobileDevice();
	responsive();
}
function setProfileImageSize(){
  var fotoHeight = $('#myFoto').width();
  var backgroundHeight = $('.background').width();
  $('#myFoto').height(fotoHeight);
  $('.background').height(backgroundHeight);
}
function setToMobileDevice(){
  var contentWidth = $('#content').width();

  if(contentWidth < 920){
    $('body').addClass('under-about-me');
    $('.m-foto').removeClass('s3');
    $('.m-foto').addClass('s7');
    $('.m-foto').addClass('mobile-foto');
    $('.m-text').removeClass('s9');
    $('.m-text').addClass('s12');
    $('.personal-txt').removeClass('s7');
    $('.personal-txt').addClass('s12');
    $('.personal-data').removeClass('s5');
    $('.personal-data').addClass('s12');
  }
  else{
    $('.m-foto').removeClass('s7');
    $('.m-foto').addClass('s3');
    $('.m-foto').removeClass('mobile-foto');
    $('.m-text').removeClass('s12');
    $('.m-text').addClass('s9');
    $('.personal-txt').removeClass('s12');
    $('.personal-txt').addClass('s7');
    $('.personal-data').removeClass('s12');
    $('.personal-data').addClass('s5'); 
  }
  setProfileImageSize();
}
function responsive(){
  $( window ).resize(function() {
    setToMobileDevice();
  });
}