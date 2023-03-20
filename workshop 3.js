//Write a function that takes the base and height of a triangle and return its area.
function triArea(b,h){
    return (b*h)/2;
}
console.log(triArea(3,2));


//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveSome(a){
    return `something ${a}`;
}
console.log(giveSome("word is just annoying."))


//You are counting points for a basketball game, given the amount of 2-pointers scored and
//3-pointers scored, find the final points for the team and return that value.

let say = (a,b) => {
    return 2*a+3*b;
}
console.log(say(1,1));


//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function less(b,d){
    if ((b+d)<100){
        return true;
    } else {
        return false;
    }
}
console.log(less(78,0));


//Create a function that takes a number as an argument. Add up all the numbers from 1 to
//the number you passed to the function. For example, if the input is 4 then your function
//should return 10 because 1 + 2 + 3 + 4 = 10.
function add(a){
    if (a>=1000){
        sum=0;
        for (i=1;i<=a;i++){
            sum=sum+i;
        }
        return sum;
    }else{
       return "Invalid number.";
    }
}
console.log(add(599));


//Create a function that determines whether a number is Oddish or Evenish. A number is
//Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its
//digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
//For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 =
//4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
function oddeven(a){
    sum=0;
    while (a>0){
        x=a%10;
        a=Math.trunc(a/10);
        sum=sum+x;
    }
    if (sum%2==0){
        return "Evenish";
    }else{
        return "Oddish";
    }
}
console.log(oddeven(111));

// Any Prime Number in Range
// Create a function that returns true if there's at least one prime number in the given
// range (n1 to n2 (inclusive)), false otherwise.
// Examples
// primeInRange(10, 15) ➞ true
// // Prime numbers in range: 11, 13
// primeInRange(62, 66) ➞ false
// // No prime numbers in range.
// primeInRange(3, 5) ➞ true
// // Prime numbers in range: 3, 5
// Notes
// ● n2 is always greater than n1.
// ● n1 and n2 are always positive.
// ● 0 and 1 aren't prime numbers.

function prime_number(a){
    response=true;
    for (i=2;i<a;i++){
        if (a%i==0){
            response=false;
            break;
        }
    }
    return response;
}

// Define the `prime_number` function (not shown)
function prime_number(num){
    // Add function definition here
}

// Define the `main` function
function main(g,h){
    // Check if `h` is greater than `g` and both `g` and `h` are non-negative
    if (h>g && g>=0 && h>=0){
        // Initialize a counter variable
        let count=0;
        // Loop through all numbers between `g` and `h`, inclusive
        while (g<=h){
            // Check if the current number is prime and not equal to 0 or 1
            if (prime_number(g)==true && g!=0 && g!=1 ){
                // Increment the counter if the current number is prime
                count=count+1;
            }
            // Move on to the next number
            g=g+1;
        }
        // If at least one prime number was found, return true
        if (count>0){
            return true;
        } else {
            // If no prime numbers were found, return false
            return false;
        }
    } else {
        // If `h` is not greater than `g` or either `g` or `h` is negative, return null
        return null; // or any other default return value
    }
}

// Call the `main` function with the arguments 32 and 67, and log the result to the console
console.log(main(32,67));

//---------------------------------------------------------------------
// Left Shift by Powers of Two
// The left shift operation is similar to multiplication by powers oftwo.
// Sample calculation using the left shift operator (<<):
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (withoutthe use of <<)the left shift operator and returns
// the resultfrom the two given integers.
// Examples
// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
// shiftToLeft(-32, 2) ➞ -128
// shiftToLeft(-6, 5) ➞ -192
// shiftToLeft(12, 4) ➞ 192
// shiftToLeft(46, 6) ➞ 2944
// Notes
// ● There will be no negative values for the second parameter y.
// ● This challenge is more like recreating the left shift operation,thus,the use ofthe
// operator directly is prohibited.
// ● Alternatively, you can solve this challenge via recursion.

function shift(a,b){
    if (b>=0){
        return (a* (2**b));
    }else{
        return "Negative number found."
    }
}
console.log(shift(10,3));


// Convert a Number to Base-2
// Create a function that returns a base-2 (binary) representation of a base-10 (decimal)
// string number. To convertis simple: ((2) means base-2 and (10) means base-10)
// 010101001(2) = 1 + 8 + 32 + 128.
// Going from rightto left,the value ofthe most right bitis 1, now from that every bitto the
// left will be x2. The values of an 8 bit binary number are (256, 128, 64, 32, 16, 8, 4, 2, 1).
// Examples
// binary(1) ➞ "1"
// // 1*1 = 1
// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5
// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10
// Notes
// ● Numbers will always be below 1024 (notincluding 1024).
// ● The && operator could be useful.
// ● The strings will always go to the length at which the mostleft bit's value gets
// bigger than the number in decimal.
// ● If a binary conversion for 0 is attempted, return "0".

// Define the `binaryy` function
function binaryy(x){
    // Initialize an empty string variable
    y=""
    // Check if `x` is greater than 0 and less than 1024
    if (x>0 && x<1024){
        // Convert `x` to binary using repeated division by 2
        while (x>0){
            z=x%2;
            y=z+y;
            x=Math.trunc(x/2);
        }
    // If `x` is 0, append a 0 to the result string
    }else if(x==0){
        y=y+0;
    // If `x` is not between 0 and 1024, return an error message
    }else{
        y="Number more than 1024 is not accepted."
    }
    // Return the binary representation of `x` as a string
    return y; 
}

// Call the `binaryy` function with the argument 5, and log the result to the console
console.log(binaryy(5));
