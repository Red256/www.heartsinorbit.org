// Tab functionality for research.html and blog.html
document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const layout = button.dataset.layout;

        // Check if we're on research page or blog page
        const isResearchPage = document.getElementById("layout-presentation");
        const isBlogPage = document.getElementById("layout-blogs");

        if (isResearchPage) {
            // Hide all layouts first
            document.getElementById("layout-presentation").style.display = "none";
            document.getElementById("layout-book").style.display = "none";
            document.getElementById("layout-mars2035").style.display = "none";

            // Show the selected layout
            if (layout === "presentation") {
                document.getElementById("layout-presentation").style.display = "block";
            } else if (layout === "book") {
                document.getElementById("layout-book").style.display = "block";
            } else if (layout === "mars2035") {
                document.getElementById("layout-mars2035").style.display = "block";
            }
        } else if (isBlogPage) {
            // Hide all layouts first
            document.getElementById("layout-blogs").style.display = "none";
            document.getElementById("layout-designs").style.display = "none";

            // Show the selected layout
            if (layout === "blogs") {
                document.getElementById("layout-blogs").style.display = "block";
            } else if (layout === "designs") {
                document.getElementById("layout-designs").style.display = "block";
            }
        }
    });
});
