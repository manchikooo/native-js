const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// map/itMap
// 1. Возвращает новый массив
// 2. Не меняет количество элементов
// 3. Map принимает коллбэк (функцию) в качестве параметра
// 4. Коллбэк выполняет обработку и/или преобразование каждого элемента исходного массива
// 5. Новый массив состоит из return нашего коллбэка
// 6. Исходный массив не изменяется

// поверхностная копия - создание второго массива, у которого ссылки направляют на
// элементы исходного массива
const copy = [...students]
// const copy = students.map(s => s)

const deepCopy = students.map(s => ({...s}))
console.log(copy)
console.log(deepCopy)

// const getName = s => s.name
function getName(s) {
    return s.name
}

const names = students.map(getName)


const itMap = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr[i] = callback(array[i])
    }
    return newArr
}
// глубокая копия массива
const getCopyStudent = s => ({...s})

console.log(itMap(students, getName))
console.log(itMap(students, getCopyStudent))

// 1. Возвращает новый массив
// 2. Возможно, меняет количество элементов
// 3. Filter принимает коллбэк (функцию) в качестве параметра
// 4. Коллбэк выполняет обработку каждого элемента исходного массива
// 5. Коллбэк возвращает true/false
// 6. Новый массив состоит из элементов исходного массива
// 7. Исходный массив не изменяется

const isFilter = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArr.push(array[i])
        }
    }
    return newArr
}

const filteredAdd = students.filter(s => s.age >= 20)
console.log(filteredAdd)

// 1. Возвращает элемент исходного массива
// 2. Возвращает один элемент или ни одного
// 3. Find принимает коллбэк (функцию) в качестве параметра
// 4. Коллбэк выполняет обработку каждого элемента исходного массива
// 5. Коллбэк возвращает true/false
// 6. Возвращает первый элемент, на котором коллбэк вернет true или undefined
// 7. Исходный массив не изменяется

const itFind = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        } else return 'ничего нет'
    }
}

const getBob = s => s.age === 22
console.log(itFind(students, getBob))












