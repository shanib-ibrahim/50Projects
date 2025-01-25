const darkModeBtn = document.getElementById("drk-mode-btn");

darkModeBtn.addEventListener("click", () => {
  document.body.style.background = "#111111";
  darkModeBtn.style.background = "#fff";
  darkModeBtn.style.color = "#111111";
});
