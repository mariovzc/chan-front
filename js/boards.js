$( document ).ready(function() {
  com.list("boards","",board.list)
});

function Board(){
 var  x = this;
 x.list = function (response){
   var list = "";
   for (i =0; i< response.boards.length; i++){
     console.log(response.boards[i]);
     list = list + '<button type="button" onclick="board.goTo('+response.boards[i].id+')" class="list-group-item">'+response.boards[i].name+'</button>'
   }
   $( "#boardsList" ).html(list);
 }
 x.goTo = function(id) {
   alert(id);
 }
}
board = new Board();
