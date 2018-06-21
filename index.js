var calc = require("./calculation.js")
calc(5, 3, function (err, success) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("sum is : " + success.sum);
        console.log("subtract is : " + success.subtract);
    }
});