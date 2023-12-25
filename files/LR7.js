var list_of_words = ["стоим", "мы", "на", "посту", "повзводно", "и", "поротно", "бессмертны", "как", "огонь",
                     "спокойны", "как", "гранит", "мы", "армия", "страны", "мы", "армия", "народа", "великий", 
                     "подвиг", "наш", "история", "хранит", "не", "зря", "в", "судьбе", "алеет", "знамя", 
                     "не", "зря", "на", "нас", "надеется", "страна", "священные", "слова", "Москва", "за", 
                     "нами", "мы", "помним", "со", "времён", "Бородина", "вручили", "нам", "отцы", "всесильное", 
                     "оружье", "мы", "Родине", "своей", "присягу", "принесли", "и", "в", "жизни", "нам", 
                     "дана", "единственная", "служба", "от", "смерти", "заслонить", "грядущее", "Земли", "не", "надо", 
                     "нас", "пугать", "бахвалиться", "спесиво", "не", "стоит", "нам", "грозить", "и", "вновь",
                     "с", "огнём", "играть", "ведь", "если", "враг", "рискнёт", "проверить", "нашу", "силу", 
                     "его", "мы", "навсегда", "отучим", "проверять", "Красной армии", "слава", "ура", "ура", "ура"];

let word;   // Вводимое слово
let count;   // Счётчик слов
var flag;   // Логическая переменная - управление автивностью игры
let seconds;   // Оставшееся время
let time_second = 0;   // Отображение минут
let time_minute = 0;   // Отображение секунд
restart();

function start() {
    if (flag == false) {
        document.getElementById("start").disabled = false;
        document.getElementById("restart").disabled = false;
        flag = true;
        document.getElementById("start").innerHTML = "Остановить";
        setTimeout(timer, 1000);
    } else if (flag) {
        flag = false;
        if (count < list_of_words.length && seconds > 0) {
            document.getElementById("start").innerHTML = "Продолжить";
        } else {
            document.getElementById("start").disabled = true;
            document.getElementById("text2").innerHTML = "Введено слов: " + count;
            if (count < list_of_words.length) {
                document.getElementById("text1").innerHTML = "Вы проиграли...";
            } else {
                document.getElementById("text1").innerHTML = "Вы ВЫИГРАЛИ!";
            }
            count = 0;
        }
    }
}

function restart() {
    document.getElementById("start").disabled = false;
    document.getElementById("restart").disabled = true;
    flag = false;
    seconds = 191;
    count = 0;
    time_minute = Math.floor(seconds / 60);
    time_second = seconds % 60;
    document.getElementById("start").innerHTML = "Начать игру";
    document.getElementById("text1").innerHTML = "Введите слово: " + list_of_words[count];
    document.getElementById("text2").innerHTML = "Введено слов: " + count;
    document.getElementById("text3").innerHTML = "Осталось времени:  " + time_minute + ":" + time_second;
}

function timer() {
    seconds--;
    time_minute = Math.floor(seconds / 60);
    time_second = seconds % 60;
    document.getElementById("text3").innerHTML = "Осталось времени: " + time_minute + ":" + time_second;
    if (flag && seconds > 0) {
        setTimeout(timer, 1000);
    } else if (seconds == 0) {
        start();
    }
}

function entering_the_word() {   // Ввод слова
    word = document.getElementById("word").value;
    if (word == list_of_words[count] && flag) {
        document.getElementById("word").value = "";
        count++;
        if (count == list_of_words.length) {
            start();
        } else {
            document.getElementById("text2").innerHTML = "Введено слов: " + count;
            document.getElementById("text1").innerHTML = "Введите слово:  " + list_of_words[count];
        }
    }
}

function set_word() {
    document.getElementById("word").value = "";
}