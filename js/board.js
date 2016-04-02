var Board = {
	list : function (){
		clear();
		$( "#addButton" ).addClass( "hidden" );
		$.get( url + "boards", function( response ) {
			var dataList = $( document.createElement('div') );


			$( ".boardsContainer" ).append( createElement("h1","Select a Board","", "text-center") );
			$( ".boardsContainer" ).append( createElement("div","","dataList", "mdl-grid") );
			for (i =0; i< response.boards.length; i++){
				var html = ' <div class="card-square mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--4dp">';
				var html = html + '<div class="mdl-card__title mdl-card--expand">';
				var html = html + '<h2 class="mdl-card__title-text">'+ response.boards[i].name+'</h2></div>';
				var html = html + '<div class="mdl-card__supporting-text">' + "I AM A DESCRIPTION"+ '</div>';
				var html = html + '<div class="mdl-card__actions mdl-card--border">';
				var html = html + '<a id="board_'+response.boards[i].name+'"  class="boardButton mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Go to the Board </a></div></div><br>'
				$("#dataList").append(html);
			}
			$('.boardButton').on('click', function() {
				var data = this.id;
				var arr = data.split('_');
				Board.goTo(arr[1]);
			});
		});

	},
	goTo : function(name){
		clear();
		$( "#addButton" ).removeClass( "hidden" );
		$("#currentBoard").val(name);
		Post.list(name);
		pos = 1;
	}
};
