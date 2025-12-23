(function () {
    const nav = document.getElementById("primary-nav");
    const btn = document.querySelector(".nav-toggle");

    if (!nav) return;

    // Default collapsed on mobile
    nav.dataset.open = "false";

    if (!btn) return;

    btn.addEventListener("click", () => {
        const isOpen = nav.dataset.open === "true";
        nav.dataset.open = String(!isOpen);
        btn.setAttribute("aria-expanded", String(!isOpen));
    });
})();
