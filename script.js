document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('You are logged in!');
});
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
function
openSignup1Page()
{
    window.location.href = "signup1_page.html";
}

function
openProductList()
{
    window.location.href = "productlist.html";
}

function
openHomePage()
{
    window.location.href = "homepage.html";
}

function
openSignup2Page()
{
    window.location.href = "signup2_page.html";
}

document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
});



function
openfarmerDashboard()
{
    window.location.href = "farmer_dashboard.html";
}

