// for research.html
document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const layout = button.dataset.layout;

        // Hide all layout divs
        document.getElementById("layout-presentation").style.display = "none";
        document.getElementById("layout-mars2035").style.display = "none";
        document.getElementById("layout-book").style.display = "none";

        // Show the selected layout
        if (layout === "presentation") {
            document.getElementById("layout-presentation").style.display = "block";
        } else if (layout === "mars2035") {
            document.getElementById("layout-mars2035").style.display = "block";
        } else if (layout === "book") {
            document.getElementById("layout-book").style.display = "block";
        }
    });
});
