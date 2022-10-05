// Prototiplerle yapıyoruz:

function Translate(word, language) {
    this.apikey = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8"
    this.word = word;
    this.language = language;

    // XHR object

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) { //arrow function uygun değil. bind(this) ile windows objesini bağlıyor
    // Ajax işlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => { //Arrow function ile this translate objesini gösterecek
        if (this.xhr.status === 200) {

            // console.log(JSON.parse().text[0]); 

            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0]; // JSON objemizi elde ettik ondan sonra içindeki text anahtar kelimesini elde ettik ve array in ilk elemanını aldık.


            callback(null, text);
        }
        else {
            callback("Bir hata oluştu. API KEY geçersiz", null)
            // console.log("API KEY geçersiz");
        }
    }

    this.xhr.send();
}

Translate.prototype.changeParameters = function (newWord, newLang) {
    this.word = newWord;
    this.language = newLang;

}