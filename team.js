const teamMembers = [
    {
        industry: "產物保險業",
        name: "張宏煜",
        company: "國泰世紀產物保險",
        photo: "partner1.jpg",
        phone: "0953702807",
        email: "clouen@cathay-ins.com.tw",
        address: "高雄市鳳山區光復路65號5樓",
        websiteLabel: "Facebook 社群",
        websiteUrl: "https://www.facebook.com/zhang.hong.yu.162111",
        services: "車險、商業火險、工程保險、公共意外險、僱主意外險、僱主補償險、產品責任保險。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會8年創始會員。" },
            { badge: "行業榮譽", text: "「專做」產險的業務沒幾個，能深耕 20 年的更是少之又少；憑藉二十年實戰理賠經驗，事故發生時條款判讀精準、理賠無疑慮。" }
        ],
        cases: [
            { title: "食品加工廠｜廠房火險與財產險規劃", problem: "老舊廠房擴建後保額不足，面臨火災與設備損壞風險缺口。", win: "重新盤點資產重置價值並優化保單條款，保費精簡 15% 且保障完整覆蓋。" },
            { title: "金屬製造業｜雇主意外責任險補強", problem: "產線作業風險高，職災理賠與勞基法補償產生龐大財務壓力。", win: "規劃足額雇主責任險銜接團險，成功轉嫁企業主職災賠償風險。" },
            { title: "新建廠房工程｜營造綜合險專案", problem: "廠房興建期間遭遇颱風豪雨及鄰損風險。", win: "量身規劃營造綜合險與第三人責任險，確保工程如期完工無後顧之憂。" },
            { title: "精密機械廠｜機械保險與營運中斷險", problem: "高單價 CNC 設備故障恐導致產線停擺與交期違約。", win: "建置機械損壞與營業中斷險防護網，守護企業現金流穩定。" }
        ],
        referral: {
            general: "有汽機車險、住宅火險或一般商業保險需求的個人與企業。",
            ideal: "擁有自有廠房、高價值機器設備的製造業與中小企業主。",
            dream: "正在興建新廠房、擴建產線或進行大型工程專案的企業主與營造廠。",
            bad: "已發生事故欲追溯投保，或無實際營運之空殼公司。"
        },
        top3: ["營造業", "二手車商", "產險同業"]
    },
    {
        industry: "人力資源管理",
        name: "景國強",
        company: "策識永續人才管理顧問有限公司",
        photo: "partner2.jpg",
        phone: "0917261722",
        email: "2019jungle@gmail.com",
        address: "高雄市大樹區中山路三巷485",
        websiteLabel: "官方網站",
        websiteUrl: "https://new.cctmcoach.com.tw",
        services: "AI員工建置、企業數位系統、組織數位轉型、企業AI內訓、企業高階教練、人資輔導規劃、勞動法制度建立、精實生產流程改善、品質管理ISO導入、ESG報告書編寫。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會第十七屆主席。" },
            { badge: "行業榮譽", text: "顧問教練群擁有 20 年以上人資實戰經驗，深耕高雄、服務全台中小企業。" }
        ],
        cases: [
            { title: "傳統製造業｜薪資結構與加班費合規重整", problem: "沿用舊制薪資結構，面臨勞檢裁罰與員工離職糾紛風險。", win: "重塑薪資科目與工作規則並完成核備，順利通過勞檢且零爭議。" },
            { title: "擴編中科技廠｜績效考核與留才制度", problem: "員工人數倍增但缺乏明確晉升與獎金標準，核心人才流失。", win: "導入 KPI 與職能考核制度，半年內關鍵人員留任率提升至 95%。" },
            { title: "連鎖服務業｜勞動契約與排班制度優化", problem: "排班工時複雜易觸法，主管管理無所適從。", win: "建立標準化排班與出勤管理規範，大幅降低人事管理成本。" },
            { title: "二代接班工廠｜組織盤點與接班梯隊建置", problem: "資深幹部與新世代管理斷層，營運效率停滯。", win: "完成部門職責劃分與中階主管培訓，協助二代順利接軌管理。" }
        ],
        referral: {
            general: "員工人數 10 人以上、需要勞動契約或工作規則健檢的公司行號。",
            ideal: "員工人數 30–150 人、正在擴編或面臨勞檢壓力的製造業與傳產工廠。",
            dream: "準備二代接班、組織轉型或規劃集團化管理制度的中大型企業。",
            bad: "只想規避法定勞健保與基本工資責任的雇主。"
        },
        top3: ["律師", "企業顧問", "會計師／記帳士"]
    },
    {
        industry: "外勞人力仲介業",
        name: "鄭勤",
        company: "詠成國際開發有限公司",
        photo: "partner3.jpg",
        phone: "0931989980",
        email: "pin.ha@msa.hinet.net",
        address: "高雄市苓雅區福德一路280號",
        websiteLabel: "Facebook 社群",
        websiteUrl: "https://www.facebook.com/qin.zheng2",
        services: "專營各類外籍人力引進／聘僱／管理（製造業移工、特登工廠專案移工、外籍技術人力媒合）。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會精準高效引薦實力。" },
            { badge: "行業榮譽", text: "私立就業服務機構評鑑A級-許可證號2702。" }
        ],
        cases: [
            { title: "特登農地工廠｜取得特登後首批移工引進", problem: "工廠剛取得特定工廠登記，不熟悉移工名額計算與申請流程。", win: "精準核算 3K 五級制配額，順利引進 8 名產線移工解決缺工危機。" },
            { title: "金屬加工廠｜中階技術人力留才轉任", problem: "資深優秀移工即將期滿回國，產線面臨技術斷層。", win: "協助申請轉任外國技術人力，成功留住核心熟手免受年限限制。" },
            { title: "塑膠射出廠｜急單產線人力快速增補", problem: "接獲海外大單急需夜班作業員，本地招募困難。", win: "啟動國內承接與海外選工雙軌並行，1 個月內補足產線人力。" },
            { title: "食品製造業｜移工宿舍管理與雙語溝通輔導", problem: "廠內移工生活管理繁瑣，溝通落差影響生產效率。", win: "派駐專業雙語服務人員定期訪視協調，穩定現場出勤與向心力。" }
        ],
        referral: {
            general: "有家庭看護工或一般製造業移工諮詢需求的客戶。",
            ideal: "已取得特定工廠登記或一般工廠登記、現場長期缺工的製造業老闆。",
            dream: "擴廠增設新產線、需要大批量引進移工或中階技術人力的製造大廠。",
            bad: "無工廠登記且不符申請資格、欲非法聘僱外籍人士者。"
        },
        top3: ["特登農地工廠顧問", "人力資源管理", "製造業工廠主"]
    },
    {
        industry: "會計師",
        name: "許毅帆",
        company: "承毅會計師事務所",
        photo: "partner4.jpg",
        phone: "0982824349",
        email: "chenicash@gmail.com",
        address: "高雄市苓雅區正言里中正一路284號9樓之1",
        websiteLabel: "官方網站",
        websiteUrl: "https://chenicpa.com",
        services: "記帳、簽證、稅務規劃、工商登記設立變更）。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會100分會員。" },
            { badge: "行業榮譽", text: "第 18 屆高屏地區「傑出經理獎」。" }
        ],
        cases: [
            { title: "精密零件廠｜銀行融資財報簽證專案", problem: "企業欲向銀行申請擴廠貸款，但內外帳混亂無法取得理想額度。", win: "協助帳務整合並出具會計師財報簽證，成功核貸 3,000 萬營運資金。" },
            { title: "家族傳產工廠｜二代股權傳承與稅務規劃", problem: "第一代股東年事已高，直接贈與或繼承將面臨高額稅負。", win: "透過閉鎖性公司與分年股權架構調整，合法節省數百萬元稅金。" },
            { title: "自動化設備商｜政府研發補助會計簽證", problem: "申請經濟部補助計畫需專業會計師查核經費核銷。", win: "建立專案獨立帳務並完成簽證，協助客戶順利撥款結案。" },
            { title: "成長型貿易公司｜境內外公司稅務架構優化", problem: "跨國交易稅負沉重且面臨反避稅法規風險。", win: "重新梳理交易流程與移轉訂價策略，兼顧稅負效率與法規合規。" }
        ],
        referral: {
            general: "新創公司設立登記、記帳報稅或年度稅務申報需求的企業。",
            ideal: "年營收 3,000 萬以上、需要銀行融資簽證或內控帳務整頓的製造業。",
            dream: "準備家族企業傳承、股權重組、併購或規劃公開發行的企業集團。",
            bad: "要求購買發票或從事不法逃漏稅操作之客戶。"
        },
        top3: ["特登農地工廠顧問", "地政士", "高資產銀行金融服務"]
    },
    {
        industry: "公共工程業",
        name: "金芸庭",
        company: "芊庭開發工程有限公司",
        photo: "partner5.jpg",
        phone: "0980692390",
        email: "a5834798@gmail.com",
        address: "高雄市小港區過雄街240號",
        websiteLabel: "Facebook 粉專",
        websiteUrl: "https://www.facebook.com/p/芊庭開發工程-100089333686359/",
        services: "公共工程、補照工程、廠房興建、整修工程、拆除工程、路溝工程、景觀改善工程、停車場地坪改善工程、設施維護改善及緊急搶修工程。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會工廠法規政策產業服務鏈核心成員。" },
            { badge: "行業榮譽", text: "乙級營造，公園處開口優質廠商、資金流穩健、包商資源充沛。" }
        ],
        cases: [
            { title: "公園處", problem: "緊急搶修。", win: "112、113、114年高雄3~6行政區一年消化完2年預算。" },
            { title: "楠O電子", problem: "補照(變更用途)。", win: "1530萬B棟8-9F室內裝修工程。" },
            { title: "公園改造工程", problem: "公園改造。", win: "睡蓮池公園、崇善公園、港興公園、孔宅兒童遊戲場。" },
        ],
        referral: {
            general: "50-100萬工程。",
            ideal: "國軍案件、興建廠房。",
            dream: "3000-9000萬統包案。",
            bad: "50萬以下工程、距高雄車程2小時以上外縣市工程。"
        },
        top3: ["營造土包", "監造工程顧問", "特登農地工廠顧問"]
    },
    {
        industry: "高資產銀行金融服務業",
        name: "李佳怡",
        company: "銀行／財富管理機構",
        photo: "partner6.jpg",
        phone: "0900-000-006",
        email: "partner6@example.com",
        address: "高雄市",
        websiteLabel: "企業金融專頁",
        websiteUrl: "https://www.google.com",
        services: "高資產客戶財富管理、企業主資產配置、家族信託與傳承規劃、企業營運周轉金與廠房購置融資專案。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會工廠法規政策產業服務鏈成員。" },
            { badge: "行業榮譽", text: "BNI 富鼎分會工廠法規政策產業服務鏈成員。" }
        ],
        cases: [
            { title: "新會員", problem: "導生計畫階段。", win: "導生計畫階段。" },
        ],
        referral: {
            general: "導生計畫階段。",
            ideal: "導生計畫階段。",
            dream: "導生計畫階段。",
            bad: "導生計畫階段。"
        },
        top3: ["地政士", "高資產顧問", "會計師／記帳士"]
    }
];

function setSafeText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text || '';
}

function renderTeamGrid() {
    const container = document.getElementById('team-grid-container');
    if (!container) return;
    container.innerHTML = teamMembers.map((member, index) => `
        <div class="team-member-card" role="button" tabindex="0" onclick="openPartnerModal(${index})">
            <img src="${member.photo}" alt="${member.industry}" class="team-member-photo" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.industry)}&background=0f766e&color=fff&size=120'">
            <div class="team-member-industry">${member.industry}</div>
            <div class="team-member-name">${member.name}</div>
        </div>
    `).join('');
}

function openPartnerModal(index) {
    const member = teamMembers[index];
    if (!member) return;

    const photoEl = document.getElementById('p-photo');
    if (photoEl) {
        photoEl.src = member.photo;
        photoEl.onerror = function() {
            this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.industry)}&background=0f766e&color=fff&size=150`;
        };
    }
    setSafeText('p-name', member.name);
    setSafeText('p-industry', member.industry);
    setSafeText('p-company', member.company);

    const cleanPhone = (member.phone || '').replace(/[^0-9+]/g, '');
    const phoneLink = document.getElementById('p-phone-link');
    if (phoneLink) {
        phoneLink.href = `tel:${cleanPhone}`;
        phoneLink.onclick = function() {
            if (typeof copyText === 'function') copyText(member.phone, `電話 (${member.phone}) 已複製`);
        };
    }
    setSafeText('p-phone-val', member.phone || '未提供');

    const emailLink = document.getElementById('p-email-link');
    if (emailLink) {
        emailLink.href = `mailto:${member.email || ''}`;
        emailLink.onclick = function() {
            if (typeof copyText === 'function') copyText(member.email, `信箱 (${member.email}) 已複製`);
        };
    }
    const shortEmail = member.email && member.email.length > 13 ? member.email.slice(0, 11) + '...' : (member.email || '未提供');
    setSafeText('p-email-val', shortEmail);

    const webLink = document.getElementById('p-website-link');
    if (webLink) webLink.href = member.websiteUrl || '#';
    setSafeText('p-website-label', member.websiteLabel || '點擊前往');
    setSafeText('p-website-val', member.websiteLabel || '點擊前往');

    const mapLink = document.getElementById('p-map-link');
    if (mapLink) {
        if (member.address) {
            mapLink.style.display = 'flex';
            mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(member.address)}`;
            setSafeText('p-address-val', member.address);
            setSafeText('p-address-label', member.address);
        } else {
            mapLink.style.display = 'none';
        }
    }

    setSafeText('p-services', member.services);

    const honorsEl = document.getElementById('p-honors-container');
    if (honorsEl) {
        honorsEl.innerHTML = (member.honors || []).map(h => `<div><strong>${h.badge}｜</strong>${h.text}</div>`).join('');
    }

    const casesEl = document.getElementById('p-cases-container');
    if (casesEl) {
        const caseNumbers = ['案例一', '案例二', '案例三', '案例四'];
        casesEl.innerHTML = (member.cases || []).map((c, idx) => `
            <div class="case-grid-item">
                <div class="case-grid-header">
                    <span class="case-num-badge">${caseNumbers[idx] || '案例' + (idx + 1)}</span>
                    <span class="case-grid-title">${c.title}</span>
                </div>
                <div class="case-detail-row"><strong>問題：</strong>${c.problem}</div>
                <div class="case-detail-win"><strong>戰績：</strong>${c.win}</div>
            </div>
        `).join('');
    }

    const ref = member.referral || {};
    setSafeText('p-ref-general', ref.general);
    setSafeText('p-ref-ideal', ref.ideal);
    setSafeText('p-ref-dream', ref.dream);
    setSafeText('p-ref-bad', ref.bad);

    const top3El = document.getElementById('p-top3-container');
    if (top3El) {
        top3El.innerHTML = (member.top3 || []).map((role, idx) => `
            <div style="background: #ffffff; border: 1.5px solid #f59e0b; border-radius: 12px; padding: 12px 14px; display: flex; align-items: center; gap: 10px;">
                <span class="case-num-badge" style="background: #d97706;">TOP ${idx + 1}</span>
                <span style="font-size: 14px; font-weight: 800; color: #0f172a;">${role}</span>
            </div>
        `).join('');
    }

    const modal = document.getElementById('partnerModal');
    if (modal) {
        modal.style.display = 'block';
        modal.scrollTop = 0;
        document.body.style.overflow = 'hidden';
    }
}

window.openPartnerModal = openPartnerModal;
renderTeamGrid();
