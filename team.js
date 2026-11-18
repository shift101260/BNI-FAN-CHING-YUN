// 工廠法規政策產業服務鏈｜夥伴資料庫
// 日後修改夥伴資料，只需編輯這個檔案即可

const teamMembers = [
    {
        industry: "產物保險業",
        name: "張宏煜",
        company: "國泰世紀產物保險",
        photo: "partner1.jpg",
        phone: "0900-000-001",
        email: "partner1@example.com",
        address: "高雄市前鎮區中華五路",
        websiteLabel: "國泰產險官網",
        websiteUrl: "https://www.cathay-ins.com.tw",
        services: "廠房火險、公共意外責任險、雇主意外責任險、營造綜合險、機械保險與企業團體保險規劃。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會工廠法規政策產業服務鏈核心成員。" },
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
            ideal: "擁有自有廠房、倉庫、高價值機器設備的製造業與中小企業主。",
            dream: "正在興建新廠房、擴建產線或進行大型工程專案的企業主與營造廠。",
            bad: "已發生事故欲追溯投保，或無實際營運之空殼公司。"
        },
        top3: ["特登農地工廠顧問", "會計師／記帳士", "營造／消防設備業"]
    },
    {
        industry: "人力資源管理",
        name: "景國強",
        company: "策識永續人才管理顧問有限公司",
        photo: "partner2.jpg",
        phone: "0900-000-002",
        email: "partner2@example.com",
        address: "高雄市苓雅區",
        websiteLabel: "策識永續人才官網",
        websiteUrl: "https://www.google.com/search?q=策識永續人才管理顧問有限公司",
        services: "企業薪酬制度設計、工作規則與勞動契約健檢、勞資爭議預防、績效考核系統建置與人才培育。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會產業鏈核心成員。" },
            { badge: "行業榮譽", text: "協助多家製造業與成長型企業建立合規人事管理制度。" }
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
        top3: ["律師／勞資調解", "會計師／記帳士", "特登農地工廠顧問"]
    },
    {
        industry: "外勞人力仲介業",
        name: "鄭勤",
        company: "詠成國際開發有限公司",
        photo: "partner3.jpg",
        phone: "0900-000-003",
        email: "partner3@example.com",
        address: "高雄市",
        websiteLabel: "詠成國際官網",
        websiteUrl: "https://www.google.com/search?q=詠成國際開發有限公司",
        services: "製造業移工引進、特定工廠登記專案移工申請、外籍技術人力媒合、雙語翻譯輔導與宿舍生活管理。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會產業鏈核心成員。" },
            { badge: "行業榮譽", text: "專精製造業與特登工廠移工配額申請，高核准率實績。" }
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
        phone: "0900-000-004",
        email: "partner4@example.com",
        address: "高雄市",
        websiteLabel: "承毅會計師官網",
        websiteUrl: "https://www.google.com/search?q=承毅會計師事務所",
        services: "財務報表與稅務簽證、工商登記設立變更、企業稅務規劃、成本會計建置、股權架構設計與補助核銷簽證。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會產業鏈核心成員。" },
            { badge: "行業榮譽", text: "協助多家製造業與中小企業完成財稅合規與融資簽證。" }
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
        phone: "0900-000-005",
        email: "partner5@example.com",
        address: "高雄市",
        websiteLabel: "芊庭開發官網",
        websiteUrl: "https://www.google.com/search?q=芊庭開發工程有限公司",
        services: "公共工程承攬、廠區整地與地坪工程、排水溝渠與滯洪設施施作、道路鋪設與基礎土木工程。",
        honors: [
            { badge: "BNI榮譽", text: "BNI 富鼎分會產業鏈核心成員。" },
            { badge: "行業榮譽", text: "具備公共工程品質管理實績，嚴格落實工安與進度控管。" }
        ],
        cases: [
            { title: "農地變更工廠｜廠區排水與滯洪池工程", problem: "土地變更審查要求完整出流管制與廠區排水設施。", win: "依技師設計精準施工並一次通過驗收，助廠房順利取得使用執照。" },
            { title: "重型機械廠｜高承載廠區地坪與聯外道路鋪設", problem: "重車頻繁進出導致原有地面龜裂積水，影響貨物運輸。", win: "施作高強度鋼筋混凝土地坪與排水坡度改良，大幅提升廠區安全性。" },
            { title: "工業區廠房｜基地整地與擋土牆防護工程", problem: "基地高低落差大，雨季有邊坡沖刷風險。", win: "完成基地級配整地與擋土結構施作，確保廠房基礎穩固。" },
            { title: "地方基礎建設｜道路與側溝改善工程", problem: "工期緊迫且需兼顧周邊通行安全與施工品質。", win: "精準調度機具與工班，提前完工並獲得主辦機關高度肯定。" }
        ],
        referral: {
            general: "有廠區地面修繕、排水溝改善或小型土木整地需求的廠主。",
            ideal: "正在辦理土地變更、工廠新建或擴建，需要施作排水與基礎土木的業主。",
            dream: "大型工業區開發、園區道路排水工程或需長期配合土木工程的建設公司。",
            bad: "無預算概念、要求偷工減料或無合法施工許可之違建工程。"
        },
        top3: ["特登農地工廠顧問", "建築師／結構水保技師", "營造／鋼構浪板工程"]
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
            { badge: "BNI榮譽", text: "BNI 富鼎分會產業鏈核心成員。" },
            { badge: "行業榮譽", text: "服務多位南台灣製造業企業主，專精資產活化與傳承配置。" }
        ],
        cases: [
            { title: "傳產製造業主｜廠房購置貸款與現金流配置", problem: "企業主欲購置新廠房但不想過度消耗帳上營運現金。", win: "規劃高成數廠房專案貸款並搭配靈活理財配置，兼顧擴廠與流動性。" },
            { title: "科技業創辦人｜家族信託與二代資產傳承", problem: "擔心子女年輕不善理財或未來婚姻風險影響家族資產。", win: "設立客製化家族信託架構，確保資產依創辦人意志穩健傳承。" },
            { title: "出口貿易企業｜外匯避險與美元資產配置", problem: "匯率劇烈波動侵蝕出口毛利，閒置外幣資金效益低。", win: "導入外匯避險工具與穩健美元債券配置，穩定企業財務收益。" },
            { title: "退休工廠老闆｜售廠資金穩健退休現金流", problem: "工廠出售後取得大筆資金，不知如何抗通膨並創造穩定被動收入。", win: "配置多元收益型資產組合，打造每年穩定領息的退休現金流。" }
        ],
        referral: {
            general: "有個人理財規劃、外幣配置或房屋貸款需求的專業人士。",
            ideal: "有廠房購置貸款、企業周轉金或閒置資金配置需求的中小企業主。",
            dream: "可投資資產 3,000 萬以上、有家族信託傳承或大額資產活化需求的企業主。",
            bad: "信用紀錄嚴重瑕疵或尋求非法地下融資管道者。"
        },
        top3: ["會計師／記帳士", "特登農地工廠顧問", "地政士"]
    }
];

function renderTeamGrid() {
    const container = document.getElementById('team-grid-container');
    if (!container) return;
    container.innerHTML = teamMembers.map((member, index) => `
        <div class="team-member-card" onclick="openPartnerModal(${index})">
            <img src="${member.photo}" alt="${member.industry}" class="team-member-photo" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.industry)}&background=0f766e&color=fff&size=120'">
            <div class="team-member-industry">${member.industry}</div>
            <div class="team-member-name">${member.name}</div>
        </div>
    `).join('');
}

function openPartnerModal(index) {
    const member = teamMembers[index];
    if (!member) return;

    // 基本頭銜與頭像
    const photoEl = document.getElementById('p-photo');
    photoEl.src = member.photo;
    photoEl.onerror = function() {
        this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.industry)}&background=0f766e&color=fff&size=150`;
    };
    document.getElementById('p-name').innerText = member.name;
    document.getElementById('p-industry').innerText = member.industry;
    document.getElementById('p-company').innerText = member.company;

    // 1. 聯絡資訊三格（電話、信箱、官方網站/社群）
    const cleanPhone = (member.phone || '').replace(/[^0-9+]/g, '');
    const phoneLink = document.getElementById('p-phone-link');
    phoneLink.href = `tel:${cleanPhone}`;
    phoneLink.onclick = function() {
        copyText(member.phone, `電話 (${member.phone}) 已複製`);
    };
    document.getElementById('p-phone-val').innerText = member.phone || '未提供';

    const emailLink = document.getElementById('p-email-link');
    emailLink.href = `mailto:${member.email || ''}`;
    emailLink.onclick = function() {
        copyText(member.email, `信箱 (${member.email}) 已複製`);
    };
    const shortEmail = member.email && member.email.length > 13 ? member.email.slice(0, 11) + '...' : (member.email || '未提供');
    document.getElementById('p-email-val').innerText = shortEmail;

    const webLink = document.getElementById('p-website-link');
    webLink.href = member.websiteUrl || '#';
    document.getElementById('p-website-val').innerText = member.websiteLabel || '點擊前往';

    // 2. Google地址（橫條按鈕，點開直接開啟 Google 地圖）
    const mapLink = document.getElementById('p-map-link');
    if (member.address) {
        mapLink.style.display = 'flex';
        mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(member.address)}`;
        document.getElementById('p-address-label').innerText = member.address;
    } else {
        mapLink.style.display = 'none';
    }

    // 3. 服務項目
    document.getElementById('p-services').innerText = member.services || '';

    // 4. 成就與指標案例（榮譽 + 4案例，格式同 GAINS 工作表）
    const honorsHtml = (member.honors || []).map(h => `
        <div><strong>${h.badge}｜</strong>${h.text}</div>
    `).join('');
    document.getElementById('p-honors-container').innerHTML = honorsHtml;

    const caseNumbers = ['案例一', '案例二', '案例三', '案例四'];
    const casesHtml = (member.cases || []).map((c, idx) => `
        <div class="case-grid-item">
            <div class="case-grid-header">
                <span class="case-num-badge">${caseNumbers[idx] || '案例' + (idx + 1)}</span>
                <span class="case-grid-title">${c.title}</span>
            </div>
            <div class="case-detail-row"><strong>問題：</strong>${c.problem}</div>
            <div class="case-detail-win"><strong>戰績：</strong>${c.win}</div>
        </div>
    `).join('');
    document.getElementById('p-cases-container').innerHTML = casesHtml;

    // 5. 引薦提示（格式同十大客戶表）
    const ref = member.referral || {};
    document.getElementById('p-ref-general').innerText = ref.general || '';
    document.getElementById('p-ref-ideal').innerText = ref.ideal || '';
    document.getElementById('p-ref-dream').innerText = ref.dream || '';
    document.getElementById('p-ref-bad').innerText = ref.bad || '';

    // 6. 業務人脈圈前三名（格式同業務人脈圈）
    const top3Html = (member.top3 || []).map((role, idx) => `
        <div style="background: #ffffff; border: 1.5px solid #f59e0b; border-radius: 12px; padding: 12px 14px; display: flex; align-items: center; gap: 10px;">
            <span class="case-num-badge" style="background: #d97706;">TOP ${idx + 1}</span>
            <span style="font-size: 14px; font-weight: 800; color: #0f172a;">${role}</span>
        </div>
    `).join('');
    document.getElementById('p-top3-container').innerHTML = top3Html;

    openDocModal('partnerModal');
}

document.addEventListener('DOMContentLoaded', renderTeamGrid);
