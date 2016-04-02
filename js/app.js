var url = "http://chanapi.herokuapp.com/";
var pos;
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
