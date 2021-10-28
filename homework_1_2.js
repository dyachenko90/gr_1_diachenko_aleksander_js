const person = {
    first_name: 'Дьяченко',
    last_name: 'Александр', 
    male: 'мужской',
    age: 31,
    residence: 'Украина',
    marriage: true,
};
    person.first_name = 'Иванов', 
    person.last_name = 'Александр', 
    person.male = 'мужской';
    person.age = 34,
    person.residence = 'Украина',
    person.marriage = false;

alert(`Фамилия, имя: ${person.first_name} ${person.last_name}`);
alert(`Пол: ${person.male}`);
alert(`Возраст: ${person.age} года`);
alert(`Гражданство: ${person.residence}`);

if (person.marriage == true) {
    alert('В браке');
} 
else {
    alert('Не в браке');
}

