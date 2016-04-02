var Post = {
	list: function (name){
		$( ".boardsContainer" ).append( createElement("h1","All the post in " + name, "", "text-center") );
		$( ".boardsContainer" ).append( createElement("div","","dataList", "list-group") );

		$.get( url + name, function(response) {
			for (i = 0; i < response.post.length; i++) {
				var post = response.post[i];
				console.log(post);
				var button = createElement("button", post.title,"","post-button list-group-item list-item");
				button.on('click', (function(postCopy) {
					return function() {
						Comment.list(postCopy.id,name);
					}
				})(post));
				$( "#dataList" ).append( button );
			}
		});
	}
}
