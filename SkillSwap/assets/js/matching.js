document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const userCards = document.querySelectorAll(".user-card");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();

        userCards.forEach((card) => {
            const offers = card.querySelector("p:first-of-type").textContent.toLowerCase();
            const wants = card.querySelector("p:last-of-type").textContent.toLowerCase();

            if (offers.includes(query)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});
