function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function scrollToHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSkills() {
    document.getElementById('skills-experience').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAwards() {
    document.getElementById('awards-certifications').scrollIntoView({ behavior: 'smooth' });
}


// animasi di logo 'Marvel'
const logo = document.querySelector('.logo h1');
const additionalText = document.querySelector('.additional-text');
const textToType = 'yang membuat ini';
let typingInterval; // Variabel untuk menyimpan interval ketikan
let backspacingInterval; // Variabel untuk menyimpan interval backspace
let isTyping = false; // Untuk mengecek apakah sedang mengetik
let isBackspacing = false; // Untuk mengecek apakah sedang backspace
let typingIndex = 0; // Index untuk pengetikan
let backspacingIndex = textToType.length; // Index untuk backspace

logo.addEventListener('mouseenter', function() {
    if (isBackspacing) {
        clearInterval(backspacingInterval); // Hentikan proses backspace jika ada
    }
    additionalText.innerHTML = ''; // Reset teks saat hover dimulai
    typingIndex = 0;
    isTyping = true;

    function type() {
        if (typingIndex < textToType.length) {
            additionalText.innerHTML += textToType.charAt(typingIndex);
            typingIndex++;
        } else {
            isTyping = false; // Set flag mengetik ke false jika selesai
            clearInterval(typingInterval); // Hentikan interval pengetikan
        }
    }

    typingInterval = setInterval(type, 100); // Mulai interval pengetikan
    additionalText.style.opacity = 1; // Pastikan teks terlihat
});

logo.addEventListener('mouseleave', function() {
    if (isTyping) {
        clearInterval(typingInterval); // Hentikan proses pengetikan jika masih aktif
    }
    isBackspacing = true;

    function backspace() {
        if (backspacingIndex > 0) {
            additionalText.innerHTML = textToType.substring(0, backspacingIndex - 1);
            backspacingIndex--;
        } else {
            isBackspacing = false; // Set flag backspacing ke false jika selesai
            clearInterval(backspacingInterval); // Hentikan interval backspace
            backspacingIndex = textToType.length; // Reset index backspace untuk penggunaan berikutnya
        }
    }

    backspacingInterval = setInterval(backspace, 100); // Mulai interval backspace
});


// animasi pada section home
// Menunggu hingga seluruh konten halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    // Menyimpan elemen dengan class 'profile-photo' ke dalam variabel
    const profilePhoto = document.querySelector('.profile-photo');

    // Membuat observer menggunakan IntersectionObserver untuk memantau elemen
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                profilePhoto.classList.add('in-view');
            }
        });
    });
    observer.observe(profilePhoto);
});

const aboutSection = document.querySelector('.about');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutSection.classList.add('in-view');
        }
    });
});
observer.observe(aboutSection);



// animasi pada section skill-category
document.addEventListener("DOMContentLoaded", function() {
    const skillCategories = document.querySelectorAll('.skill-category');

    const observerOptions = {
        threshold: 0.4 // 40% elemen terlihat di layar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Menambahkan kelas active untuk memicu animasi
                observer.unobserve(entry.target); // Stop observing setelah animasi muncul
            }
        });
    }, observerOptions);

    skillCategories.forEach(skill => {
        observer.observe(skill);
    });
});


// animasi pada gambar section award-certification
document.addEventListener('DOMContentLoaded', function () {
    const awards = document.querySelectorAll('.award');

    const observerOptions = {
        threshold: 0.9, // Sebesar 90% dari elemen terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const images = entry.target.querySelector('.award-images'); // Ambil gambar dari award yang terlihat
                images.classList.add('show'); // Tambahkan class show
                observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi dijalankan
            }
        });
    }, observerOptions);

    awards.forEach(award => {
        observer.observe(award); // Mengamati setiap award
    });
});


// animasi pada form section contact
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector('.contact-form');

    const observerOptions = {
        threshold: 0.4 // 40% elemen terlihat di layar
    };

    // Membuat observer untuk memantau form contact
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactForm.classList.add('in-view'); // Menambahkan class ketika form terlihat
            }
        });
    }, observerOptions);

    observer.observe(contactForm); // Mengamati form contact
});