const PERSON = {
    first_name: 'Дьяченко',
    last_name: 'Александр', 
    male: 'мужской',
    age: 31,
    residence: 'Украина',
    marriage: true,
};
    PERSON.first_name = 'Иванов', 
    PERSON.last_name = 'Александр', 
    PERSON.male = 'мужской';
    PERSON.age = 34,
    PERSON.residence = 'Украина',
    PERSON.marriage = false;

    if (PERSON.marriage === true) {
        alert('В браке');
    } 
    else {
        alert('Не в браке');
    }    

alert(`Фамилия, имя: ${PERSON.first_name} ${PERSON.last_name}`);
alert(`Пол: ${PERSON.male}`);
alert(`Возраст: ${PERSON.age} года`);
alert(`Гражданство: ${PERSON.residence}`);


