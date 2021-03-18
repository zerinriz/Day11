var myNestedArray = [["Krash", 2]];

function myNestedFunction(arr) {
    var newNestedArray = [...arr];

    newNestedArray.pop();
    newNestedArray.push(["Toblerone", 5]);
    newNestedArray.push(["Milka", 3]);

    return newNestedArray;
}

console.log(myNestedFunction(myNestedArray));

module.exports = myNestedFunction;