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
        scores: 90,
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}
console.log(copyUser)
//Проверка:
console.log(user === copyUser) //- что должно быть в консоли?
console.log(user.friends === copyUser.friends) //- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {
    ...user,
    friends: [...user.friends]
}
console.log(deepCopyUser)

//Проверка:
console.log(user === deepCopyUser) // false
console.log(user.friends === deepCopyUser.friends) // false

//3. Поверхностная копия массива students
let copyStudents = [...students]
console.log(copyStudents)

//Проверка:
console.log(students === copyStudents) // false
console.log(students[0] === copyStudents[0]) // true

//4*. Полная (глубокая) копия массива students (map)                   ПОВТОРИТЬ
let deepCopyStudents = students.map(s => ({...s}))
console.log(deepCopyStudents)
//Проверка:
console.log(students === deepCopyStudents) // false
console.log(students[0] === deepCopyStudents[0]) // false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)          ПОВТОРИТЬ
// const sortArrByNames =

let sortedByName = deepCopyStudents.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)      ПОВОТОРИТЬ
function sortArrByScores(a, b) {
    if (a.scores > b.scores) {
        return -1
    }
    if (a.scores < b.scores) {
        return 1
    }
    return 0
}

let sortedByScores = deepCopyStudents.sort(sortArrByScores)
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter(s => s.scores >= 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)    ПОВТОРИТЬ
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = sortedByScores.splice(0, 3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...deepCopyStudents, ...topStudents]
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(s => s.isMarried === false)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(s => s.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = students.map(s => s.name)
console.log(nameWithSpace.join(' '))
let namesWithComma = students.map(s => s.name)
console.log(namesWithComma.join(','))

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(s => ({...s, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(s => s.name === 'Ann')
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// - c помощью reduce
// - не используя методы массивов и Math.max()

// ПРОСТО IF ELSE
// let bestStudent = newDeepCopyStudents.reduce(function (topStudent, student) { // ПОВТОРИТЬ И СПРОСИТЬ
//         if (topStudent.scores > student.scores) {
//             return topStudent
//         } else {
//             return student
//         }
//     }
// )

//ТЕРНАРНИК
// let bestStudent = newDeepCopyStudents.reduce((a, b) => a.scores > b.scores ? a : b)

// БЕЗ МЕТОДОВ
// let bestStudent = students[0];
// for (let i = 1; i < students.length; i++) {
//     if (students[i].scores > bestStudent.scores) { // если какой-то из студентов больше нашего установленного, то ->
//         bestStudent = students[i]; // перезапиши нашего первого студента на это значение
//     }
// }
// console.log(bestStudent)

// ВОЗВРАЩАЕТ ЛУЧШЕГО и ВТОРОГО ЛУЧШЕГО СТУДЕНТА
let bestStudent = students[0];
let bestStudent2 = students[1];
for (let i = 1; i < students.length; i++) {
    if (bestStudent.scores > bestStudent2.scores) {
        if (students[i].scores > bestStudent2.scores) {
            bestStudent2 = students[i];
        }
    } else {
        if (students[i].scores > bestStudent.scores) {
            bestStudent = students[i];
        }
    }
}
console.log(bestStudent, bestStudent2)

// ВОЗВРАЩАЕТ ЛУЧШЕГО и ВТОРОГО ЛУЧШЕГО СТУДЕНТА. ВЕРСИЯ 2
let best1 = students[0]
let best2 = students[0]

for (let i = 0; i < students.length; i++) {
    if (students[i].scores > best1.scores) {
        best1 = students[i]

    } else  if (students[i].scores > best2.scores ){
        best2 = students[i]
    }
}
console.log(best1, best2)

//13. Найдите сумму баллов всех студентов (reduce)!!!!!!!!!!!!!!!!!!!!
let sumOfScores = newDeepCopyStudents.reduce((a, b) => a + b.scores, 0)
console.log(sumOfScores)
console.log(students)
// И поднимаем руку!!!!

let scoresSum;
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    //..............................
}
console.log(addFriends(students));









