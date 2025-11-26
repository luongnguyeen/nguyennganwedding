// Khởi tạo thư viện Animation
AOS.init({
    duration: 1000,
    once: true
});

// Xử lý TỰ ĐỘNG mở thiệp sau 2.5 giây
window.addEventListener('load', () => {
    const introOverlay = document.getElementById('intro-overlay');
    const music = document.getElementById('bg-music');

    // Đợi 2.5 giây (2500ms) rồi bắt đầu mở cửa
    setTimeout(() => {
        // 1. Thêm class để cửa trượt ra 2 bên
        document.body.classList.add('intro-open');

        // 2. Đợi thêm 1.8 giây cho hiệu ứng mở cửa chạy xong
        // FIX: Tăng thời gian chờ để đảm bảo dải đỏ (lớp overlay) chỉ biến mất sau khi cửa đã mở hoàn toàn
        setTimeout(() => {
            // Ẩn TOÀN BỘ lớp phủ intro (bao gồm dải đỏ)
            introOverlay.style.display = 'none'; 
            
            // 3. Cố gắng phát nhạc 
            music.play().catch((error) => {
                console.log("Trình duyệt chặn tự động phát nhạc. Người dùng cần bấm nút nhạc thủ công.");
            });
        }, 500); // Tăng lên 1800ms (1.8s) để đồng bộ tốt hơn với hiệu ứng CSS

    }, 500);
});

// Xử lý nút bật/tắt nhạc (GIỮ NGUYÊN)
const musicControl = document.querySelector('.music-control');
const music = document.getElementById('bg-music');
let isPlaying = false; 

musicControl.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        musicControl.style.animation = 'none';
        musicControl.innerHTML = '<i class="fas fa-music" style="color: #ccc;"></i>';
    } else {
        music.play();
        musicControl.style.animation = 'spin 4s linear infinite';
        musicControl.innerHTML = '<i class="fas fa-music" style="color: #d32f2f;"></i>';
    }
    isPlaying = !isPlaying;
});

// Đếm ngược thời gian (Thay đổi ngày cưới của bạn ở đây)
const weddingDate = new Date("November 25, 2025 11:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Đã đến ngày vui!";
    }
}, 1000);

// Toggle QR Code
function toggleGift() {
    const qrBox = document.getElementById('qr-codes');
    qrBox.classList.toggle('hidden');
}
