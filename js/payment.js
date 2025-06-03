// 支付页面交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const qrCodeImg = document.getElementById('payment-qr');
    const confirmPayBtn = document.getElementById('confirm-pay');
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    
    // 从localStorage获取购物车数据
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // 如果没有商品，提示并返回购物车
    if (cartItems.length === 0) {
        alert('购物车为空，请先添加商品');
        window.location.href = 'cart.html';
        return;
    }
    
    // 渲染订单商品列表
    renderOrderItems(cartItems);
    
    // 计算并显示订单总金额
    updateOrderTotal(cartItems);
    
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
    
    // 渲染订单商品列表
    function renderOrderItems(items) {
        orderItemsContainer.innerHTML = '';
        
        items.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <div class="order-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="order-item-info">
                    <h3 class="order-item-title">${item.title}</h3>
                    <div class="order-item-price">¥${item.price}</div>
                </div>
            `;
            orderItemsContainer.appendChild(orderItem);
        });
    }
    
    // 更新订单总金额
    function updateOrderTotal(items) {
        const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
        orderTotalElement.textContent = `¥${totalPrice}`;
    }
    
    // 确认支付按钮点击事件
    confirmPayBtn.addEventListener('click', function() {
        // 检查是否选择了支付方式
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
        
        // 模拟支付处理
        processPayment(selectedMethod, cartItems);
    });
    
    // 支付处理函数
    function processPayment(method, items) {
        // 显示支付中状态
        confirmPayBtn.disabled = true;
        confirmPayBtn.textContent = '支付处理中...';
        
        // 模拟支付处理延迟
        setTimeout(() => {
            // 这里可以添加实际的支付处理逻辑
            console.log('正在处理' + (method === 'wechat' ? '微信' : '支付宝') + '支付...');
            
            // 支付成功后清空购物车
            localStorage.removeItem('cart');
            
            // 模拟支付成功
            alert('支付成功！感谢您的购买');
            
            // 重置按钮状态
            confirmPayBtn.disabled = false;
            confirmPayBtn.textContent = '确认支付';
            
            // 跳转到支付成功页面
            window.location.href = 'success.html';
        }, 1500);
    }
    
    // 初始化默认支付方式
    updatePaymentMethod('wechat');
});
