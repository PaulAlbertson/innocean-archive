$(document).ready(function () {

    ///GLOBAL VARIABLES
    var parseMyRSS;

    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: 800
        }, 'slow');
    }



    //Carousel	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                    $(c + " .item-nav").css("margin-left", -($(c + " .item-nav").width() / 2));
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

        for (var b = $(a).children().length, b = Math.round(b / 15), f = $(a).attr("category"), q = ["left", "center", "right"], e = 1; e <= b; e++) $(c).append("<li></li>");
        $(a).find("item").each(function (a) {
			
			//console.log( $(this).find("title").text());
			
            var b = $(this).find("title").text(),
                d = $(this).find("href").text(),
                e = $(this).find("showCaption").text() === "true" ? b : "portfolio-item",
                g = $(this).find("thumb").text(),
                aId = d.split("#"),
                aIdparent = aId[1] + "parent",

                b = '<a class="portfolio-item ' + q[a % 3] + '" data-rel="' + f + ":" + b + '" href="' + d + '" id="' + aIdparent + '"><img src="' + g + '" id="' + aId[1] + '" width="306" height="179" alt="' + e + '" /></a>';

            a < 15 ? $(c).find("li").eq(0).append(b) : a < 30 ? $(c).find("li").eq(1).append(b) : a < 45 ? $(c).find("li").eq(2).append(b) : a < 60 ? $(c).find("li").eq(3).append(b) : a < 75 ? $(c).find("li").eq(4).append(b) : a < 90 ? $(c).find("li").eq(5).append(b) : a < 105 ? $(c).find("li").eq(6).append(b) : a < 120 ? $(c).find("li").eq(7).append(b) : a < 135 ? $(c).find("li").eq(8).append(b) : a < 150 && $(c).find("li").eq(9).append(b)   
			
			

            //the hover tag is on the img's parent 
            $("#" + aIdparent).hover(

            function () {

                //animate the bar in
                $(this).find('img').next().animate({
                    marginTop: '-45px',
                    opacity: '.9',
                }, 250, function () {
                    // Animation complete.

                });

            }, function () {

                //animate the bar in
                $(this).find('img').next().animate({
                    marginTop: '0px',
                    opacity: '.9',
                }, 500, function () {
                    // Animation complete.
                });
            });
        });

        p(c, d)
    }



    function l(a, c) {
        var d = c.split(":");
        var aId = a.split(" ");

        if (aId[1] == "#experienceriptide") {
            //console.log("use new background");
            $("#project-drawer").css({
                "height": "650px",
                "overflow": "hidden",
                "background": "#ff5600 url('../images/about-us-leadership.gif') center center no-repeat"
            });
        } else {
            //console.log("use old background");
            $("#project-drawer").css({
                "height": "650px",
                "overflow": "hidden",
                "background": "#000 url('../images/lines-dark.png') repeat"
            });
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


    //NAVFOOTER	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#twitter_footer").click(function () {
        window.open("https://twitter.com/innoceanusa", "innoceantwitter", "scrollbars=1, toolbar=1");
    });

    $("#fb_footer").click(function () {
        window.open("https://www.facebook.com/InnoceanUSA", "innoceanfb", "scrollbars=1, toolbar=1");
    });
	
	
    $("#blog_footer").click(function () {
        window.open("https://innoceanusa.jux.com",  "innoceansplash", "scrollbars=1, toolbar=1");
    });
	

    $("#twitter_footer").hover(function () {
        $(this).css("background-position", "0px -41px");
        $(this).css('cursor', 'pointer');
    },

    function () {
        $(this).css("background-position", "0px 0px");
        $(this).css('cursor', 'default');
    }

    );

    $("#fb_footer").hover(function () {
        $(this).css("background-position", "-48px -42px");
        $(this).css('cursor', 'pointer');

    },

    function () {
        $(this).css("background-position", "-48px -0px");
        $(this).css('cursor', 'default');

    });
	
	$("#blog_footer").hover(function () {
        $(this).css("background-position", "-96px -42px");
        $(this).css('cursor', 'pointer');

		$("#nav_footer").css({
            'width': '377',
            'height': '269',
			'background' : 'url(../images/footernav-blog_feed.png) 0 0 no-repeat',
        });

        $('#cam_footer_feed').css("display", "block");
		
    },

    function () {
        $(this).css("background-position", "-96px -0px");
        $(this).css('cursor', 'default');
		$("#nav_footer").css({
            'width': '180',
            'height': '41',
			'background' : 'none',
        });

        $('#cam_footer_feed').css("display", "none");

    });
	
	

    $("#cam_footer").hover(function () {
        $(this).css("background-position", "-136px -41px");
        $(this).css('cursor', 'pointer');
        $("#nav_footer").css({
            'width': '377',
            'height': '269',
			'background' : 'url(../images/footernav-webcam_feed.png) 0 0 no-repeat',
        });

        $('#cam_footer_feed').css("display", "block");


    },

    function () {
        $(this).css("background-position", "-136px 0px");
        $(this).css('cursor', 'default');
        $("#nav_footer").css({
            'width': '180',
            'height': '41',
			'background' : 'none',
        });

        $('#cam_footer_feed').css("display", "none");
    });


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CAMERA FEED	/////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var urltext = document.location.href;
    var targeturl = urltext.substring((urltext.indexOf('?') + 1), urltext.length);


    var fadeInterval = setInterval(function () {
        fadeHomeOverlay()
    }, 3000);

    $('#camfeed').click(function () {

        if ($('#camfeed iframe').length == 0) {

            $('#camfeed').append('<iframe src="webcam/innoceanwebcam.html" scrolling="no" frameborder="0" style="display:block; border:none; background-color:#FF5600; z-index: 100; position:relative; top:0px; left:0px; overflow:hidden; width:1067px; height:600px;"> </iframe>')

        }

        $('#camfeed iframe').attr("src", "webcam/innoceanwebcam.html");

    });


    $('#camfeed iframe').hover(function () {
        $(this).css('cursor', 'pointer');
    },

    function () {
        $(this).css('cursor', 'default');
    });



    $('#nav_cam, #cam_footer').click(function () {

        $('#nav_cam').css('display', 'block');

        function openWebWindow() {

            //animate webcam div on or off
            if ($('#webcam').css("top") == '-610px') {

                $('#camfeed').css("background-image", "url('../images/surfcam-inactive-feed-beach.jpg')");

                $('#webcam').animate({
                    top: '0',
                }, 1000, 'easeOutCubic', function () {
					
					 $('#camfeed').click();
                    // Animation complete. 
                });
            } else {

                $('#camfeed iframe').remove();

                $('#webcam').animate({
                    top: '-610'
                }, 500, 'easeOutCubic', function () {

                    // Animation complete. 
                    $('#nav_cam').css('display', 'none');
                });
            };
        }


        if ($(window).scrollTop() == 0) {
            openWebWindow();

        } else {

            $("html, body").animate({
                scrollTop: 0
            },
            1000,

            function () {
                openWebWindow()
            });
        }



    });

    $('#homeOverlay').hover(function () {
        $('#homeOverlay').delay(200).fadeOut(2500, function () {
            clearInterval(fadeInterval);

            $("#tidetext1").delay(300).fadeIn(2500, function () {
                //console.log("fadecomplete");
                $("#tideplay").delay(300).fadeIn(1500)
            });
        });
    });



    function fadeHomeOverlay() {
        $('#homeOverlay').delay(200).fadeOut(2500, function () {
            clearInterval(fadeInterval);

            $("#tidetext1").delay(300).fadeIn(2500, function () {
                //console.log("fadecomplete");
                $("#tideplay").delay(300).fadeIn(1500)
            });
        });
    };




    //MARQUEE LOAD //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#home").load("channels/marquee/", function () {

        $("#home").append('<div id="marquee-controls"><ul id="item-nav"></ul><a href="javascript:void(0)" id="prev">&larr;</a><a href="javascript:void(0)" id="next">&rarr;</a></div>');


        //load the images into the carousel
        $("#next").click(function () {

            var length = $("#marquee-carousel li").size();
            var delayedImage;

            for (var i = 2; i <= length; i++) {
                delayedImage = $('ul li:nth-child(' + i + ') .marquee-link').attr('delayed-image');
                $('ul li:nth-child(' + i + ') .marquee-link').css("background-image", "url(" + delayedImage + ")");
            }

        });


        //load the images into the carousel
        $("#item-nav").click(function () {


            var length = $("#marquee-carousel li").size();
            var delayedImage;

            for (var i = 2; i <= length; i++) {
                delayedImage = $('ul li:nth-child(' + i + ') .marquee-link').attr('delayed-image');
                $('ul li:nth-child(' + i + ') .marquee-link').css("background-image", "url(" + delayedImage + ")");
            }

        });


        $("#webcam_marquee").hover(function () {
            $(this).css("cursor", "pointer");
        }, function () {
            $(this).css("cursor", "default");
        });


        $("#webcam_marquee").click(function () {
            $('#webcam').css({
                top: '0'
            });

            $('#nav_cam').css('display', 'block');

            if ($('#camfeed iframe').length == 0) {
                $('#camfeed').append('<iframe src="webcam/innoceanwebcam.html" scrolling="no" frameborder="0" style="display:block; border:none; background-color:#FF5600; z-index: 100; position:relative; top:0px; left:0px; overflow:hidden; width:1067px; height:600px;"> </iframe>')
            }

            $('#camfeed iframe').attr("src", "webcam/innoceanwebcam.html");



        });

        //Deep link the webcam

        if (targeturl == "livecam") {
            $("#webcam_marquee").click();
        }

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

        $("#home #experienceriptide").append("<div id='tidetext1' style='width: 840px ; height: 440px; position:absolute; background-image: url(" + urlType1String + ");'></div>");
        $("#home #experienceriptide").append("<div id='tideplay' style='width: 840px ; height: 440px; position:relative; top:0; background-image: url(" + urlPlayString + ");'></div>");


        $("#tidetext1").fadeOut(0);
        $("#tideplay").fadeOut(0);



        $.getScript(s, function () {
            new Marquee("#marquee-carousel", "#marquee-controls", 0);


            $("#marquee-carousel .marquee-link a.large").click(function (a) {

                //console.log("#marquee-carousel");

                if ($(this).attr("id") == "wrapparty") {

                    $("#about #about-nav li a").click();
                    $("#about, #about-nav, #about .nav-item, #about .nav-spacer").removeClass("orange").removeClass("dark").addClass("blue");
                    $("#riptide").hide();
                    $("#about").css({
                        "padding": "0 0 0px"
                    });
                    $("#container_wrapparty").css({
                        "background": "#000 url('../images/about-us-shag.gif') center center no-repeat"
                    });
					
				

                } else {

                    a.preventDefault();
                    var a = $(this).attr("href"),
                        c = $(this).attr("rel");

                    //console.log("a: ", a);	
                    //console.log("c: ", c);


                    a.substr(0, 1) == "#" ? a.search(/#about-gallery/g) != -1 ? $("#gallery-toggle").trigger("click") : h(a) : l(a, c);
                    _gaq.push(["_trackEvent", "Marquee", "Section-Link", a])
                }
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
        $("#artgallery-toggle .orange").css({
            "color": ""
        });
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
    $("#about-people-photos-wrap ul a").click(function () {
        $("#artgallery-toggle .orange").css({
            "color": ""
        });
        $("#about-people-photos-wrap li a").removeClass("active");
        $(this).addClass("active");

        $(".biography").hide();
        $(".callout").hide();
        var curBio = $(this).data("bio");
        $("#" + curBio + "-bio").show();

    });


    $("#about #about-container > div").each(function (a) {
        a > 0 && $(this).hide()
    });
    $("#about #about-nav li a").click(function (a) {
        $("#artgallery-toggle .orange").css({
            "color": ""
        });
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
        $("#about-container").css({
            "background": "#ff5600"
        });
        $("#artgallery-toggle .orange").css({
            "color": ""
        });

        $("#about, #about-nav, #about .nav-item, #about .nav-spacer").removeClass("dark").removeClass("black").addClass("orange");
        $("#about").css({
            "padding": "0 0 40px"
        });



    });


    $('a.lightbox').lightBox();

    $("#leadership-toggle").click(function () {

        $("#about, #about-nav, #about .nav-item, #about .nav-spacer").removeClass("orange").removeClass("black").addClass("dark");
        $("#about-container").css({
            "background": "transparent"
        });
        $("#riptide").hide();
        $("#artgallery-toggle .orange").css({
            "color": ""
        });

        $("#about-container").css({
            "background": "#ff5600 url('../images/about-us-leadership.gif') center center no-repeat"
        });
    });

    
    $("#artgallery-toggle").click(function () {


        $("#about, #about-nav, #about .nav-item, #about .nav-spacer").removeClass("orange").removeClass("dark").addClass("black");
        $("#riptide").hide();
        $("#about").css({
            "padding": "0 0 0px"
        });
        $("#about-container").css({
            "background": "#000"
        });
        $("#container_artgallery").css({
            "background": "#000"
        });
        $("#artgallery-toggle .orange").css({
            "color": "#ff5600"
        });


        $("#artthumbs .photos").css("visibility", "hidden");
        $("#artthumbs .overview").css("visibility", "visible");
        $("#artlisting ul").empty();

        //need to change the parent div with accordian class 
        $("#artlisting ul").parent().removeClass("accordian");
        $("#artlisting ul").parent().addClass("artists");



        //load photos
        $.getScript('js/artGallery.js', function () {



        });


    });
///////////////////////////////////////////************************************  Locations Start ******************************************//////////////////////////////////////
    $("#locations-toggle").click(function () {
        
    	$("#about, #about-nav, #about .nav-item, #about .nav-spacer").removeClass("orange").removeClass("dark").addClass("black");
        $("#riptide").hide();
        $("#about").css({
            "padding": "0 0 0px"
        });
        $("#about-container").css({
            "background": "#000"
        });
        $("#container_artgallery").css({
            "background": "#000"
        });
        $("#artgallery-toggle .orange").css({
            "color": "#ff5600"
        });


        $("#artthumbs .photos").css("visibility", "hidden");
        $("#artthumbs .overview").css("visibility", "visible");
        $("#artlisting ul").empty();

        //need to change the parent div with accordian class 
        $("#artlisting ul").parent().removeClass("accordian");
        $("#artlisting ul").parent().addClass("artists");



        //load photos
        $.getScript('js/locations.js', function () {});
    });

///////////////////////////////////////////************************************  Locations End ******************************************//////////////////////////////////////
    $("#news").css({
        "height": "530px",
        "overflow": "hidden"
    });

    if (parseMyRSS == undefined) {

        //console.log("getScrip parseMyRSS");
        $.getScript('js/parseRSS.js', function () {
            //pass the div id that will be the processing
            parseMyRSS = parseRSSWP();
        });

    }


    $('#loadContent').click(function () {

        $.getScript('js/parseRSS.js', function () {

            //pass the parseRSS Array, index to the article to view, and div to display
            var result = buildArticle(parseMyRSS, 0, '#feedBase');
            //console.log("date:", parseMyRSS[1].title);

        });
    });


    $("#news").show();
    $("#about-news").show();





    var o = !1;

    $("#gallery-toggle").click(function () {

        $("#riptide").hide();
        $("#about-container").css({
            "background": "transparent"
        });
        $("#about").css({
            "padding": "0 0 40px"
        });

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


        $("#about, #about-nav, #about .nav-item, #about .nav-spacer").removeClass("orange").removeClass("blue").addClass("dark");
        $("#about-gallery ul#filmstrip").css("width", "9845px");


    });


    $("#about #about-toggle").addClass("selected");


    $("#project-category").hover(function () {
        $(this).css('cursor', 'pointer');
    }, function () {
        $(this).css('cursor', 'default');
    });


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

});