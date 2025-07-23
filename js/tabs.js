// for research.html
document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const layout = button.dataset.layout;

        if (layout === "presentation") {
            document.getElementById("layout-presentation").style.display = "block";
            document.getElementById("layout-book").style.display = "none";
        } else if (layout === "book") {
            document.getElementById("layout-presentation").style.display = "none";
            document.getElementById("layout-book").style.display = "block";
        }
    });
});
