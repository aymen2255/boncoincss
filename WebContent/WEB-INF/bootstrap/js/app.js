
$.getJSON('data/article.json', function(data) {
	$.each(data, function(index, article) {

		var item = '<section><article>' + '<div class="row">'
				+ '<div class="col-md-4">' + article.date + '</div>'
				+ '<div class="col-md-4">' + '<img src="' + article.url
				+ '" alt="Mountain View">' + '</div>'
				+ '<div class="col-md-4">' + '<p>' + article.description
				+ '</p>' + '</div>' + '</div>' + '</article></section>';
		$('.article-content').append(item);
	});
});

$("#detail a").click(function(event) {
	event.preventDefault();
	var lienImageSwap = $(this).children('img').attr('src');
	var lienImagePrincipale = $(".full-image img").attr("src");
	
	$(".full-image img").attr("src", lienImageSwap);
	$(this).children('img').attr('src',lienImagePrincipale);


	//console.log(lienImageSwap);
});

