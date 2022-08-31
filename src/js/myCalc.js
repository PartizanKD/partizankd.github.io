"use strict"

function calc() {
    /* let sum1;
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
    //sum1 = prompt(`Выберите тип сайта.\n 1 - Сайт-визитка ${matrix[0][0]} руб\n 2 - Корпоративный ${matrix[0][1]} руб\n 3 - Интернет-магазин ${matrix[0][2]} руб\n`, ``);
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
    //alert(`Ваша цена за тип сайта ${sum[0]} руб \n Сроки (в днях): ${sum[1]}`);

    //sum1 = prompt(`Выберите дизайн сайта.\n 1 - По шаблону ${matrix[1][0]} руб\n 2 - Анимированный ${matrix[1][1]} руб\n 3 - Уникальный ${matrix[1][2]} руб\n`, ``);
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
    //alert(`Ваша цена за дизайн сайта ${sum[2]} руб \n Сроки (в днях): ${sum[3]}`);

    //sum1 = prompt(`Выберите адаптивность сайта.\n 1 - Только для ПК ${matrix[2][0]} руб\n 2 - Преимущественно для мобильных ${matrix[2][1]} руб\n 3 - Для любых устройств ${matrix[2][2]} руб\n`, ``);
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
    //alert(`Ваша цена за адаптивность сайта ${sum[4]} руб  \n Сроки (в днях): ${sum[5]}`);
    sum1 = sum[0] + sum[2] + sum[4];
    time = sum[1] + sum[3] + sum[5];
    //alert(`Итоговая цена тип ${sum[0]} + дизайн ${sum[2]} + адаптивность ${sum[4]} = ${sum1} руб \n Сроки (в днях): ${sum[1]} + ${sum[3]} + ${sum[5]} = ${time}`);*/

    $('#js-button').click(function () {
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
        let value1 = $('#list1').val();
        let value2 = $('#list2').val();
        let value3 = $('#list3').val();

        if (value1 == 1) {
            sum.push(matrix[0][0]);
            sum.push(time[0][0]);
        } else if (value1 == 2) {
            sum.push(matrix[0][1]);
            sum.push(time[0][1]);
        } else if (value1 == 3) {
            sum.push(matrix[0][2]);
            sum.push(time[0][2]);
        }

        if (value2 == 1) {
            sum.push(matrix[1][0]);
            sum.push(time[1][0]);
        } else if (value2 == 2) {
            sum.push(matrix[1][1]);
            sum.push(time[1][1]);
        } else if (value2 == 3) {
            sum.push(matrix[1][2]);
            sum.push(time[1][2]);
        }

        if (value3 == 1) {
            sum.push(matrix[2][0]);
            sum.push(time[2][0]);
        } else if (value3 == 2) {
            sum.push(matrix[2][1]);
            sum.push(time[2][1]);
        } else if (value3 == 3) {
            sum.push(matrix[2][2]);
            sum.push(time[2][2]);
        }

        sum1 = sum[0] + sum[2] + sum[4];
        time = sum[1] + sum[3] + sum[5];

        $('#js-result').html(`Итоговая цена тип ${sum[0]} + дизайн ${sum[2]} + адаптивность ${sum[4]} = ${sum1} руб <br> Сроки (в днях): ${sum[1]} + ${sum[3]} + ${sum[5]} = ${time}`);
    });
}

calc();


$(document).ready(function () { //запускает код после загрузки страницы
    $('.prelbg').addClass("prelnone");

    $(window).scroll(function () {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $('.ICan').offset().top + 400;

        if (scroll > offset) {
            $('.c1').addClass("anim");
            $('.c2, .c3, .c4').addClass("anim2");
        }
    });

    function numbersAnim() {

        let smile = 120,
            job = 4600,
            project = 340,
            award = 23,
            time = 3000;

        function numbersSmile(smile, time) {
            setTimeout(function () {
                $('.c5 .number').text(smile);
            }, time)
        }

        function numbersJob(job, time) {
            setTimeout(function () {
                $('.c6 .number').text(job);
            }, time)
        }

        function numbersProject(project, time) {
            setTimeout(function () {
                $('.c7 .number').text(project);
            }, time)
        }

        function numbersAward(award, time) {
            setTimeout(function () {
                $('.c8 .number').text(award);
            }, time)
        }

        for (let c5 = 0, timec5 = 0; c5 <= smile; c5++) {
            let t = time / smile;
            timec5 = timec5 + t;
            numbersSmile(c5, timec5);
        }

        for (let c6 = 0, timec6 = 0; c6 <= job; c6++) {
            let t = time / job;
            timec6 = timec6 + t;
            numbersJob(c6, timec6);
        }

        for (let c7 = 0, timec7 = 0; c7 <= project; c7++) {
            let t = time / project;
            timec7 = timec7 + t;
            numbersProject(c7, timec7);
        }

        for (let c8 = 0, timec8 = 0; c8 <= award; c8++) {
            let t = time / award;
            timec8 = timec8 + t;
            numbersAward(c8, timec8);
        }
    }

    let stop = 0;
    $(window).scroll(function () {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $('.stat').offset().top + 300; //+ scrollAnim.height();

        if (scroll > offset && stop == 0) {
            numbersAnim();
            stop = 1;
        }
    });

    function isVisible(elem) {

        let coords = elem.getBoundingClientRect();

        let windowHeight = document.documentElement.clientHeight;

        // верхний край элемента виден?
        let topVisible = coords.top > 0 && coords.top < windowHeight;

        // нижний край элемента виден?
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

        return topVisible || bottomVisible;
    }

    function showVisible() {
        for (let img of document.querySelectorAll('img')) {
            let realSrc = img.dataset.src;
            if (!realSrc) continue;

            if (isVisible(img)) {
                img.src = realSrc;
                img.dataset.src = '';
            }
        }
    };

    showVisible();
    window.onscroll = showVisible;

    setTimeout(function () {
        $("#modal").click();
    }, 10000);

    $('.image-link').magnificPopup({
        type: 'image'
        // other options
    })
});
