// Task 2.1: Number Inspector

/**
  
 *You will write a number of functions to learn or check different things about each number. 
 */



 /*This function will return the appropriate operation to perform a numberInvestigating task*/
 function getNumberInvestigatingTool(task)
{
    switch (task)
    {
        // Complete the code so that based on a given string "palindrome, max, duplicate, divisibleBy" 
        // The appropriate function is returned. 
     
    }

     /*Write a function that returns the palindrome number of the number you are given, 
    *For example, if you are given 1234, it should return 4321. 
    *You are expected to use only the loops/conditional statements we have learned in class. 
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a numberr*/
    function 

    /* Write a function that will return the maximum digit of the number you are given.
    * For example, if you are given 192345, it should return 9. If you are given 12645 it should return 6. 
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a numberr*/

    function 
    /*This function can be use to identify whether a number contains 2 or more consecutive duplicate numbers
    * For example, if you are given 1223 it should return yes because we have 22 in our number. Similarly, 
    * 12344 should also return true while 23452 should return false
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a number, the remainder operator is also helful*/
     
    function 
    /*This function will return the value needed to be added to a number to make it divisible by the given dividor. 
    *For example, if you are given 63 and 5, we are looking for the number needed to make 63 divisible by 5. In this case, 
    the function should return 2. To challenged yourself, try to use the && or || operator.
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a number, the remainder operator is also helful*/

    function 

}

// let Palindrome  =getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the palindrome making function */); 
// let MaxDigit = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the max digit finder function */);
// let DuplicateNumber = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the double digit Check function*/); 
// let MakeDivisibleBy = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the function that will makeANumberDivisibleBy function*/); 


let Palindrome = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the palindrome making function */);
let MaxDigit = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the max digit finder function */);
let DuplicateNumber = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the double digit Check function*/);
let MakeDivisibleBy = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the function that will makeANumberDivisibleBy function*/); 


// don't change the three lines below

module.exports.Palindrome = Palindrome;
module.exports.MaxDigit = MaxDigit;
module.exports.DuplicateNumber = DuplicateNumber;
module.exports.MakeDivisibleBy = MakeDivisibleBy;
