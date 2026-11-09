[README.md](https://github.com/user-attachments/files/34574641/README.md)
# StokRumah (PRO-05)

Aplikasi **Stok dan Belanja Kebutuhan Rumah Tangga** berbasis web (HTML, CSS, JavaScript, Bootstrap 5). Dipakai untuk mencatat stok barang rumah/kos, mutasi barang masuk dan keluar, daftar belanja otomatis, dan rekap laporan.

## Isi Folder

```
stokrumah/
├── login.html   # halaman login
├── login.css    # tampilan halaman login
├── login.js     # logika login (cek akun, simpan sesi)
├── index.html   # aplikasi utama (dashboard, data, mutasi, belanja, laporan)
└── README.md
```

## Cara Menjalankan

1. Ekstrak semua file ke satu folder (jangan dipisah).
2. Buka **`login.html`** di browser (Chrome, Edge, atau Firefox).
3. Masuk dengan salah satu akun di bawah.
4. Setelah login, kamu otomatis masuk ke `index.html`.

Butuh koneksi internet saat pertama dibuka, karena Bootstrap, Font Awesome, dan font Inter dimuat dari CDN.

## Akun Uji Coba

| Username   | Password   | Nama            |
|------------|------------|-----------------|
| `pengguna` | `admin123` | Pengguna Rumah  |
| `user`     | `123456`   | Penghuni Kos    |

Untuk menambah atau mengubah akun, edit bagian `DEFAULT_USERS` di `login.js`:

```javascript
const DEFAULT_USERS = [
    { username: 'pengguna', password: 'admin123', nama: 'Pengguna Rumah' },
    { username: 'user', password: '123456', nama: 'Penghuni Kos' }
];
```

Setelah mengubah file, refresh halaman dengan **Ctrl + F5**. Jangan lupa koma di antara dua akun.

## Cara Kerja Login

- Akun dicek dari daftar `DEFAULT_USERS` di `login.js`.
- Jika berhasil, sesi disimpan di browser:
  - tanpa centang **Ingat saya**: hilang saat tab/browser ditutup (`sessionStorage`)
  - dengan centang **Ingat saya**: tetap tersimpan (`localStorage`)
- `index.html` memeriksa sesi di bagian atas. Jika belum login, halaman otomatis diarahkan ke `login.html`.
- Tombol **Keluar** di pojok kanan atas menghapus sesi dan kembali ke halaman login.

## Fitur Aplikasi

- Kategori barang (tambah, ubah, hapus)
- Data barang (tambah, ubah, hapus, pencarian)
- Mutasi stok masuk dan keluar (stok ikut berubah otomatis)
- Daftar belanja otomatis untuk barang yang stoknya sudah di bawah atau sama dengan batas minimum
- Rekap laporan per kategori dan periode tanggal, bisa dicetak
- Data tersimpan di Local Storage browser (tombol "Reset Data Uji Standar" ada di sidebar)

## Catatan

- Login ini **simulasi di sisi browser** untuk keperluan tugas/demo. Password tertulis langsung di `login.js`, jadi belum aman untuk dipakai sungguhan. Untuk penggunaan nyata, pengecekan akun perlu dipindahkan ke server (backend).
- Data stok disimpan per browser. Jika Local Storage dihapus atau browser diganti, data kembali ke data uji awal.
