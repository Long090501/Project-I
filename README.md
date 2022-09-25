# Hướng dẫn cài đặt dự án Project I

(Yêu cầu bắt buộc trước hết đó là phải cài đặt Node.js trong máy)

Nội dung chính của dự án: Xây dựng game simulation di chuyển trong mê cung có chướng ngại vật

## Các bước cài đặt 1 dự án React cơ bản 

Đã được giới thiệu trong Project II

## Các bước cài đặt dự án Project I

Sau khi đã cài đặt xong dự án React cơ bản như ở bên trên, việc tiếp theo cần làm đó chính là cài đặt dự án Project I sử dụng source code trên Git Hub

Để làm được điều này, chúng ta chỉ cần đưa các thư mục trong thư mục "src" ở trên Git Hub vào thư mục "src" ở trong dự án React cơ bản vừa cài đặt

Tuy nhiên, để các chương trình có thể hoạt động một cách bình thường, chúng ta cần phải tiến hành cài đặt 1 số thư viện khác của React nhằm phục vụ cho xử lý ở các bài tập

### `npm i react-router-dom@latest` (cung cấp xử lý định tuyến các trang web trong dự án với hook useNavigate)

### `npm i @material-ui/core --legacy-peer-deps` (cung cấp xử lý các Popup Dialog)

## Thực thi chương trình

Sau khi đã cài đặt xong dự án Project I cùng các thư viện đi kèm, ta sẽ import component của chương trình vào trong file App.js

Cuối cùng, trong Terminal, chạy lệnh `npm start` và chương trình sẽ tự động được tiến hành thực thi trên trình duyệt 
