// Add New Recommendation
function addRecommendation() {
    let text = document.getElementById("new-rec").value;
    
    if (text.trim() !== "") {
        let ul = document.getElementById("rec-list");
        let li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
        document.getElementById("new-rec").value = "";
        alert("Your recommendation has been submitted successfully!");
    }
}

// Theme Toggle
function toggleTheme(){
    document.body.classList.toggle("dark");
}

// Scroll Fade Animation
const fadeItems = document.querySelectorAll('.fade');
function checkVisibility() {
    fadeItems.forEach(item => {
        let rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", checkVisibility);
checkVisibility();
