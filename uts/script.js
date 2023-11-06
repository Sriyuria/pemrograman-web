let cart = [];

function tambahKeKeranjang(namaProduk, harga) {
    cart.push({ nama: namaProduk, harga: harga });
    updateKeranjang();
}

function updateKeranjang() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(item.nama + " - $" + item.harga));
        cartItems.appendChild(li);
    });
}

