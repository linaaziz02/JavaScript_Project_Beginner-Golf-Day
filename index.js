/*GOLF CODE
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	
1	
<= par - 2	
par - 1	
par	
par + 1	
par + 2	
>= par + 3	

Return
"Hole-in-one!"
"Eagle"
"Birdie"
"Par"
"Bogey"
"Double Bogey"
"Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.*/

//(Using Multiple Conditional (Ternary) Operators)

//Declare the nickname for each strokes
const names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

//Create a function to pass par and strokes argument
function golfScore(par, strokes) {
  return strokes === 1 ? names[0]
    : strokes <= par - 2 ? names[1]
    : strokes === par - 1	? names[2]
    : strokes === par ? names[3]
    : strokes === par + 1 ? names[4]
    : strokes === par + 2 ? names[5]
    : names[6]
  return "Change me"
}

//input random number for par and strokes arguments
console.log(golfScore(4,5));

