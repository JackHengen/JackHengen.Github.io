const sackImages = ImagePaths;

const pageImages =document.getElementById("photos").getElementsByTagName("img");

for(let i=0; i<pageImages.length;i++){
    pageImages[i].src="Resources/SackImages/" +sackImages[Math.floor(Math.random() *sackImages.length)].path;
    console.log(pageImages[i].src);
}