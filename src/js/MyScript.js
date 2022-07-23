"use strict"

/*let type1 = 500,
    type2 = 1000,
    type3 = 1500,
    design1 = 1000,
    design2 = 2000,
    design3 = 3000,
    adaptivity1 = 300,
    adaptivity2 = 600,
    adaptivity3 = 900,
    sum1, sum2, sum3, sum;

sum1 = prompt("Тип: Введите 1, 2 или 3", "");
if (sum1 == 1) {
    sum1 = type1;
} else if (sum1 == 2) {
    sum1 = type2;
} else if (sum1 == 3) {
    sum1 = type3;
}
alert(`Ваша цена за тип сайта ${sum1} руб`);

sum2 = prompt("Дизайн: Введите 1, 2 или 3", "");
if (sum2 == 1) {
    sum2 = design1;
} else if (sum2 == 2) {
    sum2 = design2;
} else if (sum2 == 3) {
    sum2 = design3;
}
alert(`Ваша цена за дизайн сайта ${sum2} руб`);

sum3 = prompt("Адаптивность: Введите 1, 2 или 3", "");
if (sum3 == 1) {
    sum3 = adaptivity1;
} else if (sum3 == 2) {
    sum3 = adaptivity2;
} else if (sum3 == 3) {
    sum3 = adaptivity3;
}
alert(`Ваша цена за адаптивность сайта ${sum3} руб`);

sum = sum1 + sum2 + sum3;
alert(`Итоговая цена тип ${sum1} + дизайн ${sum2} + адаптивность ${sum3} = ${sum} руб`);*/

let sum1;
let sum = [];
let matrix = [
    [500, 1000, 1500],
    [1000, 2000, 3000],
    [300, 600, 900],
]
let time = [
    [1, 5, 10],
    [2, 6, 9],
    [3, 5, 8],
]

function js() {
    sum1 = prompt(`Выберите тип сайта.\n 1 - Сайт-визитка ${matrix[0][0]} руб\n 2 - Корпоративный ${matrix[0][1]} руб\n 3 - Интернет-магазин ${matrix[0][2]} руб\n`, ``);
    if (sum1 == 1) {
        sum.push(matrix[0][0]);
        sum.push(time[0][0]);
    } else if (sum1 == 2) {
        sum.push(matrix[0][1]);
        sum.push(time[0][1]);
    } else if (sum1 == 3) {
        sum.push(matrix[0][2]);
        sum.push(time[0][2]);
    } 
    alert(`Ваша цена за тип сайта ${sum[0]} руб \n Сроки (в днях): ${sum[1]}`);

    sum1 = prompt(`Выберите дизайн сайта.\n 1 - По шаблону ${matrix[1][0]} руб\n 2 - Анимированный ${matrix[1][1]} руб\n 3 - Уникальный ${matrix[1][2]} руб\n`, ``);
    if (sum1 == 1) {
        sum.push(matrix[1][0]);
        sum.push(time[1][0]);
    } else if (sum1 == 2) {
        sum.push(matrix[1][1]);
        sum.push(time[1][1]);
    } else if (sum1 == 3) {
        sum.push(matrix[1][2]);
        sum.push(time[1][2]);
    }
    alert(`Ваша цена за дизайн сайта ${sum[2]} руб \n Сроки (в днях): ${sum[3]}`);

    sum1 = prompt(`Выберите адаптивность сайта.\n 1 - Только для ПК ${matrix[2][0]} руб\n 2 - Преимущественно для мобильных ${matrix[2][1]} руб\n 3 - Для любых устройств ${matrix[2][2]} руб\n`, ``);
    if (sum1 == 1) {
        sum.push(matrix[2][0]);
        sum.push(time[2][0]);
    } else if (sum1 == 2) {
        sum.push(matrix[2][1]);
        sum.push(time[2][1]);
    } else if (sum1 == 3) {
        sum.push(matrix[2][2]);
        sum.push(time[2][2]);
    }
    alert(`Ваша цена за адаптивность сайта ${sum[4]} руб  \n Сроки (в днях): ${sum[5]}`);
}

js();
sum1 = sum[0] + sum[2] + sum[4];
time = sum[1] + sum[3] + sum[5];
alert(`Итоговая цена тип ${sum[0]} + дизайн ${sum[2]} + адаптивность ${sum[4]} = ${sum1} руб \n Сроки (в днях): ${sum[1]} + ${sum[3]} + ${sum[5]} = ${time}`);
