// Lấy phần tử menu-non-desktop và menu cần hiển thị/ẩn
const menuButton = document.getElementById('menu-non-desktop');
const menu = document.querySelector('.hide-2');

// Lắng nghe sự kiện nhấn vào menu-non-desktop
menuButton.addEventListener('click', () => {
    // Thêm/xóa lớp 'active' để hiển thị/ẩn menu
    menu.classList.toggle('active');
});

// Đảm bảo menu đóng khi nhấn ra ngoài
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('active');
    }
});


const transportSelect = document.getElementById('transport-type');

transportSelect.addEventListener('focus', () => {
    const defaultOption = transportSelect.querySelector('option[value=""]');
    if (defaultOption) {
        defaultOption.remove(); // Xóa tùy chọn mặc định khi dropdown được mở
    }
});

const bankSelect = document.getElementById('type-bank');

bankSelect.addEventListener('focus', () => {
    const defaultOption = bankSelect.querySelector('option[value=""]');
    if (defaultOption) {
        defaultOption.remove(); // Xóa tùy chọn mặc định khi dropdown được mở
    }
});