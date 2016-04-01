var url = "http://chanapi.herokuapp.com/";

var Board = {
	list : function (){
		$.get( url + "boards", function( response ) {
			var dataList = $( document.createElement('div') );

			
			$( ".boardsContainer" ).append( create("h1","Select a Board") );
			$( ".boardsContainer" ).append( create("div","","dataList", "list-group") );

			for (i =0; i< response.boards.length; i++){
				var board = response.boards[i];
				var button =  create("button",response.boards[i].name,"","board-button list-group-item");
				button.on('click', (function(boardCopy) {					
					return function() {
						Board.goTo(boardCopy.name);
					}
				})(board));
				$( "#dataList" ).append( button );
			}
		});

	},
	goTo : function(name){
		clear();
		Post.list(name);
	}
};
var Post = {
	list: function (name){
		$( ".boardsContainer" ).append( create("h1","All the post in " + name) );
		$( ".boardsContainer" ).append( create("div","","dataList", "list-group") );

		$.get( url + name, function(response) {
			for (i = 0; i < response.post.length; i++) {
				var post = response.post[i];
				console.log(post);
				var button = create("button", post.title,"","post-button list-group-item");
				button.on('click', (function(postCopy) {					
					return function() {
						console.log(postCopy.title);
					}
				})(post));
				$( "#dataList" ).append( button );
			}
		});
	}
}
function create(element,text,id,clss){
	var element = $(document.createElement(element));
	if (text)
		element.html(text);

	if (clss)
		element.attr("class",clss);

	if (id)
		element.attr("id",id);

	return element;
}
function clear(){
	$(".boardsContainer").html("");
}
Board.list();
