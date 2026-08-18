# Panduan Taman Suropati

Situs satu halaman berbahasa Indonesia untuk Taman Suropati, Menteng, Jakarta Pusat. Proyek ini adalah panduan non-profit independen—bukan situs resmi pengelola atau pemerintah.

## Stack dan versi terkunci

Proyek memakai **Astro 7.2.2**, **Tailwind CSS 4.3.3**, dan **TypeScript 6.0.2** dengan `pnpm@10.11.1`. Node.js dikunci pada **22.13.0** melalui `engines` dan `.node-version`. Versi TypeScript berada dalam rentang peer dependency `@astrojs/check` 0.9.10.

| Perintah | Tujuan |
| --- | --- |
| `pnpm install --frozen-lockfile` | Memasang dependensi persis dari lockfile |
| `pnpm check` | Menjalankan `astro check` |
| `pnpm build` | Membuat situs statis di `dist/` dan konfigurasi Worker turunan |
| `pnpm preview` | Memulai Workers Static Assets secara lokal |
| `pnpm deploy` | Membangun lalu menjalankan `wrangler deploy` |

## Domain dan sitemap

Satu-satunya titik konfigurasi domain adalah konstanta `site` pada `astro.config.mjs`. Biarkan `undefined` selama domain belum ditetapkan. Dalam keadaan itu, build tetap sukses; canonical dan Open Graph URL absolut tidak akan dipancarkan, serta integrasi sitemap tidak dijalankan. Setelah domain tersedia, ganti nilai `site` di file tersebut dengan domain produksi dan jalankan build ulang. `@astrojs/sitemap` akan membuat sitemap otomatis hanya saat `site` tersedia.

## Cloudflare Workers Static Assets

`wrangler.jsonc` di akar proyek menunjuk ke `./dist`. Sesudah build, `scripts/prepare-worker-config.mjs` menghasilkan `dist/wrangler.json` tanpa komentar atau trailing comma dan dengan `assets.directory` bernilai `.`. Konfigurasi turunan ini menjaga path tetap benar jika proses Pages CI mengarah ke file konfigurasi di dalam `dist/`; path tidak akan berubah menjadi `dist/dist`.

## Foto, privasi, dan sumber

Foto taman ada di dalam ZIP di `public/images/`, bukan hotlink dari halaman pihak ketiga. Kredit dan lisensi lengkap berada di [ATTRIBUTION.md](./ATTRIBUTION.md). Google Maps ditampilkan sebagai iframe dan Google Analytics `G-HXM22WWPKP` hanya dimuat setelah pengunjung menyetujui analitik melalui banner cookie.

## Catatan konten

Jam, tarif, ketersediaan fasilitas, kondisi akses, dan rute angkutan dapat berubah. Situs ini sengaja membedakan fakta publik yang relatif stabil dari arahan praktis yang perlu diverifikasi sebelum perjalanan. Catatan penelitian dan URL sumber terdapat di [research.md](./research.md).
