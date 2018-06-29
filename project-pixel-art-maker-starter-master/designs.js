// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



function makeGrid() {

    $('#submit').on('mouseenter',function(){
        var table = $('#pixelCanvas');
        for (var i = 0; i < $("#inputHeight").val(); i++) {
            row = $('<tr></tr>');
            for (var j = 0; j < $("#inputWeight").val(); j++) {
                var rowData = $('<td></td>').addClass("bar").click(function(){
                    $(this).css("background-color", $("#colorPicker").val());
                })
                row.append(rowData);
            }
            table.append(row);
        }
    });
       
}

makeGrid();
