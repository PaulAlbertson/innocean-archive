// JavaScript Document
var masterListPhotoXML = [];


function parsePhotoXML(passUrl){
	
	  $.ajax({
		type: "GET",
		//url: "xml/artGallery.xml",
		url: passUrl,
		dataType: "xml",
		success: parsePhotoXML
	  });


	function parsePhotoXML(xml){

		  //find every Tutorial and print the author
		  $(xml).find("section").each(function() {
			
			var myListing;
			
			var photoListXML = [];	
			
			  $(this).find("image").each(function() {
				  
				 var myPhotos;

				 var copyListXML = [];	
				  
				 $(this).find("copy").each(function() {
				  
				 	 var myCopy;
					 myCopy = {copy: $(this).text()};
						 
				 	 copyListXML.push(myCopy)
	
				  });	
	
					myPhotos = {amount: $(this).attr("amount"), folder: $(this).attr("folder"), name: $(this).attr("name"),  video: $(this).attr("video"), copy: copyListXML};
				    photoListXML.push(myPhotos);
					
			  });
			
			
			myListing = {title:  $(this).find("title").text(), src :  $(this).attr('src') , image: photoListXML};
			masterListPhotoXML.push(myListing);
			
		  });
		  
		return masterListPhotoXML;
		
	}

	return masterListPhotoXML;

	  
}
	
	

	
	