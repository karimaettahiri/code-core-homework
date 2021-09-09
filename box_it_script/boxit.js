
//// function that draw a line a number of time
function drawLine (number){
    horizontal_bars=`━`;
    for(let i=0; i<number;i++ ){
        horizontal_bars+=`━`;
    }
    return  horizontal_bars;

}
//console.log(drawLine (0))

///// drawtopborder //////////////

function drawTopBorder (number1){
   
    TopBorder=`┏`;
    TopBorder1=`┓`;
    return TopBorder+''+drawLine (number1)+""+TopBorder1
    
    

}
//console.log(drawTopBorder (0))

////// draw middle border  ///////

function drawMiddleBorder (number2){
    MiddleBorder=`┃`;
   
    return `${MiddleBorder}${drawLine (number2)}${MiddleBorder}`
      
 }
// console.log(drawMiddleBorder (0))

/// draw Bottom Border ////////////////////

function drawBottomBorder (number3){
    BottomBorder=`┗`;
    BottomBorder1=`┛`;
    return BottomBorder+''+drawLine (number3)+""+BottomBorder1;
}
//console.log(drawBottomBorder (4))


/////////////////////////////draw bars around//////////////////////

function drawBarsAround(element, tableWidth){
    sentence = element;
    for(let i=element.length; i<=tableWidth;i++ ){
        sentence += ` `;
    }
    
    let vertical_line='┃'
     return vertical_line+''+sentence+''+vertical_line;

}
//console.log(drawBarsAround("My name is Dan"));

// boxit function /////
 
function boxIt(array){
    let tableWidth = Math.max(...array.map(element => element.length))
    console.log(drawTopBorder(tableWidth))
    for(let element of array){
        console.log(drawBarsAround(element, tableWidth))
        if(element!=array[array.length-1]){
            console.log(drawMiddleBorder(tableWidth))
        }
                    
    }
    console.log(drawBottomBorder(tableWidth))
}
boxIt(['Jon Snow', 'Cersei Lannister'])

/// Piecing It All Together  ///////
let arr = process.argv
boxIt(arr.slice(2,arr.length));
