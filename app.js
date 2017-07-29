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
	$('#articleText').hide(200);//hide three idea bubbles
	$(".questionTitle").show();//show 'What is, in your opinion, the tone of this article?' text
	$('.finishedReadingButton').hide();
	$('#likertScale').show();
	renderQuestionButtons();
});

$(".question2-buttons").click(function() {
	$(".question2-buttons").empty();
	$(".questionTitle").hide();//hide 'What is, in your opinion, the tone of this article?' text
	
	$("#likertScale").hide();
	$("#articleText").show();
	$(".finishedReadingButton").show();
});









//----------------------------------------------------------------END OF SCRIPT	
