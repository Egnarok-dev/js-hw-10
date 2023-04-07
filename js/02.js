// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.


const car = {
  brand: `Dodge`,
  model: `challenger`,
  year: 2021,
  speed: 110,
  showInfo() {
    console.log(
      `Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year};`,
    );
  },
};

const location = {
  city: `Нью-Йорк`,
  distance: 1041,
};

let newObject = {
  information: [car, location],
  showTime: function() {
    let time = 0;
    this.information.forEach(() => {
      time = location.distance / car.speed;
    });
    console.log(
      `Автомобіль ${car.brand}, марки ${car.model}, з Оберн-Хілс дістанеться міста ${location.city} за ${time} годин`,
    );
  },
};

car.showInfo();
newObject.showTime();
