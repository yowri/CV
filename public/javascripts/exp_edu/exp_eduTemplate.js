function setTemplate(data){
  
  for(var i = 1; i < data.length; i++){
    checkNull(data[i]);
    if(data[0].ICON == 'school'){
    	$('.append_education').append(getEduTemplate(data[i], data[0].ICON));
    } else if(data[0].ICON == 'computer') {
      $('.append_online').append(getEduTemplate(data[i], data[0].ICON));
    } else{
    	$('.append_experience').append(getExpTemplate(data[i]));
    }
  }
}

function getExpTemplate(data, icon){
  return '<div class="row offset"><i class="material-icons block">'+icon+'</i><div class="col m4"><p><i class="smaller material-icons">date_range</i>  '+dateStr(data.DATE_START,data.DATE_END)+'</p><p>function: '+data.FUNCTION+'</p><p>employement : '+data.EMPLOYEMENT+'</p></div><div class="col m8"><p class="bolder">'+data.TITEL+'<p><p>'+data.TXT+'</p></div></div>';
}

function getEduTemplate(data, icon){
  return '<div class="row offset"><i class="material-icons block">'+icon+'</i><div class="col m4"><p><i class="smaller material-icons">date_range</i>  '+dateStr(data.DATE_START,data.DATE_END)+'</p><p>Diploma: '+data.DIPLOMA+'</p><p>Level : '+data.LEVEL+'</p><p>Sector : '+data.SECTOR+'</p></div><div class="col m8"><p class="bolder">'+data.TITEL+'<p><p>'+data.TXT+'</p></div></div>';
}


