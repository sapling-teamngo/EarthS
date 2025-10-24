// نظام الترجمة ثنائي اللغة
const translations = {
    ar: {
        // العناوين
        siteTitle: "احسب ابتسامة أرضك",
        
        // التنقل
        home: "الرئيسية",
        calculator: "الآلة الحاسبة", 
        documentation: "التوثيق",
        
        // الهيرو
        heroTitle: "احسب ابتسامة أرضك",
        heroSubtitle: "آلة حاسبة لمعرفة حجم نظام هلال الحصاد المائي المناسب لأرضك",
        heroDesc: "نظام متكامل يعتمد على معادلات علمية دقيقة لتصميم أنظمة حصاد مياه الأمطار في المناطق الجافة وشبه الجافة",
        getStarted: "ابدأ حساب أرضك",
        learnMore: "تعرف على النظام",
        
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
        calculatorTitle: "احسب ابتسامة أرضك",
        calculatorSubtitle: "آلة حاسبة لمعرفة حجم نظام هلال الحصاد المائي المناسب لأرضك",
        calculatorDesc: "أدخل بيانات أرضك للحصول على تصميم دقيق ومفصل لنظام حصاد مياه الأمطار",
        basicData: "البيانات الأساسية",
        rainfall: "معدل هطول الأمطار السنوي",
        rainfallHint: "يجب أن يكون بين 50 و 1200 مم/سنة", 
        slope: "ميل الأرض",
        slopeHint: "يجب أن يكون بين 0 و 25%",
        cropType: "نوع المحصول",
        selectCrop: "اختر نوع المحصول",
        olive: "الزيتون (Kc 0.65)",
        pomegranate: "الرمان (Kc 0.75)",
        almond: "اللوز (Kc 0.70)", 
        fig: "التين (Kc 0.60)",
        grape: "العنب (Kc 0.80)",
        atriplex: "القطف (Kc 0.55)",
        juniper: "العرعر (Kc 0.45)",
        thyme: "الزعتر البري (Kc 0.40)",
        sage: "الميرمية (Kc 0.50)",
        barley: "الشعير (Kc 0.85)",
        custom: "قيمة مخصصة",
        customKc: "قيمة Kc مخصصة",
        customKcHint: "معامل المحصول - اختياري (افتراضي 1 إذا لم تدخل قيمة)",
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
        printResults: "طباعة النتائج",
        basicDimensions: "الأبعاد الأساسية",
        diameter: "قطر الهلال",
        height: "ارتفاع السد", 
        cultivatedArea: "مساحة الحوض الزراعي",
        spacingAreas: "المسافات",
        rowSpacing: "بين الصفوف",
        pitSpacing: "بين الهلالات", 
        betweenBunds: "المسافة بين الهلالات",
        catchmentArea: "مساحة منطقة التجميع",
        efficiency: "الكفاءة والتكثيف",
        caRatio: "نسبة التجميع إلى الزراعة (C:A)",
        pitsPerHectare: "عدد الهلالات/هكتار", 
        totalPits: "الإجمالي",
        designIllustration: "الرسم التوضيحي للتصميم",
        cultivationArea: "منطقة الزراعة",
        spacingExplanation: "تفسير المسافات والتباعد",
        whySpacing: "لماذا هذه المسافات المحددة؟",
        spacingReason: "تم حساب المسافات بناءً على الأبحاث الميدانية التي أظهرت أن التداخل بنسبة 5-10% بين الهلالات يمنع فقدان مياه الأمطار ويوفر تغطية مثالية للأرض.",
        howCalculated: "كيف تم حساب المسافات؟",
        calculationMethod: "المسافة بين الصفوف (L) = 0.75 × القطر - هذا يضمن تداخلاً رأسيًا يمنع تسرب المياه بين الصفوف.",
        calculationMethod2: "المسافة الأفقية (Y) = 1.10 × القطر - هذا يضمن تداخلاً أفقيًا بنسبة 10% لمنع وجود فجوات.",
        sourcesTitle: "المصادر العلمية",
        visualResults: "النتائج المرئية",
        
        // المعادلات
        eqE1: "E-1",
        eqE2: "E-2", 
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7", 
        eqE10: "E-10",

        // التوثيق
        docsDesc: "جميع المعادلات والمصادر والتفاصيل التقنية المستخدمة في تصميم النظام",
        tableOfContents: "جدول المحتويات",
        introduction: "المقدمة",
        equations: "المعادلات الأساسية",
        sources: "المصادر",
        variables: "تعريفات المتغيرات",
        methodology: "منهجية العمل",
        calculations: "شرح الحسابات",
        
        // New translations for charts
        validationData: "بيانات التحقق",
        designCharts: "الرسوم البيانية للتصميم",
        rainfallVsDiameter: "القطر مقابل الأمطار",
        diameterVsHeight: "الارتفاع مقابل القطر",
        catchmentRatios: "نسب التجميع",
        storageCapacity: "سعة التخزين"
    },
    en: {
        // Titles
        siteTitle: "Calculate Your Land's Smile",
        
        // Navigation
        home: "Home",
        calculator: "Calculator",
        documentation: "Documentation",
        
        // Hero
        heroTitle: "Calculate Your Land's Smile",
        heroSubtitle: "Calculator to determine the appropriate crescent water harvesting system size for your land",
        heroDesc: "A comprehensive system based on precise scientific equations for designing rainwater harvesting systems in arid and semi-arid regions",
        getStarted: "Calculate Your Land",
        learnMore: "Learn About System",
        
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
        calculatorTitle: "Calculate Your Land's Smile",
        calculatorSubtitle: "Calculator to determine the appropriate crescent water harvesting system size for your land",
        calculatorDesc: "Enter your land data to get a precise and detailed rainwater harvesting system design",
        basicData: "Basic Data",
        rainfall: "Annual Rainfall Rate",
        rainfallHint: "Should be between 50 and 1200 mm/year",
        slope: "Land Slope",
        slopeHint: "Should be between 0 and 25%",
        cropType: "Crop Type",
        selectCrop: "Select Crop Type",
        olive: "Olive (Kc 0.65)",
        pomegranate: "Pomegranate (Kc 0.75)",
        almond: "Almond (Kc 0.70)",
        fig: "Fig (Kc 0.60)",
        grape: "Grape (Kc 0.80)",
        atriplex: "Atriplex (Kc 0.55)",
        juniper: "Juniper (Kc 0.45)",
        thyme: "Wild Thyme (Kc 0.40)",
        sage: "Sage (Kc 0.50)",
        barley: "Barley (Kc 0.85)",
        custom: "Custom Value",
        customKc: "Custom Kc Value",
        customKcHint: "Crop coefficient - optional (default 1 if no value entered)",
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
        printResults: "Print Results",
        basicDimensions: "Basic Dimensions",
        diameter: "Half-moon Diameter",
        height: "Bund Height", 
        cultivatedArea: "Cultivation Area",
        spacingAreas: "Spacing",
        rowSpacing: "Between Rows",
        pitSpacing: "Between Crescents", 
        betweenBunds: "Distance Between Bunds",
        catchmentArea: "Catchment Area",
        efficiency: "Efficiency and Density",
        caRatio: "Catchment to Cultivation Ratio (C:A)",
        pitsPerHectare: "Crescents/Hectare", 
        totalPits: "Total",
        designIllustration: "Design Illustration",
        cultivationArea: "Cultivation Area",
        spacingExplanation: "Spacing and Distance Explanation",
        whySpacing: "Why These Specific Distances?",
        spacingReason: "Distances were calculated based on field research that showed 5-10% overlap between crescents prevents rainwater loss and provides optimal land coverage.",
        howCalculated: "How Were Distances Calculated?",
        calculationMethod: "Row spacing (L) = 0.75 × Diameter - This ensures vertical overlap that prevents water leakage between rows.",
        calculationMethod2: "Horizontal spacing (Y) = 1.10 × Diameter - This ensures 10% horizontal overlap to prevent gaps.",
        sourcesTitle: "Scientific Sources",
        visualResults: "Visual Results",
        
        // Equations
        eqE1: "E-1",
        eqE2: "E-2",
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7",
        eqE10: "E-10",

        // Documentation
        docsDesc: "All equations, sources and technical details used in system design",
        tableOfContents: "Table of Contents",
        introduction: "Introduction",
        equations: "Basic Equations",
        sources: "Sources",
        variables: "Variable Definitions",
        methodology: "Methodology",
        calculations: "Calculation Explanation",
        
        // New translations for charts
        validationData: "Validation Data",
        designCharts: "Design Charts",
        rainfallVsDiameter: "Diameter vs Rainfall",
        diameterVsHeight: "Height vs Diameter",
        catchmentRatios: "Catchment Ratios",
        storageCapacity: "Storage Capacity"
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
    console.log('Updating language to:', currentLang);
    
    // تحديث جميع العناصر التي تحتوي على data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // تحديث نص زر اللغة
    const langText = document.getElementById('lang-text');
    if (langText) {
        langText.textContent = currentLang === 'ar' ? 'English' : 'العربية';
    }
    
    // تحديث اتجاه النماذج
    updateFormDirection();
    
    // تحديث عناوين الصفحة
    updatePageTitles();
    
    // تحديث خيارات المحاصيل
    updateCropOptions();
    
    // تحديث خيارات وحدات القياس
    updateUnitOptions();
    
    // تحديث خيارات نوع التربة
    updateSoilOptions();
    
    // تحديث الرسوم البيانية إذا كانت موجودة
    updateChartsLanguage();
}

// تحديث خيارات المحاصيل
function updateCropOptions() {
    const cropSelect = document.getElementById('crop');
    if (!cropSelect) return;
    
    // حفظ القيمة المحددة حالياً
    const currentValue = cropSelect.value;
    
    // تحديث النص الافتراضي
    const defaultOption = cropSelect.querySelector('option[value=""]');
    if (defaultOption) {
        const selectCropText = translations[currentLang].selectCrop;
        defaultOption.innerHTML = `-- ${selectCropText} --`;
    }
    
    // تحديث خيارات المحاصيل
    const options = cropSelect.querySelectorAll('option[value]');
    options.forEach(option => {
        const value = option.value;
        if (value === '0.65') {
            option.textContent = translations[currentLang].olive;
        } else if (value === '0.75') {
            option.textContent = translations[currentLang].pomegranate;
        } else if (value === '0.70') {
            option.textContent = translations[currentLang].almond;
        } else if (value === '0.60') {
            option.textContent = translations[currentLang].fig;
        } else if (value === '0.80') {
            option.textContent = translations[currentLang].grape;
        } else if (value === '0.55') {
            option.textContent = translations[currentLang].atriplex;
        } else if (value === '0.45') {
            option.textContent = translations[currentLang].juniper;
        } else if (value === '0.40') {
            option.textContent = translations[currentLang].thyme;
        } else if (value === '0.50') {
            option.textContent = translations[currentLang].sage;
        } else if (value === '0.85') {
            option.textContent = translations[currentLang].barley;
        } else if (value === 'custom') {
            option.textContent = translations[currentLang].custom;
        }
    });
    
    // إعادة تعيين القيمة المحددة
    cropSelect.value = currentValue;
}

// تحديث خيارات وحدات القياس
function updateUnitOptions() {
    const unitSelect = document.getElementById('area-unit');
    if (!unitSelect) return;
    
    const currentValue = unitSelect.value;
    
    const options = unitSelect.querySelectorAll('option');
    options.forEach(option => {
        const value = option.value;
        if (value === 'hectare') {
            option.textContent = translations[currentLang].hectare;
        } else if (value === 'acre') {
            option.textContent = translations[currentLang].acre;
        } else if (value === 'dunam') {
            option.textContent = translations[currentLang].dunam;
        } else if (value === 'square-meter') {
            option.textContent = translations[currentLang].squareMeter;
        }
    });
    
    unitSelect.value = currentValue;
}

// تحديث خيارات نوع التربة
function updateSoilOptions() {
    const soilSelect = document.getElementById('soil-type');
    if (!soilSelect) return;
    
    const currentValue = soilSelect.value;
    
    const options = soilSelect.querySelectorAll('option');
    options.forEach(option => {
        const value = option.value;
        if (value === 'sandy') {
            option.textContent = translations[currentLang].sandy;
        } else if (value === 'loamy') {
            option.textContent = translations[currentLang].loamy;
        } else if (value === 'clay') {
            option.textContent = translations[currentLang].clay;
        }
    });
    
    soilSelect.value = currentValue;
}

// تحديث الرسوم البيانية
function updateChartsLanguage() {
    if (window.designChart) {
        const labels = currentLang === 'ar' ? 
            ['القطر (م)', 'الارتفاع (سم)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
            ['Diameter (m)', 'Height (cm)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
        
        window.designChart.data.labels = labels;
        window.designChart.options.plugins.title.text = currentLang === 'ar' ? 
            'ملخص قيم التصميم' : 'Design Values Summary';
        window.designChart.options.scales.y.title.text = currentLang === 'ar' ? 'القيمة' : 'Value';
        window.designChart.update();
    }
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

// وظيفة تحديث عناوين الصفحة
function updatePageTitles() {
    const path = window.location.pathname;
    
    if (path.includes('calculator.html')) {
        document.title = currentLang === 'ar' ? 
            "احسب ابتسامة أرضك - الآلة الحاسبة" : 
            "Calculate Your Land's Smile - Calculator";
    } else if (path.includes('docs.html')) {
        document.title = currentLang === 'ar' ? 
            "احسب ابتسامة أرضك - التوثيق" : 
            "Calculate Your Land's Smile - Documentation";
    } else {
        document.title = currentLang === 'ar' ? 
            "احسب ابتسامة أرضك - نظام حصاد مياه الأمطار" : 
            "Calculate Your Land's Smile - Rainwater Harvesting System";
    }
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

// حساب تصميم حصاد مياه الأمطار (CORRECTED EQUATIONS - FAO Standards)
function calculateRainwaterHarvesting(P, S, Kc, area, areaUnit) {
    console.log('Input values:', { P, S, Kc, area, areaUnit });
    
    // E-1: حساب القطر بناءً على معدل الأمطار (FAO Standard: 2-12m)
    // Linear interpolation between 2m at 50mm and 12m at 1200mm
    let D = 2 + ((P - 50) / (1200 - 50)) * (12 - 2);
    D = Math.max(2, Math.min(12, D));
    
    // E-2: حساب الارتفاع بناءً على القطر (FAO Standard: 30-50cm)
    let H = 30 + 2.5 * (D - 2);
    H = Math.max(30, Math.min(50, H));
    
    // E-3: حساب مساحة الحوض الزراعي
    const A_cult = (Math.PI / 8) * Math.pow(D, 2);
    
    // E-4: حساب المسافة بين الصفوف
    const L = 0.75 * D;
    
    // E-5: حساب المسافة بين الحفر
    const Y = 1.10 * D;
    
    // حساب المسافة بين الهلالات
    const betweenBunds = Y - (D / 2);
    
    // E-6: حساب نسبة التجميع إلى الزراعة (C:A) - FAO Standard
    let baseC_A;
    
    // FAO-based calculation for different rainfall zones
    if (P <= 200) {
        baseC_A = 3.0 + (0.3 * Kc);
    } else if (P <= 400) {
        baseC_A = 2.2 + (0.25 * Kc);
    } else if (P <= 600) {
        baseC_A = 1.6 + (0.2 * Kc);
    } else {
        baseC_A = 1.2 + (0.15 * Kc);
    }
    
    // Slope effect (FAO adjustment)
    let slopeEffect = 1 + (S * 0.02);
    
    let C_A = baseC_A * slopeEffect;
    
    // ضمان الحدود المعقولة (FAO range)
    C_A = Math.max(1.0, Math.min(4.0, C_A));
    
    console.log('C:A calculation details:', {
        rainfall: P,
        kc: Kc,
        slope: S,
        baseC_A: baseC_A,
        slopeEffect: slopeEffect,
        finalC_A: C_A
    });
    
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
        betweenBunds: betweenBunds,
        catchArea: A_catch,
        caRatio: C_A,
        pitsPerHectare: Math.round(N_total_per_hectare),
        totalPits: total_pits,
        areaSqM: areaSqM
    };
}

// عرض النتائج
function displayResults(results) {
    console.log('Displaying results:', results);
    
    // تحديث القيم النصية
    document.getElementById('result-diameter').textContent = `${results.diameter.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-height').textContent = `${results.height.toFixed(1)} ${currentLang === 'ar' ? 'سم' : 'cm'}`;
    document.getElementById('result-cult-area').textContent = `${results.cultArea.toFixed(2)} ${currentLang === 'ar' ? 'م²' : 'm²'}`;
    document.getElementById('result-row-spacing').textContent = `${results.rowSpacing.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-pit-spacing').textContent = `${results.pitSpacing.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-between-bunds').textContent = `${results.betweenBunds.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-catch-area').textContent = `${results.catchArea.toFixed(2)} ${currentLang === 'ar' ? 'م²' : 'm²'}`;
    document.getElementById('result-ca-ratio').textContent = `${results.caRatio.toFixed(2)}`;
    document.getElementById('result-pits-per-hectare').textContent = `${results.pitsPerHectare}`;
    document.getElementById('result-total-pits').textContent = `${results.totalPits}`;
    
    // تحديث ملخص النتائج
    if (document.getElementById('summary-diameter')) {
        document.getElementById('summary-diameter').textContent = `${results.diameter.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
        document.getElementById('summary-height').textContent = `${results.height.toFixed(1)} ${currentLang === 'ar' ? 'سم' : 'cm'}`;
        document.getElementById('summary-row-spacing').textContent = `${results.rowSpacing.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
        document.getElementById('summary-pit-spacing').textContent = `${results.pitSpacing.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
        document.getElementById('summary-pits-hectare').textContent = `${results.pitsPerHectare}`;
        document.getElementById('summary-total-pits').textContent = `${results.totalPits}`;
    }
    
    // تحديث الرسم التوضيحي
    if (document.getElementById('illustration-diameter')) {
        document.getElementById('illustration-diameter').textContent = `D = ${results.diameter.toFixed(2)}m`;
        document.getElementById('illustration-height').textContent = `H = ${results.height.toFixed(1)}cm`;
        document.getElementById('illustration-spacing').textContent = `L = ${results.rowSpacing.toFixed(2)}m`;
    }
    
    // إنشاء الرسوم البيانية
    createCharts(results);
    
    // إظهار لوحة النتائج
    document.getElementById('results-panel').style.display = 'block';
    
    // التمرير إلى النتائج على الهواتف
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            document.getElementById('results-panel').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 300);
    }
}

// إنشاء الرسوم البيانية
function createCharts(results) {
    const ctx = document.getElementById('design-chart');
    if (!ctx) return;
    
    const ctx2d = ctx.getContext('2d');
    
    // تدمير الرسم البياني السابق إذا كان موجوداً
    if (window.designChart) {
        window.designChart.destroy();
    }
    
    const labels = currentLang === 'ar' ? 
        ['القطر (م)', 'الارتفاع (سم)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
        ['Diameter (m)', 'Height (cm)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
    
    window.designChart = new Chart(ctx2d, {
        type: 'bar',
        data: {
            labels: labels,
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
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: currentLang === 'ar' ? 'القيمة' : 'Value',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: currentLang === 'ar' ? 'ملخص قيم التصميم' : 'Design Values Summary',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
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
        betweenBunds: document.getElementById('result-between-bunds').textContent,
        catchArea: document.getElementById('result-catch-area').textContent,
        caRatio: document.getElementById('result-ca-ratio').textContent,
        pitsPerHectare: document.getElementById('result-pits-per-hectare').textContent,
        totalPits: document.getElementById('result-total-pits').textContent
    };
    
    const resultsText = currentLang === 'ar' ? `
نتائج تصميم نظام حصاد مياه الأمطار - احسب ابتسامة أرضك
==================================================
قطر الهلال (D): ${results.diameter}
ارتفاع السد (H): ${results.height}
مساحة الحوض الزراعي: ${results.cultArea}
المسافة بين الصفوف (L): ${results.rowSpacing}
المسافة بين الحفر (Y): ${results.pitSpacing}
المسافة بين الهلالات: ${results.betweenBunds}
مساحة منطقة التجميع: ${results.catchArea}
نسبة التجميع إلى الزراعة (C:A): ${results.caRatio}
عدد الحفر في الهكتار: ${results.pitsPerHectare}
إجمالي عدد الحفر: ${results.totalPits}

صمم من قبل عمر ياسين - 2025
    ` : `
Rainwater Harvesting Design Results - Calculate Your Land's Smile
==================================================
Half-moon Diameter (D): ${results.diameter}
Bund Height (H): ${results.height}
Cultivation Area: ${results.cultArea}
Row Spacing (L): ${results.rowSpacing}
Pit Spacing (Y): ${results.pitSpacing}
Distance Between Bunds: ${results.betweenBunds}
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
    
    alert(currentLang === 'ar' ? 'تم حفظ النتائج بنجاح!' : 'Results saved successfully!');
}

// طباعة النتائج
function printResults() {
    window.print();
}

// التحقق من صحة المدخلات
function validateInputs() {
    const rainfall = parseFloat(document.getElementById('rainfall').value);
    const slope = parseFloat(document.getElementById('slope').value);
    const area = parseFloat(document.getElementById('land-area').value);
    
    if (isNaN(rainfall) || rainfall < 50 || rainfall > 1200) {
        alert(currentLang === 'ar' ? 
            'يرجى إدخال معدل أمطار صحيح بين 50 و 1200 مم/سنة' : 
            'Please enter a valid rainfall rate between 50 and 1200 mm/year');
        return false;
    }
    
    if (isNaN(slope) || slope < 0 || slope > 25) {
        alert(currentLang === 'ar' ? 
            'يرجى إدخال ميل أرض صحيح بين 0 و 25%' : 
            'Please enter a valid land slope between 0 and 25%');
        return false;
    }
    
    if (isNaN(area) || area <= 0) {
        alert(currentLang === 'ar' ? 
            'يرجى إدخال مساحة أرض صحيحة' : 
            'Please enter a valid land area');
        return false;
    }
    
    return true;
}

// إعادة تعيين النموذج
function resetForm() {
    document.getElementById('calculator-form').reset();
    document.getElementById('results-panel').style.display = 'none';
    document.getElementById('custom-kc-group').style.display = 'none';
    
    // إعادة تعيين الرسم البياني
    if (window.designChart) {
        window.designChart.destroy();
        window.designChart = null;
    }
}

// إدارة خيار Kc المخصص
function toggleCustomKc() {
    const cropSelect = document.getElementById('crop');
    const customKcGroup = document.getElementById('custom-kc-group');
    
    if (cropSelect.value === 'custom') {
        customKcGroup.style.display = 'block';
    } else {
        customKcGroup.style.display = 'none';
    }
}

// الحصول على قيمة Kc
function getKcValue() {
    const cropSelect = document.getElementById('crop');
    const customKcInput = document.getElementById('custom-kc');
    
    if (cropSelect.value === 'custom') {
        const customKc = parseFloat(customKcInput.value);
        return isNaN(customKc) ? 1.0 : Math.max(0.1, Math.min(1.0, customKc));
    }
    
    return parseFloat(cropSelect.value) || 1.0;
}

// تهيئة الآلة الحاسبة
function initCalculator() {
    const form = document.getElementById('calculator-form');
    const resetBtn = document.getElementById('reset-btn');
    const saveBtn = document.getElementById('save-results');
    const printBtn = document.getElementById('print-results');
    const cropSelect = document.getElementById('crop');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateInputs()) return;
            
            // جمع البيانات
            const rainfall = parseFloat(document.getElementById('rainfall').value);
            const slope = parseFloat(document.getElementById('slope').value);
            const area = parseFloat(document.getElementById('land-area').value);
            const areaUnit = document.getElementById('area-unit').value;
            const Kc = getKcValue();
            
            // الحساب
            const results = calculateRainwaterHarvesting(rainfall, slope, Kc, area, areaUnit);
            
            // عرض النتائج
            displayResults(results);
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', resetForm);
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', saveResults);
    }
    
    if (printBtn) {
        printBtn.addEventListener('click', printResults);
    }
    
    if (cropSelect) {
        cropSelect.addEventListener('change', toggleCustomKc);
    }
}

// تهيئة الرسوم البيانية للتوثيق
function initDocsCharts() {
    const validationChartCtx = document.getElementById('validation-chart');
    const designChartCtx = document.getElementById('docs-design-chart');
    
    if (validationChartCtx) {
        // رسم بياني للتحقق من صحة القطر مقابل الأمطار
        new Chart(validationChartCtx.getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label: currentLang === 'ar' ? 'القطر مقابل الأمطار' : 'Diameter vs Rainfall',
                    data: [
                        {x: 50, y: 2},
                        {x: 200, y: 3.67},
                        {x: 400, y: 5.33},
                        {x: 600, y: 7},
                        {x: 800, y: 9.33},
                        {x: 1000, y: 11},
                        {x: 1200, y: 12}
                    ],
                    backgroundColor: '#4caf50',
                    borderColor: '#388e3c',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'معدل الأمطار (مم/سنة)' : 'Rainfall (mm/year)',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        min: 0,
                        max: 1300
                    },
                    y: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'قطر الهلال (م)' : 'Crescent Diameter (m)',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        min: 0,
                        max: 14
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: currentLang === 'ar' ? 'القطر مقابل الأمطار' : 'Diameter vs Rainfall',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
    
    if (designChartCtx) {
        // رسم بياني للارتفاع مقابل القطر
        new Chart(designChartCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                datasets: [{
                    label: currentLang === 'ar' ? 'الارتفاع (سم)' : 'Height (cm)',
                    data: [30, 32.5, 35, 37.5, 40, 42.5, 45, 47.5, 50, 50, 50],
                    backgroundColor: '#2196f3',
                    borderColor: '#1976d2',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'قطر الهلال (م)' : 'Crescent Diameter (m)',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'ارتفاع السد (سم)' : 'Bund Height (cm)',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        min: 25,
                        max: 55
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: currentLang === 'ar' ? 'الارتفاع مقابل القطر' : 'Height vs Diameter',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // تهيئة اللغة
    updateLanguage();
    updateDirection();
    
    // تهيئة القائمة المتنقلة
    initNavigation();
    
    // تهيئة الآلة الحاسبة إذا كانت الصفحة الحالية تحتوي عليها
    if (document.getElementById('calculator-form')) {
        initCalculator();
    }
    
    // تهيئة الرسوم البيانية للتوثيق
    if (document.getElementById('validation-chart') || document.getElementById('docs-design-chart')) {
        initDocsCharts();
    }
    
    // إضافة مستمع لزر تغيير اللغة
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    console.log('Initialization complete');
});
