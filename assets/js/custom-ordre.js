// استخراج البيانات من عنوان الصفحة
        var urlParams = new URLSearchParams(window.location.search);
        var productName = urlParams.get('productName');
        var price = urlParams.get('price');
        var description = urlParams.get('description');
        var imageUrl = urlParams.get('imageUrl');

        // عرض البيانات في صفحة الطلب
        document.getElementById("product-name").value = productName;
        document.getElementById('product-price').textContent = price + " دج";
        document.getElementById('product-description').textContent = description;
        document.getElementById('product-image').src = imageUrl;

        const form = document.getElementById('orderForm');
        form.addEventListener('submit', function (event) {
            const quantity = document.getElementById('Quantity');
            const fullName = document.getElementById('fullName');
            const yourNumber = document.getElementById('yourNumber');
            const state = document.getElementById('state');
            

            if (!quantity.value.trim()) {
                event.preventDefault();
                quantity.classList.add('error');
                document.getElementById('error-quantity').style.display = 'block';
            } else {
                quantity.classList.remove('error');
                document.getElementById('error-quantity').style.display = 'none';
            }

            if (!fullName.value.trim()) {
                event.preventDefault();
                fullName.classList.add('error');
                document.getElementById('error-fullname').style.display = 'block';
            } else {
                fullName.classList.remove('error');
                document.getElementById('error-fullname').style.display = 'none';
            }

            if (!yourNumber.value.trim()) {
                event.preventDefault();
                yourNumber.classList.add('error');
                document.getElementById('error-number').style.display = 'block';
            } else {
                yourNumber.classList.remove('error');
                document.getElementById('error-number').style.display = 'none';
            }

            if (state.value === '') {
                event.preventDefault();
                state.classList.add('error');
                document.getElementById('error-state').style.display = 'block';
            } else {
                state.classList.remove('error');
                document.getElementById('error-state').style.display = 'none';
            }

            const phoneNumber = yourNumber.value.trim();
            const validPhoneNumber = /^(05|06|07)\d{8}$/;

            if (!validPhoneNumber.test(phoneNumber)) {
                event.preventDefault();
                yourNumber.classList.add('error');
                document.getElementById('error-number').style.display = 'block';
            } else {
                yourNumber.classList.remove('error');
                document.getElementById('error-number').style.display = 'none';
            }
        });

        var originalPrice = parseFloat(document.getElementById("product-price").innerText);

        function updatePrice() {
            var quantity = document.getElementById("Quantity").value; // الكمية التي أدخلها المستخدم
            var priceElement = document.getElementById("product-price"); // عنصر عرض السعر
            var errorMessage = document.getElementById("error-quantity"); // عنصر الرسالة الخطأ

            // إظهار رسالة الخطأ إذا كانت الكمية فارغة
            if (quantity.trim() === "") {
                errorMessage.style.display = "block";
                priceElement.innerText = originalPrice + " دج"; // إعادة السعر إلى القيمة الأصلية
                return;
            } else {
                errorMessage.style.display = "none";
            }

            // التأكد من أن القيمة المدخلة هي رقم صحيح
            if (!isNaN(quantity) && parseInt(quantity) > 0) {
                // تحديث قيمة السعر بحسب الكمية
                priceElement.innerText = parseInt(quantity) * originalPrice + " دج";
            }
        }

        document.getElementById("Quantity").addEventListener("input", updatePrice);