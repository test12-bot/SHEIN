const suspenseNames = [
    '@sara_beauty', '@ahmed_99', '@layla_makeup', '@noura_stars', 
    '@khaled_vip', '@maha_style', '@dania_cosmetics', '@yousef_x',
    '@rana_fashion', '@tariq_88', '@huda_beauty_fan', '@zeina_art'
];

const fakeComments = [
    'مشاركة! بالتوفيق للجميع', 'أريد الفوز بهذه المجموعة 😍', 
    'تم تنفيذ الشروط كلها', 'شي إن الأفضل دائماً', 'حبيت المنتجات جداً 🔥'
];

function startDraw() {
    const urlInput = document.getElementById('urlInput').value;
    const btn = document.getElementById('drawBtn');
    const suspenseBox = document.getElementById('suspenseBox');
    const resultDiv = document.getElementById('result');
    
    // التعديل هنا: التحقق من وجود /p/ أو /reel/ في الرابط
    const isInstagramUrl = urlInput.includes('instagram.com/p/') || urlInput.includes('instagram.com/reel/');

    if (!urlInput || !isInstagramUrl) {
        alert('الرجاء إدخال رابط انستجرام صحيح (منشور أو ريلز).');
        return;
    }

    btn.disabled = true;
    btn.textContent = "جاري اختيار الفائز...";
    
    resultDiv.style.display = 'none';
    suspenseBox.style.display = 'block';

    let counter = 0;
    const spinInterval = setInterval(() => {
        const randomName = suspenseNames[Math.floor(Math.random() * suspenseNames.length)];
        suspenseBox.textContent = randomName;
        counter++;
    }, 80);

    setTimeout(() => {
        clearInterval(spinInterval);
        suspenseBox.style.display = 'none';

        const finalWinner = suspenseNames[Math.floor(Math.random() * suspenseNames.length)];
        const finalComment = fakeComments[Math.floor(Math.random() * fakeComments.length)];
        
        const fakeImageUrl = `https://ui-avatars.com/api/?name=${finalWinner.replace('@', '')}&background=222222&color=fff&size=150`;

        document.getElementById('winnerName').textContent = finalWinner;
        document.getElementById('winnerComment').textContent = finalComment;
        document.getElementById('winnerImg').src = fakeImageUrl;
        
        resultDiv.style.display = 'block';
        btn.disabled = false;
        btn.textContent = "سحب فائز آخر";

    }, 3000);
}
