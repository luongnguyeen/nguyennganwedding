// =============================
// AOS INIT
// =============================
AOS.init({
    duration: 900,
    once: true
});

// =============================
// DOOR OPEN INTRO EFFECT
// =============================
window.addEventListener('load', () => {
    const introOverlay = document.getElementById('intro-overlay');
    const music = document.getElementById('bg-music');

    setTimeout(() => {
        document.body.classList.add('intro-open');

        // Delay to let sliding doors finish
        setTimeout(() => {
            introOverlay.style.display = 'none';
            music.play().catch(() => {
                console.log("Autoplay blocked — user must tap the music icon.");
            });
        }, 1500);

    }, 600);
});

// =============================
// MUSIC CONTROL
// =============================
const musicControl = document.querySelector('.music-control');
const bgMusic = document.getElementById('bg-music');
let playing = false;

musicControl.addEventListener('click', () => {
    playing = !playing;

    if (playing) {
        bgMusic.play();
        musicControl.style.animation = 'spin 4s linear infinite';
        musicControl.innerHTML = '<i class="fas fa-music" style="color:#d32f2f"></i>';
    } else {
        bgMusic.pause();
        musicControl.style.animation = 'none';
        musicControl.innerHTML = '<i class="fas fa-music" style="color:#aaa"></i>';
    }
});

// =============================
// COUNTDOWN TIMER
// =============================
const weddingDate = new Date("November 25, 2025 11:00:00").getTime();
const timerEl = document.getElementById('timer');

setInterval(() => {
    const now = Date.now();
    const distance = weddingDate - now;

    if (distance <= 0) {
        timerEl.innerHTML = "Đã đến ngày vui!";
        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = d.toString().padStart(2, '0');
    document.getElementById('hours').textContent = h.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = s.toString().padStart(2, '0');
}, 1000);

// =============================
// TOGGLE QR GIFT BOX
// =============================
function toggleGift() {
    document.getElementById('qr-codes').classList.toggle('hidden');
}
