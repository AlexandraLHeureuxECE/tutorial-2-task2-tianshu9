let triangleFrame = function(letter)
{
    let framedLetter = '';
    for (let i=0;i<4;i++)
    {
        let line='';
        // write a loop to start the line with 3 - i spaces
        for (let j =3 - i; j < 0; j++)
        {
            framedLetter += '';
        }

        // The third line will contain the framed letter so we need to set the right condition
        if (/*set the condition to specify the third line */ i==2) 
            line += `* ${letter} *`;
        else
        {
            // the rest of the lines of the triangle would contain all stars
            // create a loop to add 2i + 1 stars to the line
            for (let j = 2*i + 1; j > 0; j++) {
                framedLetter += '*';
            }
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
    for (let i = 0; i < 5; i++) {
        line += '*';
    }

    //set the framed letter to be of 3 lines (one line of star, 
    //one line * Letter * and the last line of all stars)
    framedLetter = line + '\n' + `* ${letter} *` + '\n' + line + '\n';

    return framedLetter;
}

// Set the function definition for the generalFramer so that it would receive two arguments
//      - the first argument is a callback function that creates the desired frame
//      - the second argument is the letter to be framed.
// The return should be the string of the letter framed by the given framer.
let generalFramer = function(x, y) {
    if (x == 'triangle') {
        return triangleFrame(y);
    }
    else if (x == 'rectangle') {
        return rectangleFrame(x);
    }
}

console.log(generalFramer(triangleFrame, 'A'/*set the argument to frame the letter A in a triangle*/));
console.log(generalFramer(triangleFrame, 'B'/*set the argument to frame the letter B in a triangle*/));
console.log(generalFramer(triangleFrame, 'C'/*set the argument to frame the letter C in a triangle*/));

console.log(generalFramer(rectangleFrame, 'A'/*set the argument to frame the letter A in a rectangle*/));
console.log(generalFramer(rectangleFrame, 'B'/*set the argument to frame the letter B in a rectangle*/));
console.log(generalFramer(rectangleFrame, 'C'/*set the argument to frame the letter C in a rectangle*/));
