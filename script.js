// قائمة أسماء وهمية لعمل حركة التشويق
const suspenseNames = [
    '@sara_beauty', '@ahmed_99', '@layla_makeup', '@noura_stars', 
    '@khaled_vip', '@maha_style', '@dania_cosmetics', '@yousef_x',
    '@rana_fashion', '@tariq_88', '@huda_beauty_fan', '@zeina_art'
];

// التعليقات الوهمية للفائز
const fakeComments = [
    'مشاركة! بالتوفيق للجميع', 'أريد الفوز بهذه المجموعة 😍', 
    'تم تنفيذ الشروط كلها', 'شي إن الأفضل دائماً', 'حبيت المنتجات جداً 🔥'
];

function startDraw() {
    const urlInput = document.getElementById('reelUrl').value;
    const btn = document.getElementById('drawBtn');
    const suspenseBox = document.getElementById('suspenseBox');
    const resultDiv = document.getElementById('result');
    
    if (!urlInput || !urlInput.includes('instagram.com/reel/')) {
        alert('الرجاء التأكد من إدخال رابط انستجرام ريلز صحيح.');
        return;
    }

    // تعطيل الزر أثناء السحب
    btn.disabled = true;
    btn.textContent = "جاري السحب...";
    
    // إخفاء النتيجة السابقة وإظهار صندوق التشويق
    resultDiv.style.display = 'none';
    suspenseBox.style.display = 'block';

    let counter = 0;
    // تقليب الأسماء كل 80 جزء من الثانية
    const spinInterval = setInterval(() => {
        const randomName = suspenseNames[Math.floor(Math.random() * suspenseNames.length)];
        suspenseBox.textContent = randomName;
        counter++;
    }, 80);

    // بعد مرور 3 ثواني، نوقف التقليب ونعلن الفائز
    setTimeout(() => {
        clearInterval(spinInterval);
        suspenseBox.style.display = 'none';

        const finalWinner = suspenseNames[Math.floor(Math.random() * suspenseNames.length)];
        const finalComment = fakeComments[Math.floor(Math.random() * fakeComments.length)];
        
        // جلب صورة رمزية (سيتم استبدالها لاحقاً بصورة الحساب الحقيقية)
        const fakeImageUrl = `https://ui-avatars.com/api/?name=${finalWinner.replace('@', '')}&background=222222&color=fff&size=150`;

        // تعبئة البيانات
        document.getElementById('winnerName').textContent = finalWinner;
        document.getElementById('winnerComment').textContent = finalComment;
        document.getElementById('winnerImg').src = fakeImageUrl;
        
        // إظهار النتيجة
        resultDiv.style.display = 'block';
        btn.disabled = false;
        btn.textContent = "سحب فائز آخر";

    }, 3000);
}
