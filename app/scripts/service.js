function fetchPhotos(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
            //success
        });


}
function fetchPhotosFromRemote() {
    return fetchPhotos('https://fakes.herokuapp.com/photos')

}
function fetchPhotosFromLocal() {
    return fetchPhotos('data/images.json')


}
module.exports= {
    fetchPhotosFromRemote,
    fetchPhotosFromLocal
};