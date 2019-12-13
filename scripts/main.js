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
    // for (const photo of photos) {
    //     renderPhoto(photo);
    //}

    photos.forEach(function (photo) {
        console.group(photo.id);
        console.info(photo.author.name);
        console.timeEnd();
        renderPhoto(photo);
    }
    );


}



function renderPhoto(photo) {

    const $card = document.createElement('div');
    $card.classList.add('card', 'col-3', 'mx-4');

    const $img = document.createElement('img');
    $img.src = photo.imageUrl;
    const $body = document.createElement('div');
    $body.classList.add('card-body');

    const $title = document.createElement('h5');
    $title.classList.add('card-title');
    $title.textContent = photo.description;

    $card.append($img);
    $card.append($body);
    $body.append($title);

    const $main = document.querySelector('main');
    $main.append($card);
    // console.log(main);
    // console.log(url);
    // console.log(img);
}

function displayThis() {
    const answer = prompt('czy chcesz wyswietlic zdjecia?');
    return (answer.toLowerCase() === 'tak')

}
function isEmpty(photos) {
    return photos.length === 0;
}

// displayImages();

// displayLastElement ();

// renderImage('https://picsum.photos/id/10/300/150');
// renderImage('https://picsum.photos/id/20/300/150');
// renderImage('https://picsum.photos/id/30/300/150');
// displayPhotos(photos);

function main() {


    loader.show();
    // console.log('pokazujemy loader');
    fetchPhotosFromLocal()
    .then(function(images){
        return displayImages.map(function(image){
            images.imageURL = images.url;
            images.description = images.title;
            return image;

        });
    })
        .then(function (photos) {


            if (!isEmpty(photos)) {
                //  console.log('zdjecia istnieja');
                displayPhotos(photos);
            } else {
                // console.log('zdjecia nie istnieja');
                displayMessage('nie ma zdjec');
            }
        })
        .catch(function () {
            displayErrorMessage('problem z pobraniem zdjec');
        })
        .finally(function () {
            loader.hide();
        });

}
main();

// setTimeout(function () {
//     loader.hide();
//     console.log('chowamy loader');
// }, 1500); //1,5s

// const authors = photos.map (function(photos) {
//     return photos.author});
// console.log(authors);




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