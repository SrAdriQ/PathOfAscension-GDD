$(document).ready(function () {

    var language = sessionStorage.getItem('language');

    $('#english').on('click', function () {
        sessionStorage.setItem('language', 'enUS');
        window.location.reload();
    });

    $('#spanish').on('click', function () {
        sessionStorage.setItem('language', 'esES');
        window.location.reload();
    });

    if (language != undefined) {
        setLanguageByLang(language)
    }
    else
    {
        sessionStorage.setItem('language', 'enUS');
        language = sessionStorage.getItem('language');
        setLanguageByLang(language);
    }
});

function setLanguageByLang(lang) {

    var dictionary = '{'
        + '"translations": ['
        +   '{'
        +       '"class": "trl-web-title",'
        +       '"enUS": "Path of Ascension",'
        +       '"esES": "Path of Ascension"'
        +   '},'
        +   '{'
        +       '"class": "trl-menu-1",'
        +       '"enUS": "Home",'
        +       '"esES": "Inicio"'
        +   '},'
        +   '{'
        +       '"class": "trl-menu-2",'
        +       '"enUS": "About me",'
        +       '"esES": "Sobre mi"'
        +   '},'
        +   '{'
        +       '"class": "trl-mechanics",'
        +       '"enUS": "Mechanics",'
        +       '"esES": "Mecanicas"'
        +   '},'
        +   '{'
        +       '"class": "trl-characters",'
        +       '"enUS": "Characters",'
        +       '"esES": "Personajes"'
        +   '},'
        +   '{'
        +       '"class": "trl-controls-camera",'
        +       '"enUS": "Camera & control",'
        +       '"esES": "Camara y controles"'
        +   '}'
        +   '{'
        +       '"class": "trl-return",'
        +       '"enUS": "Return",'
        +       '"esES": "Volver"'
        +   '},'
        +']'
    +'}';

    var data = JSON.parse(dictionary);

    for (var i in data.translations) {
        if (lang === "enUS") {
            $('.' + data.translations[i].class).text(data.translations[i].enUS);
        }
        else {
            $('.' + data.translations[i].class).text(data.translations[i].esES);
        }
    }
}
