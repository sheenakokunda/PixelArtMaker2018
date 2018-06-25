// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

var rows, columns, color, grid;

grid = $("#pixelCanvas");
rows = $("#inputHeight").val(); //input value for height
columns = $("#inputWidth").val(); //input value for width

grid.children().remove(); // remove the grid if it already exists

//generate the rows and columns for the grid
for (var i = 0; i < rows ; i++) {
	grid.append("<tr></tr>");
		for (var j = 0; j < columns; j++) {
			grid.children().last().append("<td></td>");
		}
}

//set background color for clicked cell in the grid
grid.on("click", "td", (function(){
	color = $("#colorPicker").val(); //value of chosen color
	$(this).css("background-color", color);
}));
}

//click submit button to generate grid by calling makeGrid()
var submitBtn = $("input[type='submit']");

submitBtn.click(function(event){
	event.preventDefault(); //to stop the default action of the submit button
	makeGrid();
});