// معالجة النموذج وعرض النتائج
document.addEventListener('DOMContentLoaded', function() {
    // عناصر النموذج
    const calculatorForm = document.getElementById('rainwater-calculator');
    const cropSelect = document.getElementById('crop');
    const customKcGroup = document.getElementById('custom-kc-group');
    const customKcInput = document.getElementById('custom-kc');
    const resultsSection = document.getElementById('results');
    
    // معالجة اختيار المحصول المخصص
    cropSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            customKcGroup.style.display = 'block';
            customKcInput.required = true;
        } else {
            customKcGroup.style.display = 'none';
            customKcInput.required = false;
        }
    });
    
    // معالجة إرسال النموذج
    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // جمع البيانات من النموذج
        const rainfall = parseFloat(document.getElementById('rainfall').value);
        const slope = parseFloat(document.getElementById('slope').value);
        const cropValue = cropSelect.value;
        const area = parseFloat(document.getElementById('area').value) || 1;
        
        // تحديد قيمة Kc
        let kc;
        if (cropValue === 'custom') {
            kc = parseFloat(customKcInput.value);
        } else {
            kc = parseFloat(cropValue);
        }
        
        // التحقق من صحة البيانات
        if (rainfall < 50 || rainfall > 1200) {
            alert('معدل هطول الأمطار يجب أن يكون بين 50 و 1200 مم/سنة');
            return;
        }
        
        if (slope < 0 || slope > 25) {
            alert('ميل الأرض يجب أن يكون بين 0 و 25%');
            return;
        }
        
        if (kc < 0.1 || kc > 1.5) {
            alert('قيمة Kc يجب أن تكون بين 0.1 و 1.5');
            return;
        }
        
        // حساب النتائج
        const results = calculateRainwaterHarvesting(rainfall, slope, kc, area);
        
        // عرض النتائج
        displayResults(results);
        
        // إظهار قسم النتائج
        resultsSection.style.display = 'block';
        
        // التمرير إلى قسم النتائج
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // زر حفظ النتائج
    document.getElementById('save-results').addEventListener('click', function() {
        saveResults();
    });
    
    // زر طباعة النتائج
    document.getElementById('print-results').addEventListener('click', function() {
        window.print();
    });
});

// دالة حساب تصميم حصاد مياه الأمطار
function calculateRainwaterHarvesting(P, S, Kc, area = 1) {
    // E-1: حساب القطر بناءً على معدل الأمطار
    let D = 14.5 * Math.pow(P, -0.31);
    D = Math.max(2, Math.min(12, D)); // التأكد من أن D بين 2 و 12 متر
    
    // E-2: حساب الارتفاع بناءً على القطر
    let H = 25 + 2.5 * (D - 2);
    H = Math.max(30, Math.min(50, H)); // التأكد من أن H بين 30 و 50 سم
    
    // E-3: حساب مساحة الحوض الزراعي
    const A_cult = (Math.PI / 8) * Math.pow(D, 2);
    
    // E-4: حساب المسافة بين الصفوف
    const L = 0.60 * D;
    
    // E-5: حساب المسافة بين الحفر
    const Y = 1.05 * D;
    
    // E-6: حساب نسبة التجميع إلى الزراعة
    let C_A = 0.45 * Kc * Math.pow(P / 100, -0.44) * Math.exp(0.023 * S);
    C_A = Math.max(1.0, Math.min(4.0, C_A)); // التأكد من أن C:A بين 1.0 و 4.0
    
    // E-7: حساب مساحة منطقة التجميع
    const A_catch = C_A * A_cult;
    
    // E-10: حساب عدد الحفر في الهكتار
    const N_total_per_hectare = 10000 / (L * Y);
    
    // حساب إجمالي عدد الحفر للمساحة المحددة
    const total_pits = Math.round(N_total_per_hectare * area);
    
    return {
        diameter: D.toFixed(2),
        height: H.toFixed(1),
        cultArea: A_cult.toFixed(2),
        rowSpacing: L.toFixed(2),
        pitSpacing: Y.toFixed(2),
        catchArea: A_catch.toFixed(2),
        caRatio: C_A.toFixed(2),
        pitsPerHectare: Math.round(N_total_per_hectare),
        totalPits: total_pits
    };
}

// دالة عرض النتائج
function displayResults(results) {
    document.getElementById('result-diameter').textContent = `${results.diameter} م`;
    document.getElementById('result-height').textContent = `${results.height} سم`;
    document.getElementById('result-cult-area').textContent = `${results.cultArea} م²`;
    document.getElementById('result-row-spacing').textContent = `${results.rowSpacing} م`;
    document.getElementById('result-pit-spacing').textContent = `${results.pitSpacing} م`;
    document.getElementById('result-catch-area').textContent = `${results.catchArea} م²`;
    document.getElementById('result-ca-ratio').textContent = `${results.caRatio}`;
    document.getElementById('result-pits-per-hectare').textContent = `${results.pitsPerHectare}`;
    document.getElementById('result-total-pits').textContent = `${results.totalPits}`;
}

// دالة حفظ النتائج
function saveResults() {
    const results = {
        diameter: document.getElementById('result-diameter').textContent,
        height: document.getElementById('result-height').textContent,
        cultArea: document.getElementById('result-cult-area').textContent,
        rowSpacing: document.getElementById('result-row-spacing').textContent,
        pitSpacing: document.getElementById('result-pit-spacing').textContent,
        catchArea: document.getElementById('result-catch-area').textContent,
        caRatio: document.getElementById('result-ca-ratio').textContent,
        pitsPerHectare: document.getElementById('result-pits-per-hectare').textContent,
        totalPits: document.getElementById('result-total-pits').textContent
    };
    
    // إنشاء نص للنتائج
    const resultsText = `
نتائج تصميم نظام حصاد مياه الأمطار
==================================
قطر الهلال (D): ${results.diameter}
ارتفاع السد (H): ${results.height}
مساحة الحوض الزراعي: ${results.cultArea}
المسافة بين الصفوف (L): ${results.rowSpacing}
المسافة بين الحفر (Y): ${results.pitSpacing}
مساحة منطقة التجميع: ${results.catchArea}
نسبة التجميع إلى الزراعة (C:A): ${results.caRatio}
عدد الحفر في الهكتار: ${results.pitsPerHectare}
إجمالي عدد الحفر: ${results.totalPits}
    `;
    
    // إنشاء ملف للتحميل
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'نتائج_تصميم_حصاد_المياه.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('تم حفظ النتائج بنجاح!');
}