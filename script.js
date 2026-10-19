/*les pills pour le menu */
const pill = document.getElementById("pill");
const toggle = document.getElementById("pillToggle");

toggle.addEventListener("click", () => {
  const isOpen = pill.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (e) => {
  if (!pill.contains(e.target)) {
    pill.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

/*image qui scroll la */

const root = document.documentElement;

function updateScroll() {
  const max = root.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  root.style.setProperty("--scroll", progress.toFixed(4));
}

window.addEventListener("scroll", updateScroll, { passive: true });
window.addEventListener("resize", updateScroll);
updateScroll();