// 支付成功页面交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 更新购物车数量显示
    updateCartCount();
});

// 更新购物车数量显示（与common.js保持一致）
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = cartItems.length;
    });
}
