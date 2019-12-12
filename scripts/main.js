// for (const image of photos) {
//     // console.log("to jest obrazek" + image);
//     // console.log("kc");
// }
// for (let i = 0; i < photos.length; i++) {
//     const image = photos[i];
//     // console.log("to jest obrazek" + image);
//     // console.log("kc");
// }



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

function displayThis() {
    const answer = prompt('czy chcesz wyswietlic zdjecia?');
    return (answer.toLowerCase() === 'tak')

}
function isEmpty() {
    return photos.length === 0;
}

// displayImages();

// displayLastElement ();

// renderImage('https://picsum.photos/id/10/300/150');
// renderImage('https://picsum.photos/id/20/300/150');
// renderImage('https://picsum.photos/id/30/300/150');
// displayPhotos(photos);

function displayMessage(message) {
    const main = document.querySelector('main');
    // main.textContent = message;
    main.innerHTML = `
    <p class="alert alert-info text-center">
     ${message} 
     </p>
     `;
}
loader.show();
console.log('pokazujemy loader');

if (!isEmpty()) {
    console.log('zdjecia istnieja');
    displayPhotos(photos);
} else {
    console.log('zdjecia nie istnieja');
    displayMessage('nie ma zdjec');
}

setTimeout(function (){
    loader.hide();
    console.log('chowamy loader');
}, 1500); //1,5s


// const canDisplayPhotos = prompt('czy chcesz wyswietlic zdjecia?');
// if (canDisplayPhotos.toLowerCase() === 'tak') {
//     console.log('zdjecia istnieja');
//     displayPhotos(photos);
// } else {
//     console.log('zdjecia nie istnieja');
//     displayMessage('nie ma zdjec');
// }
// if (photos.length === 0){
//     console.log('zdjecia nie instnieja');
//     displayMessage('nie ma zdjec');
// } else{
//     console.log('zdjecia istnieja');
//     displayPhotos (photos);
// }
// displayMessage('ciasteczko');