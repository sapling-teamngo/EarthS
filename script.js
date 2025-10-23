// نظام الترجمة ثنائي اللغة
const translations = {
    ar: {
        // التنقل
        home: "الرئيسية",
        calculator: "الآلة الحاسبة", 
        documentation: "التوثيق",
        
        // الهيرو
        heroTitle: "تصميم فعال لأنظمة حصاد مياه الأمطار",
        heroDesc: "نظام متكامل يعتمد على معادلات علمية دقيقة لتصميم أنظمة حصاد مياه الأمطار في المناطق الجافة وشبه الجافة",
        getStarted: "ابدأ التصميم",
        learnMore: "تعرف أكثر",
        
        // المميزات
        featuresTitle: "مميزات النظام",
        feature1Title: "معادلات علمية دقيقة",
        feature1Desc: "جميع الحسابات مبنية على أبحاث محكمة ومنشورة في مصادر موثوقة مثل FAO وICARDA",
        feature2Title: "مناسب للأردن والمنطقة", 
        feature2Desc: "مصمم خصيصاً لظروف المناطق الجافة وشبه الجافة في الأردن والشرق الأوسط",
        feature3Title: "وحدات قياس متعددة",
        feature3Desc: "يدعم الهكتار والفدان والدونم والمتر المربع لتلبية احتياجات جميع المستخدمين",
        feature4Title: "رسوم بيانية وتوضيحية",
        feature4Desc: "عرض النتائج برسوم بيانية تفاعلية ورسوم توضيحية للتصميم النهائي",
        
        // كيفية العمل
        howItWorksTitle: "كيف يعمل النظام",
        step1Title: "أدخل البيانات الأساسية",
        step1Desc: "أدخل معدل الأمطار، ميل الأرض، ونوع المحصول",
        step2Title: "اختر وحدة القياس", 
        step2Desc: "اختر وحدة القياس المناسبة (هكتار، فدان، دونم، متر مربع)",
        step3Title: "احصل على التصميم الأمثل",
        step3Desc: "استلم التصميم الكامل مع الرسوم البيانية والتفاصيل",
        
        // الإحصائيات
        stat1: "معادلة علمية",
        stat2: "موقع بحثي", 
        stat3: "نظام تجميع صغير",
        stat4: "مفتوح المصدر",
        
        // الحث على الإجراء
        ctaTitle: "جاهز لبدء التصميم؟",
        ctaDesc: "استخدم أداتنا المتقدمة لتصميم نظام حصاد مياه الأمطار الخاص بك", 
        startDesign: "ابدأ التصميم الآن",
        
        // الفوتر
        footerDesc: "نظام متكامل لتصميم أنظمة حصاد مياه الأمطار",
        links: "روابط سريعة",
        resources: "مصادر", 
        faq: "الأسئلة الشائعة",
        tutorials: "الدروس التعليمية", 
        research: "الأبحاث",
        designedBy: "صمم من قبل عمر ياسين",
        
        // الآلة الحاسبة
        calculatorTitle: "آلة حاسبة لتصميم حصاد مياه الأمطار",
        calculatorDesc: "أدخل البيانات المطلوبة للحصول على تصميم دقيق ومفصل لنظام حصاد مياه الأمطار",
        basicData: "البيانات الأساسية",
        rainfall: "معدل هطول الأمطار السنوي",
        rainfallHint: "يجب أن يكون بين 50 و 1200 مم/سنة", 
        slope: "ميل الأرض",
        slopeHint: "يجب أن يكون بين 0 و 25%",
        cropType: "نوع المحصول",
        selectCrop: "اختر نوع المحصول",
        olive: "الزيتون (مرحلة التأسيس)",
        pomegranate: "الرمان",
        almond: "اللوز", 
        fodder: "القطف / الشجيرات الرعوية",
        juniper: "العرعر (شتلات حرجية)", 
        custom: "قيمة مخصصة",
        customKc: "قيمة Kc مخصصة",
        areaData: "بيانات المساحة", 
        landArea: "مساحة الأرض",
        hectare: "هكتار",
        acre: "فدان",
        dunam: "دونم", 
        squareMeter: "متر مربع",
        soilType: "نوع التربة",
        sandy: "رملية",
        loamy: "طميية", 
        clay: "طينية",
        calculateDesign: "احسب التصميم",
        reset: "إعادة تعيين",
        
        // النتائج
        designResults: "نتائج التصميم",
        saveResults: "حفظ النتائج", 
        printResults: "طباعة",
        basicDimensions: "الأبعاد الأساسية",
        diameter: "قطر الهلال (D)",
        height: "ارتفاع السد (H)", 
        cultivatedArea: "مساحة الحوض الزراعي",
        spacingAreas: "المسافات والمساحات",
        rowSpacing: "المسافة بين الصفوف (L)",
        pitSpacing: "المسافة بين الحفر (Y)", 
        catchmentArea: "مساحة منطقة التجميع",
        efficiency: "الكفاءة والتكثيف",
        caRatio: "نسبة التجميع إلى الزراعة (C:A)",
        pitsPerHectare: "عدد الحفر في الهكتار", 
        totalPits: "إجمالي عدد الحفر",
        designIllustration: "الرسم التوضيحي للتصميم",
        cultivationArea: "منطقة الزراعة",
        
        // المعادلات
        eqE1: "E-1",
        eqE2: "E-2", 
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7", 
        eqE10: "E-10"
    },
    en: {
        // Navigation
        home: "Home",
        calculator: "Calculator",
        documentation: "Documentation",
        
        // Hero
        heroTitle: "Efficient Rainwater Harvesting System Design",
        heroDesc: "A comprehensive system based on precise scientific equations for designing rainwater harvesting systems in arid and semi-arid regions",
        getStarted: "Start Designing",
        learnMore: "Learn More",
        
        // Features
        featuresTitle: "System Features",
        feature1Title: "Accurate Scientific Equations",
        feature1Desc: "All calculations are based on peer-reviewed research published in reliable sources like FAO and ICARDA",
        feature2Title: "Suitable for Jordan and Region",
        feature2Desc: "Specifically designed for arid and semi-arid conditions in Jordan and the Middle East",
        feature3Title: "Multiple Measurement Units",
        feature3Desc: "Supports hectare, acre, dunam, and square meter to meet all users' needs",
        feature4Title: "Charts and Illustrations",
        feature4Desc: "Display results with interactive charts and final design illustrations",
        
        // How it works
        howItWorksTitle: "How the System Works",
        step1Title: "Enter Basic Data",
        step1Desc: "Enter rainfall rate, land slope, and crop type",
        step2Title: "Choose Measurement Unit",
        step2Desc: "Select the appropriate measurement unit (hectare, acre, dunam, square meter)",
        step3Title: "Get Optimal Design",
        step3Desc: "Receive complete design with charts and details",
        
        // Statistics
        stat1: "Scientific Equation",
        stat2: "Research Site",
        stat3: "Micro-catchment System",
        stat4: "Open Source",
        
        // Call to Action
        ctaTitle: "Ready to Start Designing?",
        ctaDesc: "Use our advanced tool to design your rainwater harvesting system",
        startDesign: "Start Designing Now",
        
        // Footer
        footerDesc: "A comprehensive system for designing rainwater harvesting systems",
        links: "Quick Links",
        resources: "Resources",
        faq: "FAQ",
        tutorials: "Tutorials",
        research: "Research",
        designedBy: "Designed by Omar Yaseen",
        
        // Calculator
        calculatorTitle: "Rainwater Harvesting Design Calculator",
        calculatorDesc: "Enter the required data to get a precise and detailed rainwater harvesting system design",
        basicData: "Basic Data",
        rainfall: "Annual Rainfall Rate",
        rainfallHint: "Should be between 50 and 1200 mm/year",
        slope: "Land Slope",
        slopeHint: "Should be between 0 and 25%",
        cropType: "Crop Type",
        selectCrop: "Select Crop Type",
        olive: "Olive (Establishment)",
        pomegranate: "Pomegranate",
        almond: "Almond",
        fodder: "Atriplex / Fodder Shrubs",
        juniper: "Juniper (Forest Seedlings)",
        custom: "Custom Value",
        customKc: "Custom Kc Value",
        areaData: "Area Data",
        landArea: "Land Area",
        hectare: "Hectare",
        acre: "Acre",
        dunam: "Dunam",
        squareMeter: "Square Meter",
        soilType: "Soil Type",
        sandy: "Sandy",
        loamy: "Loamy",
        clay: "Clay",
        calculateDesign: "Calculate Design",
        reset: "Reset",
        
        // Results
        designResults: "Design Results",
        saveResults: "Save Results",
        printResults: "Print",
        basicDimensions: "Basic Dimensions",
        diameter: "Half-moon Diameter (D)",
        height: "Bund Height (H)",
        cultivatedArea: "Cultivation Area",
        spacingAreas: "Spacing and Areas",
        rowSpacing: "Row Spacing (L)",
        pitSpacing: "Pit Spacing (Y)",
        catchmentArea: "Catchment Area",
        efficiency: "Efficiency and Density",
        caRatio: "Catchment to Cultivation Ratio (C:A)",
        pitsPerHectare: "Pits per Hectare",
        totalPits: "Total Pits",
        designIllustration: "Design Illustration",
        cultivationArea: "Cultivation Area",
        
        // Equations
        eqE1: "E-1",
        eqE2: "E-2",
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7",
        eqE10: "E-10"
    }
};

// حالة اللغة الحالية
let currentLang = 'ar';

// وظيفة تغيير اللغة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage();
    updateDirection();
}

// وظيفة تحديث النصوص
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // تحديث نص زر اللغة
    document.getElementById('lang-text').textContent = currentLang === 'ar' ? 'English' : 'العربية';
    
    // تحديث اتجاه النماذج
    updateFormDirection();
}

// وظيفة تحديث اتجاه الصفحة
function updateDirection() {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
}

// وظيفة تحديث اتجاه النماذج
function updateFormDirection() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';
        input.style.textAlign = currentLang === 'ar' ? 'right' : 'left';
    });
}

// تهيئة القائمة المتنقلة
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// تحويل الوحدات
const unitConversions = {
    hectare: 10000,
    acre: 4046.86,
    dunam: 1000,
    'square-meter': 1
};

// حساب تصميم حصاد مياه الأمطار
function calculateRainwaterHarvesting(P, S, Kc, area, areaUnit) {
    // E-1: حساب القطر بناءً على معدل الأمطار
    let D = 14.5 * Math.pow(P, -0.31);
    D = Math.max(2, Math.min(12, D));
    
    // E-2: حساب الارتفاع بناءً على القطر
    let H = 25 + 2.5 * (D - 2);
    H = Math.max(30, Math.min(50, H));
    
    // E-3: حساب مساحة الحوض الزراعي
    const A_cult = (Math.PI / 8) * Math.pow(D, 2);
    
    // E-4: حساب المسافة بين الصفوف
    const L = 0.60 * D;
    
    // E-5: حساب المسافة بين الحفر
    const Y = 1.05 * D;
    
    // E-6: حساب نسبة التجميع إلى الزراعة
    let C_A = 0.45 * Kc * Math.pow(P / 100, -0.44) * Math.exp(0.023 * S);
    C_A = Math.max(1.0, Math.min(4.0, C_A));
    
    // E-7: حساب مساحة منطقة التجميع
    const A_catch = C_A * A_cult;
    
    // E-10: حساب عدد الحفر في الهكتار
    const N_total_per_hectare = 10000 / (L * Y);
    
    // تحويل المساحة إلى متر مربع
    const areaSqM = area * unitConversions[areaUnit];
    
    // حساب إجمالي عدد الحفر للمساحة المحددة
    const total_pits = Math.round((N_total_per_hectare / 10000) * areaSqM);
    
    return {
        diameter: D,
        height: H,
        cultArea: A_cult,
        rowSpacing: L,
        pitSpacing: Y,
        catchArea: A_catch,
        caRatio: C_A,
        pitsPerHectare: Math.round(N_total_per_hectare),
        totalPits: total_pits,
        areaSqM: areaSqM
    };
}

// عرض النتائج
function displayResults(results) {
    // تحديث القيم النصية
    document.getElementById('result-diameter').textContent = `${results.diameter.toFixed(2)} م`;
    document.getElementById('result-height').textContent = `${results.height.toFixed(1)} سم`;
    document.getElementById('result-cult-area').textContent = `${results.cultArea.toFixed(2)} م²`;
    document.getElementById('result-row-spacing').textContent = `${results.rowSpacing.toFixed(2)} م`;
    document.getElementById('result-pit-spacing').textContent = `${results.pitSpacing.toFixed(2)} م`;
    document.getElementById('result-catch-area').textContent = `${results.catchArea.toFixed(2)} م²`;
    document.getElementById('result-ca-ratio').textContent = `${results.caRatio.toFixed(2)}`;
    document.getElementById('result-pits-per-hectare').textContent = `${results.pitsPerHectare}`;
    document.getElementById('result-total-pits').textContent = `${results.totalPits}`;
    
    // تحديث الرسم التوضيحي
    document.getElementById('illustration-diameter').textContent = `D = ${results.diameter.toFixed(2)}m`;
    document.getElementById('illustration-height').textContent = `H = ${results.height.toFixed(1)}cm`;
    
    // إنشاء الرسوم البيانية
    createCharts(results);
    
    // إظهار لوحة النتائج
    document.getElementById('results-panel').style.display = 'block';
}

// إنشاء الرسوم البيانية
function createCharts(results) {
    const ctx = document.getElementById('design-chart').getContext('2d');
    
    // تدمير الرسم البياني السابق إذا كان موجوداً
    if (window.designChart) {
        window.designChart.destroy();
    }
    
    window.designChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: currentLang === 'ar' ? 
                ['القطر (م)', 'الارتفاع (سم)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
                ['Diameter (m)', 'Height (cm)', 'Cultivation Area (m²)', 'Catchment Area (m²)'],
            datasets: [{
                label: currentLang === 'ar' ? 'قيم التصميم' : 'Design Values',
                data: [
                    results.diameter,
                    results.height,
                    results.cultArea,
                    results.catchArea
                ],
                backgroundColor: [
                    '#4caf50',
                    '#2196f3',
                    '#ff9800',
                    '#9c27b0'
                ],
                borderColor: [
                    '#388e3c',
                    '#1976d2',
                    '#f57c00',
                    '#7b1fa2'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: currentLang === 'ar' ? 'ملخص قيم التصميم' : 'Design Values Summary'
                }
            }
        }
    });
}

// حفظ النتائج
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
    
    const resultsText = currentLang === 'ar' ? `
نتائج تصميم نظام حصاد مياه الأمطار - Earth Smiles
==================================================
قطر الهلال (D): ${results.diameter}
ارتفاع السد (H): ${results.height}
مساحة الحوض الزراعي: ${results.cultArea}
المسافة بين الصفوف (L): ${results.rowSpacing}
المسافة بين الحفر (Y): ${results.pitSpacing}
مساحة منطقة التجميع: ${results.catchArea}
نسبة التجميع إلى الزراعة (C:A): ${results.caRatio}
عدد الحفر في الهكتار: ${results.pitsPerHectare}
إجمالي عدد الحفر: ${results.totalPits}

صمم من قبل عمر ياسين - 2025
    ` : `
Rainwater Harvesting Design Results - Earth Smiles
==================================================
Half-moon Diameter (D): ${results.diameter}
Bund Height (H): ${results.height}
Cultivation Area: ${results.cultArea}
Row Spacing (L): ${results.rowSpacing}
Pit Spacing (Y): ${results.pitSpacing}
Catchment Area: ${results.catchArea}
Catchment to Cultivation Ratio (C:A): ${results.caRatio}
Pits per Hectare: ${results.pitsPerHectare}
Total Pits: ${results.totalPits}

Designed by Omar Yaseen - 2025
    `;
    
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentLang === 'ar' ? 'نتائج_تصميم_حصاد_المياه.txt' : 'rainwater_harvesting_results.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// تهيئة الآلة الحاسبة
function initCalculator() {
    const calculatorForm = document.getElementById('rainwater-calculator');
    const cropSelect = document.getElementById('crop');
    const customKcGroup = document.getElementById('custom-kc-group');
    const customKcInput = document.getElementById('custom-kc');
    
    if (calculatorForm) {
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
            const areaUnit = document.getElementById('area-unit').value;
            
            // تحديد قيمة Kc
            let kc;
            if (cropValue === 'custom') {
                kc = parseFloat(customKcInput.value);
            } else {
                kc = parseFloat(cropValue);
            }
            
            // التحقق من صحة البيانات
            if (rainfall < 50 || rainfall > 1200) {
                alert(currentLang === 'ar' ? 
                    'معدل هطول الأمطار يجب أن يكون بين 50 و 1200 مم/سنة' :
                    'Rainfall rate must be between 50 and 1200 mm/year');
                return;
            }
            
            if (slope < 0 || slope > 25) {
                alert(currentLang === 'ar' ?
                    'ميل الأرض يجب أن يكون بين 0 و 25%' :
                    'Land slope must be between 0 and 25%');
                return;
            }
            
            if (kc < 0.1 || kc > 1.5) {
                alert(currentLang === 'ar' ?
                    'قيمة Kc يجب أن تكون بين 0.1 و 1.5' :
                    'Kc value must be between 0.1 and 1.5');
                return;
            }
            
            // حساب النتائج
            const results = calculateRainwaterHarvesting(rainfall, slope, kc, area, areaUnit);
            
            // عرض النتائج
            displayResults(results);
            
            // التمرير إلى قسم النتائج
            document.getElementById('results-panel').scrollIntoView({ behavior: 'smooth' });
        });
        
        // زر حفظ النتائج
        document.getElementById('save-results').addEventListener('click', saveResults);
        
        // زر طباعة النتائج
        document.getElementById('print-results').addEventListener('click', function() {
            window.print();
        });
    }
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة القائمة المتنقلة
    initNavigation();
    
    // تهيئة الآلة الحاسبة
    initCalculator();
    
    // إعداد مستمعي الأحداث
    document.getElementById('language-toggle').addEventListener('click', toggleLanguage);
    
    // تحديث اللغة والاتجاه الأولي
    updateLanguage();
    updateDirection();
    
    // إضافة تأثيرات scroll للتنقل
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--surface-color)';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // إضافة تأثيرات للبطاقات
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة تأثيرات الظهور
    document.querySelectorAll('.feature-card, .step, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
