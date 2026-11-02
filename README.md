# Vibe Color (Lumière Palette) — Haute Colorimétrie MVP

> Nền tảng phân tích sắc diện cá nhân quang phổ AI (Personal Color Analysis) dành riêng cho sắc tố da người Á Đông. Dự án MVP phục vụ môn EXE101 (Experiential Entrepreneurship).

---

## 📁 Cấu Trúc Thư Mục Dự Án (Project Structure)

```text
VcolorMVP/
├── .agents/                      # Cấu hình AI Agent & Skills
│   └── skills/
│       └── frontend-design/      # Skill hướng dẫn thiết kế UI & Design System
├── assets/                       # Tài nguyên tĩnh của dự án
│   ├── images/                   # Hình ảnh sản phẩm, lookbook, chân dung
│   ├── icons/                    # Biểu tượng SVG, logo thương hiệu
│   └── docs/                     # Tài liệu PDF, hồ sơ sắc ký mẫu tải về
├── css/                          # CSS stylesheets
│   └── main.css                  # Custom resets, scrollbar styling
├── js/                           # Mã nguồn JavaScript (Kiến trúc Module)
│   ├── config/
│   │   └── tailwind.config.js    # Cấu hình Design System tokens (M3)
│   ├── modules/
│   │   ├── slider.js             # Bộ thanh trượt so sánh Draping Split-View
│   │   ├── modal.js              # Quản lý Modal & popup video studio
│   │   └── navigation.js         # Quản lý trạng thái Navigation active & scroll
│   └── main.js                   # Điểm khởi chạy (Entry point) khởi tạo các module
├── pages/                        # Các trang chức năng của ứng dụng
│   ├── studio.html               # Trang Studio Phân tích AI & Draping trực tiếp
│   ├── dossier.html              # Trang Hồ sơ Sắc diện cá nhân (Personal Dossier)
│   └── cosmetics.html            # Trang Trợ lý tra cứu & gợi ý mỹ phẩm
├── docs/                         # Tài liệu đặc tả hệ thống
│   └── DESIGN.md                 # Toàn bộ quy chuẩn Design System (Lumière Palette)
├── index.html                    # Trang Landing Page chính (Trang chủ & Khám phá)
├── .gitignore                    # Cấu hình bỏ qua tệp tin Git
└── README.md                     # Hướng dẫn tổng quan dự án
```

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Ngôn ngữ:** HTML5, CSS3, Vanilla JavaScript (ES6+ modular pattern)
- **CSS Framework:** Tailwind CSS (qua CDN `cdn.tailwindcss.com`)
- **Design System:** Material Design 3 (M3) Color Tokens kết hợp phong cách Haute Couture
- **Typography:** Google Fonts (`Playfair Display` + `Plus Jakarta Sans`)
- **Iconography:** Google Material Symbols Outlined

---

## 🚀 Hướng Dẫn Chạy Dự Án

### Cách 1: Sử dụng VS Code Live Server (Khuyên dùng)
1. Cài extension **Live Server** trên VS Code.
2. Click chuột phải vào file `home_page.html` chọn **Open with Live Server** (Port `5500`).

### Cách 2: Chạy qua Python HTTP Server
```bash
python -m http.server 3000
# Mở trình duyệt tại http://localhost:3000
```

### Cách 3: Mở trực tiếp file
- Bạn có thể nhấp đúp trực tiếp vào `home_page.html` để mở trên bất kỳ trình duyệt nào. Mọi script đã được cấu trúc để tương thích hoàn toàn kể cả khi mở qua giao thức `file:///`.

---

## 🎨 Hệ Thuyết Sắc Diện 4 Mùa (The 4 Seasons System)

1. **Spring Warm (Xuân Rạng Rỡ):** Sắc ấm & tươi sáng (San hô, đào mơ, vàng bơ).
2. **Summer Cool (Hạ Thanh Nhã):** Sắc lạnh & êm dịu (Hồng tro, lavender, xanh pastel).
3. **Autumn Warm (Thu Trầm Ấm):** Sắc ấm & sâu lắng (Cam đất cháy, xanh ô liu, nâu hạt dẻ).
4. **Winter Cool (Đông Quyền Lực):** Sắc lạnh & tương phản cao (Đỏ ruby, sapphire, đen tuyền).

