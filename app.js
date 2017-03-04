var youTubeURL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part:'snippet',
		key:'AIzaSyCbOBE1qBFtKyeUYX97uKFicRRh265PPq4',
		q:$('.queryInput').val(),
		type:'video',
		maxResults:3
		
  };
  $.getJSON(youTubeURL, query, callback);
}


function displayOMDBSearchData(data) {
  var resultElement = "";
  if (data.items.length>0) {
    data.items.forEach(function(item) {
     resultElement += "<p>" + item.snippet.title + "</p>" + '<iframe src=\"//www.youtube.com/embed/'+item.id.videoId+'\"></iframe>';
    });
  }
  else {
    resultElement += "<p>No results</p>";
  }
  
  $('.results').html(resultElement);
	console.log(resultElement);
}

$(document).ready(function(){
	$('.submitSearch').submit(function(e){
		e.preventDefault();
		var query = $('.queryInput').val();
    getDataFromApi(query, displayOMDBSearchData);
	});
})

