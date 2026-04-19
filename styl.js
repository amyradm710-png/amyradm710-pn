

// وظيفة التمرير السلس لقسم الغرف
function scrollToRooms() {
    document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
}

// إضافة حدث النقر لجميع أزرار الحجز
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const roomName = this.parentElement.querySelector('h3').innerText;
        alert(`تم اختيار ${roomName} بنجاح! الرجاء الذهاب لصفحةإكمال الحجز.`);
    });
});
 

// تأثير ظهور العناصر عند التمرير (Scroll Reveal)
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.room-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// تقييم الفندق
function submitRating(){
    var rating=document.querySelector
    ('input[name="rating"]:checked').value;
    alert('تم ارسال التقييم'+rating+'نجوم');
}
// الدفع
function myfunction() {
    var x=document.getElementById("myselect").value;
    alert("تم اختيار:"+x);
}