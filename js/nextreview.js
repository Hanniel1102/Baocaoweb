// Tạo biến để giữ chỉ số của nhận xét hiện tại
let startIndex = 0;

// Lấy tất cả các phần tử nhận xét
const reviews = document.querySelectorAll('.re1');

// Tổng số nhận xét
const totalReviews = reviews.length;

// Hiển thị 3 nhận xét bắt đầu từ startIndex
function displayReviews(startIndex) {
    // Ẩn tất cả các nhận xét
    reviews.forEach(review => review.style.display = 'none');
    
    // Hiển thị 3 nhận xét
    for (let i = 0; i < 3; i++) {
        const reviewIndex = (startIndex + i) % totalReviews;
        reviews[reviewIndex].style.display = 'block';
    }
}

// Thêm sự kiện click cho nút 'Previous'
document.getElementById('prev').addEventListener('click', () => {
    startIndex = (startIndex - 1 + totalReviews) % totalReviews;
    displayReviews(startIndex);
});

// Thêm sự kiện click cho nút 'Next'
document.getElementById('next').addEventListener('click', () => {
    startIndex = (startIndex + 1) % totalReviews;
    displayReviews(startIndex);
});

// Hiển thị các nhận xét ban đầu
displayReviews(startIndex);
