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

renderModal();
renderButtons();

$('body').on('click','.idea', function(){
	$('.mainArticle').show(200);//load div that contains article
	$(".choose").remove();
	$(".idea").detach();
});

//hover effect on idea bubbles ------

$('body').on('mouseenter','.idea', function(){
	$(this).animate({
        width: "330px",
        height: "330px",
        color: "black",
    });
});

$('body').on('mouseout','.idea', function(){
	$(this).animate({
        width: "300px",
        height: "300px",
        color: "white",

    });
});

//------------------------

$('.finishedReadingButton').click(function (){//when the finished reading button is clicked
	$('#articleText').hide(200);//hide three idea bubbles
	$('.finishedReadingButton').hide();
});




//----------------------------------------------------------------END OF SCRIPT	
