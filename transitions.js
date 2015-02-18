/* ========================================================
=================FADE OUT FUNCTION========================= */

$(document).ready(function(){

  $('.fadein').css('opacity', 0.5);
  
  $('.fadein').mouseenter(function(){
    $(this).fadeTo('fast', 1);
  });
  
  $('.fadein').mouseleave(function(){
    $(this).fadeTo('fast', 0.5);
  });

});		//END documentdotreadyfunction

/* ========================================================
=================FADE IN FUNCTION========================== */

$(document).ready(function(){

  $('.fadeout').mouseenter(function(){
    $(this).fadeTo('fast', 0.5);
  });
  
  $('.fadeout').mouseleave(function(){
    $(this).fadeTo('fast', 1);
  });

});		//END documentdotreadyfunction

/* ========================================================
=================COLOR CHANGE FUNCTION========================== */

$(document).ready(function(){

  $('.color').mouseenter(function(){
    $(this).css({background: '#53a7ea'});
  });
  
  $('.color').mouseleave(function(){
    $(this).css({background: '#676470'});
  });

});		//END documentdotreadyfunction

/* ========================================================
==================ROTATE FUNCTION========================== */

$(document).ready(function(){

  $('.rotate').mouseenter(function(){
    $(this).css({transform: 'rotateZ(-30deg)'})
  });
  
  $('.rotate').mouseleave(function(){
    $(this).css({transform: 'rotateZ(0deg)'})
  });

});   //END documentdotreadyfunction

/* ========================================================
===================SHRINK/ENLARGE FUNCTIONS================ */

$(document).ready(function(){

  $('.shrink').mouseenter(function(){
    $(this).css({transform: 'scale(0.8)'})
  });
  
  $('.shrink').mouseleave(function(){
    $(this).css({transform: 'scale(1)'})
  });

});   //END documentdotreadyfunction

$(document).ready(function(){

  $('.grow').mouseenter(function(){
    $(this).css({transform: 'scale(1.25)'})
  });
  
  $('.grow').mouseleave(function(){
    $(this).css({transform: 'scale(1)'})
  });

});   //END documentdotreadyfunction

/* ========================================================
===================CIRCLE TRANSFORM FUNCTION=============== */

$(document).ready(function(){

  $('.circle').mouseenter(function(){
    $(this).css({borderRadius: '50%'});
  });
  
  $('.circle').mouseleave(function(){
    $(this).css({borderRadius: '0%'});
  });

});   //END documentdotreadyfunction

/* ========================================================
===================TOP INSET BORDER FUNCTION=============== */

$(document).ready(function(){

  $('.boxinset').mouseenter(function(){
    $(this).css({boxShadow: 'inset 0 126px #53a7ea'});
  });
  
  $('.boxinset').mouseleave(function(){
    $(this).css({boxShadow: 'none'});
  });

});   //END documentdotreadyfunction

/* ========================================================
=====================INSET BORDER FUNCTION================= */     

$(document).ready(function(){

  $('.box').mouseenter(function(){
    $(this).css({boxShadow: 'inset 0 0 0 26px #53a7ea'});
  });
  
  $('.box').mouseleave(function(){
    $(this).css({boxShadow: 'none'});
  });

});   //END documentdotreadyfunction

/* ========================================================
=====================SLIDE FUNCTION======================= */

$(document).ready(function(){

  $('.slide').mouseenter(function(){
    $(this).css({marginLeft: '25px'});
  });
  
  $('.side').mouseleave(function(){
    $(this).css({marginLeft: '0px'});
  });

});   //END documentdotreadyfunction
