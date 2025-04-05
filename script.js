var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    // Remove active classes from all tabs
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Activate the selected tab and content
    document.querySelector(`.tab-links[onclick="opentab('${tabname}')"]`).classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const images = [
    './image/WhatsApp Image 2025-03-15 at 9.35.31 PM.jpeg',
    '././image/trst.jpeg',
    './image/another-image2.jpeg'
];

let currentIndex = 0;
const imageElement = document.getElementById('dynamicImage');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

setInterval(changeImage, 5000);  // Change image every 5 seconds

