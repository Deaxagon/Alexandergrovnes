/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
   window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });

/*
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
   $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    }); 

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 500) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict */

// Expressive typing
var expressImg=document.getElementById("img1");
var expressText =document.getElementById("link1");
var background=document.getElementById("background-section");

document.getElementById("link1").onmouseover= function(){
  typo.style.opacity="0";
  expressImg.style.opacity="1";
  monst.style.opacity="0";
  keep.style.opacity="0";

  
  typo.classList.remove("fade-in");
  monst.classList.remove("fade-in");
  keep.classList.remove("fade-in");
  expressImg.classList.add("fade-in");

  background.style.background="rgb(252, 160, 40)";
  //keepText.style.color="#ffffff";
}
// typography game
var typo=document.getElementById("img2");
var typoText=document.getElementById("link2");

document.getElementById("link2").onmouseover= function(){
  typo.style.opacity="1";
  expressImg.style.opacity="0";
  monst.style.opacity="0";
  keep.style.opacity="0";

  expressImg.classList.remove("fade-in");
  monst.classList.remove("fade-in");
  keep.classList.remove("fade-in");
  typo.classList.add("fade-in");

  background.style.background="#EAEAEA";
 // keepText.style.color="#ffffff";
}
// monster bins
var monst=document.getElementById("img3");
var monstText=document.getElementById("link3");

document.getElementById("link3").onmouseover= function(){
  typo.style.opacity="0";
  expressImg.style.opacity="0";
  monst.style.opacity="1";
  keep.style.opacity="0";

  expressImg.classList.remove("fade-in");
  typo.classList.remove("fade-in");
  keep.classList.remove("fade-in");
  monst.classList.add("fade-in");

  background.style.background="black";
 // keepText.style.color="#ffffff";
}
//Google keep
var keep=document.getElementById("img4");
var keepText=document.getElementById("link4");

document.getElementById("link4").onmouseover= function(){
  typo.style.opacity="0";
  expressImg.style.opacity="0";
  monst.style.opacity="0";
  keep.style.opacity="1";
  //background.style.background="#8D8D8D";
  expressImg.classList.remove("fade-in");
  typo.classList.remove("fade-in");
  monst.classList.remove("fade-in");
  keep.classList.add("fade-in");
  
  background.style.background="#F8C331";
 // keepText.style.color="#000000";


}
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//--

document.addEventListener('keydown', textEditor);
const text = document.getElementById("angerText");
var clock;
  var interval=0; // funkar nog inte som de ska
var actWrite=0;
var timer=0;
var a=0; // test värde


let numOfKeyPressed = 0;
let lastWordStart = 0;

document.getElementById('angerText').onclick = function changeContent() {

  // used before to remove example text

}  
//The text editor along with timestamp in milliseconds in the console.log
function textEditor(e) {
   numOfKeyPressed = numOfKeyPressed + 1;
   timer=1;

    var time = this._time;
    var timestamp = new Date().getTime();
    //var x gets the div from the html
    var x = document.getElementById("angerText");
    //var currentLetter creates a span
    var currentLetter = document.createElement("SPAN");

    currentLetter.setAttribute("id", parseInt(numOfKeyPressed));
    //here we put the information from the keypresses into the "y" variable or the span.
    currentLetter.textContent = e.key;
    
    // to remove the cursor
    document.getElementById('removeCursor').style.fontSize=0;


    if(e.keyCode==32){

      currentLetter.appendChild( document.createTextNode( '\u00A0' ) );
    }

    x.appendChild(currentLetter);
    var childrenCount = document.getElementById("angerText").childElementCount;
    //Changes the amount of strings in "y" to whole numbers.
    var integer = parseInt(childrenCount,10);
    //Counts the amount of spans.
    var spanCount = integer;
   
    console.log(spanCount+"spanCount");
    // makes blinking cursor appear again when there is no spans**doesn't work
    if(spanCount==2){
     // document.getElementsByClassName('blinking-cursor').style.fontSize=30;
    }

    console.log(currentLetter.textContent); // writes out the letter order
    if (time)
   console.log(e, timestamp - time); // writes the time between letters in console
    this._time = timestamp;
     interval = timestamp -time;

     var maxValue = 1500;

     if (interval > maxValue){
       interval = maxValue;
     }


     if(currentLetter&&interval>500){
    
    }
   if (interval>300){
     const lastSpan=text.lastChild;
     // lastSpan.classList.remove('animated', 'fadeIn');
     lastSpan.classList.add('animated', 'bounceIn');
   
   }

   if(interval<=300){
     const lastSpan=text.lastChild;
     //lastSpan.classList.add('animated', 'fadeIn');
    
     lastSpan.classList.add('animated', 'bounceIn');
   }
    var maxValue = 1500;

    if (interval > maxValue){
      interval = maxValue;
    } 

    let wght = 6*interval; //lek med tjocklek
    let wdth = interval;
    let fontSize = (interval/60 + 30); // 40 Old way of setting font size

    currentLetter.style.fontVariationSettings = '\'wdth\'' + parseInt(wdth) + ', ' + '\'wght\' '+parseInt(wght);
     currentLetter.style.fontSize = parseInt(fontSize)+'px';
     
   if(e.keyCode == 13){ // 13 enter, 8 backspace
       removeLastSpan();
       document.getElementById("fakeBackspace").click();
       console.log("total letters before backspace "+(spanCount-1));
     //  spanCount=0;
     keySound=false;
   }
    
    if(e.keyCode == 8){ // 13 enter, 8 backspace
        removeLastSpan();
        document.getElementById("fakeBackspace").click();
    
       spanCount=spanCount-1;
    }
  
   if(e.keyCode == 13||e.keyCode==20){ // 13 enter, 8 backspace
        currentLetter.appendChild( document.createTextNode( '\u00A0' ) );
     //removeLastSpan();
    }

    if(e.keyCode == 16){ // 13 enter, 8 backspace, 16 shift
        currentLetter.appendChild( document.createTextNode( '\u00A0' ) );
     removeLastSpan();
    }
    /*if(e.keyCode == 32){
      console.log(spanCount);
    }*/

    
//gets the function that measures the time between when the space button is pressed.
    if(e.keyCode==32){ //spacekey
     //timeSpace();
     
    // changeWordFont(spanCount); // either use timeSpace or this, not both
    }
}


//removes the previous SPAN.
function removeLastSpan() {
    var remove = document.getElementById("angerText");
    remove.removeChild(remove.lastChild);

}

function timeSpace(){
  var spaceTime = this._time;
  var timestamp2 = new Date().getTime();
  if (spaceTime)
 //console.log( timestamp2 - spaceTime+" time between  the last word"); // writes the time between spacebar in console
  this._time = timestamp2;
}



function changeWordFont(spanCount){
  // Same as timeSpace
 //spaceTime = this._time; // uncomment this for time between spaces instead of time to write word
 var timestamp2 = new Date().getTime();
 if (spaceTime)
 console.log( timestamp2 - spaceTime+" time between  the last word"); // writes the time between spacebar in console

 // Change font of word
 var wordInterval = timestamp2 - spaceTime;

    var maxValue = 10000;

    if (wordInterval > maxValue){
      wordInterval = maxValue;
    }

    let wght = wordInterval/4; //lek med tjocklek
    let wdth = wordInterval/4;
    let fontSize = (wordInterval/100 + 40); //Old way of setting font size
    //let fontSize = 200;

     //change font for all previous letters
     maintext = document.getElementById("angerText");
     var textarray = new Array(spanCount-lastWordStart);
     var differ = spanCount-lastWordStart;

     for (var i=0; i<differ;i++){
         textarray[i] = maintext.lastChild.textContent;  //save last letter content
         maintext.removeChild(maintext.lastChild);       // remove last span
     }

     for (var i=0; i<=differ;i++){
         var letter = document.createElement("SPAN");    // create new span
         letter.setAttribute("id", parseInt(lastWordStart+i));   // set id
         letter.textContent = textarray[differ-i];       // add first letter (last in array)
         // do things with the output
       //  letter.style.fontVariationSettings = '\'wdth\'' + parseInt(wdth) + ', ' + '\'wght\' '+parseInt(wght);
         //letter.style.fontSize = parseInt(fontSize)+'px';

         maintext.appendChild(letter);                   // add span to div

     }

 this._time = timestamp2; // old way
 haveSpace = true;

 lastWordStart = spanCount;
}

var animationDelay = 2500;

animateHeadline($('.cd-headline'));

function animateHeadline($headlines) {
   $headlines.each(function(){
      var headline = $(this);
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
      //other checks here ...
   });
}


function hideWord($word) {
  var nextWord = takeNext($word);
  switchWord($word, nextWord);
  setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}

function takeNext($word) {
  return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function switchWord($oldWord, $newWord) {
  $oldWord.removeClass('is-visible').addClass('is-hidden');
  $newWord.removeClass('is-hidden').addClass('is-visible');
}

singleLetters($('.cd-headline.letters').find('b'));

function singleLetters($words) {
   $words.each(function(){
      var word = $(this),
          letters = word.text().split(''),
          selected = word.hasClass('is-visible');
      for (i in letters) {
         letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
      }
      var newLetters = letters.join('');
      word.html(newLetters);
   });
}

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------


