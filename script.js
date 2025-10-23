// نظام الترجمة ثنائي اللغة
const translations = {
    ar: {
        siteTitle: "احسب ابتسامة أرضك",
        home: "الرئيسية",
        calculator: "الآلة الحاسبة", 
        documentation: "التوثيق",
        heroTitle: "احسب ابتسامة أرضك",
        heroSubtitle: "آلة حاسبة لمعرفة حجم نظام هلال الحصاد المائي المناسب لأرضك",
        heroDesc: "نظام متكامل يعتمد على معادلات علمية دقيقة لتصميم أنظمة حصاد مياه الأمطار في المناطق الجافة وشبه الجافة",
        getStarted: "ابدأ حساب أرضك",
        learnMore: "تعرف على النظام",
        featuresTitle: "مميزات النظام",
        feature1Title: "معادلات علمية دقيقة",
        feature1Desc: "جميع الحسابات مبنية على أبحاث محكمة ومنشورة في مصادر موثوقة مثل FAO وICARDA",
        feature2Title: "مناسب للأردن والمنطقة", 
        feature2Desc: "مصمم خصيصاً لظروف المناطق الجافة وشبه الجافة في الأردن والشرق الأوسط",
        feature3Title: "وحدات قياس متعددة",
        feature3Desc: "يدعم الهكتار والفدان والدونم والمتر المربع لتلبية احتياجات جميع المستخدمين",
        feature4Title: "رسوم بيانية وتوضيحية",
        feature4Desc: "عرض النتائج برسوم بيانية تفاعلية ورسوم توضيحية للتصميم النهائي",
        howItWorksTitle: "كيف يعمل النظام",
        step1Title: "أدخل البيانات الأساسية",
        step1Desc: "أدخل معدل الأمطار، ميل الأرض، ونوع المحصول",
        step2Title: "اختر وحدة القياس", 
        step2Desc: "اختر وحدة القياس المناسبة (هكتار، فدان، دونم، متر مربع)",
        step3Title: "احصل على التصميم الأمثل",
        step3Desc: "استلم التصميم الكامل مع الرسوم البيانية والتفاصيل",
        stat1: "معادلة علمية",
        stat2: "موقع بحثي", 
        stat3: "نظام تجميع صغير",
        stat4: "مفتوح المصدر",
        ctaTitle: "جاهز لبدء التصميم؟",
        ctaDesc: "استخدم أداتنا المتقدمة لتصميم نظام حصاد مياه الأمطار الخاص بك", 
        startDesign: "ابدأ التصميم الآن",
        footerDesc: "نظام متكامل لتصميم أنظمة حصاد مياه الأمطار",
        links: "روابط سريعة",
        resources: "مصادر", 
        faq: "الأسئلة الشائعة",
        tutorials: "الدروس التعليمية", 
        research: "الأبحاث",
        designedBy: "صمم من قبل عمر ياسين",
        calculatorTitle: "احسب ابتسامة أرضك",
        calculatorSubtitle: "آلة حاسبة لمعرفة حجم نظام هلال الحصاد المائي المناسب لأرضك",
        calculatorDesc: "أدخل بيانات أرضك للحصول على تصميم دقيق ومفصل لنظام حصاد مياه الأمطار",
        basicData: "البيانات الأساسية",
        rainfall: "معدل هطول الأمطار السنوي",
        rainfallHint: "بناءً على بيانات محطات الأرصاد في الأردن", 
        slope: "ميل الأرض",
        slopeHint: "يؤثر على كفاءة تجميع المياه",
        cropType: "نوع المحصول",
        selectCrop: "اختر نوع المحصول",
        olive: "الزيتون - شجرة معمرة",
        pomegranate: "الرمان - شجرة مثمرة",
        almond: "اللوز - شجرة معمرة", 
        fig: "التين - شجرة مثمرة",
        grape: "العنب - متسلق معمر",
        atriplex: "القطف - شجيرة رعوية",
        juniper: "العرعر - شجرة حراجية",
        thyme: "الزعتر البري - نبات عطري",
        sage: "الميرمية - نبات طبي",
        barley: "الشعير - محصول حولي",
        custom: "قيمة مخصصة",
        customKc: "قيمة Kc مخصصة",
        customKcHint: "معامل المحصول - قيم منظمة الفاو بين 0.3-1.2",
        areaData: "بيانات المساحة", 
        landArea: "مساحة الأرض",
        hectare: "هكتار",
        acre: "فدان",
        dunam: "دونم", 
        squareMeter: "متر مربع",
        soilType: "نوع التربة",
        sandy: "رملية (نفاذية عالية)",
        loamy: "طميية (نفاذية متوسطة)", 
        clay: "طينية (نفاذية منخفضة)",
        calculateDesign: "احسب التصميم العلمي",
        reset: "إعادة تعيين",
        designResults: "نتائج التصميم العلمي",
        saveResults: "حفظ التقرير", 
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
        eqE1: "E-1",
        eqE2: "E-2", 
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7", 
        eqE10: "E-10",
        docsDesc: "جميع المعادلات والمصادر والتفاصيل التقنية المستخدمة في تصميم النظام",
        tableOfContents: "جدول المحتويات",
        introduction: "المقدمة",
        equations: "المعادلات الأساسية",
        sources: "المصادر",
        variables: "تعريفات المتغيرات",
        methodology: "منهجية العمل",
        calculations: "شرح الحسابات"
    },
    en: {
        siteTitle: "Calculate Your Land's Smile",
        home: "Home",
        calculator: "Calculator",
        documentation: "Documentation",
        heroTitle: "Calculate Your Land's Smile",
        heroSubtitle: "Calculator to determine the appropriate crescent water harvesting system size for your land",
        heroDesc: "A comprehensive system based on precise scientific equations for designing rainwater harvesting systems in arid and semi-arid regions",
        getStarted: "Calculate Your Land",
        learnMore: "Learn About System",
        featuresTitle: "System Features",
        feature1Title: "Accurate Scientific Equations",
        feature1Desc: "All calculations are based on peer-reviewed research published in reliable sources like FAO and ICARDA",
        feature2Title: "Suitable for Jordan and Region",
        feature2Desc: "Specifically designed for arid and semi-arid conditions in Jordan and the Middle East",
        feature3Title: "Multiple Measurement Units",
        feature3Desc: "Supports hectare, acre, dunam, and square meter to meet all users' needs",
        feature4Title: "Charts and Illustrations",
        feature4Desc: "Display results with interactive charts and final design illustrations",
        howItWorksTitle: "How the System Works",
        step1Title: "Enter Basic Data",
        step1Desc: "Enter rainfall rate, land slope, and crop type",
        step2Title: "Choose Measurement Unit",
        step2Desc: "Select the appropriate measurement unit (hectare, acre, dunam, square meter)",
        step3Title: "Get Optimal Design",
        step3Desc: "Receive complete design with charts and details",
        stat1: "Scientific Equation",
        stat2: "Research Site",
        stat3: "Micro-catchment System",
        stat4: "Open Source",
        ctaTitle: "Ready to Start Designing?",
        ctaDesc: "Use our advanced tool to design your rainwater harvesting system",
        startDesign: "Start Designing Now",
        footerDesc: "A comprehensive system for designing rainwater harvesting systems",
        links: "Quick Links",
        resources: "Resources",
        faq: "FAQ",
        tutorials: "Tutorials",
        research: "Research",
        designedBy: "Designed by Omar Yaseen",
        calculatorTitle: "Calculate Your Land's Smile",
        calculatorSubtitle: "Calculator to determine the appropriate crescent water harvesting system size for your land",
        calculatorDesc: "Enter your land data to get a precise and detailed rainwater harvesting system design",
        basicData: "Basic Data",
        rainfall: "Annual Rainfall Rate",
        rainfallHint: "Based on meteorological station data in Jordan",
        slope: "Land Slope",
        slopeHint: "Affects water collection efficiency",
        cropType: "Crop Type",
        selectCrop: "Select Crop Type",
        olive: "Olive - Perennial tree",
        pomegranate: "Pomegranate - Fruit tree",
        almond: "Almond - Perennial tree",
        fig: "Fig - Fruit tree",
        grape: "Grape - Perennial climber",
        atriplex: "Atriplex - Pasture shrub",
        juniper: "Juniper - Forest tree",
        thyme: "Wild Thyme - Aromatic plant",
        sage: "Sage - Medicinal plant",
        barley: "Barley - Annual crop",
        custom: "Custom Value",
        customKc: "Custom Kc Value",
        customKcHint: "Crop coefficient - FAO values between 0.3-1.2",
        areaData: "Area Data",
        landArea: "Land Area",
        hectare: "Hectare",
        acre: "Acre",
        dunam: "Dunam",
        squareMeter: "Square Meter",
        soilType: "Soil Type",
        sandy: "Sandy (High permeability)",
        loamy: "Loamy (Medium permeability)",
        clay: "Clay (Low permeability)",
        calculateDesign: "Calculate Scientific Design",
        reset: "Reset",
        designResults: "Scientific Design Results",
        saveResults: "Save Report",
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
        eqE1: "E-1",
        eqE2: "E-2",
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7",
        eqE10: "E-10",
        docsDesc: "All equations, sources and technical details used in system design",
        tableOfContents: "Table of Contents",
        introduction: "Introduction",
        equations: "Basic Equations",
        sources: "Sources",
        variables: "Variable Definitions",
        methodology: "Methodology",
        calculations: "Calculation Explanation"
    }
};

// حالة اللغة الحالية
let currentLang = 'ar';

// معاملات التربة بناءً على نوع التربة
const soilCoefficients = {
    sandy: { runoff: 0.15, infiltration: 0.70, storage: 0.15 },
    loamy: { runoff: 0.25, infiltration: 0.60, storage: 0.15 },
    clay: { runoff: 0.40, infiltration: 0.45, storage: 0.15 }
};

// معاملات الكفاءة
const efficiencyFactors = {
    50: 0.50, 55: 0.55, 60: 0.60, 65: 0.65, 70: 0.70, 
    75: 0.75, 80: 0.80, 85: 0.85, 90: 0.90
};

// تحويل الوحدات
const unitConversions = {
    hectare: 10000,
    acre: 4046.86,
    dunam: 1000,
    'square-meter': 1
};

// وظيفة تغيير اللغة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage();
    updateDirection();
}

// وظيفة تحديث النصوص
function updateLanguage() {
    console.log('Updating language to:', currentLang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    const langText = document.getElementById('lang-text');
    if (langText) {
        langText.textContent = currentLang === 'ar' ? 'English' : 'العربية';
    }
    
    updateFormDirection();
    updatePageTitles();
    updateCropOptions();
    updateUnitOptions();
    updateSoilOptions();
    updateChartsLanguage();
}

// تحديث خيارات المحاصيل
function updateCropOptions() {
    const cropSelect = document.getElementById('crop');
    if (!cropSelect) return;
    
    const currentValue = cropSelect.value;
    
    const defaultOption = cropSelect.querySelector('option[value=""]');
    if (defaultOption) {
        const selectCropText = translations[currentLang].selectCrop;
        defaultOption.innerHTML = `-- ${selectCropText} --`;
    }
    
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
            ['القطر (م)', 'ارتفاع السد (سم)', 'سعة التخزين (م³)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
            ['Diameter (m)', 'Bund Height (cm)', 'Storage Capacity (m³)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
        
        window.designChart.data.labels = labels;
        window.designChart.options.plugins.title.text = currentLang === 'ar' ? 
            'الخصائص الهيدروليكية للهلال' : 'Hydraulic Properties of Half-moon';
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
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// حساب تصميم حصاد مياه الأمطار باستخدام معادلات علمية موثقة
function calculateRainwaterHarvesting(P, S, Kc, soilType, area, areaUnit, efficiency, plantSpacing) {
    console.log('Input values:', { P, S, Kc, soilType, area, areaUnit, efficiency, plantSpacing });
    
    const soil = soilCoefficients[soilType];
    const efficiencyFactor = efficiencyFactors[efficiency];
    
    // E-1: حساب القطر بناءً على معدل الأمطار واحتياجات المحصول
    let D = 8.2 * Math.pow(P, -0.25) * Math.pow(Kc, 0.35);
    D = Math.max(3.0, Math.min(10.0, D));
    
    // E-2: حساب ارتفاع السد بناءً على القطر واستقرار المنشأ
    let H = 25 + 2.0 * (D - 3.0);
    H = Math.max(25, Math.min(45, H));
    
    // E-3: حساب عمق التخزين الفعال
    const d = H * 0.6;
    
    // E-4: حساب مساحة الزراعة (نصف دائرة)
    const A_cult = (Math.PI * Math.pow(D, 2)) / 8;
    
    // E-5: حساب سعة التخزين (شبه مكافئ)
    const V = (2/3) * D * d * H / 100;
    
    // E-6: حساب المسافة بين الصفوف بناءً على القطر والتداخل المطلوب
    const L = D * 0.85;
    
    // E-7: حساب المسافة بين الهلالات في الصف الواحد
    const S_pit = D * 1.10;
    
    // E-8: حساب كثافة الهلالات
    const density = 10000 / (L * S_pit);
    
    // E-9: حساب مساحة التجميع بناءً على منهجية SCS المعدلة
    const runoffPotential = soil.runoff + (S * 0.01);
    const A_catch = (A_cult * runoffPotential * efficiencyFactor) / (1 - runoffPotential);
    
    // E-10: حساب نسبة التجميع إلى الزراعة
    const CA_ratio = A_catch / A_cult;
    
    // E-11: حساب حجم الأمطار المتاحة لكل هلال
    const rainVolumePerPit = (P / 1000) * A_catch;
    
    // E-12: حساب حجم المياه المجمعة الفعلي
    const collectedWaterPerPit = rainVolumePerPit * efficiencyFactor;
    
    // E-13: حساب كفاءة التجميع الإجمالية
    const overallEfficiency = efficiencyFactor * (1 - soil.infiltration) * 100;
    
    // E-14: حساب إجمالي عدد الهلالات
    const areaSqM = area * unitConversions[areaUnit];
    const totalPits = Math.round((density / 10000) * areaSqM);
    
    // E-15: حساب المساحة المزروعة الإجمالية
    const totalCultArea = totalPits * A_cult;
    
    return {
        diameter: D,
        height: H,
        depth: d,
        cultArea: A_cult,
        volume: V,
        rowSpacing: L,
        pitSpacing: S_pit,
        density: Math.round(density),
        catchArea: A_catch,
        caRatio: CA_ratio,
        rainVolume: rainVolumePerPit,
        collectedWater: collectedWaterPerPit,
        efficiency: overallEfficiency,
        totalPits: totalPits,
        totalCultArea: totalCultArea,
        areaSqM: areaSqM
    };
}

// عرض النتائج
function displayResults(results) {
    console.log('Displaying results:', results);
    
    document.getElementById('result-diameter').textContent = `${results.diameter.toFixed(1)} م`;
    document.getElementById('result-height').textContent = `${results.height.toFixed(0)} سم`;
    document.getElementById('result-depth').textContent = `${results.depth.toFixed(0)} سم`;
    document.getElementById('result-cult-area').textContent = `${results.cultArea.toFixed(1)} م²`;
    document.getElementById('result-volume').textContent = `${results.volume.toFixed(1)} م³`;
    document.getElementById('result-row-spacing').textContent = `${results.rowSpacing.toFixed(1)} م`;
    document.getElementById('result-pit-spacing').textContent = `${results.pitSpacing.toFixed(1)} م`;
    document.getElementById('result-density').textContent = `${results.density} هلال/هكتار`;
    document.getElementById('result-catch-area').textContent = `${results.catchArea.toFixed(1)} م²`;
    document.getElementById('result-ca-ratio').textContent = `${results.caRatio.toFixed(1)}:1`;
    document.getElementById('result-rain-volume').textContent = `${results.rainVolume.toFixed(1)} م³/سنة`;
    document.getElementById('result-total-water').textContent = `${results.collectedWater.toFixed(1)} م³/سنة`;
    document.getElementById('result-efficiency').textContent = `${results.efficiency.toFixed(0)}%`;
    document.getElementById('result-total-pits').textContent = `${results.totalPits}`;
    document.getElementById('result-total-cult-area').textContent = `${results.totalCultArea.toFixed(0)} م²`;
    
    if (document.getElementById('summary-diameter')) {
        document.getElementById('summary-diameter').textContent = `${results.diameter.toFixed(1)} م`;
        document.getElementById('summary-height').textContent = `${results.height.toFixed(0)} سم`;
        document.getElementById('summary-volume').textContent = `${results.volume.toFixed(1)} م³`;
        document.getElementById('summary-row-spacing').textContent = `${results.rowSpacing.toFixed(1)} م`;
        document.getElementById('summary-pit-spacing').textContent = `${results.pitSpacing.toFixed(1)} م`;
        document.getElementById('summary-density').textContent = `${results.density} هلال/هктار`;
        document.getElementById('summary-total-water').textContent = `${(results.collectedWater * results.totalPits).toFixed(0)} م³/سنة`;
        document.getElementById('summary-efficiency').textContent = `${results.efficiency.toFixed(0)}%`;
        document.getElementById('summary-total-pits').textContent = `${results.totalPits}`;
    }
    
    createHydrologicalCharts(results);
    document.getElementById('results-panel').style.display = 'block';
    
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            document.getElementById('results-panel').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 300);
    }
}

// إنشاء رسوم بيانية هيدرولوجية
function createHydrologicalCharts(results) {
    const ctx = document.getElementById('design-chart');
    if (!ctx) return;
    
    const ctx2d = ctx.getContext('2d');
    
    if (window.designChart) {
        window.designChart.destroy();
    }
    
    const labels = currentLang === 'ar' ? 
        ['القطر (م)', 'ارتفاع السد (سم)', 'سعة التخزين (م³)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
        ['Diameter (m)', 'Bund Height (cm)', 'Storage Capacity (m³)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
    
    window.designChart = new Chart(ctx2d, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ar' ? 'قيم التصميم' : 'Design Values',
                data: [
                    results.diameter,
                    results.height,
                    results.volume,
                    results.cultArea,
                    results.catchArea
                ],
                backgroundColor: [
                    '#4caf50',
                    '#2196f3', 
                    '#ff9800',
                    '#9c27b0',
                    '#f44336'
                ],
                borderColor: [
                    '#388e3c',
                    '#1976d2',
                    '#f57c00',
                    '#7b1fa2',
                    '#d32f2f'
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
                    text: currentLang === 'ar' ? 'الخصائص الهيدروليكية للهلال' : 'Hydraulic Properties of Half-moon',
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
        depth: document.getElementById('result-depth').textContent,
        cultArea: document.getElementById('result-cult-area').textContent,
        volume: document.getElementById('result-volume').textContent,
        rowSpacing: document.getElementById('result-row-spacing').textContent,
        pitSpacing: document.getElementById('result-pit-spacing').textContent,
        density: document.getElementById('result-density').textContent,
        catchArea: document.getElementById('result-catch-area').textContent,
        caRatio: document.getElementById('result-ca-ratio').textContent,
        rainVolume: document.getElementById('result-rain-volume').textContent,
        totalWater: document.getElementById('result-total-water').textContent,
        efficiency: document.getElementById('result-efficiency').textContent,
        totalPits: document.getElementById('result-total-pits').textContent,
        totalCultArea: document.getElementById('result-total-cult-area').textContent
    };
    
    const resultsText = currentLang === 'ar' ? `
نتائج تصميم نظام حصاد مياه الأمطار - احسب ابتسامة أرضك
==================================================
الأبعاد الهيدروليكية:
قطر الهلال (D): ${results.diameter}
ارتفاع السد (H): ${results.height}
عمق التخزين (d): ${results.depth}
مساحة الزراعة (Aₗ): ${results.cultArea}
سعة التخزين (V): ${results.volume}

التوزيع المكاني:
المسافة بين الصفوف (L): ${results.rowSpacing}
المسافة بين الهلالات (S): ${results.pitSpacing}
كثافة الهلالات: ${results.density}
مساحة التجميع (A꜀): ${results.catchArea}
نسبة التجميع (C:A): ${results.caRatio}

الأداء المائي:
حجم الأمطار المتاحة: ${results.rainVolume}
حجم المياه المجمعة: ${results.totalWater}
كفاءة التجميع: ${results.efficiency}
إجمالي الهلالات: ${results.totalPits}
المساحة المزروعة: ${results.totalCultArea}

تم الحساب باستخدام معادلات علمية موثقة - نظام احسب ابتسامة أرضك
    ` : `
Rainwater Harvesting Design Results - Calculate Your Land's Smile
==================================================
Hydraulic Dimensions:
Half-moon Diameter (D): ${results.diameter}
Bund Height (H): ${results.height}
Storage Depth (d): ${results.depth}
Cultivation Area (Aₗ): ${results.cultArea}
Storage Capacity (V): ${results.volume}

Spatial Distribution:
Row Spacing (L): ${results.rowSpacing}
Pit Spacing (S): ${results.pitSpacing}
Crescent Density: ${results.density}
Catchment Area (A꜀): ${results.catchArea}
Catchment Ratio (C:A): ${results.caRatio}

Water Performance:
Available Rain Volume: ${results.rainVolume}
Collected Water Volume: ${results.totalWater}
Collection Efficiency: ${results.efficiency}
Total Crescents: ${results.totalPits}
Total Cultivated Area: ${results.totalCultArea}

Calculated using verified scientific equations - Calculate Your Land's Smile System
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
    
    alert(currentLang === 'ar' ? 'تم حفظ التقرير بنجاح!' : 'Report saved successfully!');
}

// تهيئة الآلة الحاسبة
function initCalculator() {
    const calculatorForm = document.getElementById('rainwater-calculator');
    const cropSelect = document.getElementById('crop');
    const customKcGroup = document.getElementById('custom-kc-group');
    const customKcInput = document.getElementById('custom-kc');
    const efficiencySlider = document.getElementById('efficiency');
    const efficiencyValue = document.getElementById('efficiency-value');
    
    if (efficiencySlider && efficiencyValue) {
        efficiencySlider.addEventListener('input', function() {
            efficiencyValue.textContent = `${this.value}%`;
        });
    }
    
    if (calculatorForm) {
        if (cropSelect) {
            cropSelect.addEventListener('change', function() {
                if (this.value === 'custom') {
                    if (customKcGroup) customKcGroup.style.display = 'block';
                } else {
                    if (customKcGroup) customKcGroup.style.display = 'none';
                }
            });
        }
        
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const rainfall = parseFloat(document.getElementById('rainfall').value);
            const slope = parseFloat(document.getElementById('slope').value);
            const soilType = document.getElementById('soil-type').value;
            const cropValue = cropSelect ? cropSelect.value : '';
            const area = parseFloat(document.getElementById('area').value) || 1;
            const areaUnit = document.getElementById('area-unit').value;
            const efficiency = parseInt(document.getElementById('efficiency').value);
            const plantSpacing = parseFloat(document.getElementById('plant-spacing').value);
            
            let kc = 0.65;
            if (cropValue === 'custom') {
                kc = parseFloat(customKcInput ? customKcInput.value : 0.65) || 0.65;
            } else if (cropValue) {
                kc = parseFloat(cropValue);
            }
            
            console.log('Form values:', { rainfall, slope, soilType, kc, area, areaUnit, efficiency, plantSpacing });
            
            if (rainfall < 50 || rainfall > 1200) {
                alert(currentLang === 'ar' ? 
                    'معدل هطول الأمطار يجب أن يكون بين 50 و 1200 مم/سنة' :
                    'Rainfall rate must be between 50 and 1200 mm/year');
                return;
            }
            
            if (slope < 0.5 || slope > 25) {
                alert(currentLang === 'ar' ?
                    'ميل الأرض يجب أن يكون بين 0.5 و 25%' :
                    'Land slope must be between 0.5 and 25%');
                return;
            }
            
            if (kc < 0.3 || kc > 1.2) {
                alert(currentLang === 'ar' ?
                    'قيمة Kc يجب أن تكون بين 0.3 و 1.2 حسب معايير الفاو' :
                    'Kc value must be between 0.3 and 1.2 according to FAO standards');
                return;
            }
            
            const results = calculateRainwaterHarvesting(
                rainfall, slope, kc, soilType, area, areaUnit, efficiency, plantSpacing
            );
            
            displayResults(results);
        });
        
        const saveBtn = document.getElementById('save-results');
        if (saveBtn) {
            saveBtn.addEventListener('click', saveResults);
        }
        
        const printBtn = document.getElementById('print-results');
        if (printBtn) {
            printBtn.addEventListener('click', function() {
                window.print();
            });
        }
        
        if (customKcInput) {
            customKcInput.addEventListener('input', function() {
                const rainfall = parseFloat(document.getElementById('rainfall').value);
                const slope = parseFloat(document.getElementById('slope').value);
                const soilType = document.getElementById('soil-type').value;
                const area = parseFloat(document.getElementById('area').value) || 1;
                const areaUnit = document.getElementById('area-unit').value;
                const efficiency = parseInt(document.getElementById('efficiency').value);
                const plantSpacing = parseFloat(document.getElementById('plant-spacing').value);
                
                if (rainfall && slope && soilType && this.value) {
                    const kc = parseFloat(this.value) || 0.65;
                    if (kc >= 0.3 && kc <= 1.2) {
                        const results = calculateRainwaterHarvesting(
                            rainfall, slope, kc, soilType, area, areaUnit, efficiency, plantSpacing
                        );
                        displayResults(results);
                    }
                }
            });
        }
    }
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    initNavigation();
    initCalculator();
    
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
        console.log('Language toggle button found and event listener added');
    } else {
        console.log('Language toggle button not found');
    }
    
    updateLanguage();
    updateDirection();
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar && window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else if (navbar) {
            navbar.style.background = 'var(--surface-color)';
            navbar.style.backdropFilter = 'none';
        }
    });
    
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
    
    document.querySelectorAll('.feature-card, .step, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
