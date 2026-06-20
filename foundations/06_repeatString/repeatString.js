const repeatString = function(myString, myNum) {
    if (myNum < 0){
        return 'ERROR';
    }
    ret = "";
    for (let i = 0; i < myNum; i++){
        ret += myString;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
