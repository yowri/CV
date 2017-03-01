function init(){
	anim();
	extra();
}
function anim(){
  $('.tooltipped').tooltip({delay: 50});
  $('.material-tooltip').css('left','300px !important');
  $('.info').hover(function(){
      var item = $(this).closest("p").find(".extra-info").toggle();
  });
}
function extra(){
  $('.extra').hide();

  $('.extra').next().click(function(){
    if($(this).prev().css('display') == 'none'){
      $('.extra').next().prev().hide('ease');
      $('.extra').next().text('add_box');
      $(this).prev().show('ease');
      $(this).text('indeterminate_check_box');
      $(this).css('color','#DEDEDE');
    }
    else{
       $(this).prev().hide('ease');
       $(this).text('add_box');
       $(this).css('color','#FF5252');
    }
  });
}