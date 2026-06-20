const removeFromArray = function(arr, ...nums) {
    let ret = [];
    for (let i = 0; i < arr.length; i++){
        if (!nums.includes(arr[i])){
            ret.push(arr[i]);
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
