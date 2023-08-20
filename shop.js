// สร้างตัวแปรเพื่อเก็บราคาสินค้าในตะกร้า
const cartItems = [];

// เมื่อคลิกปุ่ม "Add to Cart"
function addToCart(price) {
    cartItems.push(price);
    updateCartSummary();
}

// อัปเดตสรุปในตะกร้าสินค้า
// function updateCartSummary() {
//     const cartItemsElement = document.getElementById("cart-items");
//     const totalElement = document.getElementById("total");

//     const cartItemsHTML = cartItems.map((price, index) => {
//         return `<div>${index + 1}. ${price} บาท</div>`;
//     }).join("");
//     cartItemsElement.innerHTML = cartItemsHTML;

//     const totalPrice = cartItems.reduce((total, price) => total + price, 0);
//     const discountedTotalPrice = totalPrice > 1000 ? totalPrice * 0.9 : totalPrice; // ลดราคา 10% ถ้ายอดรวมมากกว่า 1000 บาท
//     totalElement.textContent = `Total: ${discountedTotalPrice.toFixed(2)} บาท`;
// }

// อัปเดตสรุปในตะกร้าสินค้า
function updateCartSummary() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    const cartItemsHTML = cartItems.map((price, index) => {
        return `<div>${index + 1}. ${price} บาท</div>`;
    }).join("");
    cartItemsElement.innerHTML = cartItemsHTML;

    const totalPrice = cartItems.reduce((total, price) => total + price, 0);

    let discountedTotalPrice;
    if (totalPrice > 1000) {
        discountedTotalPrice = totalPrice * 0.9; // ลดราคา 10% ถ้ายอดรวมมากกว่า 1000 บาท
    } else {
        discountedTotalPrice = totalPrice;
    }

    // เช็คราคาสินค้าใน cart summary ว่าเกิน 1000 บาทหรือไม่ ถ้าเกินให้นำราคาสินค้าทั้งหมดหาร 0.1
    if (discountedTotalPrice > 1000) {
        discountedTotalPrice = discountedTotalPrice * 0.1;
    }

    totalElement.textContent = `Total: ${discountedTotalPrice.toFixed(2)} บาท`;
}

// อัปเดตสรุปในตะกร้าสินค้า
function updateCartSummary() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    const cartItemsHTML = cartItems.map((price, index) => {
        return `<div>${index + 1}. ${price} บาท</div>`;
    }).join("");
    cartItemsElement.innerHTML = cartItemsHTML;

    const totalPrice = cartItems.reduce((total, price) => total + price, 0);

    let discountedTotalPrice;
    if (totalPrice > 1000) {
        discountedTotalPrice = totalPrice * 0.9; // ลดราคา 10% ถ้ายอดรวมมากกว่า 1000 บาท
    } else {
        discountedTotalPrice = totalPrice;
    }

    // เช็คราคาสินค้าใน cart summary ว่าเกิน 1000 บาทหรือไม่ ถ้าเกินให้นำราคาสินค้าทั้งหมดหาร 0.1
    if (discountedTotalPrice > 1000) {
        discountedTotalPrice = discountedTotalPrice * 0.1;
    }

    const finalTotalPrice = discountedTotalPrice.toFixed(2); // ปัดเศษทศนิยม 2 ตำแหน่ง
    totalElement.textContent = `Total: ${finalTotalPrice} บาท`;
}

