/* =========================================
   SHOPTASAP — SCRIPT
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     RECHERCHE PRODUITS
  ========================== */
  const searchInput = document.getElementById("search");
  const products = document.querySelectorAll(".product");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchValue = searchInput.value
        .toLowerCase()
        .trim();
      products.forEach(product => {
        const productText = product.textContent
          .toLowerCase();
        if (productText.includes(searchValue)) {
          product.style.display = "";
        } else {
          product.style.display = "none";
        }
      });
    });
  }
  /* =========================
     FILTRE PAR CATÉGORIE
  ========================== */
  const categories = document.querySelectorAll(".category");
  categories.forEach(category => {
    category.addEventListener("click", () => {
      const selectedCategory =
        category.textContent
          .trim()
          .toLowerCase();
      products.forEach(product => {
        const productCategory =
          product
            .querySelector(".product-category");
        if (!productCategory) return;
        const categoryName =
          productCategory.textContent
            .trim()
            .toLowerCase();
        if (categoryName === selectedCategory) {
          product.style.display = "";
        } else {
          product.style.display = "none";
        }
      });
      /* Retour vers les produits */
      const productsSection =
        document.getElementById("produits");
      if (productsSection) {
        productsSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  /* =========================
     BOUTON "VOIR TOUS"
  ========================== */
  const productsTitle =
    document.querySelector("#produits .section-title");
  if (productsTitle) {
    const resetButton =
      document.createElement("button");
    resetButton.textContent =
      "Voir tous les produits";
    resetButton.type = "button";
    resetButton.style.marginTop = "20px";
    resetButton.style.padding = "12px 20px";
    resetButton.style.border = "none";
    resetButton.style.borderRadius = "25px";
    resetButton.style.background = "#111";
    resetButton.style.color = "#fff";
    resetButton.style.fontWeight = "700";
    resetButton.style.cursor = "pointer";
    resetButton.addEventListener("click", () => {
      products.forEach(product => {
        product.style.display = "";
      });
      if (searchInput) {
        searchInput.value = "";
      }
    });
    productsTitle.appendChild(resetButton);
  }
  /* =========================
     ANIMATION AU SCROLL
  ========================== */
  const animatedElements =
    document.querySelectorAll(
      ".product, .category, .info-card"
    );
  const observer =
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform =
              "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );
  animatedElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform =
      "translateY(20px)";
    element.style.transition =
      "opacity .6s ease, transform .6s ease";
    observer.observe(element);
  });
  /* =========================
     LIENS NAVIGATION
  ========================== */
  const navLinks =
    document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      const targetId =
        link.getAttribute("href");
      if (
        targetId &&
        targetId.startsWith("#")
      ) {
        const target =
          document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });
  /* =========================
     MESSAGE CONSOLE
  ========================== */
  console.log(
    "🛍️ SHOPTASAP — Site chargé avec succès."
  );
});
