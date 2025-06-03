// 用户会话管理
// 用于在页面上显示已登录用户的用户名
function displayUsername() {
    const storedUsername = sessionStorage.getItem('username');
    // 从浏览器获取存储的用户名（记录）
    if (storedUsername) {
        // 检查用户名是否存在
        const loginIcon = document.querySelector('.nav-icon[href="login.html"]');
        if (loginIcon) {
            const icon = loginIcon.querySelector('i');
            const text = loginIcon.querySelector('span');
            // 在找到的loginIcon元素内部，查找<i>标签和<span>标签，分别赋值给icon和text变量。
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