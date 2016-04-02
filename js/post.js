var Post = {
	list: function (name){
		$( ".boardsContainer" ).append( createElement("h1","All the post in " + name, "", "text-center") );
		$( ".boardsContainer" ).append( createElement("div","","dataList", "content-grid mdl-grid") );
		$.get( url + name, function(response) {
			for (i = 0; i < response.post.length; i++) {
				var post = response.post[i];
				console.log(post);
				html = '<div class="mdl-cell mdl-cell--6-col mdl-cell--2-col-tablet mdl-cell--4-col-phone">';
				html += '<article class="material-card">';
				html += '<header><div class="material-card-icon"></div>';
				html += '<h2 class="material-card-title">'+post.title+'</h2>';
				html += '<div class="material-card-action">';
				html += '<a href="#"> <i class="right-arrow material-icons md-36">keyboard_arrow_right</i></a></div>';
				html += '<div class="material-card-info"><i class="material-icons">access_time</i><time>Created: '+post.created_at+'</time></div></header></article><br>';
				html += '</div>';
				$("#dataList").append(html);
    	}
		});
	}
}
