const image1="https://picsum.photos/300/150";
const image2="https://picsum.photos/300/150";
const image3="https://picsum.photos/300/150";

const images= [image1, image2, image3];

//images.push(image1, image2, image3);

for (const image of images){
console.log("to jest obrazek" + image);
console.log("kc");
}

for(let i=0; i<images.length; i++){
    const image = images[i];
    console.log("to jest obrazek" + image);
    console.log("kc");
}