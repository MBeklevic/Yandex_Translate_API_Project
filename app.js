// Prototype, AJAX, Callbaks


eventListeners();





function eventListeners() {
    // Submit event for Form
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    // Cahnge event for Target Language List
    document.getElementById("language").onchange = function () { //Eventlistener alternatifi olarak onchange yapıyoruz. addEvent listener ile Change eklediğimiz zaman bazı browserlar bunu desteklemeyebiliyor.
        // Arayüz işlemleri
        console.log("Change")
        ui.changeUI();
    }
}

const ui = new UI();
const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);

function translateWord(e) {

    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);
    translate.translateWord(function (err, response) {
        if (err) {
            // Hata
            // console.log(err);
            ui.displayTranslate(err);
        } else {
            // console.log(response);
            ui.displayTranslate(response);
        }
    });

    e.preventDefault();
}