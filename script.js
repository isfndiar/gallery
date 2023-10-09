function openNav() {
  // container.classList.toggle("active");
  container.style.marginRight = "250px";
}

function closeNav() {
  container.style.marginRight = "0";
}

const hButton = document.querySelector("#hamburger-button");
const navigation = document.querySelector(".nav");
const closeBar = document.querySelector("#close-bar");
const modal = document.querySelector("#modal");
const images = document.querySelectorAll(".img-button");
const imgModal = document.querySelector("#modal-image");
const container = document.querySelector("#container");

hButton.onclick = async () => {
  navigation.classList.toggle("active");
  if (navigation.classList.contains("active")) {
    await openNav();
  } else {
    await closeNav();
  }
};

for (let image of images) {
  image.onclick = () => {
    images.forEach((img) => {
      img.style.opacity = "1";
    });
    console.dir(image);
    modal.style.display = "flex";
    image.style.opacity = "0.5";
  };
}

container.addEventListener("click", function (e) {
  imgModal.src = e.target.src;
});

// close icon
document.addEventListener("click", function (e) {
  if (!hButton.contains(e.target) && !navigation.contains(e.target)) {
    navigation.classList.remove("active");
    closeNav();
  }

  if (closeBar.contains(e.target)) {
    navigation.classList.remove("active");
    closeNav();
  }
});

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
