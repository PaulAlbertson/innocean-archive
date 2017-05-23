<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>INNOCEANUSA "Wrap Party App"</title>
</head>

<script type="text/javascript">
	var uagent = navigator.userAgent.toLowerCase();
	
	  console.log("the user agent is:", uagent); 
	
	if (uagent.search("iphone") > -1 ||
		uagent.search("ipod") > -1 ||
		uagent.search("ipad") > -1 ||
		uagent.search("appletv") > -1) {
	    window.location = "https://itunes.apple.com/us/app/wrap-party/id567900686?ls=1&mt=8";  
	
	} else {
	   //window.location = "shag_comingsoon.html"; 
	}

</script>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script> 
<script type="text/javascript" src="../js/jquery.easing.1.3.js"></script> 
 
<script>

	$(document).ready(function($) {
		
		$('#hit').hover(function() {
			
			  $(this).css('cursor', 'pointer');
		
		}, function() {
			
			console.log("rollout");	
		});
		
	
		$('#hit').click(function() {
			
			   window.location = "https://itunes.apple.com/us/app/wrap-party/id567900686?ls=1&mt=8";  
		
		});
	});


</script>


<style>

	html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, del, dfn, em, img, ins, kbd, q, samp, small, strong, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, table, tbody, tfoot, thead, tr, th, td, article, aside, footer, header, nav, section {
	  margin:0;
	  padding:0;
	  border:0;
	  outline:0;
	  font-size:100%;
	  vertical-align:baseline;
	  background:transparent;
	}
	
	body {
	    -webkit-text-size-adjust:none;
	    font-family:sans-serif;
	    background:#000;
	    height:100%;
		width:100%;
	}
	
	#container {
		display:block;
		position:absolute;
		width: 100%;	
		height:100%;	
		top: 0;
		left: 0;
		background: #000 url('_img/comingsoon.jpg') center center no-repeat;
		background-size: 100%;
	}
	
	#hit {
		display:block;
		position:relative;
		width: 30%;	
		height: 30%;	
		opacity: 0;
		background-color: #0F3;
		top: 55%;
		left: 20%;
	}


</style>



</head>

<body >

	<div id="container">
     	<div id="hit"> </div>
    </div>

</body>
</html>