// 登录表单验证
function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
//实现基本的登录信息验证，如检查用户名和密码是否为空，
    if (!loginForm) return;

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 清除之前的错误信息
        usernameError.style.display = 'none';
        passwordError.style.display = 'none';

        // 简单的验证示例
        let isValid = true;
        if (usernameInput.value.trim() === '') {
            usernameError.style.display = 'block';
            isValid = false;
        }
        if (passwordInput.value.trim() === '') {
            passwordError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // 存储用户名到 sessionStorage
            sessionStorage.setItem('username', usernameInput.value.trim());
            // 跳转回首页
            window.location.href = 'index.html';
        }
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    setupLoginForm();
});