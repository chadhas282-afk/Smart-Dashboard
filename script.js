let inp = document.getElementById("eventInput");
let date = document.getElementById("eventDate");
let cate = document.getElementById("eventCategory");
let des = document.getElementById("description");
let eve = document.getElementById("addEventButton");

let card = `<div class="grid">
                <p class="name">${inp.value}</p>
                <p class="date">🗓️${date.value}</p>
                <label class="cat">${cate.value}</label>
                <p class="des">${des.value}</p>
            </div>`;
