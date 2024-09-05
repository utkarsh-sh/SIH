// Function to toggle the sidebar
function toggleSidebar() {
    var sidebar = document.getElementById("profileSidebar");
    var overlay = document.getElementById("overlay");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Hide the sidebar
        overlay.style.display = "none"; // Hide the overlay
    } else {
        sidebar.style.left = "0px"; // Show the sidebar
        overlay.style.display = "block"; // Show the overlay
    }
}

// Event listener for the profile button
document.getElementById("profileBtn").addEventListener("click", function(e) {
    e.preventDefault();
    toggleSidebar();
});

// Event listener for the overlay to close the sidebar
document.getElementById("overlay").addEventListener("click", function() {
    toggleSidebar();
});

