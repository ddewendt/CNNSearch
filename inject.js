function getParam(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function modify($){
	var searchTerm=getParam('text');
	$('#liveDynamic').remove();
	$('.n_search-scroll').remove();
	$("<link/>", {id: "liveDynamic", rel: "stylesheet",type: "text/css",href: "http://eat.tv/CNNNav/search/css/search.css?cache="+Math.random()}).appendTo("head");
	$(".search-input").html('').load('http://eat.tv/CNNNav/search/parts/head.html',function(){
		$('.n_search_text').val(searchTerm);
		$('.n_search-drop').bind('click',function(){
			$(this).toggleClass('drop_expanded');
			if($(this).hasClass('drop_expanded')===true){
				$(this).height($(this).children().length*40);
			}else{
				$(this).height(42);
			}
		});
		
		$('.n_search-selector>span').bind('click',function(){
			$('.n_search-selector>span.n_search-selected').removeClass('n_search-selected');
			$(this).addClass('n_search-selected');
		});
		
	});
	
// 	var scrollable=$('');
	$('.cn.cn-list-hierarchical-xs.cn--idx-0.display-results').prepend('<div class="n_search-scroll"></div>');
	$('.n_search-scroll').load('http://eat.tv/CNNNav/search/parts/scroll.html',function(){
		$('.scrl_post').bind('click',function(){
			$('.scroll_part').css('left',parseInt($('.scroll_part').css('left'))-$('.scroll_part>div').width())
		});
		$('.scrl_prev').bind('click',function(){
			$('.scroll_part').css('left',parseInt($('.scroll_part').css('left'))+$('.scroll_part>div').width())
		});
	});
	
	
}

modify(jQuery);