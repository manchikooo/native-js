const todoListID_1 = 'jhfgenv565743ofdjngiu' //v1()
const todoListID_2 = 'kvkmsnv565743ofdjngiu' //v1()

const todoLists = [
    {
        id: [todoListID_1],
        title: 'What to learn',
        filter: 'all',
        // tasks: [
        //     {id: 11, title: 'HTML', isDone: true,},
        //     {id: 12, title: 'CSS', isDone: true,},
        //     {id: 13, title: 'JS/TS', isDone: false,},
        // ]
    },
    {
        id: [todoListID_2],
        title: 'What to buy',
        filter: 'all',
        // tasks: [
        //     {id: 21, title: 'Milk>', isDone: true,},
        //     {id: 22, title: 'Bread', isDone: true,},
        //     {id: 23, title: 'Meat', isDone: false,},
        // ]
    },
]

const tasks = {
    [todoListID_1]: [
        {id: 11, title: 'HTML', isDone: true,},
        {id: 12, title: 'CSS', isDone: true,},
        {id: 13, title: 'JS/TS', isDone: false,},
    ],
    [todoListID_2]: [
        {id: 21, title: 'Milk>', isDone: true,},
        {id: 22, title: 'Bread', isDone: true,},
        {id: 23, title: 'Meat', isDone: false,},
    ]
}

console.log(tasks[todoListID_1])
console.log(tasks[todoListID_1].find(t => t.title === 'HTML'))
console.log(tasks[todoListID_1].map(t => ({...t, isDone: false})))
console.log(tasks[todoLists[0].id])

// reduce

const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce((acc, el) => acc + el, 0))

let students = [
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

console.log(students.reduce((acc, el) => {   // с помощью reduce пишем метод filter
    if (el.age > 20) {
        acc.push(el.name)
        return acc
    } else {
        return acc
    }
}, []))

console.log(students.filter(s => s.age > 20).map(s => s.name)) // тот же фильтр, только с методом filter

console.log(students.reduce((acc, el) => (acc.scores > el.scores) ? acc : el), 0)
// {
//     if (acc.scores >  el.scores) {
//         return acc
//     } else return el
// }))










