var publications;
var articleArray;
var database;
var config;
var rootDirectory;
var totalAmountOfVotesLocal;
var updateDatabaseWithVotes;
var status = 0;
var currentPoliticalAffiliation;

   function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
	config = {
    apiKey: "AIzaSyBdlPBOr8SPQx1iKMUjG04VmAJruAZqe-g",
    authDomain: "testforarticle-f7b87.firebaseapp.com",
    databaseURL: "https://testforarticle-f7b87.firebaseio.com",
    projectId: "testforarticle-f7b87",
    storageBucket: "",
    messagingSenderId: "800311663549"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  articleArray = [];
      
      database.ref().on("value", function(snap) {
        rootDirectory = snap.val();
        totalAmountOfVotesLocal = rootDirectory["totalVotes"]["totalAmountOfVotes"];
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });      
  updateDatabaseWithVotes = function (rating,indexOfTheArticle,currentPoliticalAffiliation){

          var vote = rating.charAt(0);

    			var currentArticle = articleArray[indexOfTheArticle];     
 
				totalAmountOfVotesLocal++;
				var updatedValue = (rootDirectory["publicationList"][currentArticle.source]["stringOfVotes"]["totalString"])+=("x"+currentPoliticalAffiliation + vote);

				database.ref("publicationList/"+currentArticle.source+"/"+"stringOfVotes").set({
				totalString : updatedValue
						});

    			database.ref("totalVotes").set({
				totalAmountOfVotes : totalAmountOfVotesLocal
						});
		};

publications ={
	conservative :[{
	name: "Breitbart",
	ajaxCall: function(){
		$.ajax({//jquery ajax method
      	url: 'https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top&apiKey=91492737bdd74049a041302439cd348f',
      	method: "GET"
    	}).done(function(result) {
    		var input = result.articles[1]['description'];
    		articleArray.push({article:input, source:"Breitbart", id: (input.substr(0,Math.floor(input.length)/8))+input.substr(-2) + input.length});
    		status++;
    		publications.moderate[randomnumber2].ajaxCall();
    	});
	},
	}],
	moderate :[{
	name: "The New York Times",
	apiKey: 'e602416e1df44091b3750704a4b7f198',
	ajaxCall: function(){
		$.ajax({//jquery ajax method
      	url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e602416e1df44091b3750704a4b7f198&q=bannon',
      	method: "GET"
    	}).done(function(result) {
    		var input = result.response["docs"][0]["snippet"];
    		articleArray.push({article:input, source:"The New York Times",id: (input.substr(0,Math.floor(input.length)/8)) +input.substr(-2) + input.length});
    		  status++;
			  publications.liberal[randomnumber3].ajaxCall();
    	});
	},
	}],
	liberal :[{
	name: "The Guardian",
	ajaxCall: function(){
		$.ajax({//jquery ajax method
      	url: 'https://content.guardianapis.com/search?q=politics&show-fields=starRating,headline,thumbnail,short-url&api-key=cdf1da10-7ac7-4307-aa12-78c7ff616e29',
      	method: "GET"
    	}).done(function(result) {
    		var input = result.response.results[0]["webTitle"];
    		articleArray.push({article:input, source:"The Guardian", id: (input.substr(0,Math.floor(input.length)/8)) + input.substr(-2) + input.length});
    		status++;
        articleArray = shuffle(articleArray);
        console.log(articleArray);
    	});
	},
	}]

};
var randomnumber1 = Math.floor(Math.random()*publications.conservative.length);
var randomnumber2 = Math.floor(Math.random()*publications.moderate.length);
var randomnumber3 = Math.floor(Math.random()*publications.liberal.length);
//testforMatch.match(/c.\d/g)
		publications.conservative[randomnumber1].ajaxCall();

