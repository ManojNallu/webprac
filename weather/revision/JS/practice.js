// // program to reverse an array using for loop ?

// let arr = ['apple', 'ball','cat','dog']
//  let result = [];

// for(let i = arr.length-1; i >= 0; i--){
//     result.push(arr[i])
// }

// console.log(result);

// sort an array of num in acsending  order

// let arr = ['zoo','ball','apple', 'cat','dog'];

// let newarr = arr.sort();
 
// let result = newarr.reverse();

// console.log(result);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});


// function  that takes an array of strings and return the longest string?

// let newAryy = [];

// const longestString = arr => {
//     let longString = '';

//     for(let i = 0 ; i < arr.length; i++){
//        if(arr[i].length > longString.length){
//              longString = arr[i];
//        }
//     }
//     console.log(longString);
// }

// let arr = ['zoo','ball','apple', 'cat','dog'];
// longestString(arr);



//create a program that finds the most common element in an array?

// let arr = ['zoo','ball','apple', 'cat','cat','dog'];

// let obj = {};
// let maxfreq = 0;

// for(let x of arr){
//     let char = x.toLowerCase();
//     if(obj[char]){
//         obj[char]++
//     }else{
//         obj[char] = 1;
//     }
// }

// console.log(obj);


// let keys = Object.keys(obj);
// let values = Object.values (obj);


// if (obj[ele] > maxfreq) {
//     maxfreq = freq[ele];
//     mostCommonElements = [ele];

// } else if (freq[ele] === maxfreq) {
//     mostCommonElements.push(ele);
// }


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










