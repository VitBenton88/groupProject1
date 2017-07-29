$(document).ready(function() {


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
//testforMatch.match(/c.\d/g)
var publications ={
	conservative :[{
	name: "The New York Times",
	apiKey: 'e602416e1df44091b3750704a4b7f198',
	article: '',
	ajaxCall: function(searchQuery,subset){
		return ('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e602416e1df44091b3750704a4b7f198&q=' + searchQuery+"&fq="+subset);
	},
	ajaxDoneFunctionFormat: function(jsonOb){
		return jsonOb.docs[0].mainArticle
	}

	}],
	neutral :[{
	name: "The New York Times",
	apiKey: 'e602416e1df44091b3750704a4b7f198',
	article: '',
	ajaxCall: function(searchQuery,subset){
		return ('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e602416e1df44091b3750704a4b7f198&q=' + searchQuery+"&fq="+subset);
	},
	ajaxDoneFunctionFormat: function(jsonOb){
		return jsonOb.//path represented here
	}
	}],
	liberal :[{
	name: "The New York Times",
	apiKey: 'e602416e1df44091b3750704a4b7f198',
	article: '',
	ajaxCall: function(searchQuery,subset){
		return ('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e602416e1df44091b3750704a4b7f198&q=' + searchQuery+"&fq="+subset);
	},
	ajaxDoneFunctionFormat: function(jsonOb){
		return jsonOb.docs[0].lead_paragraph
	}

	}]

};

//testforMatch.match(/c.\d/g)

//some ajax call that provides you with 
var publications ={
totalVotes : 0;
publicationList:{
"the New York Times" :{
	source: "The New York Times",
	stringOfVotes : "cl4ln3"
	},
	id : {"01/23/2014fwr":{
		stringOfVotes : ""
	}
}
}
}

};
var randomnumber1= Math.floor(Math.random()*publications.conservative.length)
var randomnumber2= Math.floor(Math.random()*publications.neutral.length)
var randomnumber3= Math.floor(Math.random()*publications.liberal.length)
var articleArray = [];

		$.ajax({//jquery ajax method
      	url: publications.conservative[randomnumber1].ajaxCall("politics"),//push previously stored API url
      	method: "GET"
    	}).done(function(result) {
    		articleArray.push(publications.conservative[randomnumber1].ajaxDoneFunctionFormat(result));
    	});
    	$.ajax({//jquery ajax method
      	url: publications.neutral[randomnumber2].ajaxCall("politics"),//push previously stored API url
      	method: "GET"
    	}).done(function(result) {
    		articleArray.push(publications.neutral[randomnumber1].ajaxDoneFunctionFormat(result));
    	});
    	$.ajax({//jquery ajax method
      	url: publications.liberal[randomnumber3].ajaxCall("politics"),//push previously stored API url
      	method: "GET"
    	}).done(function(result) {
    		articleArray.push(publications.neutral[randomnumber1].ajaxDoneFunctionFormat(result));
    	});
	});

console.log(database.ref('publicationList'))
	

	//do this if the publication has never been selected	
		database.ref("publicationList").push({
		/*sourceSelected*/ :{
		source: /*sourceSelected*/,
		stringOfVotes : "x",
		idList : {
		/*"pub_date+ headline first+last+middle character"*/:{stringOfVotes : "x"}
		}
	}
});
	//do this if the article has been selected and publication
		database.ref("publicationList"+"/"+"name of the source")


      //do this if the article hasn't been selected but publication has
      	database.ref(key).update({


      	});


