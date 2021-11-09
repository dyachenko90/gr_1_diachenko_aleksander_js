// Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих дней между двумя заданными датами.

// const MS_SECOND = 1000;
// const MS_MINUTE = MS_SECOND * 60;
// const MS_HOUR = MS_MINUTE * 60;
// const MS_DAY = MS_HOUR * 24;


// function get_count_work_days(date1, date2) {
//     if (date1 instanceof Date && date2 instanceof Date) {
//       let result = 0;

//       let ms_start = date1.getTime();
//       let ms_finish = date2.getTime();

//       for (let i = ms_start; i < ms_finish; i += MS_DAY) {
//         let iterration_date = new Date(i);
//         let index_day_of_week = iterration_date.getDay();
//         if (index_day_of_week >= 1 && index_day_of_week <= 5) {
//           result += 1;
//         }
//     }
//     return result;
//   }
//   return null;
// }
//     let d1 = new Date();
//     let d2 = new Date(2021, 11, 31);
//     let work_day = get_count_work_days(d1, d2);
//     let input_first = work_day%10;
//     let input_second = work_day%100;
//     if (input_second > 10 && input_second < 20) {
//         console.log(`Разница дней между двумя датами составляет ${work_day} дней`);
//     } else if (input_first === 1) {
//         console.log(`Разница дней между двумя датами составляет ${work_day} день`);
//     } else if (input_first === 2 || input_first === 3 || input_first === 4) {
//         console.log(`Разница дней между двумя датами составляет ${work_day} дня`);
//     } else {
//         console.log(`Разница дней между двумя датами составляет ${work_day} дней`);
//     }
  
// Напишите функцию get_count_days(date) , которая будет считать количество дней до Нового года от date, 
// если оно задано, иначе посчитать количество дней от текущей даты

// const MS_SECOND = 1000;
// const MS_MINUTE = MS_SECOND * 60;
// const MS_HOUR = MS_MINUTE * 60;
// const MS_DAY = MS_HOUR * 24;

// function get_count_days(date) {
//     if (date instanceof Date) {
//         let result;
//         let ms_result;

//         if (date === undefined) {
//             ms_result = new Date(2022, 0, 1).getTime() - new Date().getTime();
//             console.log(ms_result);
//             result = Math.trunc(Math.abs(ms_result / MS_DAY));
//             return result;
//         } else {
//             ms_result = new Date(2022, 0, 1).getTime() - date.getTime();
//             result = Math.trunc(Math.abs(ms_result / MS_DAY));
//             return result;
//         }
//     }
//     return null;
// }
// let a = get_count_days(new Date(2021, 0, 1));
//     input_first = a%10;
//     input_second = a%100;
//     if (input_second > 10 && input_second < 20) {
//         console.log(`До Нового года осталось ${a} дней`);
//     } else if (input_first === 1) {
//         console.log(`До Нового года осталось ${a} день`);
//     } else if (input_first === 2 || input_first === 3 || input_first === 4) {
//         console.log(`До Нового года осталось ${a} дня`);
//     } else {
//         console.log(`До Нового года осталось ${a} дней`);
//     }

  
// Напишите функцию get_day(date), которая возвращает день недели от заданной даты. 
// Например: get_day(’27-11-1988’) должно вернуть «воскресенье»

// const MS_SECOND = 1000;
// const MS_MINUTE = MS_SECOND * 60;
// const MS_HOUR = MS_MINUTE * 60;
// const MS_DAY = MS_HOUR * 24;
// const DAYS_OF_WEEK = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

// function get_day(date) {
//     if (date instanceof Date) {
//         if (date.getDay() === 1) {
//             console.log(DAYS_OF_WEEK[0]);
//         } else if (date.getDay() === 2) {
//             console.log(DAYS_OF_WEEK[1]);
//         } else if (date.getDay() === 3) {
//             console.log(DAYS_OF_WEEK[2]);
//         } else if (date.getDay() === 4) {
//             console.log(DAYS_OF_WEEK[3]);
//         } else if (date.getDay() === 5) {
//             console.log(DAYS_OF_WEEK[4]);
//         } else if (date.getDay() === 6) {
//             console.log(DAYS_OF_WEEK[5]);
//         } else {
//             console.log(DAYS_OF_WEEK[6]);
//         }
//         return;
//     }
//     return null;
// }
// let a = get_day(new Date(2022, 0, 1));


