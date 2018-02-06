// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Finesse",
	"artist":"(Remix) Bruno Mars [Feat. Cardi B]",
	"mp3URL":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	"imageURL":"http://www.rap-up.com/app/uploads/2018/01/bruno-mars-cardi-b-finesse.jpg",
}

var myPlayList = [
	{
	"title":"Finesse",
	"artist":"(Remix) Bruno Mars [Feat. Cardi B]",
	"mp3URL":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	"imageURL":"http://www.rap-up.com/app/uploads/2018/01/bruno-mars-cardi-b-finesse.jpg",
	},
	{
		"title":"Bartier Cardi",
		"artist":"Cardi B [Feat. 21 Savage]",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"http://s3.amazonaws.com/hiphopdx-production/2017/12/171222-Cardi-B-Bartier-Cardi-IG-800x600.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}


]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
   $("button").click(function(){
   	displayList();
   	
});

function displayList(){
$("body").append("<p>mySong: " + myPlayList[0].title + "</p>");
$("body").append("<p>artist: " + myPlayList[0].artist + "</p>");
$("body").append("<p>mp3URl: " + myPlayList[0].mp3URL + "</p>");
$("body").append('<img src="http://www.rap-up.com/app/uploads/2018/01/bruno-mars-cardi-b-finesse.jpg"/>');
}

function displayList(){
$("body").append("<p>mySong: " + myPlayList[1].title + "</p>");
$("body").append("<p>artist: " + myPlayList[1].artist + "</p>");
$("body").append("<p>mp3URl: " + myPlayList[1].mp3URL + "</p>");
$("body").append('<img src="http://s3.amazonaws.com/hiphopdx-production/2017/12/171222-Cardi-B-Bartier-Cardi-IG-800x600.jpg"/>');
}


function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
});