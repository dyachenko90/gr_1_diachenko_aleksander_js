

// Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих дней между двумя заданными датами.

// const MS_SECOND = 1000;
// const MS_MINUTE = MS_SECOND * 60;
// const MS_HOUR = MS_MINUTE * 60;
// const MS_DAY = MS_HOUR * 24;

// function get_count_work_days(date1, date2) {
//     if (date1 instanceof Date && date2 instanceof Date) {
//         let ms_result = date1.valueOf() - date2.valueOf();
//         let result = Math.abs(ms_result / MS_DAY);
//         return result;
//     }
//     return null;
// }
// let a = get_count_work_days(new Date(2021, 6, 1), new Date(2021, 6, 3));
//     if (a > 10 && a < 20) {
//         console.log(`Разница дней между двумя датами составляет ${a} дней`);
//     } else if (a === 1) {
//         console.log(`Разница дней между двумя датами составляет ${a} день`);
//     } else if (a === 2 || a === 3 || a === 4) {
//         console.log(`Разница дней между двумя датами составляет ${a} дня`);
//     } else {
//         console.log(`Разница дней между двумя датами составляет ${a} дней`);
//     }

  
// Напишите функцию get_count_days(date) , которая будет считать количество дней до Нового года от date, 
// если оно задано, иначе посчитать количество дней от текущей даты

// const MS_SECOND = 1000;
// const MS_MINUTE = MS_SECOND * 60;
// const MS_HOUR = MS_MINUTE * 60;
// const MS_DAY = MS_HOUR * 24;

// function get_count_days(date) {
//     if (date instanceof Date) {
//         let now_date = new Date();
//         let ms_result = now_date.valueOf() - date.valueOf();
//         let result = Math.trunc(Math.abs(ms_result / MS_DAY));
//         return result;
//     }
//     return null;
// }
// let a = get_count_days(new Date(2022, 0, 1));
//     if (a > 10 && a < 20) {
//         console.log(`До нового года осталось ${a} дней`);
//     } else if (a === 1) {
//         console.log(`До нового года осталось ${a} день`);
//     } else if (a === 2 || a === 3 || a === 4) {
//         console.log(`До нового года осталось ${a} дня`);
//     } else {
//         console.log(`До нового года осталось ${a} дней`);
//     }

  
// Напишите функцию get_day(date), которая возвращает день недели от заданной даты. 
// Например: get_day(’27-11-1988’) должно вернуть «воскресенье»

