# Panduan Taman Suropati

Situs panduan berbahasa Indonesia dan Inggris untuk Taman Suropati, Menteng, Jakarta Pusat. Proyek ini adalah panduan non-profit independen—bukan situs resmi pengelola atau pemerintah.

## Stack dan versi terkunci

Proyek memakai **Astro 7.2.2**, **Tailwind CSS 4.3.3**, dan **TypeScript 6.0.2** dengan `pnpm@10.11.1`. Node.js dikunci pada **22.13.0** melalui `engines`. Versi TypeScript berada dalam rentang peer dependency `@astrojs/check` 0.9.10.

| Perintah | Tujuan |
| --- | --- |
| `pnpm install --frozen-lockfile` | Memasang dependensi persis dari lockfile |
| `pnpm check` | Menjalankan `astro check` |
| `pnpm build` | Membuat situs statis di `dist/` |
| `pnpm preview` | Memulai Workers Static Assets secara lokal |
| `pnpm deploy` | Membangun lalu menjalankan `wrangler deploy` |

## Domain dan sitemap

Domain produksi adalah `https://suropatipark.com`, ditetapkan pada `astro.config.mjs`. Canonical, pasangan bahasa dan sitemap berasal dari domain tersebut. Halaman 404 dikecualikan dari sitemap.

## Cloudflare Workers Static Assets

Gunakan `wrangler.jsonc` di akar proyek. Worker `src/worker.ts` menormalkan HTTP/www ke HTTPS domain utama dengan path dan query tetap utuh, lalu meneruskan permintaan ke binding `ASSETS`. Aset berada di `./dist`; halaman hilang mempertahankan status 404 dan header noindex. Build tidak lagi menghasilkan konfigurasi deployment di direktori aset publik. Jangan arahkan perintah deployment ke `dist/wrangler.json`.

## Foto, privasi, dan sumber

Foto taman ada di dalam ZIP di `public/images/`, bukan hotlink dari halaman pihak ketiga. Kredit dan lisensi lengkap berada di [ATTRIBUTION.md](./ATTRIBUTION.md). Google Maps ditampilkan sebagai iframe dan Google Analytics `G-HXM22WWPKP` hanya dimuat setelah pengunjung menyetujui analitik melalui banner cookie.

## Catatan konten

Jam, tarif, ketersediaan fasilitas, kondisi akses, dan rute angkutan dapat berubah. Situs ini sengaja membedakan fakta publik yang relatif stabil dari arahan praktis yang perlu diverifikasi sebelum perjalanan. Catatan penelitian dan URL sumber terdapat di [research.md](./research.md).
