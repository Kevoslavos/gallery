class fullPhoto {
    url = null;
    size = {

        //wlasciwosc -> property

        width: null,
        height: null,
    };

    constructor(url, width, height) {
        this.url = url;
        this.size.width = width;
        this.size.height = height;
    }
    display() {

    }
    //metoda ->method
    close() {

    }

}

const big1 = new fullPhoto(
    'https://picsum.photos/1920/1080', 1920, 1080
   
);
const big2 = new fullPhoto(
    'https://picsum.photos/1280/720', 1280, 720
);

debugger;