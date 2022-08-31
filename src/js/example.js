//Lesson9 часть 1----------------------------------------------------------------------------------------------------------
"use strict"//пишется для совместимости старых и новых версий кода, должен находиться в начале скрипта

console.log("Привет, мир!"); //помогает находить ошибки
const NAME = 100; //константа, принято писать КАПСОМ, не может быть изменена
let name2 = "10"; //переменная, "10" - строка 10, не может начинаться с цифр и содержать дефисы
var name3 = "texttexttexttexttexttexttexttext texttexttexttexttexttexttext"; //более старая запись переменной, можно использовать разные кавычки ""''``

// * - + / операторы
 let var3 = 10 + 10;//выражение

//создаём блок
function func_1(){
    let var3 = 10 + 10;
    console.log(10 + 10);
}

func_1();//вывод функции на консоль
console.log(name3);

let name1 = "Andrew", age, 
    job;//можем объявлять несколько переменных в подряд, можно ставить enter после каждой запятой
age = job; //внутрь одной переменной можно вкладывать другую

if (true){
    let name1 = "Brown";//локальная переменная
    console.log(name1);//область видимости браузера ограничена скобочками {}
    // var - здесь может быть задана глобальная переменная
}

console.log(name1);
//часть 2-------------------------------------------------------------------------------------------------------
"use strict"

let name = 5.15;
let name2 = null;
let name3 = true;
let name4 = 855893349587558n;
let name5 = "Строка";
let name6 = 50 > 200;
let name7 = 50 / 0;
let name8 = "Строка" / 5;
let name9 = `Строка: ${name}`; //в `` кавычках мы можем вывести значение другой переменной

console.log(typeof name);
console.log(name);

console.log(typeof name2);
console.log(name2);

console.log(typeof name3);
console.log(name3);

console.log(typeof name4);
console.log(name4);

console.log(typeof name5);
console.log(name5);

console.log(typeof name6);
console.log(name6);

console.log(typeof name7);
console.log(name7);

console.log(typeof name8);
console.log(name8);

console.log(typeof name9);
console.log(name9);

let book = {
    name: "Web 2.0",
    author: "A. Brown"
};

console.log(typeof book);
console.log(book);

let book1 = "book";

function name10() {
    console.log(typeof book1);
    console.log(book1);
}

name10();

//Преобразование типов данных

let book2 = 100;

console.log(typeof book2);
console.log(book2);

book2 = String(book2);

console.log(typeof book2);
console.log(book2); //преобразовали число в строку

let book3 = "100";

console.log(typeof book3);
console.log(book3);

book3 = Number(book3);

console.log(typeof book3);
console.log(book3); //преобразовали строку в число

let book4 = "100";

console.log(typeof book4);
console.log(book4);

book4 = "50" / "10";

console.log(typeof book4);
console.log(book4); //произвели неявное преобразование строки в число, но данная операция не работает с "+", т.к. строки просто склеются

let book5 = Boolean("0"); //true

console.log(typeof book5);
console.log(book5);

book5 = Boolean(0); //0 - false, любое другое числовое значение будет true

console.log(typeof book5);
console.log(book5);

let book6 = 10;
book6++; //Просто прибавляет 1, можно писать до и после book6, аналогично -- убавляет 1

console.log(typeof book6);
console.log(book6);

//условия if else
if (500 < 100) {
    console.log("True");
} else {
    console.log("False");
}

(500 < 100) ? console.log("True"): console.log("False 2");

//циклы while и for

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
console.log("Finish");

let count1 = 6;
do {
    console.log(count1);
    count1++;
}
while (count < 5)

console.log("Finish");

//for(начало;условие;шаг цикла)
for (let count2 = 0; count2 < 5; count2++) {
    console.log(count2);
    //if (count2 == 2) break;//бряк прерывает цикл
    if (count2 == 2) continue;
    count2++;
}

console.log("Finish");
//Lesson10 часть 1----------------------------------------------------------------------------------------------------------

function getLocationTwo(age, bolee, menee){
    console.log(age);
    if(age>18){
        bolee();
    }
    else{
        menee();
    }
}

function less(){
    console.log("Менее 18")
}

function more(){
    console.log("Более 18")
}

getLocationTwo(5, more, less);

function getLocation3(number1, number2){
    let temp = number1 + number2;
    return temp = 15;
}

let age = getLocation3(5, 3);
console.log(age);

function getCube(number1, number2){
    if (number2 === 1){
        return number1;
    }
    else {
        return number1 * getCube(number1, number2 - 1);//рукурсия
    }
}

console.log(getCube(2,3));

let getCube2 = function(number1, number2){
    return number1 * number2;
}

console.log(getCube2(1,5));

let getCube3 = (number1, number2) => { //стрелочная функция
    console.log("arrow");
    return number1 * number2;
};
let count = 0;
let int = setInterval(getCube3, 2000, 3, 3);//функция срабатывает каждые 2 секунды

setTimeout(function(){
    console.log("Hi");
}, 4000);

//console.log(getCube3(2,5));

// часть 2----------------------------------------------------------------------------------------------------------

let part = "book";


let book = {
    name: "js",
    age: 3,
    [part + " description"]: "Описание",
    author: {
        name: "Andrew",
        surname: "Brown",
    }
};

function createBook(name,age){
    return {
    name: name,
    age: age,
    
};
}

let bookTwo = {
    name: "Andrew",
};


console.log(createBook("Victor", "30"));
console.log(createBook("Victoria", "18"));
console.log(bookTwo);

bookTwo.age = 10;
bookTwo["character"] = true;
bookTwo.author = {
    name: "Andrew",
    surname: "Brown",
}


delete bookTwo.author;
console.log(bookTwo);

let bookThree = bookTwo;//это не копия, а ссылка на объект
bookTwo.age = "30";



bookThree = Object.assign({}, bookTwo);//полностью скопировали объект, не ссылка

bookTwo.newChar = true;
bookThree.newChar = false;

console.log(bookTwo);
console.log(bookThree);

// часть 3----------------------------------------------------------------------------------------------------------

let arr5 = new Array();//создаём массив
let arr = ["One","Two"];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
arr[2] = false;
console.log(arr);

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

console.log(matrix);
console.log(matrix[0][1]);
console.log(matrix.length);

arr.push("newVal");//добавит объект в матрицу на последнее место
console.log(arr);
arr.unshift("newVal");//обавит объект в начало со смещением остальных элементов
console.log(arr);
arr.pop();//вытащит последнее значение из массива
console.log(arr);
arr.shift();//вытаскивает объект из начала массива
console.log(arr);
arr.splice(1,1);//удаляет объекты позиция + кол-во элементов
console.log(arr);

//Lesson11 часть 1----------------------------------------------------------------------------------------------------------

let windowWidth = window.innerWidth; //получаем ширину окна нашего браузера
console.log(windowWidth);

windowWidth = navigator.userAgent; //получаем инфу о браузере пользователя
console.log(windowWidth);

windowWidth = location.href; //текущий путь до сайта
//location.href = "http://yandex.ru";//перенаправление на другой сайт

console.log(windowWidth);

$(document).ready(function () { //запускает код после загрузки страницы
    //$('#hello.he').text("Привет, Димас");
    $('.he+p').css("border", '2px solid red');
    $('#hello').css("border", '2px solid red');
    $('.he+p').dblclick(function(){
        alert("Its work");
    });
    $('.he+p').click(function(){
        $(this).toggleClass("red");
    });
 $('.he+p').mouseenter(function(){
        $(this).toggleClass("red");
    });
    $('.he+p').mouseleave(function(){
        $(this).toggleClass("red");
    });
    $('input').focus(function(){
        console.log("focus");
    });
    $('input').change(function(){//keyup
       $('.he').text("Привет, "+ $(this).val());
    });
    
    $('p').dblclick(function(){
       $(this).delay(2000).hide(5000).delay(500).show(2000);
    });
    
    $('p').click(function(){
       $(this).animate({opacity: '0.2'}, 1000);
    });
});
//$('#hello').text("Привет, Димас");











































