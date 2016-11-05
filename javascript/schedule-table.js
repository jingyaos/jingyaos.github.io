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


for(i=0, i<12, i++){
  for(j=0, j<5, j++){
    if(schedule[i][j]==="X"){
      schedule[i][j].bgColor = red;
    }else{
      schedule[i][j].bgColor = white;
  }
}
