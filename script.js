


//ADD TO CART AND WISHLIST SCRIPT CODE  FOR AUTOMATICALLY INCREMENT  IF ANY PRODUCT IS ADDED TO CART OR WISHLIST .......

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Script is running");

  updateCounts(); // Always update counts when page loads

  // 📦 Add to Cart (only for product.html)
  const addCartBtn = document.querySelector(".add-cart");
  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      const size = document.getElementById("size-select")?.value;
      const color = document.getElementById("color-select")?.value;

      if (!size || !color || size === "Select Size" || color === "") {
        alert("Please select size and color.");
        return;
      }

      const product = getProductFromURL();
      if (!product) return;

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ ...product, size, color });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("✅ Added to Cart!");
      updateCounts();
    });
  }

  // 💖 Add to Wishlist (only for product.html)
  const addWishlistBtn = document.querySelector(".add-wishlist");
  if (addWishlistBtn) {
    addWishlistBtn.addEventListener("click", () => {
      const product = getProductFromURL();
      if (!product) return;

      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      if (!wishlist.some(item => item.id === product.id)) {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("💖 Added to Wishlist!");
        updateCounts();
      } else {
        alert("❗Already in Wishlist");
      }
    });
  }
});

// 🔍 Get product from URL
function getProductFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");
  const products = window.products || [];
  return products.find(p => p.id === productId);
}

// 🔄 Update cart and wishlist badge counts
function updateCounts() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const cartCount = document.getElementById("cart-count");
  const wishlistCount = document.getElementById("wishlist-count");

  console.log("🛒 Cart items:", cart.length);
  console.log("💖 Wishlist items:", wishlist.length);

  if (cartCount) {
    cartCount.textContent = cart.length;
    console.log("✅ Cart badge updated");
  } else {
    console.log("❌ Cart badge element not found");
  }

  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
    console.log("✅ Wishlist badge updated");
  } else {
    console.log("❌ Wishlist badge element not found");
  }
}








// Add event listeners to the navigation menu items
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add logic to handle navigation menu item clicks
    });
});

// Add event listener to the search bar button

document.querySelector('.search-bar button').addEventListener('click', (e) => {
  e.preventDefault();

  const input = document.querySelector('.search-bar input').value.trim().toLowerCase();

  // Example item list – update with your actual product names
  const productList = [
      "Black Abaya",
      "Open Front Abaya",
      "Nida Fabric Abaya",
      "Modest Maxi Dress",
      "Flared Abaya",
      "Embroidered Abaya",
      "Casual Abaya",
       "Hijab",
        "Khimar",
        "jilbab",
        "Accessories",
        "Cap"
  ];

  if (!input) {
      alert("Please enter something to search.");
      return;
  }

  const results = productList.filter(item =>
      item.toLowerCase().includes(input)
  );




  if (results.length > 0) {
    alert("✅ Match found!\n\nYour search is available in our store: \n\n" + results.join(", ") + 
          "\n\nDon't miss out — explore now!");

    // Scroll to the categories section smoothly
    const categorySection = document.getElementById("categories");
    if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
    }
} else {
    alert("❌ No results found for \"" + input + "\"");
}
});





// Add event listeners to the category buttons
document.querySelectorAll('.category button').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Add logic to handle category button clicks
    });
});


    // login register
    function openLogin() {
      window.open("login.html", "_self");
    }
    function openRegister() {
      window.open("register.html", "_self");
    }

  
// categories

function openAbaya() {
    window.open("abayas.html", "_self");
  }
  function openHijab() {
    window.open("Hijabs.html", "_self");
  }
  function openCordSet() {
    window.open("cord-set.html", "_self");
  }
  function openCaps() {
    window.open("caps.html", "_self");
  }
  function openExtensions() {
    window.open("extensions.html", "_self");
  }
  function openJilbab() {
    window.open("jilbab.html", "_self");
  }
  function openKhimar() {
    window.open("khimar.html", "_self");
  }
  function openAccessories() {
    window.open("accessories.html", "_self");
  }

  //wislist
  function openWishlist() {
    window.open("wishlist.html", "_self");
  }
  function openCart() {
    window.open("cart.html", "_self");
  }
  function openProfile() {
    window.open("profile.html", "_self");
  }
  //abays pg
  function openCart() {
    window.open("cart.html", "_self");
  }

  function openProduct() {
    window.open("product.html", "_self");
  }




// Add event listener to the newsletter button
document.querySelector('.newsletter button').addEventListener('click', (e) => {
    e.preventDefault();
    // Add logic to handle newsletter button clicks
});
document.getElementById('search-icon').addEventListener('click', function() {
    document.querySelector('.search-bar').style.display = 'block';
});


const bar= document.getElementById('bar');
const nav= document.getElementById('navbar');
const close= document.getElementById('close');

if (bar){
  bar.addEventListener('click', ()=> {
    nav.classList.add('active');
  })
}
if (close){
  close.addEventListener('click', ()=> {
    navbar.classList.remove('active');
  })
}

