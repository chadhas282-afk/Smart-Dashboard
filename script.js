let inp = document.getElementById("eventInput");
let date = document.getElementById("eventDate");
let cate = document.getElementById("eventCategory");
let des = document.getElementById("description");
let eve = document.getElementById("addEventButton");
let container = document.getElementById("gridcard"); 

eve.addEventListener("click", function() {
    if (inp.value.trim() === "") return;
    
    let card = `<div class="card">
                    <button class="delete-btn">&times;</button>
                    <p class="name">${inp.value}</p>
                    <p class="date">🗓️ ${date.value}</p>
                    <label class="cat">${cate.value}</label>
                    <p class="des">${des.value}</p>
                </div>`;
    
    container.innerHTML += card;

    inp.value = "";
    date.value = "";
    cate.value = "conference";
    des.value = "";
});

container.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }
});
