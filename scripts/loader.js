const loader = {};

loader.show = function () {

    //stworzenie HTMLImageElementu
    const img = document.createElement('img');
    //dodanie klasy css do elementu drzewa DOM
    img.classList.add('loader');
    //ustawienie atrybuty src
    img.src = 'images/831.svg';
    //pobranie referencji do kontenera, w ktorym loader sie wyswietli
    const $main = document.querySelector('main');
    //dodanie loadera do powyzszego kontenera
    $main.append(img);
};

loader.hide = function () {
    //pobarc referencje do loadera
    const $loader = document.querySelector('.loader');
    //usunac element z DOMa
    $loader.remove();
};

console.log(loader);
