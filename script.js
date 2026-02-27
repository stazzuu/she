const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const mainContent = document.getElementById('main-content');
const successScreen = document.getElementById('success-screen');

function runAway() {
    btnNo.style.position = 'fixed';

    const maxX = window.innerWidth - btnNo.offsetWidth - 20;
    const maxY = window.innerHeight - btnNo.offsetHeight - 20;

    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));

    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';

    btnNo.innerText = "Haha catch me!";
    setTimeout(() => {
        btnNo.innerText = "Nahi";
    }, 800);
}

btnNo.addEventListener('mouseover', runAway);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    runAway();
});

btnYes.addEventListener('click', () => {
    mainContent.style.display = 'none';
    successScreen.style.display = 'flex';
    window.scrollTo(0, 0);
});
