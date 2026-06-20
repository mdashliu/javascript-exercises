const reverseString = function(myString) {
    ret = ""
    for (let i = myString.length-1; i >= 0; i--){
        ret += myString[i];
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
