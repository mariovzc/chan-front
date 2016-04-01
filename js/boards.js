$( document ).ready(function() {
  com.list("boards","",board.list)
});

function Board(){
 var  x = this;
 x.list = function (response){
   var html = '<h1 id="Header" class="text-center">Select The Board</h1><div id="dataList" class="list-group">';
   for (i =0; i< response.boards.length; i++){
     console.log(response.boards[i]);
     html = html + '<button type="button" onclick="board.goTo('+response.boards[i].id+')" class="list-group-item">'+response.boards[i].name+'</button>'
   }
   html = html +  "</div>"
   $( ".boardsContainer" ).html(html);
 }
 x.goTo = function(id) {
   alert(id);
 }
}
board = new Board();
