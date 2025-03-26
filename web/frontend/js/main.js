// Form işlemleri için JavaScript kodları

// Giriş formu işlemleri
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }
            
            // API'ye gönder
            // TODO: API entegrasyonu yapılacak
            console.log('Giriş denemesi:', { email, password });
        });
    }

    // Kayıt formu işlemleri
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (!name || !email || !phone || !password || !confirmPassword) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Şifreler eşleşmiyor.');
                return;
            }
            
            if (password.length < 8) {
                alert('Şifre en az 8 karakter olmalıdır.');
                return;
            }
            
            // API'ye gönder
            // TODO: API entegrasyonu yapılacak
            console.log('Kayıt denemesi:', { name, email, phone, password });
        });
    }
});

// Navbar Scroll Efekti
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 