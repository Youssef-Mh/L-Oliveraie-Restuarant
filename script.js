// Helper function to build custom stylized food SVGs matching uploaded dishes
function generateFoodSVG(type, title) {
  const colors = {
    ojja: '#c85a32',
    meat: '#8c3315',
    pasta: '#d97706',
    fish: '#2563eb',
    soup: '#ea580c',
    salad: '#16a34a',
    chicken: '#ca8a04',
    pizza: '#e11d48',
    appetizer: '#059669'
  };
  const mainColor = colors[type] || '#5a6e43';

  return `
    <svg class="w-full h-full object-cover rounded-2xl" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${type}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF7F2" />
          <stop offset="100%" stop-color="#EFEBE4" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#grad-${type})" />
      
      <!-- Outer Ceramic Plate -->
      <circle cx="200" cy="150" r="120" fill="#ffffff" stroke="#e5e5e5" stroke-width="4" />
      <circle cx="200" cy="150" r="100" fill="${mainColor}" fill-opacity="0.12" />

      <!-- Dish Motif Art -->
      <g transform="translate(200, 150)">
        <circle cx="0" cy="0" r="70" fill="${mainColor}" fill-opacity="0.8" />
        <!-- Food Details -->
        <path d="M -30,-20 Q 0,-50 30,-20 T 0,40 Z" fill="#ffffff" fill-opacity="0.3" />
        <circle cx="-15" cy="-10" r="8" fill="#f59e0b" />
        <circle cx="20" cy="15" r="10" fill="#16a34a" />
        <circle cx="5" cy="-25" r="6" fill="#dc2626" />
        <!-- Garnish Sprinkles -->
        <circle cx="-35" cy="25" r="3" fill="#ffffff" />
        <circle cx="35" cy="-30" r="3" fill="#ffffff" />
      </g>

      <!-- Label Tag -->
      <rect x="20" y="240" width="360" height="40" rx="8" fill="#232b1b" fill-opacity="0.85" />
      <text x="200" y="265" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">${title}</text>
    </svg>
  `;
}

// 20 Provided Dishes Data
const foodDishes = [
  {
    id: 1,
    title: "Ojja Tunisienne au Poulet & Oignons",
    category: "tunisian",
    price: "22 TND",
    desc: "Tajine / Ojja cuite en plat en terre cuite avec œufs pochés, oignons caramélisés et poulet épicé.",
    svgType: "ojja"
  },
  {
    id: 2,
    title: "Filet de Mignon / Selle d'Agneau Rôtie",
    category: "grill",
    price: "28 TND",
    desc: "Selle d'agneau roulée et saisie au jus, servie avec poêlée de légumes de saison.",
    svgType: "meat"
  },
  {
    id: 3,
    title: "Tagliatelles / Spaghetti aux Tomates Cerises & Basilic",
    category: "pasta",
    price: "20 TND",
    desc: "Pâtes artisanales crémeuses sautées aux tomates cerises confites et basilic frais.",
    svgType: "pasta"
  },
  {
    id: 4,
    title: "Pavé de Poisson Poêlé & Réduction Balsamique",
    category: "seafood",
    price: "27 TND",
    desc: "Poisson frais du jour poêlé, légumes grillés à l'huile d'olive et glaçage balsamique.",
    svgType: "fish"
  },
  {
    id: 5,
    title: "Soupe Gourmande de Poisson & Bruschetta à l'Ail",
    category: "seafood",
    price: "21 TND",
    desc: "Bouillon riche aux fruits de mer méditerranéens accompagné de pain grillé frotté à l'ail.",
    svgType: "soup"
  },
  {
    id: 6,
    title: "Salade Caprese Mozzarella de Bufflonne & Pesto",
    category: "tunisian",
    price: "19 TND",
    desc: "Tomates fraîches, Mozzarella crémeuse, sauce pesto maison et pignons de pin.",
    svgType: "salad"
  },
  {
    id: 7,
    title: "Suprême de Poulet Grillé & Sauce Champignons",
    category: "grill",
    price: "23 TND",
    desc: "Blanc de poulet mariné grillé, nappé d'une sauce crémeuse aux champignons sauvages.",
    svgType: "chicken"
  },
  {
    id: 8,
    title: "Crevettes Royales / Gambas Poêlées",
    category: "seafood",
    price: "30 TND",
    desc: "Gambas géantes saisies à la poêle avec ail, persil et julienne de légumes croquants.",
    svgType: "seafood"
  },
  {
    id: 9,
    title: "Salade Tunisienne Classique au Thon & Olives",
    category: "tunisian",
    price: "18 TND",
    desc: "Tomates, concombres, oignons rouges, thon de première qualité et olives djerbiennes.",
    svgType: "salad"
  },
  {
    id: 10,
    title: "Steak de Filet de Bœuf & Purée Onctueuse",
    category: "grill",
    price: "29 TND",
    desc: "Pavé de bœuf tendre grillé à la perfection, sauce au poivre vert et purée maison.",
    svgType: "meat"
  },
  {
    id: 11,
    title: "Spaghetti Bolognese / Arrabbiata au Basilic",
    category: "pasta",
    price: "21 TND",
    desc: "Pâtes nappées d'une sauce mijotée à la viande hachée ou sauce piquante au basilic.",
    svgType: "pasta"
  },
  {
    id: 12,
    title: "Assiette Grillade Mixte, Riz Safran & Frites",
    category: "grill",
    price: "26 TND",
    desc: "Combinaison généreuse de viandes grillées, frites maison croustillantes et riz aux épices.",
    svgType: "meat"
  },
  {
    id: 13,
    title: "Plat Traditionnel Tunisien sur Assiette Bleue",
    category: "tunisian",
    price: "24 TND",
    desc: "Chakchouka, frites fraîches, viande grillée savoureuse et quartiers de citron.",
    svgType: "ojja"
  },
  {
    id: 14,
    title: "Tajine de Poulet aux Olives & Citron Confit",
    category: "tunisian",
    price: "25 TND",
    desc: "Cuisse de poulet mijotée en plat en terre cuite avec jus doré, olives vert foncé et épices.",
    svgType: "chicken"
  },
  {
    id: 15,
    title: "Tentacule de Poulpe Grillé & Salade Fraîche",
    category: "seafood",
    price: "29 TND",
    desc: "Poulpe de Djerba grillé à la perfection, servi sur un lit de salade composée acidulée.",
    svgType: "seafood"
  },
  {
    id: 16,
    title: "Spaghetti Spécialité L'Oliveraie au Fromage",
    category: "pasta",
    price: "22 TND",
    desc: "Bol généreux de spaghetti enrobés d'une sauce riche saupoudrée de fromage râpé.",
    svgType: "pasta"
  },
  {
    id: 17,
    title: "Tajine d'Agneau aux Légumes en Pot de Terre",
    category: "tunisian",
    price: "27 TND",
    desc: "Agneau fondant mijoté doucement avec pommes de terre, courgettes et tomates fraîches.",
    svgType: "ojja"
  },
  {
    id: 18,
    title: "Trio d'Entrées : Slata Mechouia, Houria & Thon",
    category: "tunisian",
    price: "19 TND",
    desc: "Assortiment d'entrées traditionnelles préparées avec œufs durs, thon et olives.",
    svgType: "appetizer"
  },
  {
    id: 19,
    title: "Pizza Artisanale Poulet Épicé & Frites",
    category: "pasta",
    price: "20 TND",
    desc: "Pizza cuite au four garnie de fromage fondant, poulet mariné et frites dorées.",
    svgType: "pizza"
  },
  {
    id: 20,
    title: "Ragoût de Poulet Fait Maison aux Pommes de Terre",
    category: "tunisian",
    price: "22 TND",
    desc: "Pilon de poulet mijoté dans une sauce parfumée aux herbes avec pommes de terre et persil.",
    svgType: "chicken"
  }
];

function renderMenu(items) {
  const container = document.getElementById('menu-container');
  if (!container) return;
  container.innerHTML = '';

  items.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-3xl p-5 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group';
    
    card.innerHTML = `
      <div>
        <div class="h-48 w-full mb-4 overflow-hidden rounded-2xl cursor-pointer" onclick="openLightbox(${dish.id})">
          ${generateFoodSVG(dish.svgType, dish.title)}
        </div>
        <div class="flex items-start justify-between gap-2 mb-2">
          <h3 class="font-serif font-bold text-stone-900 text-lg group-hover:text-olive-700 transition">${dish.title}</h3>
          <span class="bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full shrink-0">${dish.price}</span>
        </div>
        <p class="text-stone-500 text-xs leading-relaxed mb-4">${dish.desc}</p>
      </div>

      <div class="pt-3 border-t border-stone-100 flex items-center justify-between">
        <span class="text-[11px] text-stone-400 uppercase tracking-wider font-semibold">100% Halal</span>
        <button onclick="openModal('reservation-modal')" class="text-xs font-bold text-olive-700 hover:text-olive-900 flex items-center gap-1">
          Commander <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;
  galleryGrid.innerHTML = '';

  foodDishes.forEach(dish => {
    const tile = document.createElement('div');
    tile.className = 'h-36 rounded-2xl overflow-hidden cursor-pointer border border-stone-200 shadow-sm hover:scale-105 transition-transform duration-200 relative group';
    tile.onclick = () => openLightbox(dish.id);

    tile.innerHTML = `
      ${generateFoodSVG(dish.svgType, dish.title)}
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold text-center p-2">
        ${dish.title}
      </div>
    `;
    galleryGrid.appendChild(tile);
  });
}

function filterMenu(category) {
  document.querySelectorAll('.menu-tab-btn').forEach(btn => {
    btn.classList.remove('bg-olive-900', 'text-white');
    btn.classList.add('bg-white', 'text-stone-700');
  });
  if (event && event.target) {
    event.target.classList.remove('bg-white', 'text-stone-700');
    event.target.classList.add('bg-olive-900', 'text-white');
  }

  if (category === 'all') {
    renderMenu(foodDishes);
  } else {
    const filtered = foodDishes.filter(d => d.category === category);
    renderMenu(filtered);
  }
}

function openLightbox(dishId) {
  const dish = foodDishes.find(d => d.id === dishId);
  if (!dish) return;

  const content = document.getElementById('lightbox-content');
  if (!content) return;
  content.innerHTML = `
    <div class="h-64 w-full rounded-2xl overflow-hidden mb-4">
      ${generateFoodSVG(dish.svgType, dish.title)}
    </div>
    <div class="flex items-center justify-between">
      <h3 class="font-serif text-2xl font-bold text-olive-900">${dish.title}</h3>
      <span class="text-lg font-bold text-terracotta-600">${dish.price}</span>
    </div>
    <p class="text-stone-600 text-sm leading-relaxed">${dish.desc}</p>
    <div class="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
      <span>Servi frais à L'Oliveraie Midoun</span>
      <button onclick="closeModal('lightbox-modal'); openModal('reservation-modal');" class="bg-olive-700 text-white px-4 py-2 rounded-xl font-bold">
        Réserver ce plat
      </button>
    </div>
  `;

  openModal('lightbox-modal');
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

function handleReservation(e) {
  e.preventDefault();
  alert("Votre demande de réservation a été envoyée avec succès à L'Oliveraie Restaurant ! Nous vous contacterons très rapidement.");
  closeModal('reservation-modal');
}

const devFiles = {
  html: `<!-- L-Oliveraie/index.html -->\n<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <title>L'Oliveraie Restaurant - Midoun</title>\n</head>\n<body>\n  <!-- Structure HTML Principale pour L'Oliveraie Restaurant -->\n</body>\n</html>`,
  css: `/* L-Oliveraie/style.css */\nbody {\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  background-color: #FAF7F2;\n  color: #2D2B2A;\n}\n.font-serif {\n  font-family: 'Playfair Display', serif;\n}`,
  js: `// L-Oliveraie/script.js\nconsole.log("L'Oliveraie Restaurant - Application Init");\n// Menu database, filtering logic, and lightbox modals initialized.`
};

let currentTab = 'html';

function toggleDevModal() {
  const modal = document.getElementById('dev-modal');
  if (!modal) return;
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    switchCodeTab('html');
  } else {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function switchCodeTab(tab) {
  currentTab = tab;
  const tabHtml = document.getElementById('tab-html');
  const tabCss = document.getElementById('tab-css');
  const tabJs = document.getElementById('tab-js');
  
  if (tabHtml) tabHtml.className = tab === 'html' ? 'px-5 py-3 border-b-2 border-amber-400 text-amber-300 font-bold' : 'px-5 py-3 text-stone-400';
  if (tabCss) tabCss.className = tab === 'css' ? 'px-5 py-3 border-b-2 border-amber-400 text-amber-300 font-bold' : 'px-5 py-3 text-stone-400';
  if (tabJs) tabJs.className = tab === 'js' ? 'px-5 py-3 border-b-2 border-amber-400 text-amber-300 font-bold' : 'px-5 py-3 text-stone-400';

  const codeDisplay = document.getElementById('code-display');
  if (codeDisplay) {
    codeDisplay.textContent = devFiles[tab];
  }
}

function copyCurrentCode() {
  const text = devFiles[currentTab];
  navigator.clipboard.writeText(text).then(() => {
    alert(`Le fichier ${currentTab === 'html' ? 'index.html' : currentTab === 'css' ? 'style.css' : 'script.js'} a été copié dans le presse-papier !`);
  });
}

window.onload = function() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMobileNav);
  }

  if (window.lucide) {
    lucide.createIcons();
  }
  renderMenu(foodDishes);
  renderGallery();
};