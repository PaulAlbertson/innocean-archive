$(document).ready(function () {	
		var selectedGalleryId = 0;
		var previousGalleryId = selectedGalleryId;
		
		// Set Huntington Beach Title as selected
		$("#huntingtonDiv").toggleClass("isSelected");
	
		var locationImageArray = 
			[["huntington/huntington-beach-location-image-1.jpg","huntington/huntington-beach-location-image-2.jpg","huntington/huntington-beach-location-image-3.jpg"],
        	 ["chicago/chicago-location-image-1.jpg","chicago/chicago-location-image-2.jpg","chicago/chicago-location-image-3.jpg"],
        	 ["detroit/detroit-location-image-1.jpg","detroit/detroit-location-image-2.jpg","detroit/detroit-location-image-3.jpg"],
        	 ["newyork/new-york-location-image-1.jpg","newyork/new-york-location-image-2.jpg","newyork/new-york-location-image-3.jpg"],
        	 ["dallas/dallas-location-image-1.jpg","dallas/dallas-location-image-2.jpg","dallas/dallas-location-image-3.jpg"],
        	 ["hawaii/hawaii-location-image-1.jpg","hawaii/hawaii-location-image-2.jpg","hawaii/hawaii-location-image-3.jpg"]
			];
		var locationTextArray = 
			[["HUNTINGTON BEACH","180 5TH Street | Suite 200 | Huntington Beach, CA 92648","P. 714.861.5200 | F. 714.861.5337"],
			["CHICAGO","300 W. Hubbard | Suite 302 | Chicago, IL 60654","P. 312.477.5100 | F. 312.477.5101"],
			["DETROIT","30380 Kincardine Rd. | Franklin, MI 48025",""],
			["NEW YORK CITY","5 Penn Plaza | 19th Floor | New York, New York 10001","P. 312.477.5100 | F. 312.477.5101"],
			["DALLAS","6565 N. MacArthur Blvd.  | Suite 225 | Irving, Texas 75039","P. 214.624.5088 | F. 214.260.9100"],
			["KAPALUA","15 Kahana Ridge Dr. | Lahaina, HI 96761",""]
			];
		var navDivsArray = ["#huntingtonDiv", "#chicagoDiv", "#detroitDiv", "#newyorkDiv", "#dallasDiv", "#hawaiiDiv"];
		
		function updateImages(){
			var imageDiv = '<img src="images/location-images/',
				imageDivClose = '" width="686" height="400"/>';
				image1 = imageDiv+locationImageArray[selectedGalleryId][0]+imageDivClose,
				image2 = imageDiv+locationImageArray[selectedGalleryId][1]+imageDivClose,
				image3 = imageDiv+locationImageArray[selectedGalleryId][2]+imageDivClose;
		};
		function launchSlides(a,b,c){
			// empty dom of other slide images before starting new slide show
			$('#locationimages .image').empty();
			// add new images to the dom
			$('#locationimages .image').prepend(a,b,c);
			// clear the old slide show
			$('#locationimages .image').cycle('destroy');
			// start the slide show
			$('#locationimages .image').cycle({
				fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
			});
		};
		$('#huntingtonDiv').hover(function(event){
			if (selectedGalleryId !=0){
				$(this).toggleClass("isSelected");
			}
		}, function(event){
			if (selectedGalleryId !=0){
				$(this).toggleClass("isSelected");
			}
		});
		$('#chicagoDiv').hover(function(event){
			if (selectedGalleryId !=1){
				$(this).toggleClass("isSelected");
			}
		}, function(event){
			if (selectedGalleryId !=1){
				$(this).toggleClass("isSelected");
			}
		});
		$('#detroitDiv').hover(function(event){
			if (selectedGalleryId !=2){
				$(this).toggleClass("isSelected");
			}
		}, function(event){
			if (selectedGalleryId !=2){
				$(this).toggleClass("isSelected");
			}
		});
		$('#newyorkDiv').hover(function(event){
			if (selectedGalleryId !=3){
				$(this).toggleClass("isSelected");
			}
		}, function(event){
			if (selectedGalleryId !=3){
				$(this).toggleClass("isSelected");
			}
		});
		$('#dallasDiv').hover(function(event){
			if (selectedGalleryId !=4){
				$(this).toggleClass("isSelected");
			}
		}, function(event){
			if (selectedGalleryId !=4){
				$(this).toggleClass("isSelected");
			}
		});
		$('#hawaiiDiv').hover(function(event){
			if (selectedGalleryId !=5){
				$(this).toggleClass("isSelected");
			}
		}, function(event){
			if (selectedGalleryId !=5){
				$(this).toggleClass("isSelected");
			}
		});
		$('#locationlisting').css('cursor','pointer').click(function(event){
			switch(event.target.id)
				{
					case "huntingtonDiv":						
						selectedGalleryId = 0;
						updateImages();
						$(navDivsArray[previousGalleryId]).toggleClass("isSelected");
						launchSlides(image1,image2,image3);
						document.getElementById('locationCity').innerHTML=locationTextArray[selectedGalleryId][0];
						document.getElementById('locationStreetAddress').innerHTML=locationTextArray[selectedGalleryId][1];
						document.getElementById('locationPhone').innerHTML=locationTextArray[selectedGalleryId][2];
						previousGalleryId = selectedGalleryId;
					break;
					case "chicagoDiv":
						selectedGalleryId = 1;
						updateImages();
						$(navDivsArray[previousGalleryId]).toggleClass("isSelected");
						//$(this).toggleClass("isSelected");
						launchSlides(image1,image2,image3);
						document.getElementById('locationCity').innerHTML=locationTextArray[selectedGalleryId][0];
						document.getElementById('locationStreetAddress').innerHTML=locationTextArray[selectedGalleryId][1];
						document.getElementById('locationPhone').innerHTML=locationTextArray[selectedGalleryId][2];
						previousGalleryId = selectedGalleryId;
					break;
					case "detroitDiv":
						selectedGalleryId = 2;
						updateImages();
						$(navDivsArray[previousGalleryId]).toggleClass("isSelected");
						launchSlides(image1,image2,image3);
						document.getElementById('locationCity').innerHTML=locationTextArray[selectedGalleryId][0];
						document.getElementById('locationStreetAddress').innerHTML=locationTextArray[selectedGalleryId][1];
						document.getElementById('locationPhone').innerHTML=locationTextArray[selectedGalleryId][2];
						previousGalleryId = selectedGalleryId;
					break;
					case "newyorkDiv":
						selectedGalleryId = 3;
						updateImages();
						$(navDivsArray[previousGalleryId]).toggleClass("isSelected");
						launchSlides(image1,image2,image3);
						document.getElementById('locationCity').innerHTML=locationTextArray[selectedGalleryId][0];
						document.getElementById('locationStreetAddress').innerHTML=locationTextArray[selectedGalleryId][1];
						document.getElementById('locationPhone').innerHTML=locationTextArray[selectedGalleryId][2];
						previousGalleryId = selectedGalleryId;
					break;
					case "dallasDiv":
						selectedGalleryId = 4;
						updateImages();
						$(navDivsArray[previousGalleryId]).toggleClass("isSelected");
						launchSlides(image1,image2,image3);
						document.getElementById('locationCity').innerHTML=locationTextArray[selectedGalleryId][0];
						document.getElementById('locationStreetAddress').innerHTML=locationTextArray[selectedGalleryId][1];
						document.getElementById('locationPhone').innerHTML=locationTextArray[selectedGalleryId][2];
						previousGalleryId = selectedGalleryId;
					break;
					case "hawaiiDiv":
						selectedGalleryId = 5;
						updateImages();
						$(navDivsArray[previousGalleryId]).toggleClass("isSelected");
						launchSlides(image1,image2,image3);
						document.getElementById('locationCity').innerHTML=locationTextArray[selectedGalleryId][0];
						document.getElementById('locationStreetAddress').innerHTML=locationTextArray[selectedGalleryId][1];
						document.getElementById('locationPhone').innerHTML=locationTextArray[selectedGalleryId][2];
						previousGalleryId = selectedGalleryId;
					break;
				}
			//console.log("location click: "+event.target.id);
		});
			
		updateImages();
		launchSlides(image1,image2,image3);
			
});	