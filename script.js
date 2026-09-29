document.addEventListener('DOMContentLoaded', () => {
    // --- 1. التحكم في الكمية (Quantity Stepper) ---
    const btnMinus = document.querySelector('.btn-minus');
    const btnPlus = document.querySelector('.btn-plus');
    const qtyValue = document.querySelector('.qty-value');

    let currentQty = 1;

    btnPlus.addEventListener('click', () => {
        currentQty++;
        qtyValue.textContent = currentQty;
    });

    btnMinus.addEventListener('click', () => {
        if (currentQty > 1) {
            currentQty--;
            qtyValue.textContent = currentQty;
        }
    });

    // --- 2. اختيار لون المنتج ---
    const colorDots = document.querySelectorAll('.color-dot');

    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            colorDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // --- 3. تحديد نوع الشحن وتحديث تفاصيل الوصول ---
    const radioOptions = document.querySelectorAll('.radio-option');
    const deliveryEstimate = document.querySelector('.delivery-estimate strong');

    radioOptions.forEach(option => {
        option.addEventListener('click', () => {
            // إزالة التحديد عن باقي الخيارات
            radioOptions.forEach(o => o.classList.remove('active'));
            
            // تحديد الخيار الحالي
            option.classList.add('active');
            const radioInput = option.querySelector('input[type="radio"]');
            radioInput.checked = true;

            // تحديث نص الوصول المتوقع حسب الخيار
            if (option.textContent.includes('سريع')) {
                deliveryEstimate.textContent = '5–8 أيام';
            } else {
                deliveryEstimate.textContent = '7–12 يومًا';
            }
        });
    });

    // --- 4. زر حساب السعر النهائي وإظهار التنبيه ---
    const btnCalculate = document.querySelector('.btn-primary');
    const successAlert = document.querySelector('.success-alert');

    // إخفاء التنبيه في البداية حتى يتم الضغط على الزر
    if (successAlert) {
        successAlert.style.display = 'none';
    }

    btnCalculate.addEventListener('click', () => {
        // إظهار رسالة النجاح بتأثير سلس
        if (successAlert) {
            successAlert.style.display = 'flex';
            
            // إضافة حركة بسيطة للفت الانتباه
            successAlert.style.animation = 'fadeIn 0.3s ease-in-out';
        }
    });

    // --- 5. زر إضافي: تحديث زر إضافة السلة ---
    const btnAddToCart = document.querySelector('.btn-secondary');
    const cartBadge = document.querySelector('.cart-btn .badge');

    btnAddToCart.addEventListener('click', () => {
        let currentCartCount = parseInt(cartBadge.textContent) || 0;
        cartBadge.textContent = currentCartCount + currentQty;

        // إظهار تنبيه بسيط
        alert(`تمت إضافة ${currentQty} من المنتج إلى السلة بنجاح!`);
    });
});