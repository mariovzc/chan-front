var Comment = {
	list: function (post,name){
		clear();
		pos = 2;
		console.log(post,name);
		$.get(url + name + "/" + post, function(response){
			for (i=0; i < response.comments.length; i++){
				$( ".boardsContainer" ).append( createElement("div",response.comments[i].body,"", "jumbotron") );
			}
		});
	}
}
