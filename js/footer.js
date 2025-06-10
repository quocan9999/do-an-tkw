document.addEventListener("footerLoaded", function () {
    const emailBtn = document.getElementById("emailBtn");
    const emailInput = document.getElementById("email");

    if (emailBtn && emailInput) {
        emailBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Ngăn form submit mặc định
            const email = emailInput.value.trim();

            // Kiểm tra email có hợp lệ không
            if (email === "") {
                alert("Vui lòng nhập email");
                return;
            }

            // Regex đơn giản để kiểm tra format email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Vui lòng nhập email hợp lệ");
                return;
            }

            // Hiển thị thông báo thành công
            alert("Thành công. Hãy xem khuyến mãi được gửi về email của bạn");

            // Reset form
            emailInput.value = "";
        });
    }
});
