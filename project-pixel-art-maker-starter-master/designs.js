// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#submit').click(function(a){
    makeGrid();
    a.preventDefault();
});


function makeGrid() {
    //removing the exited table
    $('tr').remove();

    const table = $('#pixelCanvas');
    for (var i = 0; i < $("#inputHeight").val(); i++) {
        row = $('<tr></tr>');
        for (var j = 0; j < $("#inputWeight").val(); j++) {
            var rowData = $('<td></td>').addClass("bar").click(function(){
                    
                if($(this).attr('style')){
                    $(this).removeAttr('style');
                }else{
                    
                    $(this).attr('style', 'background:' + $("#colorPicker").val());
                }
            })
            row.append(rowData);
        }
        table.append(row);
    }
        
    
       
}


