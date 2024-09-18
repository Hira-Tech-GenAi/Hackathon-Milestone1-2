"use strict";
const toggle_btn = document.getElementById("toggle_skills");
const it_skills = document.getElementById("skills");
toggle_btn.addEventListener("click", () => {
    if (it_skills.style.display === "none") {
        it_skills.style.display = "block";
    }
    else {
        it_skills.style.display = "none";
    }
});
