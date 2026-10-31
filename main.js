const konten2 = document.getElementById("konten2");
document.getElementById("Menu").onclick = () => {
    konten2.classList.toggle("active");
};

const klik = document.querySelector("#Menu");
document.addEventListener("click", (event) => {
    if (!konten2.contains(event.target) && !klik.contains(event.target)) {
        konten2.classList.remove("active");
    }
});

const texts = [
    "FRONT END",
    "BACK END",
    "FULL STACK"
];

let speed = 100;

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;


document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.getElementById('about');
  const textElements = document.querySelectorAll('.container-border .kontenIsi h1, .container-border .kontenIsi h2, .container-border .kontenIsi h5');

  aboutSection.addEventListener('click', function() {
    textElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 500); // Delay each element by 500ms
    });
  });
});

const about_klik = document.querySelector("#konten2");
console.log(about_klik);



