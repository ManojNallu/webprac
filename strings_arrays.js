//counting duplicate charecters

// const dupChars = str => {

//     let charcount = {};

//     for (let char of str) {

//         const lowerChar = char.toLowerCase();
//         if (charcount [lowerChar]) {
//             charcount [lowerChar]++
//         } else {
//             charcount[lowerChar] = 1;
//         }
//     }
//     //count the duplicates
//     let duplicatescount = 0;

//     for (char in charcount) {
//         if (charcount[char] > 1) {
//             duplicatescount++
//         }
//     }

//     return duplicatescount;
// }

// let str = "Hello WOrldss";

// console.log(dupChars(str));

//====================================

// find the first non repeated charecter

const firstNonRepeatedChar = strng => {
    let charfreq = {};

    for (let char of strng) {
        let lowerCaseChar = char.toLowerCase();

        if (charfreq[lowerCaseChar]) {
            charfreq[lowerCaseChar]++
        } else {
            charfreq[lowerCaseChar] = 1;
        }
    }

    let firstNonRepeatChar = "";

    for (let char in charfreq) {
        if (charfreq[char] == 1) {
            firstNonRepeatChar = char;
            break;
        }
    }
    return firstNonRepeatChar;

}

let strng = "manojjj";
console.log(firstNonRepeatedChar(strng));
//=======================

//reversing the letters and words

const reverseLetters = strg => {
    let text = strg.split("").reverse().join("");
    return text;
}
let strg = "Hello World";
console.log(reverseLetters(strg));

const reverseWords = str1 => {
    let revWords = str1.split(" ").reverse().join(" ");
    return revWords;
}
let str1 = "Hello World";
console.log(reverseWords(str1));
//=============================

//generating all permutations//

//check a string it is palindrome

const checkPalindrome = str2 => {

    let palindrome = str2;
    let text = str2.split("").reverse().join("");

    if (palindrome == text) {
        console.log("it is a palindrome");
    } else {
        console.log("not a palindrome");
    }

}
let str2 = "madam";
checkPalindrome(str2);
//================================

//sorting an array of strings by length.

const sortArrayofString = strings => {

    strings.sort((a, b) => b.length - a.length);
    console.log(strings);
}

const strings = ['apple', 'banana', 'orange', 'kiwi'];
sortArrayofString(strings);
//==========================

//checks that a string contians sub string?

const checkSubString = (str3, str4) => {
    if (str3.indexOf(str4) !== -1) {
        console.log(true);
    } else {
        console.log(false)
    }
}
let str3 = "manoj";
let str4 = "noj";
checkSubString(str3, str4);
//================================

//check anagaram

const checkAnagram = (str5, str6) => {
    let obj1 = {};
    let obj2 = {};

    for (let char of str5) {
        let lowerCaseChar1 = char.toLowerCase();
        if (obj1[lowerCaseChar1]) {
            obj1[lowerCaseChar1]++
        } else {
            obj1[lowerCaseChar1] = 1;
        }
    }

    for (let char of str6) {
        let lowerCaseChar2 = char.toLowerCase();
        if (obj2[lowerCaseChar2]) {
            obj2[lowerCaseChar2]++;
        } else {
            obj2[lowerCaseChar2] = 1;
        }
    }

    console.log(obj1, obj2);
    const values1 = Object.values(obj1);
    const values2 = Object.values(obj2);
    console.log(values1, values2);

    const isEqual = (obj1, obj2) => {
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);
        console.log(keys1, keys2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key in keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    }

    if (isEqual(values1, values2)) {
        console.log("it is a anagaram");
    } else {
        console.log("it is not a anagaram");
    }

}


checkAnagram("Race", "care");
//=======================================================

const getOutput = str7 => {
    let text = str7.toLowerCase();

    if (text == "jabroni") {
        console.log("Patron Tequila");
    }
}

getOutput("JABRoni");
//===============================

const returnSeq = str8 => {

    let newstr = [];

    let text = str8.split("");

    console.log(text);
    if (text.length >= 2 && text.length <= 100) {
        text.map((ele, index) => {
            if (index % 2 !== 0) {
                newstr.push(ele);
            }
        });
        console.log(newstr);
    } else {
        console.log("Text length is not within the allowed range (2-100)")
    }

}
let str8 = "abcdegfhij";
returnSeq(str8);
//=========================================

const nonCommonChars = (str11, str9) => {

    let result = [];

    let text1 = str11.split("");
    let text2 = str9.split("");

    text1.filter((ele) => {
        if (!text2.includes(ele) && !result.includes(ele)) {
            result.push(ele);
        }
    });

    text2.filter((ele) => {
        if (!text1.includes(ele) && !result.includes(ele)) {
            result.push(ele);
        }
    });
    return result.join("");
}
let str11 = "xyab";
let str9 = "xzca";
console.log(nonCommonChars(str11, str9));
//=========================================

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let highestNum = '';
let highestNums = [];

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {

        let x = arr[i][j];

        if (x > highestNum) {
            highestNum = x;
        }

    }

    highestNums.push(highestNum);
}

console.log(highestNums);

//=================

let arry = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let highestNumbrs = arry.map(subarray => Math.max(...subarray));

console.log(highestNumbrs);


//===========================

let arrOfNums = [4, 4, 5, 6, 7, 9, 9, 66, 77, 66];

let result = [];
arrOfNums.map((ele) => {

    if (!result.includes(ele)) {
        result.push(ele);
    }
    return result;
})
console.log(result);

//======================================================
let arrOfNum = [4, 4, 5, 6, 7, 9, 9, 66, 77, 66];

let noDuplicates = [...new Set(arrOfNum)];


let c = [];

noDuplicates.map(ele => {
    let subarray = [];
    for (let char of arrOfNum) {
        if (ele === char) {
            subarray.push(ele);
        }
    }
    c.push(subarray);
})

console.log(c);
///=====================================

let arrys = [1, 1, 2, 2, 4, 4, 5, 5, 6, 6, 7, 7, 98];

let nodup = [...new Set(arrys)];
console.log(nodup);


//============================
//a b c d efghijk == ["b","d,","f","h","j"]

const seqOfStrng = ((str) => {
    let result = [];
    let text = str.toLowerCase().split("");
    text.filter((ele, index) => {
        if (index % 2 !== 0) {
            result.push(ele);
        }
    })
    return result;
});
console.log(seqOfStrng("abcdefghijk"));



//========================================

const sendMessage = message => {
    console.log("Message :", message);
}

const getMessage = (sendMessage) => {        /// we r
    const message = " this is the secret message";
    sendMessage(message);
}

getMessage(sendMessage);

//============================

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

getUserData();

let divele = document.getElementById("container");


const showData = (jsonData => {
    console.log(jsonData);

    jsonData.data.forEach(person => {
        let pTag = document.createElement("p");
        let imgtag = document.createElement("img");
        let pTag2 = document.createElement("p");



        pTag.innerHTML = `Name : ${person.first_name} ${person.last_name}`;
        imgtag.src = person.avatar;
        pTag2.innerText = `Email : ${person.email}`


        divele.appendChild(imgtag);
        divele.appendChild(pTag);
        divele.appendChild(pTag2);
    })




})
