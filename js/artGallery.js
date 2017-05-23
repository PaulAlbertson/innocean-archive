// JavaScript Document
$(document).ready(function () {


    // Handler for .ready() called.
    // var urltext = document.location.href;
    // var targeturl = urltext.substring((urltext.indexOf('?')+1),urltext.length);
    var currentSectionId = -1;
    var photoXML = [];

    $.getScript('js/parsePhotoXML.js', function () {
        //assign the array the data from the parseXML
        //photoXML = parsePhotoXML();
    	photoXML = parsePhotoXML("xml/artGallery.xml");
        //"xml/artGallery.xml"
    });


    // Create a interval to check if the XML has finished parsing before starting the script
    var refreshIntervalId = setInterval(fname, 1000);

    function fname() {

        if (photoXML.length != 0) {
            clearInterval(refreshIntervalId);
            artistXML(-1);
        }
    };
	
	
	//overview image dissolve slideshow
	$('#artthumbs .image').empty();
	
	$('#artthumbs .image').prepend('<img src="images/artGallery/overview/artgallery_overview0.jpg" width="641" height="301" /><img src="images/artGallery/overview/artgallery_overview1.jpg" width="641" height="301"/><img src="images/artGallery/overview/artgallery_overview2.jpg" width="641" height="301" />');
	
	$('#artthumbs .image').cycle('destroy');
	
	$('#artthumbs .image').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  Set the side Bar with initial content on Overview
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function artistXML(section) {

        //find the artist listing
        artistListingClass = "#artlisting .artists"
        var artistUL = $(artistListingClass).find("ul");
        $("#artlisting ul").empty();


        //variable to allow artist video to play
        var playVideo = false;

        //build interface different for overview
        if (section < 0) {

            var addClass = "#artlisting .artists ul";

            //build interface for overview
            for (var j = 0; j < photoXML[0].image.length; j++) {

                var name = photoXML[0].image[j].name;
                var copy = photoXML[0].image[j].copy[0].copy;

                var artistBlock = "<h1>" + name + "</h1><br><h2>" + copy + "</h2><br><h3> read more </h3>";

                var li = $("<li/>")

                    .addClass(addClass)
                    .html(artistBlock)
                    .attr('alt', j)
                    .appendTo(artistUL);

            }


            $("#artlisting .artists li").hover(

            function () {
                $(this).css("background-color", "#ff5600");
                $(this).children().css("color", "#fff");
            },

            function () {
                $(this).css("background-color", "#333");
                $(this).children().css("color", "#989898");
            });


            $("#artlisting .artists li").click(function () {

                var section = $(this).attr('alt');
                $("#artthumbs .overview").css("visibility", "hidden");
                $("#artthumbs .photos").css("visibility", "visible");
                currentSectionId = section;
                readPhotoXML(section);
                artistXML(section);

            });

        } else {
			
            //build interface for now that an artist has been selected
            $("#artlisting ul").empty();
			
            //need to change the parent div with accordian class 
            $("#artlisting ul").parent().removeClass("artist");
            $("#artlisting ul").parent().addClass("accordian");

            //change the UL class
            var addClass = "#artlisting .accordian ul";
            $("#artlisting ul").addClass(addClass);

            addClass = "#artlisting .accordian li";
			

            //build interface with accordian
            for (var j = 0; j < photoXML[0].image.length; j++) {

                var name = photoXML[0].image[j].name;
                var copy = photoXML[0].image[j].copy[1].copy;
                var video = photoXML[0].image[j].video;
                var artistBlock;

                artistBlock = "<h1>" + name + "</h1><div class='description'><h2>" + copy + "</h2> <div class='videoLink'></div></div>";
			
				 $('.description .shagLink').css({
                    'font': '16px arial, sans-serif',
                    'color': '#F56000',
                    'text-decoration' : 'underline',
                });
				
                var li = $("<li/>")
                    .addClass(addClass)
                    .html(artistBlock)
                    .attr('alt', j)
                    .attr('video', video)
                    .appendTo(artistUL);

                $('.description').css({
                    'display': 'block',
                    'position': 'relative',
                    'top': '25px',
                    'width': '100%',
                    'height': '370px',
                    'cursor': 'default',
                    'overflow': 'hidden',
                    'line-height': '20px',
                    'z-index': '200',
					
                });

				  $('.description .videoLink').css({
                    'display': 'block',
                    'position': 'relative',
                    'bottom': '0',
                    'width': '100%',
                    'height': '130px',
					'margin-top' : '10px',
					 'cursor': 'pointer',
					
                });

				
                var currentSection = "#artlisting ul li:nth-child(" + (Number(section) + 1) + ")";

                // add video background if there is a video assigned
                if (photoXML[0].image[j].video != '0') {
										
                    var videoPath = 'url(images/artGallery/' + photoXML[0].image[j].folder + '/' + photoXML[0].image[j].folder + '_video.jpg) no-repeat bottom center';
		
                    $("li:nth-child("  + (j+1) + ") .description .videoLink").css({
                        'background': videoPath
                    });

                } else {
				
					  $(".videoLink").css({
                        'background-color': '#222'
                    });
						
				}
            }
			
			  //The link in the SHAG description will link out to a 
			  $(".description .shagLink").hover(
	
				function () {
								
					$(this).css({
						'text-decoration' : 'none',
						'cursor' : 'pointer',
					});
				},

				function () {

					$(this).css({
						'text-decoration' : 'underline',
						'cursor' : 'default',
					});
         	   });
			
			  $(".description .shagLink").click(function () {

                var section = $(this).parent().parent().attr('alt');
                //console.log("play video .description:", photoXML[0].image[section].video);

                  launchShag();
              
				
            })
			
            $("#artlisting .accordian li").hover(
	
				function () {
					//if the current selection is not the active open div
					if ($(this).attr('alt') != section) {
						$(this).css("background-color", "#ff5600");
						$(this).children().css("color", "#fff");
					}
				},
	
	
	
				function () {
					
					//if the current selection is not the active open div
					if ($(this).attr('alt') != section) {
						$(this).css("background-color", "#333");
						$(this).children().css("color", "#989898");
					}
					
            });



            $(".description .videoLink").click(function () {

                var section = $(this).parent().parent().attr('alt');
                //console.log("play video .description:", photoXML[0].image[section].video);

                //the video file exists in the XML then call the play method
                if (photoXML[0].image[section].video != "0") {
                    launchVideo();
                }
				
            });
			
			

            $("#artlisting .accordian li").click(function () {

                //if the curren section is not open, then go to it on click

                if (currentSectionId != $(this).attr('alt')) {
                    var section = $(this).attr('alt');

                    $("#artthumbs .overview").css("visibility", "hidden");
                    $("#artthumbs .photos").css("visibility", "visible");
                    readPhotoXML(section);
                    artistXML(section);
                    currentSectionId = section;
                }
            });


            //animate the slide + change css for active section

            $(currentSection + " h1").css({
                'color': '#ff5600',
            });

            $(currentSection).css({
                'background-color': '#222',
            });

            $(currentSection).delay(300).animate({
                height: "420px",
            }, 600);

        }
    }
	
	function launchShag() {

        var shagiFrame = "http://dev.innoceanusa.com/shag/index.html";

        $('body').append('<div id="ShagOverlay"></div><div id="ShagContainer"><div id="ShagContent"><iframe src=' + shagiFrame + ' width="826" height="545" frameborder="0" scrolling="no"></iframe><div id="ShagCopy"><form><input type="button" value="Download Groovy Tracks Now" onClick="window.location.href=\'/toShare/SHAG_music.zip\'"></form> </div></div><div id="closeButton"></div></div>');
			
		
		

        $('#ShagOverlay').css({
            'z-index': '9999',
            'display': 'block',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'bottom': '0',
            'right': '0',
            'background': '#000',
            'opacity': '0.8',
            'width': '100%',
            'height': '100%',
            'cursor': 'pointer',
        });

        $('#ShagContainer').css({
            'z-index': '10000',
            'display': 'block',
            'position': 'absolute',
            'margin': 'auto auto',
        });

        $('#ShagContent').css({
            'z-index': '10000',
            'display': 'block',
            'float': 'left',
            'top': '-15px',
            'padding': '20px',
			'width': '826px',
            'background-color': '#fff',
			
        });
		
		 $('#ShagCopy').css({
            'display': 'block',
            'float': 'left',
            'position': 'relative',
            'height': '40px',
			'width' : '826px',
            'background-color': '#fff',
        });
		
		$('#ShagCopy form').css({
			'float' : 'left',
			
			'margin-left' : '14px',
			'margin-top' : '14px',
			'font-size': '18pt',
			'height' : '24px',

		});
		
        $('#closeButton').css({
            'z-index': '10000',
            'background': 'url(images/press_closeArtGallery.png) no-repeat',
            'margin-right': '-26px',
            'width': '26px',
            'height': '26px',
            'cursor': 'pointer',
			'position' : 'absolute',
			'top' : '0',
			'right' : '0',		 
        });


        $(window).resize(function () {
	
			  var pressWidth = $("#ShagContainer").width();
              var windowPressWidth = (($(window).width() / 2) - (pressWidth / 2)) + 'px';
		
			  var pressHeight =  $("#ShagContainer").height();	   
			  var winYOffset;
			  
			  if (window.pageYOffset != null) {
	
					winYOffset = window.pageYOffset
				 
			  } else {
				// For IE (or any browser) in Standards mode
				var d = window.document;
				
				if (document.compatMode == "CSS1Compat"){
						
						winYOffset =  d.documentElement.scrollTop;
					} else {
						// For browsers in Quirks mode
						winYOffset =  d.body.scrollTop ; 
					}
				}	

			   
			   var windowPressHeight = (($(window).height()/2) - ( pressHeight/2 ) ) + winYOffset + 'px'; 
				
			   $("#ShagContainer").css({
					"top" :  windowPressHeight, 
					"left": windowPressWidth,
				});			

        });

        $("#ShagOverlay, #closeButton").click(function () {

            $("#ShagOverlay").remove();
            $("#ShagContainer").remove();
            $("body").css("overflow", "auto");

        });

        $(window).resize();

    }
	
	
    function launchVideo() {

        var casestudyVimeo = "http://player.vimeo.com/video/" + photoXML[0].image[currentSectionId].video + "?color=000000&amp;api=1&amp;autoplay=1&player_id=vimeoplayer1";

        $('body').append('<div id="videoOverlay"></div><div id="videoContainer"><div id="videoContent"><iframe src=' + casestudyVimeo + ' width="826" height="471" frameborder="0"></iframe></div><div id="closeButton"></div></div>');
	
		
		

        $('#videoOverlay').css({
            'z-index': '9999',
            'display': 'block',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'bottom': '0',
            'right': '0',
            'background': '#000',
            'opacity': '0.8',
            'width': '100%',
            'height': '100%',
            'cursor': 'pointer',
        });

        $('#videoContainer').css({
            'z-index': '10000',
            'display': 'block',
            'position': 'absolute',
            'margin': 'auto auto',
        });

        $('#videoContent').css({
            'z-index': '10000',
            'display': 'block',
            'float': 'left',
            'top': '-15px',
            'padding': '20px',
            'background-color': '#fff',
        });

        $('#closeButton').css({
            'z-index': '10000',
            'display': 'block',
            'float': 'right',
            'background': 'url(images/press_closeArtGallery.png) no-repeat',
            'margin-left': '10px',
            'width': '26px',
            'height': '26px',
            'cursor': 'pointer',
        });


        $(window).resize(function () {
	
			  var pressWidth = $("#videoContainer").width();
              var windowPressWidth = (($(window).width() / 2) - (pressWidth / 2)) + 'px';
		
			  var pressHeight =  $("#videoContainer").height();	   
			  var winYOffset;
			  
			  if (window.pageYOffset != null) {
	
					winYOffset = window.pageYOffset
				 
			  } else {
				// For IE (or any browser) in Standards mode
				var d = window.document;
				
				if (document.compatMode == "CSS1Compat"){
						
						winYOffset =  d.documentElement.scrollTop;
					} else {
						// For browsers in Quirks mode
						winYOffset =  d.body.scrollTop ; 
					}
				}	

			   
			   var windowPressHeight = (($(window).height()/2) - ( pressHeight/2 ) ) + winYOffset + 'px'; 
				
			   $("#videoContainer").css({
					"top" :  windowPressHeight, 
					"left": windowPressWidth,
				});			

        });

        $("#videoOverlay, #closeButton").click(function () {

            $("#videoOverlay").remove();
            $("#videoContainer").remove();
            $("body").css("overflow", "auto");

        });

        $(window).resize();

    }




    function readPhotoXML(section) {

        var currentPhotoSection;
        var addClass;
        var photosClass;

        //querystring passed in
        currentPhotoSection = 0;
        addClass = "#artthumbs li";
        photosClass = "#artthumbs .photos";

        var photoUL = $(photosClass).find("ul");
        photoUL.empty();

        var targeturl = section;
		
		var overviewImage = 'url(images/artGallery/' + photoXML[0].image[targeturl].folder + '/' + photoXML[0].image[targeturl].folder + '_overview.jpg) no-repeat 0 0';
				
		$('.artistOverviewImage').css({
                    'display': 'block',
                    'position': 'relative',
                    'width': '638px',
                    'height': '228px',
                    'cursor': 'pointer',
                    'overflow': 'hidden',
					'background' : '#999',
					'margin-bottom' : '6px',
                    'z-index': '200',
					'background' : overviewImage,
         });
		
        for (var j = 0; j < photoXML[currentPhotoSection].image[targeturl].amount; j++) {

            var imageThumbPath = 'url(images/artGallery/' + photoXML[currentPhotoSection].image[targeturl].folder + '/' + photoXML[currentPhotoSection].image[targeturl].folder + '_tb_' + j + '.jpg)';
            var imagePath = 'images/artGallery/' + photoXML[currentPhotoSection].image[targeturl].folder + '/' + photoXML[currentPhotoSection].image[targeturl].folder + '_' + j + '.jpg';

            //alt text
            var altText = photoXML[currentPhotoSection].image[targeturl].copy[2].copy;

            var li = $("<li/>")
                .addClass(addClass)
                .css({
                "background-image": imageThumbPath,
                "opacity": "0.6",
            })
                .attr('file', imagePath)
                .attr('alt', altText)
                .appendTo(photoUL);

        }

	

        var currentSelection

        $(addClass).hover(

        function () {
            $(this).css({
                'opacity': '1',
            });
        },

        function () {
            $(this).css({
                'opacity': '.6',
            });
        });

        $(addClass).click(function () {

            currentSelection = $(this);
            var src = 'url(' + $(this).attr("file") + ')';
            var altText = $(this).attr("alt");

            //build lightbox

            $('body').append('<div id="artOverlay"></div><div id="artContainer"><div id="artContent"><div id="artNav"></div></div><div id="artCopy"><h2></h2><br><h1></h1></div><div id="artClose"></div></div>');



            $('#artOverlay').css({
                'z-index': '9999',
                'display': 'block',
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'bottom': '0',
                'right': '0',
                'background': '#000',
                'opacity': '0.8',
                'width': '100%',
                'height': '100%',
                'cursor': 'pointer',

            });

            $('#artContainer').css({
                'z-index': '10000',
                'display': 'block',
                'position': 'absolute',
                'margin': 'auto auto',
                'top': '-15px',
                'padding': '20px',

				'background': 'url(../images/artGallery/loading-gif.gif) no-repeat center center',
				'width' : '25px',
				'height' : '25px',
            });


            $('#artContent').css({

                'display': 'block',
                'position': 'relative',
                'float': 'left',
                'background': '#fff',
                'overflow': 'auto',
                'opacity': '1',
                'color': '#000',
                'background-image': src,
             
                'cursor': 'pointer',

            });



            $('#artNav').css({

                'display': 'none',
                'position': 'relative',
                'width': '75px',
                'height': '50px',
                'top': '50%',
                'background-color': '#fff',
                'background': 'url(images/lightboxNextPrev.gif) 0 0',
                'cursor': 'pointer',
            });



            $('#artCopy').css({

                'display': 'block',
                'position': 'relative',
                'float': 'left',
                'height': '50px',
            })


            $('#artCopy h1').css({

                'font': '.95em "ITCAvantGardeStd-Md", "Helvetica", "Arial", sans-serif',
                'position': 'relative',
                'top': '-15px',
            })

            $('#artCopy h2').css({

                'padding-top': '10px',
                'position': 'relative',
                'top': '0',
                'font': '.65em "ITCAvantGardeStd-Md", "Helvetica", "Arial", sans-serif',
            })


            $('#artClose').css({

                'display': 'block',
                'position': 'relative',
                'float': 'right',
                'background': 'url(images/lightboxClose.gif) center center no-repeat',
                'width': '75px',
                'height': '50px',
				
            });


            $("#artClose").addClass(".pressClose");
            $('#artCopy h1').html(altText);
            $('#artCopy h2').html(($(addClass).index(currentSelection) + 1) + " of " + $(addClass).length);


            $(window).resize(function () {

				var pressWidth = $("#artContainer").width();
				var windowPressWidth = (($(window).width() / 2) - (pressWidth / 2)) + 'px';
			
				var pressHeight =  $("#artContainer").height();	   
				var winYOffset;
				  
				if (window.pageYOffset != null) {
		
					winYOffset = window.pageYOffset
					 
				 } else {
					 
					// For IE (or any browser) in Standards mode
					var d = window.document;
					
					if (document.compatMode == "CSS1Compat"){
							winYOffset =  d.documentElement.scrollTop;
						} else {
							// For browsers in Quirks mode
							winYOffset =  d.body.scrollTop ; 
						}
					}	
					
				   var windowPressHeight = (($(window).height()/2) - ( pressHeight/2 ) ) + winYOffset + 'px'; 
				
				   $("#artContainer").css({
						"top" :  windowPressHeight, 
						"left":  windowPressWidth,
					});	

        	 });



            $("#artClose").hover(function () {
                $(this).css({
                    'cursor': 'pointer',
                })
            }, function () {

            });

            $.fn.getBgImage = function (callback) {
                var height = 0;
                var path = $(this).css('background-image').replace('url', '').replace('(', '').replace(')', '').replace('"', '').replace('"', '');
                var tempImg = $('<img />');
                tempImg.hide(); //hide image
                tempImg.bind('load', callback);
                $('body').append(tempImg); // add to DOM before </body>
                tempImg.attr('src', path);
                $('#tempImg').remove(); //remove from DOM
            };


            // usage
            $("#artContent").getBgImage(function () {

                var newHeight = $(this).height() + 'px';
                var newWidth = $(this).width() + 'px';
				
                var newContainerHeight = $(this).height() + 50 + 'px';
				
				

                $('#artContainer').css({
					"background-color" : "",
                    "height": newContainerHeight,
                    "width": newWidth,
                });

				$('#artClose').css({
                  
                    "opacity": '0',
                });
					
				$('#artCopy').css({
                  
                    "opacity": '0',
                });
					
				
					
                $('#artContent').css({
                  
                    "width": newWidth,
					  "height": '0px',
                });
				
				
			
			     $('#artContainer').delay(800).animate({
					   "background-color" : "#fff",
						width: newWidth,
						height: newContainerHeight
					}, 1200, function() {
						
						$('#artClose').delay(10).animate({
						 	'opacity' : '1',
						}, 1000 );   
							
						$('#artCopy').delay(10).animate({
						 	'opacity' : '1',
						}, 1000);   
						
						 
					});   
					
				
				
				/*	
		
                $('#artContent').css({
                    "height": newHeight,
                    "width": newWidth,
                });
				
				*/
				
				 $('#artContent').delay(500).animate({
						width: newWidth,
						height: newHeight,
						'border': '#fff 2px solid',
					 }, 1000, function() {
									  
									
									// Animation complete.
							});
					  
					  

                $(window).resize();
				
				
				
				
            });


            var cursorX;


            // $("body").css("overflow", "hidden"); 

            $("#artOverlay, #artClose").click(function () {

                $("#artOverlay").remove();
                $("#artContainer").remove();
                $("body").css("overflow", "auto");
            });



            $("#artContent").click(function () {

                if (cursorX > .5) {

                    // go to next
                    currentSelection = currentSelection.next();
                    if ($(currentSelection).attr("file") == undefined) currentSelection = $(addClass + ':first');


                } else {

                    // go to previous
                    currentSelection = currentSelection.prev();
                    if ($(currentSelection).attr("file") == undefined) currentSelection = $(addClass + ':last');

                }


                src = 'url(' + $(currentSelection).attr("file") + ')';
                altText = $(currentSelection).attr("alt");

                //console.log("altText:", altText );


                $('#artCopy h1').html(altText);
                $('#artCopy h2').html(($(addClass).index(currentSelection) + 1) + " of " + $(addClass).length);

                $(this).css({
                    "background-image": src,
                });


                $("#artContent").getBgImage(function () {

                    //console.log($(this).height());

                    var newHeight = $(this).height() + 'px';
                    var newWidth = $(this).width() + 'px';

                    var newContainerHeight = $(this).height() + 50 + 'px';

                    $('#artContainer').css({
                        "height": newContainerHeight,
                        "width": newWidth,
                    });

                    $('#artContent').css({
                        "height": newHeight,
                        "width": newWidth,
                    });

                    $(window).resize();

                });
            });



            $("#artContent").hover(function () {


                var windowWidth = $(window).width() - ($(this).width() / 2);

                $('this').css({
                    'cursor': 'pointer',
                });


                $(this).mousemove(function (e) {


                    //find the where pressContent Starts and Ends in the browser
                    var minX = (windowWidth - $(this).width()) / 2;
                    var maxX = windowWidth - ($(this).width() / 2);

                    cursorX = (e.pageX - minX)
                    cursorX = (cursorX / $(this).width()) - .25;




                    if (cursorX > .5) {

                        $('#artNav').css({
                            'top': '50%',
                            'display': 'block',
                            'float': 'right',
                            'background-position': '0px 0px',
                        });

                    } else {

                        $('#artNav').css({
                            'top': '50%',
                            'display': 'block',
                            'float': 'left',
                            'background-position': '0px -50px',
                        });
                    }

                });

                $('this').css({
                    'cursor': 'pointer',
                });


            },

            function () {

                $('#artNav').css({
                    'display': 'none',
                });

            });

        });

    }



});