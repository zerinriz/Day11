function multipleArrayFunction(myArray) {
    var MyNewArray = [...myArray];
    var arr = [];
    var product = 1;
    var sum = 0;

    for (i = 0; i < MyNewArray.length; i++) {
        for (j = 0; j < MyNewArray[i].length; j++) {
            sum = sum + MyNewArray[i][j];
            product = product * MyNewArray[i][j];
        }
    }

    arr.push(product);
    arr.push(sum);

    return arr;
}

console.log(multipleArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multipleArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(multipleArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));
module.exports = multipleArrayFunction;
