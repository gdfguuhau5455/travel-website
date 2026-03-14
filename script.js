// ==================== 导航栏滚动效果 ====================
const navbar = document.querySelector('.navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        backToTop.classList.add('show');
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        backToTop.classList.remove('show');
    }
});

// 返回顶部功能
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== 导航栏链接激活 ====================
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// 移动端汉堡菜单
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// ==================== 轮播图功能 ====================
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    // 处理边界情况
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    // 移除所有active类
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // 添加active类到当前slide
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// 自动播放
function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    clearInterval(slideInterval);
}

// 事件监听
nextBtn.addEventListener('click', () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
});

prevBtn.addEventListener('click', () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoPlay();
        showSlide(index);
        startAutoPlay();
    });
});

// 启动自动播放
startAutoPlay();

// 鼠标悬停暂停
const slider = document.querySelector('.hero-slider');
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

// ==================== 平滑滚动 ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 搜索表单提交 ====================
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const formData = new FormData(searchForm);
    const destination = searchForm.querySelector('input[type="text"]').value;
    const departDate = searchForm.querySelectorAll('input[type="date"]')[0].value;
    const returnDate = searchForm.querySelectorAll('input[type="date"]')[1].value;
    const people = searchForm.querySelector('select').value;
    
    // 模拟搜索
    if (destination) {
        alert(`正在搜索:\n目的地: ${destination}\n出发日期: ${departDate || '未选择'}\n返回日期: ${returnDate || '未选择'}\n人数: ${people}`);
    } else {
        alert('请输入目的地');
    }
});

// ==================== 联系表单提交 ====================
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = '#e0e0e0';
            }
        });
        
        if (isValid) {
            alert('感谢您的留言！我们会尽快与您联系。');
            contactForm.reset();
        } else {
            alert('请填写所有必填项');
        }
    });
}

// ==================== 订阅表单 ====================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            alert(`感谢订阅！我们会将最新资讯发送到 ${email}`);
            newsletterForm.reset();
        }
    });
}

// ==================== 数字计数动画 ====================
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    });
};

// 使用 Intersection Observer 触发计数动画
const statsSection = document.querySelector('.stats-section');
let hasAnimated = false;

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
            hasAnimated = true;
        }
    });
}, observerOptions);

if (statsSection) {
    observer.observe(statsSection);
}

// ==================== 卡片悬停效果增强 ====================
const cards = document.querySelectorAll('.destination-card, .package-card, .service-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== 懒加载图片 ====================
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.onload = () => {
                img.style.transition = 'opacity 0.5s ease';
                img.style.opacity = '1';
            };
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ==================== 导航栏滚动高亮 ====================
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ==================== 预订按钮点击 ====================
const bookButtons = document.querySelectorAll('.btn-book');

bookButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const packageCard = this.closest('.package-card');
        const packageTitle = packageCard.querySelector('h3').textContent;
        alert(`您已选择：${packageTitle}\n\n请登录后完成预订！`);
    });
});

// ==================== 目的地卡片点击 ====================
const destinationCards = document.querySelectorAll('.destination-card');

destinationCards.forEach(card => {
    card.addEventListener('click', function() {
        const destination = this.querySelector('h3').textContent;
        const price = this.querySelector('.price').textContent;
        alert(`目的地：${destination}\n价格：${price}\n\n点击查看详情页！`);
    });
});

// ==================== 页面加载完成 ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('旅游网站加载完成！');
    
    // 初始化轮播图
    showSlide(0);
});

// ==================== 窗口调整响应 ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 重新计算布局
        console.log('窗口大小已调整');
    }, 250);
});
