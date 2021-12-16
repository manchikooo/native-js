// ПРИОРИТЕТНЫЙ

let arr = [80,11,99,43,1]
let sortArr1 = [] // запихивам все сюда, а изначальный массив arr остается пустым после прохождения цикла
for (let i = 0; arr.length; i++) {
    let minElement = arr.reduce((acc, el) => acc > el ? el : acc)
    sortArr1.push(minElement);
    arr = arr.filter((f, i) => i !== arr.indexOf(minElement)) // ищем по индексу минимальный элемени и не пускаем его в новый массив при следующем цикле
}
console.log(sortArr1)

// ПОНЯТНЫЙ
function sort(arr) {
    let newArr = [];
    // let length = arr.length;
    for (let i = 0; arr.length; i++) {
        let min = Math.min(...arr);
        let index = arr.indexOf(min);
        newArr.push(min);
        arr.splice(index, 1);
    }
    return newArr;
};

console.log(sort([1, 10, 2, 5, 7, 3]))

const array = [1, 10, 22, 39, 54]

const sortArray = (array) => {
    let newArray = []
    for (let i = 0; array.length; i++) {
        let value = Math.min(...array)
        let index = array.indexOf(value)
        let elem = array.splice(index, 1)
        newArray = [...newArray, ...elem]
    }
    return newArray
}
console.log(sortArray(array))

function helloSort(arr) {
    return arr.reduce((acc, el) => {
        let idx = 0;
        while (idx < acc.length && el < acc[idx]) idx++;
        acc.splice(idx, 0, el);
        return acc;
    }, []);
}

console.log(helloSort([1, 10, 22, 39, 54]))