
// =====================================================================================
//
// Первый урок серии работы с объектами в JS
//
// =====================================================================================



let user = new Object(); // синтаксис "конструктор объекта"
// let user = {}; //  синтакстис "литерал объекта"

let newUser = {
    name: "John",
    age: 20,
    "comment": "good men",
};

console.log("Hello world!!!")
console.log(newUser)

// константная переменная
const thirdUser = {
    name: "Lion",
    age: 45
};

console.log(thirdUser);

// присваивание переменной d_name значения thirdUser.age
let d_name = thirdUser["age"];

console.log(d_name);

delete thirdUser["age"];
console.log(thirdUser);
console.log(thirdUser.name);

// let fruit = prompt("Какой фрукт купить?", "apple");
// console.log(fruit)

// Свойство из переменной

function makeUser(m_name, m_age)
{
    return {
        name: m_name, 
        age: m_age,
    }
}

let fourthUser = makeUser("James", 21);
console.log(fourthUser)

// Проверка существования свойства, оператор «in»

console.log(fourthUser.someone === undefined) // true означает "свойства нет"
console.log("age" in fourthUser)
