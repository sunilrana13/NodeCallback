module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error("Error in input"), null);
    }
    else {
        callback(null, {
            sum: x + y,
            subtract:x-y
        });
    }
}