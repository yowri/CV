function dateStr(date1,date2){
  if(date1 != 'N.A' && date2 != 'N.A'){
    return setDate(date1)+' - '+setDate(date2);
  }
  if(date1 != 'N.A' && date2 == 'N.A'){
    return setDate(date1)+' - '+'today';
  }
  else{
    return 'N.A';
  }
}
function setDate(date){
  var m = monthNames[date.getMonth() - 1];
  var y = date.getFullYear();

  return m+' '+y;
}
function checkNull(data){
  $.each(data, function(key,value){
    if(value == null){
      data[key] = 'N.A';
    }
  });
}