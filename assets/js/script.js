document.addEventListener("DOMContentLoaded", function() {
    // Hiệu ứng dropdown menu
    document.querySelector(".dropdown").addEventListener("click", function(event) {
        event.stopPropagation(); 
        this.querySelector(".dropdown-menu").classList.toggle("show");
    });

    // Ẩn dropdown khi click ra ngoài
    document.addEventListener("click", function() {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.classList.remove("show");
        });
    });

    // Hiển thị danh sách dự án khi bấm vào "Dự Án"
    document.getElementById("showProjects").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("projects").classList.toggle("hidden");
    });
});
