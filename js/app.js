var url = "http://chanapi.herokuapp.com/";
var pos;
var Board = {
	list : function (){
		clear();
		$( "#addButton" ).addClass( "hidden" );
		$.get( url + "boards", function( response ) {
			var dataList = $( document.createElement('div') );

			
			$( ".boardsContainer" ).append( createElement("h1","Select a Board","", "text-center") );
			$( ".boardsContainer" ).append( createElement("div","","dataList", "list-group") );

			for (i =0; i< response.boards.length; i++){
				var board = response.boards[i];
				var button =  createElement("button",response.boards[i].name,"","board-button list-group-item list-item");
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
		$( "#addButton" ).removeClass( "hidden" );
		Post.list(name);
		pos = 1;
	}
};
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
Board.list();
function createElement(element,text,id,clss){
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
$( "#mainIcon" ).click(function() {
	Board.list();
});
$( "#addButton" ).click(function() {
	$('.modal').modal('toggle');
	var titulo = $(".modal-title");
	var body = $(".modal-body");
	var footer = $(".modal-footer");
	if (pos == 1) {
		titulo.html("Create A Post");
	}else{
		titulo.html("Create A Comment for the Post");
	}
});