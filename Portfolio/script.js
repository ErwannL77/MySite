const pill = document.getElementById("pill");
const toggle = document.getElementById("pillToggle");

toggle.addEventListener("click", () => {
  const isOpen = pill.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Referme la pilule quand on clique en dehors
document.addEventListener("click", (e) => {
  if (!pill.contains(e.target)) {
    pill.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});