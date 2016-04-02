var Comment = {
	list: function (post,name){
		clear();
		pos = 2;
		$( ".boardsContainer" ).append( createElement("div","","dataList", "content-grid mdl-grid") );
		$.get(url + name + "/" + post, function(response){
			for (i=0; i < response.comments.length; i++){
								
			}
		});
	}
}
