// 用户会话管理
function displayUsername() {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
        const loginIcon = document.querySelector('.nav-icon[href="login.html"]');
        if (loginIcon) {
            const icon = loginIcon.querySelector('i');
            const text = loginIcon.querySelector('span');
            
            icon.className = 'fas fa-user-check';
            text.textContent = storedUsername;
        }
    }
}

// 初始化用户相关功能
function initUserFeatures() {
    displayUsername();
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initUserFeatures();
});