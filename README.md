# Sistem Product

Sistem produk untuk menampilkan nama dan harga produk serata pencarian berdasarkan nama product

## Persyaratan Sistem

Sebelum memulai, pastikan sistem Anda memiliki:
- Node.js (versi 14.0.0 atau lebih tinggi)
- npm (Node Package Manager)
- Git

## Langkah-langkah Instalasi

1. Clone repositori ini
```bash
git clone https://github.com/abdulfalaq5/intikom-FE
cd intikom-FE
```

2. Install semua dependensi
```bash
npm install
```

3. Salin file konfigurasi
```bash
cp .env.example .env
```

4. Sesuaikan konfigurasi di file `.env` dengan pengaturan lokal Anda

5. Sistem ini menggunakan port API dari repository https://github.com/abdulfalaq5/intikom-BE, silahkan setup sistem APInya terlebih dahulu, default url api http://localhost:9494/products

## Menjalankan Aplikasi

1. Mode Development
```bash
npm start
```
Aplikasi akan berjalan di [http://localhost:9696](http://localhost:9696)

2. Mode Production
```bash
npm run build
```
