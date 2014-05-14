$(document).ready(function(){
  
   var off  = "http://localhost:3002";
   var on   = "http://localhost:3001"; 
   var toggle = null;

  function woop(){
  $('.button').click(function(){
	  
   var yo = $(this).attr('id');
    	if (yo == "on") {
     		toggle = on;
    	} else {
     	   	toggle = off ;
    	}
    $.get(toggle);
    });
  }
  woop();
});
  