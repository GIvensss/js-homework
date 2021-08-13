
const validateCountry = (str) => {
    if(str.length < 4) throw new ValidationError("Name of country MUST be more than 4 symbols");
    if(str[0] !== str[0].toUpperCase()) throw new ValidationError("Name of country must start with an uppercase character");

    let regexp = new RegExp("^[А-Яа-я]+$");
    if(!regexp.test(str)) throw new ValidationError("Name of country must only contain Cyrillic ");
    if(!euroCountries.includes(str)) throw new ValidationError("There no country like this");
}

const euroCountries = [
    "Австрия", "Бельгия", "Болгария", "Великобритания", "Венгрия",
    "Германия", "Греция", "Дания", "Ирландия", "Испания",
    "Италия", "Кипр", "Латвия", "Литва", "Люксембург",
    "Мальта", "Нидерланды", "Польша", "Португалия", "Румыния",
    "Словакия", "Словения", "Финляндия", "Франция", "Хорватия",
    "Чехия", "Швеция", "Эстония"
];


function checkCountry(){
    try {
        let country = document.getElementById("country").value;
        validateCountry(country);
        document.querySelector(".valid").innerText = "Everything is ok";
        showImage("gratz.gif");
    } catch(e) {
        document.querySelector(".invalid").innerText = e.message;
        showImage('nongratz.gif');
    }
}

function showImage(name){
    let content = document.getElementById("image");
    content.innerHTML = "<img src='" + name + "' alt='result'>";
    setTimeout(hideImage, 5000);
}
function hideImage(){
    let content = document.getElementById("image");
    content.innerHTML = '';
}

class ValidationError extends Error{
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

