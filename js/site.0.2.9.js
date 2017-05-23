
$(document).ready(function () {
    function p(a, c) {
        $(a).jcarousel({
            visible: 1,
            scroll: 1,
            auto: 0,
            animation: 700,
            easing: "easeInOutQuint",
            wrap: null,
            itemFallbackWidth: 940,
            initCallback: function (d) {
                $(a + " .portfolio-item").each(function () {
                    $(this).find("img").attr("alt") != "portfolio-item" && $($(this).find("img")).captify({
                        animation: "always-on"
                    })
                });
                if (d.options.size > 1) {
                    for (var b = 1; b <= d.options.size; b++) $(c + " .item-nav").append('<li><a href="javascript:void(0)" rel="' + b + '">0' + b + "</a></li>");
                    $(c + " .item-nav li a").click(function () {
                        $(this).removeClass("normal").addClass("selected");
                        d.scroll(parseInt($(this).attr("rel")));
                        _gaq.push(["_trackEvent", "Portfolio-Grid", "Page-Navigation", a])
                    });
                    $(c + " .item-nav").css("margin-left", - ($(c + " .item-nav").width() / 2));
                    $(a).swipe({
                        swipeLeft: function () {
                            d.next();
                            _gaq.push(["_trackEvent", "Portfolio-Grid", "Swipe-Left", a])
                        },
                        swipeRight: function () {
                            d.prev();
                            _gaq.push(["_trackEvent", "Portfolio-Grid", "Swipe-Right", a])
                        },
                        triggerOnTouchEnd: !0,
                        allowPageScroll: "auto"
                    })
                }
            },
            itemFirstInCallback: {
                onAfterAnimation: function (a, b, f) {
                    $(c + " .item-nav li a").removeClass("selected").addClass("normal");
                    $(c + " .item-nav li a").eq(f - 1).removeClass("normal").addClass("selected")
                }
            },
            buttonNextHTML: null,
            buttonPrevHTML: null
        })
    }
    function k(a) {
        switch (a) {
         case "portfolio":
            g($(e).find("campaigns"), "#campaigns-grid", "#campaigns-holder .grid-controls");
            break;
        case "campaigns":
            g($(e).find("campaigns"), "#campaigns-grid", "#campaigns-holder .grid-controls");
            break;
        case "broadcast":
            g($(e).find("broadcast"), "#broadcast-grid", "#broadcast-holder .grid-controls");
            break;
        case "print":
            g($(e).find("print"), "#print-grid", "#print-holder .grid-controls");
            break;
        case "digital":
            g($(e).find("digital"), "#digital-grid", "#digital-holder .grid-controls");
            break;
        case "casestudies":
            g($(e).find("casestudies"), "#casestudies-grid", "#casestudies-holder .grid-controls")
        }
    }
    function g(a, c, d) {
    	
    	
        for (var b = $(a).children().length, b = Math.round(b / 6), f = $(a).attr("category"), q = ["left", "center", "right"], e = 1; e <= b; e++) $(c).append("<li></li>");
        $(a).find("item").each(function (a) {
        	
            var b = $(this).find("title").text(),
                d = $(this).find("href").text(),
                e = $(this).find("showCaption").text() === "true" ? b : "portfolio-item",
                g = $(this).find("thumb").text(),
            	aId = d.split("#"),
            	aIdparent = aId[1] + "parent",
            	              
              b = '<a class="portfolio-item ' + q[a % 3] + '" data-rel="' + f + ":" + b + '" href="' + d + '" id="'  +  aIdparent + '"><img src="' + g + '" id="' + aId[1] + '" width="306" height="179" alt="' + e + '" /></a>';  
              a < 6 ? $(c).find("li").eq(0).append(b) : a < 12 ? $(c).find("li").eq(1).append(b) : a < 18 ? $(c).find("li").eq(2).append(b) : a < 24 ? $(c).find("li").eq(3).append(b) : a < 30 ? $(c).find("li").eq(4).append(b) : a < 36 ? $(c).find("li").eq(5).append(b) : a < 42 ? $(c).find("li").eq(6).append(b) : a < 48 ? $(c).find("li").eq(7).append(b) : a < 54 ? $(c).find("li").eq(8).append(b) : a < 60 && $(c).find("li").eq(9).append(b)
       	
       		 //the hover tag is on the img's parent 
       		 $("#" + aIdparent).hover(
    				function() {
    				 
    				     //console.log("over: " +  $(this).attr('id') );
    					//animate the bar in
    					$(this).find('img').next().animate({
 							   marginTop: '-45px',
 							  }, 250, function() {
   							 	// Animation complete.
 						});

    				 }, function() {
    					
    					 //console.log("out: " +  $(this).attr('id') );	
    					//animate the bar in
    					$(this).find('img').next().animate({
 							   marginTop: '0px',
 							  }, 500, function() {
   							 	// Animation complete.
 						});
    				}	
  			  ); 
        });
          
        p(c, d)
    }
    
	
    
    function l(a, c) {
        var d = c.split(":");
        var aId = a.split(" ");
  
        if(aId[1] ==  "#experienceriptide" ) {
        	//console.log("use new background");
        	$("#project-drawer").css({"height" : "650px" , "overflow" : "hidden" , "background" : "#ff5600 url('../images/about-us-leadership.gif') center center no-repeat"});
        } else {
      		//console.log("use old background");
        	$("#project-drawer").css({"height" : "650px" , "overflow" : "hidden" , "background" : "#000000 url('../images/lines-dark.png') repeat"});
        }
            
        $("#project-category").text(d[0]);
        $("#project-title").text(d[1]);
        $("#portfolio-content").fadeTo(0, 0);
        $("#portfolio-content").load(a, function () {
            $("#portfolio-content").append('<div id="portfolio-controls"><ul id="item-nav"></ul><a href="javascript:void(0)" id="prev">&larr;</a><a href="javascript:void(0)" id="next">&rarr;</a></div>');
            $.getScript(m, function () {
                var a = parseInt(d[2]);
                isNaN(a) && (a = 1);
                $("#project-drawer #portfolio-content #portfolio-items").append('<li><img src="' + i + 'images/null.png" width="640" height="436" /></li>');
                new Filmstrip("#project-drawer #portfolio-content #portfolio-items", "#project-drawer #portfolio-content #portfolio-controls", a);
                $("#project-drawer #portfolio-content #portfolio-controls ul li, #project-drawer #portfolio-content #portfolio-controls #prev, #project-drawer #portfolio-content #portfolio-controls #next").click(function () {
                
                	

                    $("#portfolio-content iframe").each(function () {

                        $(this).attr("src").search(/vimeo/g) != -1 && $f($(this)[0]).api("pause")
                    })
                });
                $("#portfolio-content").fadeTo(500, 1)
            });
            r()
        })
    }

    function h(a) {
        $("html, body").animate({
            scrollTop: $(a).offset().top - 49
        });
        _gaq.push(["_trackEvent", "Page-Scroll", "Section", a])
    }
    function r() {
        $("#project-drawer").slideDown(500, function () {
            $("html, body").animate({
                scrollTop: $("#project-drawer").offset().top - 45
            })
        })
    }
    function j() {
    	$("#project-drawer").find("iframe").css("opacity", "0");
        $("#project-drawer").slideUp(500, function () {
        
            $("#project-category").text("");
            $("#project-title").text("");
            $("#portfolio-content").empty()
        })
    }
    function n(a) {
        var c = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            d = !1,
            b = $(a + " input.name"),
            f = $(a + " input.email"),
            e = $(a + " textarea.message");
        $(a + " input[type=submit]");
        var g = null;
        switch (a) {
        case "#business":
            g = "bin/business-email.php";
            break;
        case "#press":
            g = "bin/press-email.php"
        }
        b.val() == "" || b.val() == null || b.val() == b.data("default") ? (b.addClass("required"), d = !0) : (b.removeClass("required"), d = !1);
        f.val() == "" || f.val() == null || f.val() == f.data("default") || c.test(f.val()) == !1 ? (f.addClass("required"), d = !0) : (f.removeClass("required"), d = !1);
        e.val() == "" || e.val() == null || e.val() == e.data("default") ? (e.addClass("required"), d = !0) : (e.removeClass("required"), d = !1);
        d ? ($(a + " .status").html("Fields marked in orange are required.").show(), _gaq.push(["_trackEvent", "Form-Submission", "Error", a])) : (c = "name=" + encodeURIComponent(b.val()) + "&email=" + f.val().toLowerCase() + "&message=" + encodeURIComponent(e.val()), $(a + " .status").html("sending").show(), $.ajax({
            url: g,
            type: "GET",
            data: c,
            cache: !1,
            success: function (c) {
                c == 1 && (b.val(b.data("default")), f.val(f.data("default")), e.val(e.data("default")), $(a + " .status").html("Your message was sent, thanks!"),
                _gaq.push(["_trackEvent", "Form-Submission", "Success", a]))
            }
        }))
    }
    var i = "/",
        e, s = i + "js/marquee.0.1.6.min.js",
        m = i + "js/filmstrip.0.1.8.min.js";
        
  
    var fadeInterval =  setInterval(function(){fadeHomeOverlay()},3000); 
        
    $('#homeOverlay').hover(function() {
 		 $('#homeOverlay').delay(200).fadeOut(2500, function() {
   		 	clearInterval(fadeInterval);
   		 	
   		 	 $("#tidetext1").delay(300).fadeIn(2500, function() {

   				 $("#tideplay").delay(300).fadeIn(1500)
   				
 			});
   		 
  		});
	});
        
  
    
	function fadeHomeOverlay(){
		 $('#homeOverlay').delay(200).fadeOut(2500, function() {
   		 	clearInterval(fadeInterval);

			$("#tidetext1").delay(300).fadeIn(2500, function() {
   			
   				 $("#tideplay").delay(300).fadeIn(1500)
 			});
 		});
 	 };
  
    $('#portfolio-items li').click(function () {
    
   
    
    });
    
    
    
        
    $("#home").load("channels/marquee/", function () {

        $("#home").append('<div id="marquee-controls"><ul id="item-nav"></ul><a href="javascript:void(0)" id="prev">&larr;</a><a href="javascript:void(0)" id="next">&rarr;</a></div>');
        $("#home #sonataturbo").attr({
            rel: $("#campaigns-grid li a").eq(5).attr("data-rel"),
            href: $("#campaigns-grid li a").eq(5).attr("href"),
            title: $("#campaigns-grid li a").eq(5).find("img").attr("alt")
        });
        $("#home #fifa").attr({
            rel: $("#campaigns-grid li a").eq(2).attr("data-rel"),
            href: $("#campaigns-grid li a").eq(2).attr("href"),
            title: $("#campaigns-grid li a").eq(2).find("img").attr("alt")
        });
                
        var urlType1String = '"images/experienceriptide_type01.png"';
        var urlPlayString = '"images/experienceriptide_play.png"';
        
        $("#home #experienceriptide").append("<div id='tidetext1' style='width: 840px ; height: 440px; position:absolute; background-image: url(" + urlType1String  + ");'></div>" );
        $("#home #experienceriptide").append("<div id='tideplay' style='width: 840px ; height: 440px; position:relative; top:0; background-image: url(" + urlPlayString  + ");'></div>" );
        
        
        $("#tidetext1").fadeOut(0);
        $("#tideplay").fadeOut(0);
       
        
        $("#home #experienceriptide").click(function(){
          	//console.log("experience click");	
          	
        });
             
        
        $.getScript(s, function () {
            new Marquee("#marquee-carousel", "#marquee-controls", 0);
            $("#marquee-carousel .marquee-link a.large").click(function (a) {
                a.preventDefault();
                var a = $(this).attr("href"),
                    c = $(this).attr("rel");
                a.substr(0, 1) == "#" ? a.search(/#about-gallery/g) != -1 ? $("#gallery-toggle").trigger("click") : h(a) : l(a, c);
                _gaq.push(["_trackEvent", "Marquee", "Section-Link", a])
            })
        });
        
        
        
    });
    $.get("xml/careers.xml", function (a) {
        a = $(a).find("careers").find("position");
        $(a).each(function () {
            $("ul#job-list").append('<li class="job">' + $(this).find("title").text() + "</li>")
        })
    });
    $.get("/xml/portfolio.xml", function (a) {
        e = a;
        $("#campaigns-toggle").addClass("selected");
        $("#campaigns-holder").fadeTo(0, 1).css("z-index", 500);
        $("#broadcast-holder, #print-holder, #digital-holder, #casestudies-holder").fadeTo(0, 0).css("z-index", 100);
        k("campaigns")
    });
    $("#portfolio #portfolio-nav ul li a").click(function (a) {
        a.preventDefault();
        
        //function that project icons will fireClickEvent 
        
        $("#portfolio #portfolio-nav ul li a").removeClass("selected");
        $(this).addClass("selected");
        $("#portfolio #portfolio-nav ul li a").each(function () {
            $($(this).attr("href")).fadeTo(0, 0).css("z-index", 100)
        });
        $($(this).attr("href")).fadeTo(0, 1).css("z-index", 500);
        $("#project-drawer").is(":visible") || h("#portfolio");
        $($(this).attr("href")).find("ul:first").has("li").length || k($(this).attr("rel"));
        _gaq.push(["_trackEvent", "Portfolio-Navigation", "Category-Selection", $(this).attr("id")]);
        Cufon.refresh()
    });
    $("a.portfolio-item").live("click", function (a) {
        a.preventDefault();
        l($(this).attr("href"), $(this).attr("data-rel"));
        _gaq.push(["_trackEvent", "Portfolio-Grid", "Item-Selection", $(this).attr("data-rel")])
    });
    $("nav ul#nav li a").click(function (a) {
        a.preventDefault();
        var c = $(this).attr("href");
        if ($("#project-drawer").is(":hidden")) h(c);
        else {
            j();
            var d = setTimeout(function () {
                h(c);
                clearTimeout(d)
            }, 500)
        }
        _gaq.push(["_trackEvent", "Main-Navigation", "Section",
        $(this).attr("href")])
    });
    

    //set tony-kim image on
    $("#about-people-photos-wrap ul a.tony-kim").addClass("active");
                    
                
    //onHover
    $("#about-people-photos-wrap ul a").click(function() {
         $("#about-people-photos-wrap li a").removeClass("active");
         $(this).addClass("active");
            
         $(".biography").hide();
         $(".callout").hide();
        var curBio = $(this).data("bio");
        $("#"+curBio + "-bio").show();
                
     });
    
    
    $("#about #about-container > div").each(function (a) {
        a > 0 && $(this).hide()
    });
    $("#about #about-nav li a").click(function (a) {
        a.preventDefault();
        $("#about #about-nav ul li a").removeClass("selected");
        $($(this)).addClass("selected");
        $("#about #about-container > div").each(function () {
            $(this).hide()
        });
        $($(this).attr("href")).show();
        h("#about");
        Cufon.refresh();
        _gaq.push(["_trackEvent", "About-Section", "Category-Selection", $(this).attr("href")])
    });
    
    $("#about-toggle").click(function () {
 
   		$("#riptide").show();
   		$("#about-container").css({"background" : "#ff5600" });

       	$("#about, #about-nav, #about .nav-item, #about .nav-spacer").removeClass("dark").addClass("orange");
     
    });
    
	 $("#leadership-toggle").click(function () {

       	$("#about, #about-nav, #about .nav-item, #about .nav-spacer").removeClass("dark").addClass("orange");
   		$("#riptide").hide();
   		
   		$("#about-container").css({"background" : "#ff5600 url('../images/about-us-leadership.gif') center center no-repeat"  });
    });
    
    var o = !1;
    
    $("#gallery-toggle").click(function () {
	
    	$("#riptide").hide();
    	$("#about-container").css({"background" : "transparent" });
    	
        o || ($("#about-gallery").animate({
            opacity: 0
        }, 0), $("#about-gallery").load("channels/about/gallery/", function () {
            $.getScript(m, function () {
                $("#filmstrip").append('<li><img src="' + i + 'images/null.png" width="640" height="436" /></li>');
                $("#about-gallery").append('<div id="filmstrip-controls"><ul id="item-nav"></ul><a href="javascript:void(0)" id="prev">&larr;</a><a href="javascript:void(0)" id="next">&rarr;</a></div>');
                new Filmstrip("#filmstrip", "#about-gallery #filmstrip-controls");
                o = !0
            });
            $("#about-gallery").animate({
                opacity: 1
            }, 600)
        }), Cufon.refresh());
        
        
        $("#about, #about-nav, #about .nav-item, #about .nav-spacer").removeClass("orange").addClass("dark");
        $("#about-gallery ul#filmstrip").css("width", "9845px")
    });
    
    
    $("#about #about-toggle").addClass("selected");
   
     
      $("#project-category").hover(function () {
      	  $(this).css( 'cursor', 'pointer' );
     			 }, function () {
      	  $(this).css( 'cursor', 'default' );
      });
      
     $('a.lightbox').lightBox(); 
     
     $("#project-category").click(function () {
        j()
    });
    
    $("#drawer-toggle").click(function () {
    	//console.log("drawer-toggle called");
        j()
    });
    
    j(0);
    $("footer #offices-toggle").click(function (a) {
        a.preventDefault();
        $("footer #offices").slideToggle("fast")
    });
    Cufon.replace("nav .nav-item, nav .nav-logo", {
        hover: !0,
        textShadow: "text-shadow: #000 -1px -1px 1px",
        margin: 0
    });
    Cufon.replace("#portfolio-nav, #about-nav", {
        hover: !0
    });
      
    Cufon.replace("#about-us h1, #connect h2, #contact h2");
    $("#press .status").hide();
    $("#press .name, #press .email, #press .message, #business .name, #business .email, #business .message").each(function () {
        $(this).data("default", $(this).val())
    });
    $("#press .name, #press .email, #press .message, #business .name, #business .email, #business .message").focus(function () {
        $(this).val() == $(this).data("default") && $(this).val("")
    });
    $("#press .name, #press .email, #press .message, #business .name, #business .email, #business .message").blur(function () {
        $(this).val() == "" && $(this).val($(this).data("default"))
    });
    $("#press .name, #press .email, #press .message, #business .name, #business .email, #business .message").change(function () {
        $(this).data("val", $(this).val())
    });
    $("#submit-press").click(function (a) {
        a.preventDefault();
        n("#press")
    });
    $("#business-press").click(function (a) {
        a.preventDefault();
        n("#business")
    })
    
     $(".portfolioClose").hover(function (a) {
       //console.log("CLOSE ME!!");
    })
    
    
    
});