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
	"imageURL":""
}

var myPlayList = [
	{
	"title":"Finesse",
	"artist":"(Remix) Bruno Mars [Feat. Cardi B]",
	"mp3URL":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	"imageURL":"https://timeincsecure-a.akamaihd.net/rtmp_uds/416418724/201801/678/416418724_5702067035001_5702030617001-vs.jpg?pubId=416418724&videoId=5702030617001",
},
	{
	"title":"Bodak Yellow",
	"artist":"Cardi B",
	"mp3URL":"https://www.youtube.com/watch?v=PEGccV-NOm8",
	"imageURL":"https://hypb.imgix.net/image/2017/09/cardi-b-billboard-hot-100-number-1-1.jpg?q=75&w=800&fit=max&auto=compress%2Cformat",
	},
	{
		"title":"Bartier Cardi",
		"artist":"Cardi B [Feat. 21 Savage]",
		"mp3URL":"https://i1.wp.com/www.ookiy.com/wp-content/uploads/2017/12/cardi-bs-bartier-cardi-is-the-only-gift-you-need-this-holiday-season.jpg?fit=1440%2C810&ssl=1",
		"imageURL":"https://s14.postimg.org/pgmlmzwvl/Cardi-_B-feature.png",
	},
	{
		"title":"Gods Plan",
		"artist":"Drake",
		"mp3URL":"https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
		"imageURL":"https://hypb.imgix.net/image/2018/01/drake-gods-plan-spotify-single-day-streaming-record-000.jpg?q=75&w=800&fit=max&auto=compress%2Cformat",
	},
		{
		"title":"Havana",
		"artist":"Camila Cabello [Feat.Young Thug]",
		"mp3URL":"https://www.youtube.com/watch?v=BQ0mxQXmLsk",
		"imageURL":"https://img.wennermedia.com/article-leads-horizontal/camila-cabello-debut-album-755871a9-3783-475d-9ccf-394686fdb61d.jpg",
	},
		{
		"title":"MotorSport",
		"artist":"Cardi B",
		"mp3URL":"https://www.youtube.com/watch?v=BQ0mxQXmLsk",
		"imageURL":"https://www.fuse.tv/image/5a2ab8a1c33a8e682900002f/560/292/social/mogos-nicki-m-cardi-b-motorsport-video-split.jpg",
		}

		

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	displayList();
	$("#button").click(function(){
		
   		//displayList();
		//for (var i=0; i < displayList.length; i = i+ i){
		//	console.log(displayList[i]);
		//}
		var mySong = {
			title: "input",
			artist: "input",
			mp3URL: "input",
			imageURL: "input"
		};
		myPlayList.push(mySong);
		
	});
});

function displayList(){
	for (var i=0; i < myPlayList.length; i++) { 
		$(".songs").append("<p> " + myPlayList[i].title + "</p>");
		$(".songs").append("<p> " + myPlayList[i].artist + "</p>");
		$(".songs").append("<a href= " + myPlayList[i].mp3URL + ">PlayHere</a>");
		$(".songs").append("<img src= " + myPlayList[i].imageURL + "/>");
	}	
}






function clearList(){
	for (var i=0; i< myPlayList.length; i = 0){
	}
}

function addSong(){
 
  
}


//$("#submit").click(function() {