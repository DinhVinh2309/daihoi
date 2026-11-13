# 🇻🇳 Website Tĩnh Đại Hội Đoàn TNCS Hồ Chí Minh (Phong cách Hand-drawn)

Trang web tĩnh phục vụ **Đại hội Đoàn TNCS Hồ Chí Minh** với phong cách **vẽ tay (Hand-drawn / Scrapbook)** trẻ trung, tươi sáng, mang đậm khí thế thanh niên Việt Nam.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```
d:\Projects\daihoi\
├── index.html                   # Trang chủ: Chào mừng đại hội, Recap ảnh hoạt động, Số liệu, Lưu bút
├── vankien.html                 # Trang văn kiện: Trình chiếu file PDF văn kiện, Tóm tắt & Tải tài liệu
├── README.md                    # Hướng dẫn sử dụng và thay thế nội dung
├── css/
│   └── style.css                # CSS phong cách Hand-drawn, nét vẽ ngẫu hứng, hiệu ứng băng dính & ghim
├── js/
│   └── main.js                  # Hiệu ứng pháo hoa, bộ lọc hoạt động, popup xem ảnh, lưu bút
└── assets/
    ├── docs/
    │   └── vankien-daihoi.pdf   # File PDF văn kiện đại hội mẫu (đã tạo sẵn)
    └── images/
        ├── logo_doan.png        # Logo chính thức Đoàn TNCS Hồ Chí Minh (dùng cho thanh Menu, Favicon & Footer)
        ├── huy-hieu-doan.svg    # Huy hiệu Đoàn TNCS Hồ Chí Minh (vector vẽ tay)
        ├── youth-hero.jpg       # Bức tranh minh họa thanh niên Việt Nam tươi sáng, rõ nét (bản vẽ tay chất lượng cao)
        ├── youth-hero.svg       # Phiên bản vector SVG vẽ tay tương ứng
        ├── qr-code.svg          # Mã QR vẽ tay tra cứu tài liệu & điểm danh
        ├── stamp.svg            # Dấu mộc đỏ Đại hội
        ├── tape.svg             # Băng dính Washi trang trí
        ├── activity-tinh-nguyen.svg  # Ảnh mẫu: Chiến dịch Mùa hè xanh
        ├── activity-sang-tao.svg     # Ảnh mẫu: Tuổi trẻ sáng tạo & Chuyển đổi số
        ├── activity-den-on.svg       # Ảnh mẫu: Đền ơn đáp nghĩa - Về nguồn
        ├── activity-van-nghe.svg     # Ảnh mẫu: Hội diễn văn nghệ 26/3
        ├── activity-the-thao.svg     # Ảnh mẫu: Ngày hội thể thao thanh niên
        └── activity-xay-dung-doan.svg# Ảnh mẫu: Kết nạp đoàn viên mới
```

---

## ✨ Các Tính Năng Nổi Bật

1. **Phong cách Hand-drawn đặc sắc:**
   - Font chữ viết tay tiếng Việt (`Mali`, `Patrick Hand`).
   - Đường viền uốn lượn tự nhiên, hiệu ứng sổ tay, giấy kẻ carô, ghim bấm, băng dính washi và dấu mộc đỏ.
   - Gam màu chuẩn thanh niên: Xanh dương Đoàn (`#0066cc`), đỏ cờ (`#e63946`), vàng tươi (`#ffd100`), xanh lá mạ (`#2a9d8f`).

2. **Trang Chủ (`index.html`):**
   - **Hero Banner:** Tranh vẽ thanh niên Việt Nam trong trang phục áo xanh Đoàn, đeo huy hiệu, mỉm cười rạng rỡ với cờ đỏ sao vàng cùng animation sinh động và tiêu đề chào mừng Đại hội.
   - **5 Giá Trị Tiên Phong:** Khát vọng, Tiên phong, Sáng tạo, Đoàn kết, Bản lĩnh.
   - **Recap Hoạt Động (Scrapbook Wall):** Các tấm ảnh chụp theo phong cách polaroid dán băng dính, phân loại theo danh mục (*Tình nguyện, Sáng tạo số, Tri ân, Văn thể mỹ, Xây dựng Đoàn*). Nhấp vào bất kỳ ảnh nào để mở phóng sự ảnh chi tiết (Modal).
   - **Chương Trình Đại Hội (Timeline):** Tiến trình 5 phiên làm việc chính thức trong ngày Đại hội từ 07:30 đến 11:30.
   - **Số Liệu Nhiệm Kỳ (Infographic):** Các con số nhảy tự động khi cuộn trang.
   - **Bảng Lưu Bút Tương Tác:** Đại biểu tham dự có thể nhập tên và lời chúc để ghim giấy nhớ lên bảng bảng nỉ (dữ liệu lưu tự động).
   - **Mã QR Điểm Danh & Nhận Tài Liệu Số:** Tiện ích quét mã bằng điện thoại (Zalo / VNeID) để mở văn kiện trực tuyến ngay tại chỗ.
   - **Bài Ca Chính Thức Của Đoàn:** Hiển thị lời bài hát "Thanh niên làm theo lời Bác" kèm nút vỗ tay cổ vũ.
   - **Nút "Chúc Mừng!":** Bắn pháo hoa giấy (confetti) rực rỡ chào mừng.

3. **Trang Văn Kiện Đại Hội (`vankien.html`):**
   - Trình chiếu file **PDF văn kiện** trực tiếp trên trang với thanh công cụ tải về, in ấn và mở rộng toàn màn hình.
   - Thẻ tóm tắt nhanh 4 phần trọng tâm: Báo cáo chính trị, Phương hướng nhiệm kỳ, Dự thảo nghị quyết, Đề án nhân sự.
   - Khu vực tải về các tài liệu đại hội riêng biệt.

---

## 🛠️ Hướng Dẫn Thay Thế Nội Dung & Hình Ảnh Thực Tế

### 1. Thay thế file PDF Văn Kiện Đại Hội:
- Chuẩn bị file PDF văn kiện chính thức của chi đoàn bạn.
- Đổi tên file thành `vankien-daihoi.pdf`.
- Chép đè vào thư mục: `assets/docs/vankien-daihoi.pdf`.
- Mở lại trang `vankien.html` là file PDF mới sẽ hiển thị ngay lập tức.

### 2. Thay thế hình ảnh các hoạt động thực tế:
- Bạn có thể chép ảnh chụp thực tế (định dạng `.jpg`, `.png`, hoặc `.webp`) vào thư mục `assets/images/`.
- Mở `index.html`, tìm phần `#recap-grid` và cập nhật thẻ hoạt động tương ứng, ví dụ:
  ```html
  <img src="assets/images/anh-tinh-nguyen-thuc-te.jpg" alt="Mùa hè xanh">
  ```
- Mỗi thẻ hoạt động gồm nhóm lọc `data-category`, nhãn `card-category-badge`, thời gian, địa điểm, tiêu đề, mô tả và các điểm nổi bật.
- `data-category` phải trùng với một giá trị `data-filter` trên thanh phân loại. Các nhóm hiện tại: `sinh-hoat-he`, `tinh-nguyen`, `xay-dung-doan`, `van-hoa-cong-dong`.
- Cửa sổ “Xem chi tiết” lấy thông tin trực tiếp từ thẻ hoạt động, nên chỉ cần cập nhật dữ liệu trong `index.html`; không cần sửa một mảng dữ liệu riêng trong `js/main.js`.

### 3. Đổi tên Chi đoàn và Nhiệm kỳ:
- Mở `index.html` và `vankien.html`, tìm các dòng:
  - `CHI ĐOÀN CƠ SỞ CƠ QUAN / ĐƠN VỊ` -> Đổi thành tên chi đoàn của bạn (ví dụ: *Chi đoàn Trung tâm Công nghệ thông tin*).
  - `NHIỆM KỲ 2024 - 2027` -> Đổi thành số khóa / năm nhiệm kỳ tương ứng.

---

## 🚀 Cách Mở Trang Web

Vì đây là website tĩnh 100% không phụ thuộc máy chủ hay backend:
- Bạn chỉ cần nhấp đúp trực tiếp vào file **`index.html`** hoặc **`vankien.html`** để mở ngay trên bất kỳ trình duyệt nào (Chrome, Edge, Cốc Cốc, Firefox...).
- Hoặc bạn có thể tải toàn bộ thư mục này lên các dịch vụ hosting miễn phí như **GitHub Pages**, **Vercel**, **Netlify**, hoặc máy chủ nội bộ của cơ quan để chia sẻ đường link cho các đại biểu và đoàn viên tham gia đại hội.
