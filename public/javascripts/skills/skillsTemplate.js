function setTemplate(data){
  for(var i = 0; i < data.length; i++){
    $('.append-skill').append('<div class='+data[i].CLASS+'></div>');
    $('.append-skill').find('.'+data[i].CLASS).append(makeSkillTemplate(data[i]));
    setSKillColor(data[i]);
  }
}

function setSKillColor(data){
  $('.'+data.CLASS).find('.border-color').not('.more-code div').css('border-color',data.COLOR);
  $('.'+data.CLASS).find('.border-color').find('div').not('.more-code div').css('background-color',data.COLOR);
}

function makeSkillTemplate(data){
    return '<span class="v-title"><span class="skill-border border-color">'+data.TXT+'</span></span>'+makeStrokeTemplate(data.SKILL);
}

function makeStrokeTemplate(data){
  var template = '';

  for(var i = 0; i < data.length; i++){
    template += '<p>'+data[i].TXT+' <a class="tooltipped" data-position="right" data-delay="50" data-tooltip="'+data[i].INFO+'"><i class="material-icons info">info</i></a></p>';
    if(data[i].EXTRA == undefined){
    	template += makeSkillStroke(data[i]);
    }
    else{
      data[i].VALUE = calculateCoreValue(data[i].EXTRA);
      template += 
      makeSkillStroke(data[i])+'<div class="row extra"><div class="col s10 more-code">'+makeExtraSkillTemplate(data[i].EXTRA)+'</div></div><i class="small material-icons right show-more add-skills">add_box</i>';
    }
  }
  return template;
}

function calculateCoreValue(data){
	var sum = 0;
	for(var i = 0; i < data.length; i++){
		sum += data[i].VALUE;
	}
	return sum / data.length;
}
function makeExtraSkillTemplate(data){
  var template = '';
  for(var i = 0; i < data.length; i++){
    template += '<span>'+data[i].TXT+'</span>'+makeSkillStroke(data[i]);
  }
  return template;
}
function makeSkillStroke(data){
  return '<div class="skill border-color" ><div style="width:'+data.VALUE+'%;"></div></div>';  
}