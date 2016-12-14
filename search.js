$(document).ready(function() {
	$('#search-term').submit(function(event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		console.log(searchTerm);
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm) {
	url = 'https://www.googleapis.com/youtube/v3/search';
	var params = {
		part: 'snippet',
		key: 'AIzaSyDMjH8E7e0MTMvbvvhq-f1M9r2962cyeDY',
		q: searchTerm,
		maxResults: 10
	};

	$.getJSON(url, params, function (searchTerm){
		console.log(searchTerm);
		showResults(searchTerm);
	});

}

function showResults(results) {
	var html = "",
			entries = results.items;

	$.each(entries, function(index, value) {
		var title = value.snippet.title;
		var thumbnail = value.snippet.thumbnails.default.url;

		html += '<p>' + title + '</p>';
		html += '<img src="' + thumbnail + '">';
	});

	$('#search-results').html(html);
}