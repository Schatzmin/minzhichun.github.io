// 从localStorage加载数据
let profileData = JSON.parse(localStorage.getItem('profileData')) || {
    name: '你的名字',
    title: 'Web开发者 | 设计师 | 创意者',
    about: '这里写一段关于你的介绍，包括你的背景、兴趣和专业领域。可以描述你的工作经历、教育背景以及个人特点。',
    image: 'https://via.placeholder.com/400'
};

let skillsData = JSON.parse(localStorage.getItem('skillsData')) || [
    {
        icon: 'fa-code',
        title: '前端开发',
        description: 'HTML, CSS, JavaScript, React'
    },
    {
        icon: 'fa-server',
        title: '后端开发',
        description: 'Node.js, Python, Java'
    },
    {
        icon: 'fa-paint-brush',
        title: '设计',
        description: 'UI/UX, Photoshop, Figma'
    },
    {
        icon: 'fa-database',
        title: '数据库',
        description: 'MySQL, MongoDB, PostgreSQL'
    }
];

let projectsData = JSON.parse(localStorage.getItem('projectsData')) || [
    {
        image: 'https://via.placeholder.com/300x200',
        title: '项目名称1',
        description: '项目描述和使用的技术栈'
    },
    {
        image: 'https://via.placeholder.com/300x200',
        title: '项目名称2',
        description: '项目描述和使用的技术栈'
    },
    {
        image: 'https://via.placeholder.com/300x200',
        title: '项目名称3',
        description: '项目描述和使用的技术栈'
    }
];

let contactData = JSON.parse(localStorage.getItem('contactData')) || {
    email: 'your.email@example.com',
    phone: '+86 123 4567 8900',
    location: '中国，城市'
};

// 初始化表单数据
document.addEventListener('DOMContentLoaded', function() {
    // 填充个人信息表单
    document.getElementById('name').value = profileData.name;
    document.getElementById('title').value = profileData.title;
    document.getElementById('about').value = profileData.about;
    document.getElementById('image').value = profileData.image;

    // 填充技能表单
    renderSkills();

    // 填充项目表单
    renderProjects();

    // 填充联系方式表单
    document.getElementById('email').value = contactData.email;
    document.getElementById('phone').value = contactData.phone;
    document.getElementById('location').value = contactData.location;
});

// 处理表单提交
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    profileData = {
        name: document.getElementById('name').value,
        title: document.getElementById('title').value,
        about: document.getElementById('about').value,
        image: document.getElementById('image').value
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert('个人信息已保存！');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    contactData = {
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value
    };
    localStorage.setItem('contactData', JSON.stringify(contactData));
    alert('联系方式已保存！');
});

// 技能管理
function addSkill() {
    const container = document.getElementById('skillsContainer');
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill-item';
    skillDiv.innerHTML = `
        <input type="text" placeholder="图标类名 (如: fa-code)" required>
        <input type="text" placeholder="技能名称" required>
        <input type="text" placeholder="技能描述" required>
        <button type="button" onclick="this.parentElement.remove()">删除</button>
    `;
    container.appendChild(skillDiv);
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';
    skillsData.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-item';
        skillDiv.innerHTML = `
            <input type="text" value="${skill.icon}" placeholder="图标类名" required>
            <input type="text" value="${skill.title}" placeholder="技能名称" required>
            <input type="text" value="${skill.description}" placeholder="技能描述" required>
            <button type="button" onclick="this.parentElement.remove()">删除</button>
        `;
        container.appendChild(skillDiv);
    });
}

document.getElementById('skillsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const skills = [];
    document.querySelectorAll('.skill-item').forEach(item => {
        skills.push({
            icon: item.children[0].value,
            title: item.children[1].value,
            description: item.children[2].value
        });
    });
    skillsData = skills;
    localStorage.setItem('skillsData', JSON.stringify(skillsData));
    alert('技能已保存！');
});

// 项目管理
function addProject() {
    const container = document.getElementById('projectsContainer');
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    projectDiv.innerHTML = `
        <input type="text" placeholder="项目图片URL" required>
        <input type="text" placeholder="项目名称" required>
        <input type="text" placeholder="项目描述" required>
        <button type="button" onclick="this.parentElement.remove()">删除</button>
    `;
    container.appendChild(projectDiv);
}

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';
    projectsData.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item';
        projectDiv.innerHTML = `
            <input type="text" value="${project.image}" placeholder="项目图片URL" required>
            <input type="text" value="${project.title}" placeholder="项目名称" required>
            <input type="text" value="${project.description}" placeholder="项目描述" required>
            <button type="button" onclick="this.parentElement.remove()">删除</button>
        `;
        container.appendChild(projectDiv);
    });
}

document.getElementById('projectsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const projects = [];
    document.querySelectorAll('.project-item').forEach(item => {
        projects.push({
            image: item.children[0].value,
            title: item.children[1].value,
            description: item.children[2].value
        });
    });
    projectsData = projects;
    localStorage.setItem('projectsData', JSON.stringify(projectsData));
    alert('项目已保存！');
}); 