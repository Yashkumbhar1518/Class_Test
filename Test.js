// 1) Variable Declaration
let myName = "Yash";

// 2) Datatypes - The basic datatypes are Null , Number , String , Symbol , Boolean , BigInt , Undefined

//  3) String Mnupulation
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1 ; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const string = "My name is Yash";
const result = reverseString(string);
console.log(result);

// 4)Conditional Statements
let num = 22;
if(num % 2 == 0){
    console.log("The number is even");
}
else{
    console.log("The number is Odd");
}

// 5) Arrays
// let fruits = ["Apple" , "Banana" , "Mango"]

// 6) Loops
for(i = 1 ; i <= 10; i++){
    console.log(i);
}

// 7) Functions
function calculateArea(){
    let l = 22;
    let b = 10;
    let area = l * b;
    console.log(area);
}
calculateArea();

// 8) Objects
// const person = {
//     name : "Yash";
//     age : 21;
//     city : "Mumbai";
// }

// 9) Add Event listener
let button = document.getElementById('mybtn');
let para = document.getElementById('mypara');
button.addEventListener("click" , function(){
    para.innerHTML = "This is displayed when clicked on Button";
})

// 10) DOM Manipulation
let button1 = document.getElementById("mtbtn1");
function changeColor(){
    document.body.style.backgroundColor = "red";
}

// 12) Scope
// globalScope - It can be accessed both in Function as well as outside the function scope and wil show the result
var name = "yash";
function golbalScope(){
    console.log(name);
}
console.log(name);
golbalScope();
// localScope - It cannot be accessed outside the fucntion scope it will show an error
// function LocalVar() {
//     var sent = "I am local";
//     console.log(sent); // Accessible inside the function
//   }
//   LocalVar();
//   console.log(sent);

//   13) Array Methods
let arr1 = ["Apple","Mango","Banana","Pineapple"]
 arr1.push("Orange"); 
console.log(arr1)

let arr2 = ["Apple","Mango","Banana","Pineapple"]
arr2.shift();
console.log(arr2);

//  21) Array iteration
let arrNum = [1, 2 , 3 , 4 , 5]
let sum = 0;
function arrSum(){
for(i = 0 ; i < arrNum.length ; i++){
        sum += arrNum[i];
    }  
    return sum;
}
let result1 = arrSum(arrNum);
console.log(result1);

// 22) String Methods
// Substring() - In this negative number are treated as 0
let fruits1 = "Apple , Kiwi , Banana";
console.log(fruits1.substring(5,13));
// substr() - It starts from the position and till how much length we wnt the string 
console.log(fruits1.substr(4 , 5));
// slice() - creates a new array , origibal is not modified
let fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let newFruits = fruits2.slice(1, 5);
console.log(newFruits);

// 23) array Manipulation
const arr8 = [12,15,45,36,15,45,53];
function duplicateValue(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if(ans.includes(arr[i])){
            continue;
        }else{
            ans.push(arr[i]);
        }
        
    }
    return ans;
}
console.log(duplicateValue(arr8));

// 24) String Concatenation
function concatenateString(str1 , str2){
    return str1.concat(" ",str2);
}
console.log(concatenateString("Yash","Kumbhar"));

// 25) array sorting
let arr3 = ["yash" , "Shivam" , "Akshay"]
arr3.sort();
console.log(arr3);

// 26) String Searching
function includeStr(str1, str2) {
    // let str="";
    return str1.includes(str2);
}
console.log(includeStr("How aare you","hii"));

// 27) Array filtering
let arr4  = [22 , 13 , 44 , 17 , 99 , 66]
function filteringArr(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 != 0) {
            ans.push(arr[i]);
        }    
    }
    return ans;
}
console.log(filteringArr(arr4));

// 28) String conversion
let str = "42";
let res = parseInt(str);
console.log(res , typeof(res));

// 29) Array Joining
let arr5  = ["y", "a" ,"s" ,"h"]
function arrJoining(arr) {
    return arr.join(" ");
}
console.log(arrJoining(arr5))

// 30) String Validation
let str6 = "yashkumbhar"
function isValidEmail(str6){
    if (str6.includes("@")){
        let str7 = str6.split("@")
        if (str7[1].includes(".com")) {
            return true;
        }
    }
    return false;
}
console.log(isValidEmail("abcdef@xyz.com"))



