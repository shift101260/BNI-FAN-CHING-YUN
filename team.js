// 工廠法規政策產業服務鏈｜夥伴資料庫
// 日後要新增成員或修改自我介紹，只需編輯這個檔案即可

const teamMembers = [
    {
        industry: "產物保險業",
        name: "張宏煜",
        company: "國泰世紀產物保險",
        photo: "partner1.jpg",
        intro: "專精廠房火險、公共意外責任險、雇主意外責任險及工程險規劃，為企業主建立完整的風險轉嫁防護網。",
        referral: "擁有自有廠房、機器設備或正在進行廠房興建與擴建的企業主。"
    },
    {
        industry: "人力資源管理",
        name: "景國強",
        company: "策識永續人才管理顧問有限公司",
        photo: "partner2.jpg",
        intro: "協助企業建立合規人事制度、勞資風險預防與永續人才培育規劃，讓組織穩定成長、降低勞資爭議。",
        referral: "員工人數擴編中、需要調整薪資結構或建立完整人資制度的中小企業與工廠。"
    },
    {
        industry: "外勞人力仲介業",
        name: "鄭勤",
        company: "詠成國際開發有限公司",
        photo: "partner3.jpg",
        intro: "專辦製造業與特定工廠登記核准後的移工引進申請、聘僱管理與雙語翻譯服務，精準解決現場缺工難題。",
        referral: "已取得特定工廠登記或一般工廠登記、急需補充產線人力的製造業老闆。"
    },
    {
        industry: "會計師",
        name: "許毅帆",
        company: "承毅會計師事務所",
        photo: "partner4.jpg",
        intro: "提供企業帳務簽證、稅務申報、成本結構分析與股權架構規劃，當企業主最可靠的財務軍師。",
        referral: "年營收成長中、需要建立內控帳務或申請政府補助的中小企業與製造業。"
    },
    {
        industry: "公共工程業",
        name: "金芸庭",
        company: "芊庭開發工程有限公司",
        photo: "partner5.jpg",
        intro: "承攬公共工程、基礎土木及廠區排水整地工程，嚴格把關施工品質與工期進度。",
        referral: "有廠區整地、排水設施改善或土木工程需求的業主與建設團隊。"
    },
    {
        industry: "高資產銀行金融服務業",
        name: "李佳怡",
        company: "公司名稱",
        photo: "partner6.jpg",
        intro: "專精企業主資產配置、家族財富傳承、公司營運資金規劃與高資產金融專案服務。",
        referral: "有企業融資規劃、高資產配置或二代接班傳承需求的企業主。"
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
    const photoEl = document.getElementById('p-photo');
    photoEl.src = member.photo;
    photoEl.onerror = function() {
        this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.industry)}&background=0f766e&color=fff&size=150`;
    };
    document.getElementById('p-name').innerText = member.name;
    document.getElementById('p-industry').innerText = member.industry;
    document.getElementById('p-company').innerText = member.company;
    document.getElementById('p-intro').innerText = member.intro;
    document.getElementById('p-referral').innerText = member.referral;
    openDocModal('partnerModal');
}

document.addEventListener('DOMContentLoaded', renderTeamGrid);
