// -----------------------------------------------------ПОЛЯ
// class User {
//     _name = 'USER NAME'; // поле _name
//     _age = Infinity; // поле  _age

const { use } = require("chai");

//     constructor(){

//     }
// }

// const user1 = new User();
// user1._name = 'Igor';
// user1._age = 23;

// console.log(user1._name + user1._age);

//____________________________
// class User {
//     _name = 'USER NAME';
//     _age = Infinity;

//     constructor(){

//     }
// }

// const user1 = new User();
// user1._name = 'Igor';
// user1._age = 23;

// console.log(user1._name + user1._age);

// let user2 = new User();
// user2 = {
//     _name: 'Vasya',
//     _age: 33,
// }

// console.log(user2._name + user2._age);

// -----------------------------------------------------МЕТОДЫ
// class User {
//     _name = 'USER NAME';
//     _age = Infinity;

//     getName(){ // метод getName
//         return this._name;
//     }
// }
// const user = new User();

//  console.log(user.getName());
//  console.log(user._age);
//  console.log(user._name);

//--------------------------
// class User{
//     name = ''; // поле класса
//     age;

//     constructor(name, age){ // коструктор класса
//         this.name = name; // присваеваем переданое значение полю name
//         this.age = age; // присваеваем переданое значение полю age
//     }
// }

// const user1 =  new User('Aleksey', 23); // создаем экземпляр класса со значениями полей
// const user2 = new User('Anna', 32);

// console.log(user1.name, user1.age, user2.name, user2.age);

//--------------------------
// class User{
//     name = ''; // поле класса

//     constructor(name){ // коструктор класса
//         this.name = name; // присваеваем переданое значение полю name
//     }

//     getName(){ // метод класса
//         return this.name.toLocaleUpperCase();
//     }
// }

// const user = new User('Alex'); // создаем экземпляр класса со значениями поля
// console.log(user.getName(), user.name);

//--------------------------
// class User{
//     name = ''; // поле класса

//     constructor(name = 'USER NAME'){ // коструктор класса
//         this.name = name; // присваеваем переданое значение полю name
//     }

//     get Name(){ // свойство класса
//         return this.name.toLocaleUpperCase();
//     }
// }

// const user = new User('Ruslan'); // создаем экземпляр класса со значениями поля
// console.log(user.Name, user.name);

//--------------------------
// class User{
//     name = ''; // поле класса
//     counter = 0;

//     constructor(name = 'USER NAME'){ // коструктор класса
//         this.name = name; // присваеваем переданое значение полю name
//     }

//     get Name(){ // свойство класса
//         this.counter++;
//         return this.name.toLocaleUpperCase() + this.counter;
//     }
// }

// const user = new User('Ruslan'); // создаем экземпляр класса со значениями поля
// console.log(user.Name, user.Name, user.name);


//--------------------------
// class User{
//     name = ''; // поле класса
//     counter = 0;

//     setName(name){ // метод класса
//         this.#name = name; // #name -  приватное поле
//     }
// }
// const user = new User();
// user.setName('Ruslan');
// console.log(user.name);

//--------------------------
// class User{
//     #name = ''; // поле класса
//     counter = 0;

//     setName(name){ // метод класса
//         if (name === 'admin') throw Error('Invalid user name');
//         this.#name = name; // #name -  приватное поле
//     }
//     getName(){
//         return this.#name;
//     }
// }
// const user = new User();
// user.setName('ruslan');
// console.log(user.name);

//---------------------
// class User{
//     constructor(name){ // создание приватных полей с помощью замыкания
//         this.getName = () => name;
//         this.setName = (n) => name = n;
//     }
// }

// const user = new User('Flezus');
// console.log(user.getName()); // 'Flezus'
// console.log(user.name); // undefined
// user.setName('Vasya');
// console.log(user.getName()); // Vasya

//---------------------
class User{
    constructor(name){ // создание приватных полей с помощью замыкания
        this.getName = () => name;
        this.setName = (n) => name = n;
    }
}
const user1 = new User('Alexey');
console.log(user1.getName(), user1.name);
user1.setName('Vasiliy');
console.log(user1.getName());

