// функция для проверки времени
function formateDate (){
    let date = new Date (2023, 0, 29, 23, 31, 0, 0); //задали время с которым сравниваем, когда передаю его в параметр - не срабатывает((
    let nowDate = new Date (); // время сейчас

    // условие 1
    if ((+nowDate - +date) < 1000){
        return ('Прямо сейчас');
    } 
    // условие 2
    else if ((+nowDate - +date)< 1000*60){
        let seconds = Math.round((+nowDate - +date)/1000);
        return `${seconds} секунд назад`;
    } 
    // условие 3
    else if ((+nowDate - +date)< 1000*60*60){
        let minutes = Math.round((+nowDate - +date)/1000/60);
        return `${minutes} минут назад`;
    }
    // условие если прошло больше часа, корректирует время в нужный формат
    else {
        let year = date.getFullYear();
        let month = '';
        switch (date.getMonth()) {
            case 0 : 
            month = '01';
            break;
            case 1 : 
            month = '02';
            break;
            case 2 : 
            month = '03';
            break;
            case 3 : 
            month = '04';
            break;
            case 4 : 
            month = '05';
            break;
            case 5 : 
            month = '06';
            break;
            case 6 : 
            month = '07';
            break;
            case 7 : 
            month = '08';
            break;
            case 8 : 
            month = '09';
            break;
            case 9 : 
            month = '10';
            break;
            case 10 : 
            month = '11';
            break;
            case 10 : 
            month = '12';
            break;
        }
        
        let day = date.getDate();
        if (day < 10){
            day = `0${date.getDate()}`
        }
        let hour = date.getHours();
        if (hour < 10){
            hour = `0${date.getHours()}`
        }
        let minute = date.getMinutes();
        if (minute < 10){
            minute = `0${date.getMinutes()}`
        }
        return `${year}.${month}.${day} ${hour}:${minute}`;
    }
}

console.log (formateDate ());