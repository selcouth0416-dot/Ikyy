# Linden — Deutsch A1–A2

Aplikasi web statis untuk belajar bahasa Jerman tingkat **A1–A2** (cakupan Goethe):

- kamus **210+ verba** dengan Präsens, Präteritum, Partizip, dan contoh kalimat
- pencarian verba yang belum ada di daftar (pola regular + tautan Wiktionary/Reverso)
- 18 bab tata bahasa
- latihan interaktif: grammar drill, kuis kosakata, konjugasi `du`
- audio pelafalan lewat suara Jerman di peramban (bukan suara robot buatan aplikasi)

Tidak butuh server. Cukup buka `index.html` atau unggah ke **GitHub Pages**.

## Cara memakai aplikasi

1. Buka **Beranda**, lalu pilih menu.
2. **Verben**
   - Ketik verba di kotak atas, tekan **Buka**.
   - Putar tombol ♪ untuk mendengar infinitif atau contoh kalimat.
   - Saring A1 / A2 / modal / terpisah / tidak regular.
3. **Tata bahasa** — baca satu bab per hari. Urutan yang disarankan:
   artikel → Präsens → sein/haben → modal → urutan kata → kasus → verba terpisah → Perfekt → weil/dass.
4. **Latihan / Kuis** — 10 soal per sesi. Ulangi sampai skor stabil 9/10.
5. Ritme 10 menit: 1 verba + 1 bab + 1 kuis.

### Audio

Aplikasi memakai **Web Speech API** dengan bahasa `de-DE`. Kualitas tergantung suara yang terpasang di perangkat:

- Windows: Microsoft Hedda / Katja
- macOS / iOS: Anna atau suara Deutsch lain di Pengaturan → Aksesibilitas → Konten lisan
- Android / Chrome: Google Deutsch

Kalau suaranya masih datar, pasang paket bahasa Jerman di sistem, lalu refresh halaman.

## Unggah ke GitHub (langkah demi langkah)

### A. Pertama kali

1. Buat akun di [github.com](https://github.com) jika belum ada.
2. Klik **New repository**.
3. Nama repo, misalnya `linden-deutsch`.
4. Biarkan **Public**. Jangan centang “Add a README” (folder ini sudah punya README).
5. Klik **Create repository**.

### B. Unggah file

**Cara paling mudah (tanpa Git):**

1. Di halaman repo kosong, klik **uploading an existing file**.
2. Seret seluruh isi folder ini:
   - `index.html`
   - `README.md`
   - `.nojekyll`
   - folder `css/`
   - folder `js/`
3. Commit.

**Cara dengan Git (di komputer):**

```bash
cd linden-deutsch
git init
git add .
git commit -m "Linden Deutsch A1-A2"
git branch -M main
git remote add origin https://github.com/USERNAME/linden-deutsch.git
git push -u origin main
```

Ganti `USERNAME` dengan nama akun GitHub Anda.

### C. Nyalakan GitHub Pages

1. Repo → **Settings** → **Pages**.
2. Source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`.
4. Save.
5. Tunggu 1–2 menit. URL biasanya:

`https://USERNAME.github.io/linden-deutsch/`

### D. Edit nanti

Ubah file di GitHub (ikon pensil) atau push commit baru. Pages akan memperbarui sendiri.

## Struktur

```
linden-deutsch/
├── index.html
├── css/style.css
├── js/app.js
├── js/verbs.js
├── js/grammar.js
└── README.md
```

## Catatan

Materi mengikuti tema dan struktur Goethe-Zertifikat A1/A2, bukan salinan resmi naskah ujian. Daftar verba mencakup verba inti A1–A2 plus verba sehari-hari yang sering muncul di Start Deutsch. Untuk verba di luar daftar, gunakan kotak pencarian.
