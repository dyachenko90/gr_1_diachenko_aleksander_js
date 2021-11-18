$(document).ready(function () {
    async function getResponse() {
        let responce = await fetch('https://jsonplaceholder.typicode.com/users')
        let users = await responce.json()
        users = users.splice(0, 10)


        let list = document.querySelector('.users')

        let key;

        for (key in users) {

            list.innerHTML += `            
            <li class = "user">
                <img src="./img/ava.jpg" alt="avatar">
                <div class="inf">${users[key].name}</div>
                <div class="inf">${users[key].email}</div>
                <div class="inf">${users[key].phone}</div>
                <div class="inf">${users[key].website}</div>
                <div class="buttons">
                    <button type="button" class="button1" id="first-button" value=>Alert</button>
                    <button type="button" class="button2" id="second-button">Delete</button>
                </div>    
            </li>`
        };
        $('.button1').on({
            click: function() {
                alert(`Привет)`);
            }
        })
        $('.button2').on({
            click: function() {
                $(this).parent().parent().remove();
            }
        })
    }
    getResponse();
});


