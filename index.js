// при нажатии кнопки "Отправить" срабатывает сохранение данных в чат в корректном виде
function sendComment (){
    showName ();
    changeImage ();
    checkSpam ();
    addDate ();
}

// данная функция корректирует введенное пользователем имя
function changeUserName (){
    let userName = document.getElementById ('user-name-input');

// Добавляем условие для проверки пустого поля имени, если оно пусто - присвается значение 'username', если не пусто - корректирует. 
    if (userName.value == ''){
        console.log (userName.value);
        document.getElementById ('chat__user-name').innerText == 'Username';
        console.log (document.getElementById ('chat__user-name').innerText);
    } else {
    let cleanName = userName.value.trim(userName);
    let fullName = cleanName.split (' ');
    let correctName = fullName.map (elem => elem.toLowerCase());
    let correctFullName = correctName.map ( e => e[0].toUpperCase() + e.slice(1));
    let fullCorrectUserName = correctFullName.join(' ');
    console.log (fullCorrectUserName);
    document.getElementById ('chat__user-name').textContent = fullCorrectUserName;
}
}


// функция вставляет ссылку в атрибут, если ссылка не вставлена - подставляет рандомное изображение. К сожалению, без массивов не пончтно как это делается
function changeImage (){
    const imgArray = ['https://hypeava.ru/uploads/posts/2022-01/1641810282_2.jpg', 
        'https://www.youloveit.ru/uploads/posts/2018-11/1543264146_youloveit_ru_avatarki_pikachu01.jpg', 
        'https://static-cse.canva.com/blob/969175/1600w-OUwmy_8MS6I.jpg', 
        'https://cs12.pikabu.ru/post_img/2022/10/03/6/1664790197176171503.jpg', 
        'https://shapka-youtube.ru/wp-content/uploads/2022/06/avatarka-kota-v-bandane.jpg', 
        'https://lifehacki.ru/wp-content/uploads/2020/09/Avatarki-dlja-Vatsapa-dlja-muzhchin-2.jpg'];
        let newImg = Math.floor(Math.random() * imgArray.length);
        console.log (newImg);
    let imgLink = document.getElementById ('user-img-link');
    if (imgLink.value == '') {
        document.getElementById ('chat__img').src = imgArray[newImg];
    } else {
        document.getElementById ('chat__img').src = imgLink.value;
    }
}

// проверяет наличие слов viagra и xxx независимо от регистра
function checkSpam (){
    const commentOne = document.getElementById ('comment__user-comments').value;
        let commentNew = commentOne.replace(/viagra/ig, '***');
        console.log (commentNew);
        let commentNewtwo = commentNew .replace (/xxx/ig, '***');
        console.log (commentNewtwo);
        document.getElementById ('chat__comment').textContent = commentNewtwo;
    }

// функция добавляет время
function addDate (){
    let nowDate = new Date();
    document.getElementById('chat__date').textContent = nowDate;
}

/* функция проверяет состояние чекбокса для показа имени 
(показывает имя, если включена кнопка "да", 
если включено "нет", если включены обе кнопки, если не включена ни одна - заменяет на username)*/
function showName (){
    const checkboxYes = document.getElementById ('checkBoxYes');
    const checkBoxNo = document.getElementById ('checkBoxNo');
    const names = document.getElementById ('user-name-input');
    if (checkboxYes.checked == true && checkBoxNo.checked == false ) {
        changeUserName ();
    }
    else {
        document.getElementById ('chat__user-name').textContent = 'Username';
    }
}


// можно взять данные для проверки

//ХАНОВА элИза ришТоВна
// https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg
//viagra dmndf dhgd xxx shhsdgdt VIAGRA XXX gdgdt
