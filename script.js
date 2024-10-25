// Fungsi Login
function login() {
    const name = document.getElementById('loginInput').value;
    if (name.trim() !== '') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'block';
        
        // Tampilkan pesan selamat datang
        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.style.display = 'block';
        setTimeout(() => {
            welcomeMessage.style.display = 'none';
        }, 3000);
    }
}

// Animasi Logo saat Scroll
let lastScroll = 0;
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        logo.classList.add('hidden');
    } else {
        logo.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// Image Slider
const sliderContainer = document.getElementById('sliderContainer');
let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= sliderContainer.children.length) {
        slideIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-advance slides setiap 3 detik
setInterval(nextSlide, 3000);

// Handle unggah file
document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Di sini Anda akan menangani unggah file ke server
        alert('Foto berhasil diunggah! (Demo)');
    }
});