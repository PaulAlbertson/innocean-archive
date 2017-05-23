
$(document).ready(function(){
	// where we work hover effect 

	var api_url = "http://dev.innoceanusa.com/cms/index.php/api";	//dev
	//var api_url = "api.json";	//staged

	//start by grabbing the API data
	$.getJSON(api_url, function(data) {
	  var $d = [];

	  //cache the data
	  $.each(data, function(key, val) {
	    $d[val.item] = val[val.item];
	    console.log(val.item + " : " + $d[val.item]);
	  });


	  //start processing the sections, like clockwork baby.


		  //////////////////////////////
	  //process tweets
	  var $tweets = []
	  $.each($d.twitter_tweets, function(key, val) {

      var tweet = "";
      tweet = replaceURLWithHTMLLinks(cleanCopy(val.tweet.replace(/<(?:.|\n)*?>/gm, '')));
      tweet = tweet.replace(/#(\S+)/g, '<a class="twitter-hashtag" target="_blank" href="//twitter.com/#!/search/$1">#$1</a>')
      .replace(/@(\S+)/g, '<a class="twitter-link" target="_blank" href="//twitter.com/#!/$1">@$1</a>')


	   $tweets.push({
	    	Author:val.tweet_user,
	    	Tweet:tweet,
	    	Time:$.timeago(date("Y-m-d H:i:s",val.tweet_created))
	    });
	  });
	    
	  //render
		if($("#tmpl_twitter").tmpl($tweets).appendTo("#slider-twitter")){

			  //////////////////////////////
	          //bxSlider for Twitter feed

				$('#slider-twitter').bxSlider({ displaySlideQty: 1, moveSlideQty: 1, easing: 'easeInOutQuad'});
	          //end bxSlider for Twitter feed
	          
				//alert('done rendering');
			}


        });
 });

