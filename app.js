// tim so lon thu 2 va so lan xuat hien trong mang

const arrayTest = [1, 3, 5, 7, 8, 10, 5, 9, 10, 4];

// tim so lon thu 2
function getSecondHighest(arrayTest) {
    var first = 0,
        second = 0;
    for (var i = 0; i < arrayTest.length; i++) {
        if (arrayTest[i] > first) {
            second = first;
            first = arrayTest[i];
        } else if (arrayTest[i] > second && arrayTest[i] < first) {
            second = arrayTest[i];
        }
    }
    return console.log(second);
}

getSecondHighest(arrayTest);

// Tìm số lần xuất hiện
var counts = {};
for (var i = 0; i < arrayTest.length; i++) {
    var num = arrayTest[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts[10], counts[2], counts[1], counts[5]);

// Bai 2
const string = "[4,5,6,23,34,55,55,5,6]";
const newArr2 = JSON.parse(string);

function getHighest(arr) {
    let maxNumber;
    for (let i = 0; i < arr.length; i++) {
        if (!maxNumber) {
            maxNumber = arr[i];
        }
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return console.log(maxNumber);
}

getHighest(newArr2);