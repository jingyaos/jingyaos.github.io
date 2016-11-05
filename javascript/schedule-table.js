var schedule = [
    [ "", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ],
    [ "9:00am", "O", "X", "O", "X", "O" ],
    [ "10:00am", "O", "X", "O", "X", "O" ],
    [ "11:00am", "O", "X", "O", "X", "X" ],
    [ "12:00pm", "O", "X", "O", "X", "X" ],
    [ "1:00pm", "O", "X", "O", "X", "X" ],
    [ "2:00pm", "O", "X", "O", "X", "X" ],
    [ "3:00pm", "X", "O", "X", "O", "O" ],
    [ "4:00pm", "X", "O", "X", "O", "O" ],
    [ "5:00pm", "X", "O", "X", "O", "O" ],
    [ "6:00pm", "O", "O", "O", "O", "O" ],
    [ "7:00pm", "O", "O", "O", "O", "O" ],
    [ "8:00pm", "O", "O", "O", "O", "O" ]
];


var myTable= "<table>";
for(var i=0; i<12; i++){ 
    myTable+="<tr>";
    for(var j=0; i<5; i++){
        if(schedule[i][j]==="X"){
            myTable+= "<td style='width: 100px; color: red; text-align: center;'></td>";
        }else{
            myTable+= "<td style='width: 100px; color: white; text-align: center;'></td>";
        }
    }
    myTable+="</tr>";
}
myTable+="</table>";
document.write(myTable);
