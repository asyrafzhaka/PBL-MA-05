// ===== Autentikasi sederhana berbasis Local Storage (untuk keperluan tugas/demo) =====
const USERS_KEY = 'pro05_users';
const SESSION_KEY = 'pro05_session';
const APP_PAGE = 'index.html';

// Akun bawaan. Tambah/ubah di sini bila perlu.
const DEFAULT_USERS = [
    
];

function getUsers() {
    try {
        const saved = JSON.parse(localStorage.getItem(USERS_KEY));
        if (Array.isArray(saved) && saved.length) return saved;
    } catch (e) {}
    localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
    return DEFAULT_USERS;
}

function getSession() {
    try {
        return JSON.parse(sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY));
    } catch (e) { return null; }
}

// Kalau sudah login, langsung ke aplikasi
if (getSession()) location.replace(APP_PAGE);

const form = document.getElementById('loginForm');
const errBox = document.getElementById('errBox');
const errText = document.getElementById('errText');
const btn = document.getElementById('btnLogin');

function showError(msg) {
    errText.textContent = msg;
    errBox.classList.add('show');
}

document.getElementById('togglePass').addEventListener('click', (e) => {
    const input = document.getElementById('password');
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    e.currentTarget.innerHTML = `<i class="fa-solid ${show ? 'fa-eye-slash' : 'fa-eye'}"></i>`;
    e.currentTarget.setAttribute('aria-label', show ? 'Sembunyikan password' : 'Tampilkan password');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errBox.classList.remove('show');

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    if (!username || !password) {
        showError('Username dan password wajib diisi.');
        return;
    }

    const user = getUsers().find(u => u.username === username && u.password === password);
    if (!user) {
        showError('Username atau password salah.');
        document.getElementById('password').select();
        return;
    }

    const session = JSON.stringify({ username: user.username, nama: user.nama, waktu: Date.now() });
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, session);

    btn.disabled = true;
    btn.textContent = 'Memuat...';
    location.href = APP_PAGE;
});
