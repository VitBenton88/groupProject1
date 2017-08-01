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


var ideologies = ["Liberal", "Moderate", "Conservative"];

function renderButtons() {
	$(".button-container").empty()

	$(".button-container").append("<button class='idea' id='liberal'>" + ideologies[0] + "</button><button class='idea' id='moderate'>" + ideologies[1] + "</button><button class='idea' id='conservative'>" + ideologies[2] + "</button>");

	$(".choose").hide();
	$(".idea").hide();
	$('.mainArticle').hide();
}

function renderModal() {
	$('#infoModal').modal('toggle');

	$('#infoModal').on('hidden.bs.modal', function(){
		$(".choose").fadeIn();
		$(".idea").fadeIn();
	});

};	

function renderQuestionButtons(){
	$(".question2-buttons").append("<button class='question2-answer' id='liberal-lean'>" + ideologies[0] + "</button><button class='question2-answer' id='moderate-lean'>" + ideologies[1] + "</button><button class='question2-answer' id='conservative-lean'>" + ideologies[2] + "</button>");
	$(".question2-buttons").show();

		$('body').on('mouseenter','.question2-answer', 1000, function(){
		$(this).animate({
        	width: "160px",
        	height: "160px",
        	color: "black",
    	});
	});

	$('body').on('mouseout','.question2-answer', 1000, function(){
		$(this).animate({
        	width: "150px",
        	height: "150px",
        	color: "white",

    	});
	});
};

renderModal();
renderButtons();
$('#likertScale').hide();
$(".question2-buttons").hide();

$('body').on('click','.idea', function(){
	$('.mainArticle').show(200);//load div that contains article
	$(".choose").remove();
	$(".idea").detach();
});

//hover effect on idea bubbles ------

$('body').on('mouseenter','.idea', 1000, function(){
	$(this).animate({
        width: "290px",
        height: "290px",
        color: "black",
    });
});

$('body').on('mouseout','.idea', 1000, function(){
	$(this).animate({
        width: "280px",
        height: "280px",
        color: "white",

    });
});

//------------------------
$('body').on('mouseenter','.finishedReadingButton', 1000, function(){
	$(this).animate({
        width: "110px",
        height: "110px",
        color: "black",

    });
});
$('body').on('mouseout','.finishedReadingButton', 1000, function(){
	$(this).animate({
        width: "100px",
        height: "100px",
        color: "black",

    });
});

$('.finishedReadingButton').click(function (){//when the finished reading button is clicked  
    $('.articleText').hide();//hide three idea bubbles
    $(".questionTitle").show();//show 'What is, in your opinion, the tone of this article?' text
    $('.finishedReadingButton').hide();
    $('#likertScale').show();
    renderQuestionButtons();
});

$("body").on("click", ".question2-answer",function() {

  updateDatabaseWithVotes($(this).attr("id"),clickCounter,currentPoliticalAffiliation);
    clickCounter++;
  if (clickCounter < 3) {

    console.log(clickCounter);
    $(".question2-buttons").empty();
    $(".questionTitle").hide();//hide 'What is, in your opinion, the tone of this article?' text
    $(".question2-buttons").hide();
    $(".articleText").text(articleArray[clickCounter].article);
    $(".articleText").show();
    $(".finishedReadingButton").show();
  } 
  else {
    var counterforTest = 0;
      articleArray.forEach(function(element){
          options.forEach(function(q,y,z){
            counterforTest++;
         console.log("counterforTest is : "+counterforTest);
        var format = ("x" + currentPoliticalAffiliation.charAt(0) + q);
        var re = new RegExp(format,"g");
        var arrayToDeriveValueFrom  = (rootDirectory["publicationList"][element.source]["stringOfVotes"]["totalString"]).match(re);
        console.log(arrayToDeriveValueFrom);

        if(arrayToDeriveValueFrom === null){
          chartArray.push(0);
        console.log(chartArray);
        }else {
          chartArray.push(arrayToDeriveValueFrom.length);
          console.log(chartArray);
        }
            
            });
      });
      Article1ConservativeVote = chartArray[0];
      Article1LiberalVote = chartArray[1];
      Article1NeutralVote = chartArray[2];
      Article2ConservativeVote = chartArray[3];
      Article2LiberalVote = chartArray[4];
      Article2NeutralVote = chartArray[5];
      Article3ConservativeVote = chartArray[6];
      Article3LiberalVote = chartArray[7];
      Article3NeutralVote = chartArray[8];

      $(".question2-buttons").empty();
      $(".questionTitle").hide();//hide 'What is, in your opinion, the tone of this article?' text
      chartsToShow();
  };
  
});

//----------------------------------------------------------------END OF SCRIPT	
