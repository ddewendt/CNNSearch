
function restore($){
	var searchTerm=getParam('text');
	$('#liveDynamic').remove();
	$('.n_search-scroll').remove();
	$(".search-input").html('').load('http://eat.tv/CNNNav/search/parts/restoreHead.html',function(){
		
	});
	
	
	
}

restore(jQuery);