var Post = {
	list: function (name){
		$( ".boardsContainer" ).append( createElement("h1","All the post in " + name, "", "text-center") );
		$( ".boardsContainer" ).append( createElement("div","","dataList", "") );

		$.get( url + name, function(response) {
			for (i = 0; i < response.post.length; i++) {

				var post = response.post[i];
				console.log(post);
        var div = createElement("div","","", "postContainer center-block");
        var header  = createElement("div","","", "postHeader");
        var date = createElement("div",post.created_at,"", "postDate");
        var h6 = createElement("h6",post.title,"", "");
        var p  = createElement("p","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","", "");
        header.append(h6,date);
        div.append(header,p);
        var button = createElement("button", post.title,"","post-button");
				button.on('click', (function(postCopy) {
					return function() {
						Comment.list(postCopy.id,name);
					}
				})(post));
				$( "#dataList" ).append( div, "<br>" );
			}
		});
	}
}
