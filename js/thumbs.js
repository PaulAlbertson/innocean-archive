$(document).ready(function () {


	 console.log("LOAD");
	 
	  $("#equusipadownersmanuel").hover(
    				function() {
    				
    				   console.log("over: " +  $(this).attr('id') );
    					//animate the bar in
    					$(this).next().animate({
 							   marginTop: '-45px',
 							  }, 250, function() {
   							 	// Animation complete.
 						});

    				 }, function() {
    					
    					 console.log("out: " +  $(this).attr('id') );	
    					//animate the bar in
    					$(this).next().animate({
 							   marginTop: '0px',
 							  }, 500, function() {
   							 	// Animation complete.
 						});
    				}	
  		 );

	
	  $("#veloster").hover(
    				function() {
    				
    				   console.log("over: " +  $(this).attr('id') );
    					//animate the bar in
    					$(this).next().animate({
 							   marginTop: '-45px',
 							  }, 250, function() {
   							 	// Animation complete.
 						});

    				 }, function() {
    					
    					 console.log("out: " +  $(this).attr('id') );	
    					//animate the bar in
    					$(this).next().animate({
 							   marginTop: '0px',
 							  }, 500, function() {
   							 	// Animation complete.
 						});
    				}	
  		 );
  		 
  		 
});