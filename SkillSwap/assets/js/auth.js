document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register");
    const loginForm = document.getElementById("login");

    // Toggle between login & register forms
    window.toggleForm = (form) => {
        if (form === "login") {
            loginForm.classList.remove("hidden");
            registerForm.classList.add("hidden");
        } else {
            registerForm.classList.remove("hidden");
            loginForm.classList.add("hidden");
        }
    };

    // Show/Hide Password Toggle
    window.togglePassword = (fieldId) => {
        const field = document.getElementById(fieldId);
        field.type = field.type === "password" ? "text" : "password";
    };

    // Register New User
    window.registerUser = () => {
        const username = document.getElementById("regUsername").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value.trim();

        if (!username || !email || !password) {
            alert("❌ Please fill in all fields.");
            return;
        }

        // Validate Email Format
        if (!validateEmail(email)) {
            alert("❌ Please enter a valid email address.");
            return;
        }

        // Save User Data (Replace with Backend API)
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("✅ Registration successful! Please login.");
        window.location.href ="../html/login.html"
    };

    window.loginUser = () => {
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
    
        if (!email || !password) {
            alert("❌ Please enter both email and password.");
            return;
        }
    
        // Dummy authentication (Replace with Backend API)
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");
    
        if (email === savedEmail && password === savedPassword) {
            alert("✅ Login successful!");
    
            // Redirecting to the dashboard
            window.location.href = "dashboard.html"; // Use relative path
        } else {
            alert("❌ Invalid credentials.");
        }
    };

    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
