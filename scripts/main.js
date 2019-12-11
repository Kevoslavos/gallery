



// for (const image of photos) {
//     // console.log("to jest obrazek" + image);
//     // console.log("kc");
// }
// for (let i = 0; i < photos.length; i++) {
//     const image = photos[i];
//     // console.log("to jest obrazek" + image);
//     // console.log("kc");
// }

const isEmpty = (photos.length === 0);
const isEmpty2 = (photos.length == 0);

function displayImages() {
    console.log('liczba obrazkow ' + photos.length);
    console.log('pierwszy element listy' + photos[0]);
    console.log('drugi element listy' + photos[1]);
}

function displayLastElement() {
    console.log('ostatni element listy' + photos[photos.length - 1]);
    console.log(345345 / 2342);
    console.log(345345 * 2342);
    console.log(345345 - 2342);
    console.log(345345 + 2342);
    console.log(345345 ** 2342);
}

function displayPhotos(photos) {
    console.log(photos);
    for (const photo of photos) {
        renderPhoto(photo);
    }


}

function renderPhoto(url) {

    const img = document.createElement('img');
    img.src = url;

    const main = document.querySelector('main');
    main.append(img);
    // console.log(main);
    // console.log(url);
    // console.log(img);

}

// displayImages();

// displayLastElement ();

// renderImage('https://picsum.photos/id/10/300/150');
// renderImage('https://picsum.photos/id/20/300/150');
// renderImage('https://picsum.photos/id/30/300/150');
// displayPhotos(photos);

function displayMessage(message){
    const main=document.querySelector('main');
    // main.textContent = message;
    main.innerHTML = `
    <p class="alert alert-info text-center">
     ${message} 
     </p>
     `;
}

const canDisplayPhotos= prompt('czy chcesz wyswietlic zdjecia?');
    if ( canDisplayPhotos.toLowerCase() === 'tak' ){
        console.log ('zdjecia istnieja');
        displayPhotos(photos);
    }else{
        console.log ('zdjecia nie istnieja');
        displayMessage('nie ma zdjec');
    }


// if (photos.length === 0){
//     console.log('zdjecia nie instnieja');
//     displayMessage('nie ma zdjec');
// } else{
//     console.log('zdjecia istnieja');
//     displayPhotos (photos);
// }
// displayMessage('ciasteczko');