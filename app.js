document.addEventListener('DOMContentLoaded', function () {
    var number1 = document.getElementById('num1');
    var number2 = document.getElementById('num2');
    var Addbut = document.querySelector('button');
    var numResult = [];
    var textResult = [];
    function add(num1, num2) {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 + num2;
        }
        else if (typeof num1 === 'string' && typeof num2 === 'string') {
            return num1 + ' ' + num2;
        }
    }
    function printResult(resultObj) {
        console.log(resultObj.val);
    }
    Addbut.addEventListener('click', function () {
        var num1 = number1.value;
        var num2 = number2.value;
        var result = add(+num1, +num2);
        var stringresult = add(num1, num2);
        console.log(stringresult);
        console.log(result);
        numResult.push(result);
        textResult.push(stringresult);
        printResult({ val: result, timestamp: new Date() });
        console.log(numResult, textResult);
    });
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('it works!');
    }, 1000);
})
    .then(function (res) {
    console.log(res.split('w'));
})
    .catch(function (err) {
    console.log(err);
});
