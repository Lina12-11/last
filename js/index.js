// 轮播图功能
function initSlider() {
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.slider-dot');
    const totalSlides = slides.children.length;
    
    function showSlide(index) {
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        slides.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    if (!slides || !dots || totalSlides === 0) {
        console.error('幻灯片或指示点未正确初始化');
        return;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'), 10);
            showSlide(index);
        });
    });

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// 商品加载功能
function loadProducts() {
    // 模拟商品数据
    const products = [
        {
            id: 1,
            title: "荒野大镖客2",
            category: "冒险游戏",
            price: 199,
            oldPrice: 249,
            badge: "热销",
            image: "https://via.placeholder.com/300x200?text=荒野大镖客2"
        },
        // 可以添加更多商品数据...
    ];

    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img" style="background-image: url('${product.image}')">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    ¥${product.price}
                    ${product.oldPrice ? `<span class="old-price">¥${product.oldPrice}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn btn-cart"><i class="fas fa-cart-plus"></i> 加入购物车</button>
                    <button class="btn btn-wishlist"><i class="fas fa-heart"></i></button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// 初始化页面功能
function initPage() {
    initSlider();
    loadProducts();
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initPage();
});