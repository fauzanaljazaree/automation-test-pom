# 🧪 Automation Test with POM File

> Otomasi pengujian UI untuk **[SauceDemo](https://www.saucedemo.com/)** menggunakan **Selenium-WebDriver 4**, **Mocha**, dan pola **Page Object Model (POM)**.
> POM memisahkan _locator_ & aksi halaman ke dalam kelas tersendiri sehingga test case lebih mudah dibaca dan dipelihara.

---

## 📂 Struktur Repository

```

automation-test-pom/
├── pages/ # Kelas Page Object
│ ├── page_inventory.js
│ └── page_login.js
├── tests/ # Skenario pengujian Mocha
│ └── login-sorting.js
├── package.json # Dependency & npm scripts
└── README.md # (file ini)

```

---

## 🔍 Ringkasan Pengujian

| Skenario              | Deskripsi Singkat                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------- |
| **Login berhasil**    | Memverifikasi pengguna dengan kredensial valid dialihkan ke `/inventory.html`.              |
| **Sort produk Z → A** | Setelah login, memilih opsi _Sort (Z to A)_ lalu memastikan nama produk terurut descending. |

Detail locator elemen berada di:

- `pages/page_login.js` — username, password, tombol **Login**.
- `pages/page_inventory.js` — dropdown sort & nama produk.

Skenario di‐drive oleh **Mocha** dengan _hooks_ `beforeEach/afterEach` untuk _setup_ & _teardown_ WebDriver.

---

## ⚙️ Prasyarat Lingkungan

| Komponen               | Versi disarankan                                                                                                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Node.js**            | ≥ 18 LTS                                                                                                                                                                     |
| **Google Chrome**      | Versi terbaru (Chromium‐based)                                                                                                                                               |
| **Selenium-WebDriver** | 4.17.0 — terpasang otomatis via `npm install`                                                                                                                                |
| **ChromeDriver**       | Tidak perlu unduh manual; Selenium Manager (4.6+) mengelola driver secara otomatis saat runtime.<br>Jika ingin mengunci versi, tambahkan `webdriver.chrome.driver` pada ENV. |

---

## 🚀 Cara Menjalankan Di Lokal

1. **Clone repositori**

   ```bash
   git clone https://github.com/fauzanaljazaree/automation-test-pom.git
   cd automation-test-pom
   ```

2. **Install dependency**

   ```bash
   npm install
   ```

3. **Pastikan Chrome tersedia**
   _Gunakan versi yang kompatibel dengan ChromeDriver bawaan Selenium.
   Di Linux/Mac CI headless, cukup pasang `google-chrome`._

4. **Jalankan semua test**

   ```bash
   npm run test-only
   # default timeout 60 detik per test (dapat diubah di package.json)
   ```

5. **Lihat hasil**

   - Mocha menampilkan ringkasan pass/fail di terminal.
   - Untuk laporan HTML pakai Mochawesome atau reporter lain, tambahkan flag berikut pada script test:

     ```jsonc
     "scripts": {
       "test": "mocha tests --recursive --reporter mochawesome"
     }
     ```

   Laporan akan berada di `./mochawesome-report/mochawesome.html`.

---

## 🛠️ Kustomisasi & Tips

| Kebutuhan           | Cara melakukan                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Headless mode**   | Tambah opsi `--headless=new` pada `ChromeOptions` di awal `beforeEach`.                                                  |
| **Ubah kredensial** | Ganti hard-code `standard_user / secret_sauce` di `tests/login-sorting.js` atau load dari ENV.                           |
| **Parallel test**   | Integrasikan _test runner_ seperti Mocha parallel mode atau _framework_ lain (e.g., Playwright/Cypress) bila diperlukan. |
| **CI/CD**           | Di GitHub Actions misalnya:<br>`yaml\n– uses: actions/setup-node@v4\n– run: npm ci\n– run: npm run test-only`            |

---

## 📄 Lisensi

MIT © 2025 Fauzan Al Jazaree

```

### Ringkasan

* **Isi pengujian**: dua skenario E2E – login sukses dan pengurutan produk Z→A.
* **Struktur repo**: folder `pages/` untuk Page Object, `tests/` untuk test Mocha.
* **Cara jalan di lokal**: `git clone` → `npm install` → `npm run test-only`, Chrome & Node.js harus terpasang.
```
