var Comment = {
	list: function (post,name){
		clear();
		pos = 2;
		$.get(url + name + "/" + post, function(response){
			for (i=0; i < response.comments.length; i++){
				comment = response.comments[i];
				console.log(comment);
			}
		});
	}
}
