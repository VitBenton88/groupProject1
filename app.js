$(document).ready(function() {

	$('.mainArticle').show(200);//load div that contains article

  // Initialize Firebase
	var config = {
	apiKey: "AIzaSyCgFLqC-UD_Y_hOXIgktmVzEz-R-gg7Tyo",
	authDomain: "groupproject1-e44d0.firebaseapp.com",
	databaseURL: "https://groupproject1-e44d0.firebaseio.com",
	projectId: "groupproject1-e44d0",
	storageBucket: "groupproject1-e44d0.appspot.com",
	messagingSenderId: "1040093366150"
	};
	firebase.initializeApp(config);

	var database = firebase.database();

//---------FIREBASE END ---------------

nyTimes = {
	name: "The New York Times",
	apiKey: 'e602416e1df44091b3750704a4b7f198',
	article: '',

	ajaxCall: function(searchQuery){
		return ('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchQuery;)
	},

};

	$.ajax({//jquery ajax method
	      	url: queryURL,//push previously stored API url
	      	method: "GET"
	    	}).done(function(response) {
	    		console.log(buttonKeyword);//log current keyword
	    		for (i=0; i<10; i++){//loop through API object to get 20 URLS (10 stills and 10 animated)
	    			var gifSrc = response.data[i].images.fixed_height_still.url;//capture still URL
	    			var gifAltSrc = response.data[i].images.fixed_height.url;//capture animated URL
	    			var gifRating = response.data[i].rating;//capture rating of gif
	      			$('.gifBox').append("<div class='col-md-6'><img src=" + gifSrc + " data-alt-src=" + gifAltSrc + "><p class='rating'>Rating: " + gifRating + "</p></div>");//append new rows each with an <img> with a src attr that is the still URL and a data-* attr that is the animated URL. Also, print the gif's rating below it in <p>
	      		};
	    	});
	});//function that generates gifs to page when keyword <button> is clicked.
};

//----------------------------------------------------------------END OF SCRIPT	
});