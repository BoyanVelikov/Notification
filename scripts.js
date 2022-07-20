function notify(message) {
    let z = document.getElementById('notification');
    z.textContent = message;
    z.style.display = 'block';
    setTimeout(() => {
        z.style.display = 'none';
    }, 2000);
}