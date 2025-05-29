// 支付页面交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const qrCodeImg = document.getElementById('payment-qr');
    const confirmPayBtn = document.getElementById('confirm-pay');
    
    // 监听支付方式变化
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            updatePaymentMethod(this.value);
        });
    });
    
    // 更新支付方式
    function updatePaymentMethod(method) {
        // 这里可以添加不同支付方式的逻辑
        console.log('支付方式已更改为:', method);
    }
    
    // 确认支付按钮点击事件
    confirmPayBtn.addEventListener('click', function() {
        // 检查是否选择了支付方式
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
        
        // 模拟支付处理
        processPayment(selectedMethod);
    });
    
    // 支付处理函数
    function processPayment(method) {
        // 显示支付中状态
        confirmPayBtn.disabled = true;
        confirmPayBtn.textContent = '支付处理中...';
        
        // 模拟支付处理延迟
        setTimeout(() => {
            // 这里可以添加实际的支付处理逻辑
            console.log('正在处理' + (method === 'wechat' ? '微信' : '支付宝') + '支付...');
            
            // 模拟支付成功
            alert('支付成功！感谢您的购买');
            
            // 重置按钮状态
            confirmPayBtn.disabled = false;
            confirmPayBtn.textContent = '确认支付';
            
            // 这里可以跳转到支付成功页面或其他操作
        }, 1500);
    }
    
    // 初始化默认支付方式
    updatePaymentMethod('wechat');
    
    // 提示用户设置二维码路径
    alert('请设置支付二维码图片路径');
});
