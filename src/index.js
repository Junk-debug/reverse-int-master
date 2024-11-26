module.exports = function reverse(int) {
    int = Math.abs(int).toString();
    let result = '';
    for (let i = int.length - 1; i >= 0; i--) {
        result += int[i];
    }
    return result;
}

