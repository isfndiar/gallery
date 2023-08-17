const navigation = document.querySelector(".nav");
document.querySelector("#hamburger-button").onclick = () => {
  navigation.classList.toggle("active");
};

const hb = document.querySelector("#hamburger-button");
document.addEventListener("click", function (e) {
  if (!hb.contains(e.target) && !navigation.contains(e.target)) {
    navigation.classList.remove("active");
  }
});
