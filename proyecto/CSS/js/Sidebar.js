// app.js
function loadSidebar() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });
}
loadSidebar();