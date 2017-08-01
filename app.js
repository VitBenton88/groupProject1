var ideologies = ["Liberal", "Moderate", "Conservative"];

var clickCounter = 0;
var currentPoliticalAffiliation;
var Article1ConservativeVote=10;
var Article1LiberalVote=10;
var Article1NeutralVote=10;
var Article2ConservativeVote=10;
var Article2LiberalVote=10;
var Article2NeutralVote=10;
var Article3ConservativeVote=10;
var Article3LiberalVote=10;
var Article3NeutralVote=10;
var options = ["c","l","m"];
var chartArray = [];

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
  currentPoliticalAffiliation = ($(this).attr("id")).charAt(0);
    $('.mainArticle').show();//load div that contains article
    $('.loader').show();//show loader animation
    $(".choose").remove();
    $(".idea").detach();
    setTimeout(function() {
      $('.articleText').text(articleArray[clickCounter].article);
      $('.articleText').fadeIn(2000);//load article, create delay for ajax calls, loading animation will show in mean time
        $(".loader").hide();//hide loader animation after 2 seconds
        $('.finishedReadingButton').show(7000);//shw finished reading button,
      }, 300);

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


renderModal();
renderButtons();

$(".question2-buttons").hide();
$(".finishedReadingButton").hide();

//CHART ---------------------------------------------------

var chartsToShow = function(){

var config1 = {
  type: 'doughnut',
  data: {
    datasets: [
     /* Outer doughnut data starts*/
    {
      data: [
        Article1LiberalVote,
        Article1ConservativeVote,
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
      "Moderate"
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
        Article2LiberalVote,
        Article2ConservativeVote,
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
        Article3LiberalVote,
        Article3ConservativeVote,
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
$('.chartBox').show(1000);
}
//-------------------------END OF SCRIPT  
