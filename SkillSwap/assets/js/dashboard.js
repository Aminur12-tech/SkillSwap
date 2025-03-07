document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.querySelector(".logout-btn");

    logoutButton.addEventListener("click", function () {
        alert("Logging out...");
        window.location.href = "signup.html"; // Redirect to login page
    });

    // Simulating dynamic data loading
    setTimeout(() => {
        document.querySelector(".widget:nth-child(1) p").textContent = "5 new matches found!";
        document.querySelector(".widget:nth-child(2) p").textContent = "4 new messages";
        document.querySelector(".widget:nth-child(3) p").textContent = "Upcoming AI workshop tomorrow";
    }, 2000);
});
document.addEventListener("DOMContentLoaded", () => {
    // Get the username from localStorage (set during registration)
    const username = localStorage.getItem("username");

    // Select the user display element
    const userDisplay = document.getElementById("user");

    // Update the username in the dashboard
    if (username) {
        userDisplay.textContent = username;
    } else {
        userDisplay.textContent = "Guest";
    }

});

document.addEventListener("DOMContentLoaded", () => {
    const profileImg = document.getElementById("profile-img");
    const dropdownMenu = document.getElementById("dropdown-menu");

    profileImg.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!profileImg.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    });

    // Logout functionality
    document.getElementById("logout-btn").addEventListener("click", () => {
        alert("Logging out...");
        // Add actual logout logic here (e.g., redirect to login page)
    });
});



