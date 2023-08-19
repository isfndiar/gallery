const navigation = document.querySelector(".nav");
document.querySelector("#hamburger-button").onclick = () => {
  navigation.classList.toggle("active");
};

// close icon
const cb = document.querySelector("#close-bar");

const hb = document.querySelector("#hamburger-button");
document.addEventListener("click", function (e) {
  if (!hb.contains(e.target) && !navigation.contains(e.target)) {
    navigation.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (cb.contains(e.target)) {
    navigation.classList.remove("active");
  }
});

// ketika img di klik
const modalModalan = document.querySelector("#modal-modalan");
const imageButtons = document.querySelectorAll(".img-button");

imageButtons.forEach((btn) => {
  btn.onclick = (e) => {
    modalModalan.style.display = "flex";
    e.prevenDefault();
  };
});

// klick
document.querySelector(".modal .close-icon").onclick = (e) => {
  modalModalan.style.display = "none";
  e.prevenDefault();
};

window.onclick = (e) => {
  if (e.target === modalModalan) {
    modalModalan.style.display = "none";
  }
};
