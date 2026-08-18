
// Show a simple alert for demonstrations
function showAlert() {
    alert("Stay indoors we dont want you going out and increasing the temperature, Hottie ;)");
}

// Toggle mobile nav
if (typeof document !== "undefined") {
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
}

// Export function for Jest testing
if (typeof module !== "undefined") {
    module.exports = { showAlert };
}
