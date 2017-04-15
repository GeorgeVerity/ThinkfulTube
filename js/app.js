$(document).ready(function () {


//----------------------------------------------showResult--------------------------------------------------------------
	function showResults (data){
		var items= data.items;
		console.log(items[0].snippet.thumbnails.default.url);
	}

//-----------------------------------------get request---------------------------------------------------------------
	function getRequest(searchTerm){
		var params = {
			q:searchTerm,
			r:'json',
			part:'snippet',
			key:'AIzaSyAqFCZ6Ja-vToe1a6EwL6RV9txSkRy-XkE'
		},
	url='https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url,params,function (data) {
		showResults(data);
	});
}

//----------------------------------------------on submit-----------------------------------------------------------
//
///*
$('#search-form').submit(function (event) {
	alert('submitted');
	var searchTerm = $('#search-text').val();
	alert(searchTerm);
	getRequest(searchTerm);
	event.preventDefault;
});
//*/

});
