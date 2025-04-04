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

// 更新页面内容
function updatePageContent() {
    // 更新个人信息
    document.querySelector('.hero h1').innerHTML = `你好，我是<span class="highlight">${profileData.name}</span>`;
    document.querySelector('.subtitle').textContent = profileData.title;
    document.querySelector('.about-text p').textContent = profileData.about;
    document.querySelector('.about-image img').src = profileData.image;

    // 更新技能
    const skillsContainer = document.querySelector('.skills-grid');
    skillsContainer.innerHTML = '';
    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class="fas ${skill.icon}"></i>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // 更新项目
    const projectsContainer = document.querySelector('.projects-grid');
    projectsContainer.innerHTML = '';
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="#" class="project-link">查看详情</a>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // 更新联系方式
    document.querySelector('.contact-item:nth-child(1) p').textContent = contactData.email;
    document.querySelector('.contact-item:nth-child(2) p').textContent = contactData.phone;
    document.querySelector('.contact-item:nth-child(3) p').textContent = contactData.location;
}

// 页面加载时更新内容
document.addEventListener('DOMContentLoaded', function() {
    updatePageContent();
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.boxShadow = 'none';
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('消息已发送！感谢您的联系。');
            this.reset();
        });
    }

    // 技能卡片动画
    const skillCards = document.querySelectorAll('.skill-card');
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });

    // 页面加载动画
    document.body.style.opacity = '1';
}); 