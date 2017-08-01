var ideologies = ["Liberal", "Moderate", "Conservative"];

var clickCounter = 0;

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

$('body').on('click','.idea', function(){

		$('.loader').show();//show loader animation
		setTimeout(function() {
			  $(".loader").hide();//hide loader animation after 2 seconds
			  $('.finishedReadingButton').show();//shw finished reading button,
			}, 2000);

		$('.mainArticle').show();//load div that contains article
		$('.articleText').show(5000);//load article, create delay for ajax calls, loading animation will show in mean time
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

//hover effect on finished reading button ------

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

//------------------------

$('.finishedReadingButton').click(function (){//when the finished reading button is clicked
	
		$('#articleText').hide(200);//hide three idea bubbles
		$(".questionTitle").show();//show 'What is, in your opinion, the tone of this article?' text
		$('.finishedReadingButton').hide();
		$('#likertScale').show();
		renderQuestionButtons();
});

$(".question2-buttons").click(function() {

	if (clickCounter < 3) {

		clickCounter++;
		console.log(clickCounter);

		$(".question2-buttons").empty();
		$(".questionTitle").hide();//hide 'What is, in your opinion, the tone of this article?' text
		$(".question2-buttons").hide();
		$("#articleText").show();
		$(".finishedReadingButton").show();

	}	

	else {

		  $(".question2-buttons").empty();
		  $(".questionTitle").hide();//hide 'What is, in your opinion, the tone of this article?' text
		  $('.chartBox').show();

		  clickCounter = 0;
	};
});


renderModal();
renderButtons();

$(".question2-buttons").hide();
$(".finishedReadingButton").hide();

//CHART ---------------------------------------------------

var Article1ConservativeVote= 10;
var Article1LibralVote = 10;
var Article1NeutralVote = 10;

var Article2ConservativeVote= 10;
var Article2LibralVote = 10;
var Article2NeutralVote = 10;

var Article3ConservativeVote= 10;
var Article3LibralVote = 10;
var Article3NeutralVote = 10;

var config1 = {
  type: 'doughnut',
  data: {
    datasets: [
     /* Outer doughnut data starts*/
    {
      data: [
        Article1ConservativeVote,
        Article1LibralVote,
        Article1NeutralVote,
      ],
      backgroundColor: [
    'rgba(127, 127, 255, 255)',
		'rgba(255, 0, 0, 255)',
		'rgba(211, 211, 211, 255)'
      ],
      label: 'Doughnut 1'
    }
    /* Outer doughnut data ends*/
    ],
    labels: [
      "Liberal",
      "Conservative",
      "Moderdate"
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'First Article'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};

var config2 = {
  type: 'doughnut',
  data: {
    datasets: [
     /* Outer doughnut data starts*/
    {
      data: [
        Article2ConservativeVote,
        Article2LibralVote,
        Article2NeutralVote,
      ],
      backgroundColor: [
    'rgba(127, 127, 255, 255)',
		'rgba(255, 0, 0, 255)',
		'rgba(211, 211, 211, 255)'
      ],
      label: 'Doughnut 1'
    }
    /* Outer doughnut data ends*/
    ],
    labels: [
      "Liberal",
      "Conservative",
      "Moderdate"
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Second Article'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};

var config3 = {
  type: 'doughnut',
  data: {
    datasets: [
     /* Outer doughnut data starts*/
    {
      data: [
        Article3ConservativeVote,
        Article3LibralVote,
        Article3NeutralVote,
      ],
      backgroundColor: [
    'rgba(127, 127, 255, 255)',
		'rgba(255, 0, 0, 255)',
		'rgba(211, 211, 211, 255)'
      ],
      label: 'Doughnut 1'
    }
    /* Outer doughnut data ends*/
    ],
    labels: [
      "Liberal",
      "Conservative",
      "Moderdate"
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Third Article'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};

function renderCharts(){
	  var ctx1 = document.getElementById("chart1")
	    .getContext("2d");
	  window.myDoughnut = new Chart(ctx1, config1);

	  var ctx2 = document.getElementById("chart2")
	    .getContext("2d");
	  window.myDoughnut = new Chart(ctx2, config2);

	  var ctx3 = document.getElementById("chart3")
	    .getContext("2d");
	  window.myDoughnut = new Chart(ctx3, config3);
};

renderCharts();

//-------------------------END OF SCRIPT	
