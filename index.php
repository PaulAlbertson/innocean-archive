<?php require_once('bin/paths.php'); 
$ua = strtolower($_SERVER['HTTP_USER_AGENT']);
if(stripos($ua,'android') !== false || stripos($ua,'iphone') !== false  || stripos($ua,'ipod') !== false  ) { 

	// && stripos($ua,'mobile') !== false) {
	header('Location: http://m.innoceanusa.com');
	
	
	
	exit();
}

?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:og="http://ogp.me/ns#"
      xmlns:fb="http://www.facebook.com/2008/fbml">
	<head>
		<title>INNOCEAN USA</title>
		
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />
		
		<meta name="viewport" content="width=1024" />
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="format-detection" content="telephone=yes, email=yes">
		
		<meta name="keywords" content="innocean usa, innocean americas, innocean worldwide, full-service advertising agency, huntington beach california" />
		<meta name="description" content="A progressive, full-service advertising agency dedicated to creating, changing and improving brands and businesses through innovative ideas." />
		
		<link rel="shortcut icon" href="<?php echo $cdn_path; ?>images/favicon.ico" />
		<link rel="apple-touch-icon" href="<?php echo $cdn_path; ?>images/apple-touch-icon.png" />
		
		<link rel="dns-prefetch" href="//ajax.googleapis.com" />
		<link rel="dns-prefetch" href="//http://a.vimeocdn.com/" />
		
		<meta property="og:title" content="INNOCEAN USA" />
		<meta property="og:description" content="A progressive, full-service advertising agency dedicated to creating, changing and improving brands and businesses through innovative ideas." />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="INNOCEAN USA" />
		<meta property="og:image" content="<?php echo $cdn_path; ?>images/facebook-image.jpg" />
		<meta property="og:url" content="http://innoceanusa.com" />
		<meta property="fb:admins" content="100001692406158"/>
		
        <link rel="stylesheet" type="text/css" href="<?php echo $cdn_path; ?>css/style.css" >
		<link rel="stylesheet" type="text/css" media="all" href="<?php echo $cdn_path; ?>css/main.css" />
  		<link rel="stylesheet" type="text/css" href="<?php echo $cdn_path; ?>css/jquery.lightbox-0.5.css" media="screen" />
        
 
        
		<!--[if lt IE 7]>
			<script type="text/javascript" src="<?php echo $cdn_path; ?>js/libs/dd_belatedpng.js"></script>
			<script type="text/javascript">DD_belatedPNG.fix('img');</script>
		<![endif]-->
		
		<!--[if lt IE 9]>
			<script type="text/javascript" src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		
		<!--[if (gte IE 6)&(lte IE 8)]>
			<script type="text/javascript" src="<?php echo $cdn_path; ?>js/libs/selectivizr.js"></script>
		<![endif]-->
		
		<script type="text/javascript" src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
		<script type="text/javascript" src="<?php echo $cdn_path; ?>js/libs/font.js"></script>
		<script type="text/javascript" src="<?php echo $cdn_path; ?>js/jquery.libs.min.js"></script>
         <script src="http://code.jquery.com/ui/1.9.1/jquery-ui.js"></script>
		<script type="text/javascript" src="<?php echo $cdn_path; ?>js/site.0.3.1.js"></script>
	
        <!--Additional .js calls to from new site design -->
        <script type="text/javascript" src="./js/jquery.easing.1.3.js"></script>  
		<script type="text/javascript" src="./js/jquery.bxSlider.min.js"></script>
        <script type="text/javascript" src="./js/jquery.tmpl.min.js"></script>
        <script type="text/javascript" src="./js/jquery.timeago.js"></script>
        <script type="text/javascript" src="./js/jquery.colorbox-min.js"></script>
        <script type="text/javascript" src="./js/functions.js"></script>
		<script type="text/javascript" src="./js/jquery.lightbox-0.5.js"></script>
        <script type="text/javascript" src="./js/parseRSS.js"></script>
		<script type="text/javascript" src="./js/jquery.cycle.lite.min.js"></script>
            
		<!-- Asynchronous Google Analytics -->
		<script>
			var _gaq = [['_setAccount', 'UA-21679153-2'], ['_trackPageview']];
			(function(d, t) {
			var g = d.createElement(t),
			s = d.getElementsByTagName(t)[0];
			g.async = true;
			g.src = '//www.google-analytics.com/ga.js';
			s.parentNode.insertBefore(g, s);
			})(document, 'script');
		</script>
		
	<script>
		function returnPortfolio(){
      		   $("#portfolio-content").empty()
				$("#project-drawer").slideUp(500, function () {
					$("#project-category").text("");
					$("#project-title").text("");
					$("#portfolio-content").empty();
			});

		}

		</script>
    <link href="css/main.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		
		<!-- !floating nav top-->
		<nav>
			<div class="container_12">
				<div class="grid_12">
					<ul id="nav">
						<li class="nav-logo"><a href="#home"><span class="heavy">innocean</span> usa</a></li>
						<li class="nav-item"><a href="#portfolio">portfolio</a></li>
						<li class="nav-spacer">&nbsp;</li>
						<li class="nav-item"><a href="#about">about</a></li>
						<li class="nav-spacer">&nbsp;</li>
                        <li class="nav-item"><a href="#section-news">news</a></li>
						<li class="nav-spacer">&nbsp;</li>
						<li class="nav-item"><a href="#connect">connect</a></li>
						<li class="nav-spacer">&nbsp;</li>
						<li class="nav-item"><a href="#contact">contact</a></li>
                    </ul>
                     <div id="nav_cam"></div>
				</div>
			</div>
		</nav>
		
        <!-- !floating nav bottom-->
        <section id="nav_footer">
        		<div id="nav_group_footer">
                    <div id="twitter_footer"></div>
                    <div id="fb_footer"></div>
                     <div id="blog_footer"></div>
                    <div id="cam_footer"></div>
                 </div>
                <div id="cam_footer_feed"></div> 
        </section>
           <!-- !webcam -->
        
		<section id="webcam">
				  <div class="container_13">
				  	<div id="camfeed"></div>
				  </div>
		</section>
	      
		<!-- !header -->
		<header id="home"></header>
		<div id="homeOverlay"></div>
         
        
		<!-- !project drawer -->
		
		<section id="project-drawer">
		
			<div class="container_12">
				<div id="drawer-controls" class="grid_12">
					<div class="grid_11 alpha">
						<p>
							<span id="project-category"></span>
							<span id="info-spacer"></span>
							<span id="project-title"></span>
						</p>
					</div>
					<div class="grid_1 omega">
						<a id="drawer-toggle" href="javascript:void(0)" title="close"></a>
					</div>
				</div>
			</div>
			<div id="portfolio-content"></div>
		</section>
		
		<!-- !portfolio -->
		<section id="portfolio">
			<div class="container_12">
				<div id="portfolio-nav" class="grid_12">
					<ul>
						<li class="nav-item"><a id="campaigns-toggle" href="#campaigns-holder" rel="campaigns">Portfolio</a></li>
					</ul>
				</div>
				
				<div class="clear"></div>
				
				<div id="campaigns-holder" class="grid_12 grid-holder">
					<ul id="campaigns-grid" class="jcarousel-skin-grid"></ul>
					<div class="grid-controls">
						<ul class="item-nav"></ul>
					</div>
				</div>
				<div id="broadcast-holder" class="grid_12 grid-holder">
					<ul id="broadcast-grid" class="jcarousel-skin-grid"></ul>
					<div class="grid-controls">
						<ul class="item-nav"></ul>
					</div>
				</div>
				<div id="print-holder" class="grid_12 grid-holder">
					<ul id="print-grid" class="jcarousel-skin-grid"></ul>
					<div class="grid-controls">
						<ul class="item-nav"></ul>
					</div>
				</div>
				<div id="digital-holder" class="grid_12 grid-holder">
					<ul id="digital-grid" class="jcarousel-skin-grid"></ul>
					<div class="grid-controls">
						<ul class="item-nav"></ul>
					</div>
				</div>
				<div id="casestudies-holder" class="grid_12 grid-holder">
					<ul id="casestudies-grid" class="jcarousel-skin-grid"></ul>
					<div class="grid-controls">
						<ul class="item-nav"></ul>
					</div>
				</div>
				
			</div>
		</section>
        <!-- !pier graphic -->
		<section id="pier" class="orange"></section>
		<!-- !about -->
		<section id="about" class="orange">
			<div class="container_12">
				<div id="about-nav" class="grid_12 orange">
					<ul>
						<li class="nav-item orange"><a id="about-toggle" href="#about-us">About</a></li>
                        <li class="nav-spacer orange">&nbsp;</li>
						<li class="nav-item orange"><a id="gallery-toggle" href="#about-gallery">Where We Work</a></li>    
                        <li class="nav-spacer orange">&nbsp;</li>
						<li class="nav-item orange"><a id="artgallery-toggle" href="#about-artgallery">CURRENT<sup><span class="trade">&trade;</span></sup>  : THE <span class="orange">INNOCEAN</span> Art Gallery</a></li>
                     	<li class="nav-spacer orange">&nbsp;</li>
                     	<li class="nav-item orange"><a id="locations-toggle" href="#about-locations">Locations</a></li>   
                     </ul>
				</div>
			</div>
			<div id="about-container">
				
				<!-- about us -->
				<div id="about-us" class="container_12">
					<div id="headline" class="grid_12" style="width:940px; height:700px; position:relative;"  >
	
						<div style="top:0px; position:relative;"><img src="<?php echo $cdn_path; ?>content/about/media/about-us-content.gif" alt="Ideas that make a difference." width="940" height="700" /></div>
						<a href="images/innoceanoffices.jpg" class="lightbox" title="Our US Locations"><div id="mapButton"></div></a>
					</div>
					<div class="clear"></div>
				</div>
				     
				<!-- gallery -->
				<div id="about-gallery"></div>
         
               <!-- artgallery  -->
			    <div id="about-artgallery" class="artgallery">
             		  <div id="artthumbs"> 
                      		<div class="overview">
                               <h1>CURRENT<sup><span class="trade">&trade;</span></sup> : THE INNOCEAN ART GALLERY</h1>  
                          	   <h2>CURRENT<sup><span class="trade">&trade;</span></sup>   was created by a group of passionate and innovative employees who saw an opportunity to transform a street level window into a community art gallery.  Inspired by the regenerative force of the flow of water in the pacific, CURRENT<sup><span class="trade">&trade;</span></sup>   exemplifies the <span class="orange">INNOCEAN</span> commitment to showcasing the best local and national artistic talent.</h2> 
                              <div class="image">  
                              		
                              </div>
                             </div>
                          <div class="photos">
                                <div class="artistOverviewImage"></div>
                                <ul></ul>    
                         </div>
                       </div> 
                      <div id="artlisting"> 
                        <div class="title">Featured Artists </div> 
                        <div class="artists">
                        	<ul></ul>
                        </div> 
                      </div> 
               </div>
                <!-- locations  -->
			    <div id="about-locations">
			    	<div id="locationimages">
			    		<div class="image"></div>
			    	</div>
			    	<div id="locationlisting"> 
                        <div class="title">US Locations</div> 
                        <div id="huntingtonDiv" class="locationName">Huntington Beach, CA</div>
                        <div id="chicagoDiv" class="locationName">Chicago, IL</div>
                        <div id="detroitDiv" class="locationName">Detroit, MI</div>
                        <div id="newyorkDiv" class="locationName">New York City, NY</div>
                        <div id="dallasDiv" class="locationName">Dallas, TX</div>
                        <div id="hawaiiDiv" class="locationName">Kapalua, HI</div>
					</div>
					<div id="locationInfoBox">
						<div id="locationInfoBoxContent">
							<p id="innoceanTitle" class="orangeTxt">INNOCEAN <span id="locationCity" class="blackTxt">HUNTINGTON BEACH</span></p>
							<!-- <p id="locationTitle" class="blackTxt">180 5TH Street | Suite 200 | Huntington Beach, CA 92648</p> -->
							<p id="locationStreetAddress" class="blackTxt">180 5TH Street | Suite 200 | Huntington Beach, CA 92648</p>
							<p id="locationPhone" class="blackTxt">P. 714.861.5200 | F. 714.861.5337</p>
						</div>
					</div>
			    </div>              
           </div>   

		</section>
		 <!-- !riptide graphic -->
		<section id="riptide" class="orange"></section>
		<!-- !about -->
        <section id="section-news" class="darkgray">
     		<div class="container_12">
				<div id="section-news-nav" class="grid_12 orange">
					<ul>
						<li class="nav-item orange"><a id="news-toggle" href="#news">News</a></li>

                     </ul>
			</div>
                <div id="news" class="grid_12" ></div>
                <div id="feedEmptyContainer" ></div>
        	</div>
        </section>
        
        
		<!-- !connect -->
		<section id="connect">
        		
			<div class="container_12"> 
 			<h2>Social</h2> 
 			
             <div  class="grid_6">
 
             	   <iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Finnoceanusa&amp;width=460&amp;height=438&amp;colorscheme=light&amp;show_faces=false&amp;border_color=%23aaa&amp;stream=true&amp;header=false&amp;appId=396347243753624" scrolling="no" frameborder="0" style="display:block; border:none; background-color:#fff; overflow:hidden; width:460px; height:438px;"></iframe>

			  </div >
              <div  class="grid_6">
                <iframe  scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:465px; height:438px;" src="<?php echo $cdn_path; ?>twitter.html"> </iframe>
			 </div >
          </div > 
        </section>  
          
      	<section id="contact">
      	  <div class="container_12">
				<div class="grid_6">
					<h2>Contact</h2>
					<address>
						<p>
							Innocean USA
							<br />
							180 5th. Street
							<br />
							Suite 200
							<br />
							Huntington Beach
							<br />
							California, 92648
						</p>
						<p>
							P 714.861.5200
							<br/>
							F 714.861.5337
						</p>
					</address>
				</div>
				<div class="grid_6">
					<h2>Careers</h2>
					<ul id="job-list"></ul>
					<p><strong>Submit your resume:</strong></p>
					<p><a href="mailto:resumes@innoceanusa.com">resumes@innoceanusa.com</a></p>
				</div>
				<div class="clear"></div>
				<div class="grid_6">
					<h2>Business Inquiries</h2>
					<h3>Chris Georgieff <span>&mdash; Account Director</span></h3>
					<p class="contact-info">
						(714) 861-5409
						<br />
						cgeorgieff@innoceanusa.com
					</p>
					<form id="business" method="post" action="bin/business-email.php">
						<p>
							<input class="left name" name="name1" type="text" maxlength="40" value="Name" />
							<input class="right email" name="email1" type="text" maxlength="40" value="Email" />
						</p>
						<p>
							<textarea class="message" name="message1" cols="1" rows="6">Message</textarea>
							<br />
							<input id="business-press" type="submit" value="Submit" />
						</p>
						<p class="status"></p>
					</form>
				</div>
				<div class="grid_6">
					<h2>Press Inquiries</h2>
					<h3>Tania Weinkle <span>&mdash; Director of Public Relations</span></h3>
					<p class="contact-info">
						(714) 861-5389
						<br />
						tweinkle@innoceanusa.com
					</p>
					<form id="press" method="post" action="bin/press-email.php">
						<p>
							<input class="left name" name="name2" type="text" maxlength="40" value="Name" />
							<input class="right email" name="email2" type="text" maxlength="40" value="Email" />
						</p>
						<p>
							<textarea class="message" name="message2" cols="1" rows="6">Message</textarea>
							<br />
							<input id="submit-press" type="submit" value="Submit" />
						</p>
						<p class="status"></p>
					</form>
				</div>
			</div>
		 </div > 	
		</section>
		
		<!-- !footer -->
		<footer>
			<div id="legal" class="container_12">
				<div class="grid_3"><a href="javascript:void(0)" id="offices-toggle">Global Office Locations</a></div>
                <div class="grid_5"><a href="http://inside.innoceanusa.com"  target="_new" id="employeeIntranet">Employee Intranet</a></div>
				<div class="grid_4" style="float:right"><p class="copyright">&copy; 2013 <span class="logo">INNOCEAN USA.</span> All Rights Reserved.</p></div>
			</div>
			<div id="offices">
				<div class="container_12">
					<div class="grid_12">
						<ul>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide Korea">Korea</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide Canada">Canada</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide Germany">Germany</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide United Kingdom">United Kingdom</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide Spain">Spain</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide France">France</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide Italy">Italy</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide Turkey">Turkey</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide Russia">Russia</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide Australia">Australia</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide India">India</a></li>
							<li class="office-location"><a href="http://innocean.com/en/network/networkMain.aspx" target="_blank" title="Innocean Worldwide China">China</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	</body>
</html>