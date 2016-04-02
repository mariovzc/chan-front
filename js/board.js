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
