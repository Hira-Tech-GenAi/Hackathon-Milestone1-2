const toggle_btn = document.getElementById(
  "toggle_skills"
) as HTMLButtonElement;
const it_skills = document.getElementById("skills") as HTMLElement;

toggle_btn.addEventListener("click", () => {
  if (it_skills.style.display === "none") {
    it_skills.style.display = "block";
  } else {
    it_skills.style.display = "none";
  }
});
