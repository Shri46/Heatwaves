// Show a simple alert for demonstrations
function showAlert() {
    alert("Heatwave Alert: Stay Hydrated!");
}

// Toggle mobile nav
document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-nav');
    const year = document.getElementById('year');
    if(year) year.textContent = new Date().getFullYear();

    if(toggle && nav){
        toggle.addEventListener('click', function(){
            const open = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }
});
