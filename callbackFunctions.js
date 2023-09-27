
let triangleFrame = function(letter)
{
    let framedLetter = '';
    for (let i=0;i<4;i++)
    {
        let line='';
        // write a loop to start the line with 3 - i spaces
       

        // The third line will contain the framed letter so we need to set the right condition
        if (/*set the condition to specify the third line */) 
            line += `* ${letter} *`;
        else
        {
            // the rest of the lines of the triangle would contain all stars
            // create a loop to add 2i + 1 stars to the line
        }

        framedLetter += line + '\n';
    }

    return framedLetter;
}


let rectangleFrame = function(letter)
{
    framedLetter = '';
    line = "";

    //write a loop the add five stars to the line
   

    //set the framed letter to be of 3 lines (one line of star, 
    //one line * Letter * and the last line of all stars)
    framedLetter = line + '\n' + `* ${letter} *` + '\n' + line + '\n';

    return framedLetter;
}


// Set the function definition for the generalFramer so that it would receive two arguments
//      - the first argument is a callback function that creates the desired frame
//      - the second argument is the letter to be framed.
// The retun should be the string of the letter framed by the given framer.
let generalFramer;

console.log(generalFramer(/*set the argument to frame the letter A in a triangle*/));
console.log(generalFramer(/*set the argument to frame the letter B in a triangle*/));
console.log(generalFramer(/*set the argument to frame the letter C in a triangle*/));

console.log(generalFramer(/*set the argument to frame the letter A in a rectangle*/));
console.log(generalFramer(/*set the argument to frame the letter B in a rectangle*/));
console.log(generalFramer(/*set the argument to frame the letter C in a rectangle*/));