// write a program to reverse an array using a for Loop

// let originalArr = ["mango","apple","grapes","Banana","strawberry"];

// let reversedArr = [];

// for (let i = originalArr.length - 1; i >= 0; i--){
//     reversedArr .push(originalArr[i]);
// }
// console.log(originalArr)
// console.log(reversedArr);

//(or)

// function originalArr(arr) {
//     let reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }

// let arr = ["mango","apple","grapes","Banana","strawberry"];

// console.log(originalArr(arr));

//=============================================================

//write a program that sorts an array of numbers in ascending order


// function arraySort(arry){

//     arry.sort(function(a,b){return a - b});
// }

// let arry = [12,99,6,76,11,5,];
// arraySort(arry);
// console.log(arry);
//================================================================

// write a function that takes an array of strings and returns the longest string

// function findLongestString(fruits){

//     let longestString = "";

//     for( let i =0; i < fruits.length; i++){
//         if (fruits[i].length > longestString.length){
//             longestString = (fruits[i]);
//         }
//     }
//     return longestString;
// }

// let fruits = ["mango","apple","grapes","Banana","strawberry"];

// console.log(findLongestString(fruits));

//(or)

// function longestStringinArray(arr){

//     let longestString = arr.reduce((str,ele) =>{
//         if(ele.length > str.length){
//            return ele;
//         }else{
//             return str;
//         }
//     } ,"");

//     return longestString;

// }

// let arr = ["mango","apple","grapes","Banana","strawberry"];

// console.log(longestStringinArray(arr));

//=====================================================================

//create a array that find the most common element in an array.

function commonElementsinArry(arry) {
    let freq = {};
    let maxfreq = 0;
    //let maxElement = null;
    let mostCommonElements = [];

    for (let ele of arry) {
        if (freq[ele]) {
            freq[ele]++;
        } else {
            freq[ele] = 1;
        }


        if (freq[ele] > maxfreq) {
            maxfreq = freq[ele];
            mostCommonElements = [ele];

        } else if (freq[ele] === maxfreq) {
            mostCommonElements.push(ele);
        }

    }

    return mostCommonElements;
}

let arry = [1, 2, 3, 2, 1, 3, 2, 2, 1, 1];

console.log(commonElementsinArry(arry));



// =============================================================================

//write a program that checks if an array is a palindrome(ex: madam);

function checkPalindrome(str) {

    let text = str;

    let myArry = text.split(" ");

    let reversed = myArry.reverse();

    let palindraome = reversed.join("");

    if (text == palindraome) {
        console.log("it is a palindrome");
    } else {
        console.log("it is not a palindrome");
    }
}

//let str = "madam";
checkPalindrome("madam");

//==================================================================================

//create a program that finds the second largest element in an array

// function findSecondLargest(arr) {
//     let largest = arr[0];
//     let secondLargest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;// 20//50
//             largest = arr[i];//50//90
//         } else if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// let arr = [20, 50, 90, 40, 60];
// console.log(findSecondLargest(arr));

// function findSecondLargest(arry1){
//     arr.sort(function(a,b){return b - a});
// }

// let arry1 = [20,50,90,40,60];
// findSecondLargest(arr1)
// console.log(arr1);
// let secondLargestEle = arr1[1];
// console.log(secondLargestEle)

//=================================================

// write a program that takes an array of integers and returns the sum of all even numbers?
// function sumofevenNum(arr2) {

//     let sum = arr2.reduce((total, elem) => {
//         if (elem % 2 == 0) {
//             return total + elem;
//         }
//         return total;
//     }, 0);

//     return sum;
// }

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sumofevenNum(arr2));

//==============================================================

//create a program that removes all duplicates from an array

function removeDuplicates(arr3) {
    let result = [];

    for (let i = 0; i < arr3.length; i++) {
        if (!result.includes(arr3[i])) {
            result.push(arr3[i])
        }
    }
    return result;
}

let arr3 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(removeDuplicates(arr3));
//==================================================================  
//
//check a program that checks if an array contains a specific elelment

// function containsElement(element, arr4) {

//     return arr4.includes(element);
// }

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 'manoj'];
// console.log(containsElement(5, arr4));
// console.log(containsElement(7, arr4));
// console.log(containsElement("manoj", arr4))

//================================================================

//create a program that finds the average of all elements in an array

// function findAverage(arr5) {
//     let sum = arr5.reduce((total, elem) => {
//         return (total + elem)
//     }, 0);
//     return sum / arr5.length
// }
// let arr5 = [1, 2, 3, 4, 5];
// console.log(findAverage(arr5));
//==================================================================
//create a program that finds the median of all elements in an array

// function findMedian(arry6) {

//     arry6.sort(function (a, b) { return a - b });

//     let middleIndex = Math.floor(arry6.length / 2);

//     if (arry6.length % 2 === 0) {
//         return (arry6[middleIndex - 1] + arry6[middleIndex]) / 2;
//     } else {
//         return arry6[middleIndex];
//     }

// }
// let arry6 = [1, 2, 3, 4, 5, 6];
// console.log(findMedian(arry6));
//=======================================================================
//create a program that finds the mode of all elements in an array 
function findModes(arr7) {
    let freq = {};
    // Loop through each element in the array and update the frequency object
    for (let elem of arr7) {
        if (freq[elem]) {
            freq[elem]++
        } else {
            freq[elem] = 1;
        }
    }
    //// Find the maximum frequency of any element
    let maxfreq = 0;
    for (let elem in freq) {
        if (freq[elem] > maxfreq) {
            maxfreq = freq[elem];
        }
    }
    // Find all elements that have the maximum frequency
    let modes = [];
    for (let elem in freq) {
        if (freq[elem] === maxfreq) {
            modes.push(elem);
        }
    }
    return modes;
}

let arr7 = [1, 2, 3, 4, 2, 5, 6, 2];
console.log(findModes(arr7));
//===========================================================
// write a program that finds the first non repeated element in an array



function findFirstNonrepeated(arr8) {
    let freq = {};
    // Loop through each element in the array and update the frequency object
    for (let elem of arr8) {
        if (freq[elem]) {
            freq[elem]++
        } else {                 //Note : OUTPUT OF THE FOR OF LOOP
            freq[elem] = 1;      //The loop ends, and the freq object now looks like this: {1: 1, 2: 1, 3: 2, 4: 1, 5: 2, 6: 1}
        }                        //let freq = { 1: 2, 2: 3, 3: 1 }; //console.log(freq[2]); // Output: 3
    }
    ////  Find the first non-repeated element

    for (let elem in freq) {
        if (freq[elem] === 1) {
            return elem;
        }
    }
    // If no non-repeated element was found, return null
    return null;
}

let arr8 = [1, 2, 4, 5, 6, 3, 5, 3];
console.log(findFirstNonrepeated(arr8));
//========================================================================

//create a program that removes the specific element in an array?

// function removeSpecificElem(elem,arr1){
//     for(i =0; i < arr1.length; i++){

//         if(arr1[i] === elem){
//             arr1.splice(i,1);
//             i--;
//         }
//     }
// }
// let arr1 = [1, 2, 4, 5, 6, 3, 5, 3];
// removeSpecificElem(3,arr1);
// console.log(arr1);

//=======================================
// write a program that finds the diff between the largest and smallest elements in an array?

function diffBtnLargestandSmallestEleminArray(arr5) {
    arr5.sort(function (a, b) { return a - b });

    let diff = arr5[arr5.length - 1] - arr5[0];
    return diff;
}

let arr5 = [5, 2, 8, 3, 9, 1];
console.log(diffBtnLargestandSmallestEleminArray(arr5));//
//==========================
//create a program that checks if two arrays are equal

function checkTwoArraysEqual(a, b) {
    //check if lenghts are eqaul 
    if (a.length !== b.length) {
        return fasle;
    }

    //Iterate over each element of the arrays and compare them

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

let a = [1, 2, 3];
let b = [1, 2, 4];
console.log(checkTwoArraysEqual(a, b));
//=====================================================

//write a program to find the intersection of two array


function intersectionOfNumbers(arr1, arr2) {
    let output = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !output.includes(arr1[i])) {
            output.push(arr1[i]);
        }
    }
    return output;
}
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5, 6];
console.log(intersectionOfNumbers(arr1, arr2));

//==========================================================

//write a program to find the union of two arrays

function unionofArray(ary1, ary2) {



    let union = [];

    for (let i = 0; i < ary1.length; i++) {
        if (!ary2.includes(ary1[i])) {
            union.push(ary1[i]);

        }

    }
    for (let i = 0; i < ary2.length; i++) {
        if (!ary1.includes(ary2[i])) {
            union.push(ary2[i]);

        }

    }
    return union;
}

let ary1 = ['a', 'b', 'c'];
let ary2 = ['d', 'e', 'f'];
console.log(unionofArray(ary1, ary2));


//   for (let i = 0; i < ary1.length; i++) {
//     if (!ary1[i].includes(ary2)) {
//         ary2.push(ary1[i])
//     }
// }
// return ary2;




// console.log(student1.getName());

function getUserData() {
    let promise = fetch("https://reqres.in/api/users?page-2");

    promise.then((data) => {

        let dataPromise = data.json();

        dataPromise.then((jsonData) => {
            showData(jsonData);
        })

    }).catch((err) => {
        console.log(err);
    });
}






function showData(jsonData) {
    let user_row = document.getElementById("user_row");

    jsonData.data.forEach(elem => {
        let col = document.createElement("div");
        col.className = "col-3";

        let card = document.createElement("div");
        card.className = "card";

        let card_header = document.createElement("div");
        card_header.className = "card-header";


        let card_body = document.createElement("div");
        card_body.className = "card-body";


        let img = document.createElement('img');
        img.src = elem.avatar;


        let card_footer = document.createElement("div");
        card_footer.className = "card-footer";


        card_header.innerText = elem.first_name;
        card_footer.innerText = elem.email;


        card.appendChild(card_header);

        card.appendChild(card_body);

        card_body.appendChild(img);

        card.appendChild(card_footer);

        col.appendChild(card);

        user_row.appendChild(col);

    });



}
const checkstring = (str, substr) => {
    if (str.indexOf(substr) !== -1) {
        console.log(true);
    } else {
        console.log(false);
    }
}
checkstring("manoj", "siri")



// //prototype inheritance//
// var person = {
//     name: "John",
//     sayHello: function() {
//       console.log("Hello, my name is " + this.name);
//     }
//   };

//   // Child object
//   var employee = Object.create(person);
//   employee.jobTitle = "Developer";
//   employee.introduce = function() {
//     console.log("Hello, I'm " + this.name + " and I'm a " + this.jobTitle);
//   };

//   // Using the objects
//   employee.sayHello(); // Hello, my name is John
//   employee.introduce(); // Hello, I'm John and I'm a Developer


// const pyrm = num => {
//     for(let i =1; i <= num; i++){

//         for(let j = 1; j <= i; j++){
//             document.write("*");
//         }
//         document.write("<br>")
//     }
// }

// // pyrm(5);

// const numpyrm = num =>{
//     for(let i =1; i <=num; i++ ){

//         for(j = 1; j <= i; j++){
//             document.write(j);
//         }
//         document.write("<br>")
//     }
// }
// numpyrm(5);

const pyrm = num => {
    for (let i = 1; i <= num; i++) {

        for (let j = i; j <= num - 1; j++) {
            document.write("&nbsp&nbsp");
        }

        for (k = 1; k <= 2 * i - 1; k++) {
            document.write("*");
        }

        document.write("<br>")
    }


    for (let i = num; i >= 1; i--) {

        for (let j = num - i; j > 0; j--) {
            document.write("&nbsp&nbsp");
        }
        for (k = 1; k <= 2 * i - 1; k++) {
            document.write("*");
        }
        document.write("<br>")
    }

}

pyrm(3);
//=================

//Program to calculate the sum of numbers from 1 to N using a for loop.

const sumofNum = n => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let n = 10;
console.log(sumofNum(n));

// Program to print all even numbers between 1 and N using a for loop.

const sumofEvenNum = num => {
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }

}
sumofEvenNum(10);


//Program to find the factorial of a number using a for loop.

// const factorialOfaNumber = num =>{

//     let factorial = 1;

//     for(let i = 1; i <= num; i++){

//         factorial = factorial * i;
//     }
//     return factorial;
// }

// let num = 3;
// console.log(factorialOfaNumber(num));// output = 6

//using while loop =======================================

const factorialOfaNumber = num => {
    let factorial = 1;
    let i = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

// let num = 10;
// console.log(factorialOfaNumber(num));
// //=====================================================

// //Program to check if a given number is prime using a for loop.

function primeNumbers(n) {

    for (let i = 2; i <= n; i++) {

        let isPrime = true;
        //console.log(isPrime);

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i);
        }

    }
}

primeNumbers(20);
//=====================

const checkPrimeNum = num => {
    if (num === 1) {
        console.log(`${num} is not a prime number.`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {
            console.log(`${num} is not a prime number.`);
            return;
        }
    }

    console.log(`${num} is a prime number.`);
};

let num = 4;
checkPrimeNum(num);
//================================
// fibannoci series..

const fibonacciSeries = n => {

    let num1 = 0, num2 = 1, nextTerm;

    for (let i = 0; i <= n; i++) {
        console.log(num1);
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }

}
fibonacciSeries(5);
//==========================

//Program to find the largest number in an array using a for loop.
const largestnuminArry = arr => {

    if (arr.length == 0) {
        console.log("array is empty")
    }

    let longerelem = arr[0];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > longerelem) {
            longerelem = arr[i];
        }
    }
    return longerelem;
}

let arr = [10, 20, 3, 4, 89, 6,];
console.log(largestnuminArry(arr));




// function test(callback) {
//     console.log(callback);
//     callback(1, 2);
// }

// test((a, b) => {
//     console.log(a + b);
// });

// test(addnum);

// function addnum (a,b){
//     console.log(a +b)
// }


// test(function(a,b){
//     console.log(a + b);
// })

// forEach( elem=>{
//     console.log(elem * 2)
// })


