// 初始化购物车页面
function initCartPage() {
    // 从localStorage获取购物车数据
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // 更新购物车数量显示
    updateCartCount();

    // 如果没有商品，显示空购物车提示
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>您的购物车是空的</p>
                <a href="index.html" class="btn">去逛逛</a>
            </div>
        `;
        totalItemsElement.textContent = '0件';
        totalPriceElement.textContent = '¥0';
        return;
    }

    // 渲染购物车商品列表
    renderCartItems(cartItems);
    
    // 计算并显示总价
    updateCartSummary(cartItems);
    
    // 立即支付按钮点击事件
    checkoutBtn.addEventListener('click', function() {
        window.location.href = 'payment.html';
    });
}

// 渲染购物车商品列表
function renderCartItems(items) {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    items.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-info">
                <h3 class="cart-item-title">${item.title}</h3>
                <div class="cart-item-category">${item.category}</div>
            </div>
            <div class="cart-item-price">
                ¥${item.price}
            </div>
            <button class="btn btn-remove" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// 更新购物车汇总信息
function updateCartSummary(items) {
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
    
    const totalItems = items.length;
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    
    totalItemsElement.textContent = `${totalItems}件`;
    totalPriceElement.textContent = `¥${totalPrice}`;
}

// 更新购物车数量显示
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = cartItems.length;
    });
}

// 删除购物车商品
function setupRemoveButtons() {
    document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            removeCartItem(itemId);
        });
    });
}

function removeCartItem(itemId) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // 重新渲染购物车
    initCartPage();
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initCartPage();
    setupRemoveButtons();
});
