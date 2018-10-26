var numArr = [];

while (numArr.length < 34) {
    var randNum = Math.floor(Math.random() * 34) + 1;
    if (numArr.indexOf(randNum) > -1) continue;
    numArr[numArr.length] = randNum;
}

var arr1 = [];
var arr2 = [];
var arr3 = [];
var arr4 = [];

for (i = 0; i < numArr.length; i++) {
    if (i < 7) arr1.push(numArr[i]);
    if (i > 7 && i < 15) arr2.push(numArr[i]);
    if (i > 15 && i < 23) arr3.push(numArr[i]);
    if (i > 23 && i < 31) arr4.push(numArr[i]);
}

$(document).ready(function () {
    var columns = $('.column');

    arr1.forEach(function (img) {
        $(columns[0]).append("<div class='contain'><img src='imgs/image (" + img + ").jpg'></div>")
    })
    arr2.forEach(function (img) {
        $(columns[1]).append("<div class='contain'><img src='imgs/image (" + img + ").jpg'></div>")
    })
    arr3.forEach(function (img) {
        $(columns[2]).append("<div class='contain'><img src='imgs/image (" + img + ").jpg'></div>")
    })
    arr4.forEach(function (img) {
        $(columns[3]).append("<div class='contain'><img src='imgs/image (" + img + ").jpg'></div>")
    })
})