function bookService(service) {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let dateTime = document.getElementById('datetime').value;
    let barber = document.getElementById('barber').value;
    let blowDry = document.getElementById('blowdry').checked ? 'نعم (+20 جنيهاً)' : 'لا';

    if (name && phone && dateTime && barber) {
        let confirmationMessage = `
            تم تأكيد حجزك لخدمة: ${service}
            الاسم: ${name}
            رقم الهاتف: ${phone}
            التاريخ والوقت: ${formatDateTime(dateTime)}
            الحلاق: ${barber}
            خدمة استشوار: ${blowDry}
        `;
        
        alert(confirmationMessage);
        showPaymentOptions();
    } else {
        alert('من فضلك قم بإدخال جميع البيانات المطلوبة.');
    }
}

function formatDateTime(dateTimeString) {
    let dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString('ar-EG');
}

function showPaymentOptions() {
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('payment-options').style.display = 'block';
}

function confirmPayment(paymentMethod) {
    alert(`تم تأكيد الدفع عن طريق ${paymentMethod}`);
}
