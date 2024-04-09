import heroImage from './restaurant.jpeg';

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function Landing() {
    var content = document.getElementById("content")
    removeAllChildren(content);
    var heading = document.createElement("h1");
    heading.textContent = "Mojoee's German Delicacies";
    content.appendChild(heading);

    var para = document.createElement("p");
    para.textContent = "Welcome to Mojoee's German Delicacies! We offer a variety of German dishes"
    content.appendChild(para);

    const newImg = new Image();
    newImg.src = heroImage;
    newImg.alt = "Image from Unsplash: Jay Wennington";
    newImg.width = 400;
    content.appendChild(newImg);
}

export default Landing;