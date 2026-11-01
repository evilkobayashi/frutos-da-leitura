/**
 * Aplicativo Interativo e Portfólio Digital (Etapa 3)
 * "Frutos da Leitura: Da Raiz escrita à Árvore digital"
 * Disciplina PTL - Município de Queimados
 */

class VitrineApp {
  constructor() {
    this.activeTab = 'home';
    this.currentWorkModal = null;
    this.treeFilter = 'all';
  }

  init() {
    this.setupNavigation();
    this.handleUrlHash();
    this.renderGrades();
    this.renderInteractiveTree();
    this.setupFloatingLeaves();
    window.addEventListener('hashchange', () => this.handleUrlHash());
  }

  setupNavigation() {
    document.querySelectorAll('[data-tab-target]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.getAttribute('data-tab-target');
        this.switchTab(tab);
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        this.closeBannerModal();
      }
    });

    const bannerModal = document.getElementById('banner-modal');
    if (bannerModal) {
      bannerModal.addEventListener('click', (e) => {
        if (e.target === bannerModal) this.closeBannerModal();
      });
    }
  }

  handleUrlHash() {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'ano6', 'ano7', 'ano8', 'ludico'].includes(hash)) {
      this.switchTab(hash);
    } else if (hash.startsWith('trab-')) {
      const work = WORKS_DATA.find(w => w.id === hash);
      if (work) {
        if (work.grade.includes('6')) this.switchTab('ano6', false);
        else if (work.grade.includes('7')) this.switchTab('ano7', false);
        else if (work.grade.includes('8')) this.switchTab('ano8', false);
        this.openModal(work.id);
      }
    } else {
      this.switchTab('home');
    }
  }

  switchTab(tabId, updateHash = true) {
    this.activeTab = tabId;

    document.querySelectorAll('[data-tab-target]').forEach(btn => {
      const target = btn.getAttribute('data-tab-target');
      if (target === tabId) {
        btn.classList.add('bg-emerald-600', 'text-white', 'shadow-md');
        btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      } else {
        btn.classList.remove('bg-emerald-600', 'text-white', 'shadow-md');
        btn.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      }
    });

    const tabPanels = ['tab-home', 'tab-ano6', 'tab-ano7', 'tab-ano8', 'tab-ludico'];
    tabPanels.forEach(pId => {
      const panel = document.getElementById(pId);
      if (panel) {
        if (pId === `tab-${tabId}`) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      }
    });

    if (tabId === 'ludico') {
      if (window.quiz) window.quiz.start();
    }

    if (updateHash) {
      history.replaceState(null, null, `#${tabId}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ==========================================================================
     A ÁRVORE DO CONHECIMENTO INTERATIVA (SVG DINÂMICO COM FRUTOS CLICÁVEIS)
     ========================================================================== */
  filterTreeFruits(grade) {
    this.treeFilter = grade;
    this.renderInteractiveTree();

    document.querySelectorAll('.tree-filter-btn').forEach(b => {
      if (b.dataset.filter === grade) {
        b.className = "tree-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-sm transition cursor-pointer";
      } else {
        b.className = "tree-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition cursor-pointer";
      }
    });
  }

  renderInteractiveTree() {
    const treeContainer = document.getElementById('interactive-tree-canvas');
    if (!treeContainer) return;

    const fruitPositions = [
      { id: "trab-01", x: 260, y: 155, grade: "8º Ano" },
      { id: "trab-02", x: 440, y: 140, grade: "6º Ano" },
      { id: "trab-03", x: 190, y: 220, grade: "7º Ano" },
      { id: "trab-04", x: 580, y: 210, grade: "7º Ano" },
      { id: "trab-05", x: 330, y: 250, grade: "6º Ano" },
      { id: "trab-06", x: 490, y: 260, grade: "8º Ano" },
      { id: "trab-07", x: 150, y: 310, grade: "6º Ano" },
      { id: "trab-08", x: 640, y: 300, grade: "8º Ano" },
      { id: "trab-09", x: 270, y: 340, grade: "8º Ano" },
      { id: "trab-10", x: 410, y: 330, grade: "6º Ano" },
      { id: "trab-11", x: 530, y: 350, grade: "6º Ano" }
    ];

    treeContainer.innerHTML = `
      <svg viewBox="0 0 800 580" class="w-full h-auto max-h-[580px] drop-shadow-2xl select-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="trunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#451a03" />
            <stop offset="40%" stop-color="#78350f" />
            <stop offset="100%" stop-color="#92400e" />
          </linearGradient>

          <linearGradient id="canopyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#059669" stop-opacity="0.85" />
            <stop offset="50%" stop-color="#10b981" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#047857" stop-opacity="0.85" />
          </linearGradient>

          <filter id="fruitGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Copa Frondosa da Árvore -->
        <g id="tree-canopy">
          <circle cx="400" cy="220" r="175" fill="url(#canopyGrad)" filter="url(#fruitGlow)" opacity="0.35" />
          <circle cx="270" cy="240" r="135" fill="url(#canopyGrad)" opacity="0.8" />
          <circle cx="530" cy="230" r="140" fill="url(#canopyGrad)" opacity="0.8" />
          <circle cx="380" cy="160" r="150" fill="url(#canopyGrad)" opacity="0.9" />
          <circle cx="470" cy="170" r="130" fill="#34d399" opacity="0.35" />
          <circle cx="310" cy="290" r="115" fill="url(#canopyGrad)" opacity="0.85" />
          <circle cx="490" cy="290" r="120" fill="url(#canopyGrad)" opacity="0.85" />
        </g>

        <!-- Tronco Forte e Raízes Profundas (Simbolizando a Raiz Escrita) -->
        <g id="tree-trunk">
          <!-- Raízes da Base -->
          <path d="M 400 480 Q 340 515 220 545 Q 330 525 380 480 Z" fill="url(#trunkGrad)" opacity="0.95"/>
          <path d="M 400 480 Q 460 515 580 545 Q 470 525 420 480 Z" fill="url(#trunkGrad)" opacity="0.95"/>
          <path d="M 390 490 Q 310 535 160 565 Q 300 535 380 490 Z" fill="url(#trunkGrad)" opacity="0.85"/>
          <path d="M 410 490 Q 490 535 640 565 Q 500 535 420 490 Z" fill="url(#trunkGrad)" opacity="0.85"/>

          <!-- Tronco Central -->
          <path d="M 360 500 C 370 420 350 350 370 280 C 390 280 410 280 430 280 C 450 350 430 420 440 500 Z" fill="url(#trunkGrad)"/>
          
          <!-- Galhos que sustentam os Frutos -->
          <path d="M 370 330 C 320 310 250 300 180 250 C 210 250 280 280 370 310 Z" fill="url(#trunkGrad)"/>
          <path d="M 430 330 C 480 310 550 300 620 240 C 590 240 520 280 430 310 Z" fill="url(#trunkGrad)"/>
          <path d="M 380 270 C 330 220 280 180 250 160 C 270 170 330 220 390 250 Z" fill="url(#trunkGrad)"/>
          <path d="M 420 270 C 470 220 520 180 550 150 C 530 170 470 220 410 250 Z" fill="url(#trunkGrad)"/>
        </g>

        <!-- Base / Chão Escolar -->
        <ellipse cx="400" cy="535" rx="360" ry="22" fill="#064e3b" opacity="0.2" />

        <!-- 11 Frutos Tecnológicos Clicáveis (Otimizados para Touch de Celular) -->
        <g id="tree-fruits-group">
          ${fruitPositions.map((fp, i) => {
            const work = WORKS_DATA.find(w => w.id === fp.id);
            if (!work) return '';

            const isDimmed = this.treeFilter !== 'all' && work.grade !== this.treeFilter;
            const opacity = isDimmed ? '0.2' : '1';

            return `
              <g 
                class="tree-node-fruit group cursor-pointer"
                opacity="${opacity}"
                onclick="window.app.openModal('${work.id}')"
                style="transform-origin: ${fp.x}px ${fp.y}px;"
              >
                <!-- Área ampliada invisível para facilitar o toque no celular (Hit-box de toque) -->
                <circle cx="${fp.x}" cy="${fp.y}" r="28" fill="transparent" />

                <!-- Haste pendurada do galho -->
                <line x1="${fp.x}" y1="${fp.y - 24}" x2="${fp.x}" y2="${fp.y}" stroke="#78350f" stroke-width="2.5" stroke-linecap="round" />
                
                <!-- Folhinha no topo do fruto -->
                <ellipse cx="${fp.x + 6}" cy="${fp.y - 13}" rx="6" ry="3.5" fill="#10b981" transform="rotate(-30 ${fp.x + 6} ${fp.y - 13})" />
                
                <!-- Fruto com Brilho e Pulso -->
                <circle cx="${fp.x}" cy="${fp.y}" r="19" fill="${work.fruitColor}" stroke="#ffffff" stroke-width="2.5" filter="url(#fruitGlow)" />
                
                <!-- Ícone ou Letra do Ano (6, 7 ou 8) -->
                <text x="${fp.x}" y="${fp.y + 5}" text-anchor="middle" font-size="12" font-weight="900" fill="#ffffff" pointer-events="none">
                  ${work.grade.charAt(0)}
                </text>

                <!-- Tooltip Informativo ao Passar o Mouse ou Tocar -->
                <g class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <rect x="${fp.x - 90}" y="${fp.y - 52}" width="180" height="30" rx="8" fill="#0f172a" fill-opacity="0.95" />
                  <text x="${fp.x}" y="${fp.y - 33}" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">
                    ${work.genre} (Turma ${work.classes[0]})
                  </text>
                </g>
              </g>
            `;
          }).join('')}
        </g>
      </svg>
    `;
  }

  /* ==========================================================================
     RENDERIZADOR DAS PRODUÇÕES DAS ABAS (6º, 7º E 8º ANO)
     ========================================================================== */
  renderGrades() {
    this.renderGradeCards('ano6-grid', '6º Ano');
    this.renderGradeCards('ano7-grid', '7º Ano');
    this.renderGradeCards('ano8-grid', '8º Ano');
  }

  renderGradeCards(containerId, gradeName) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const works = WORKS_DATA.filter(w => w.grade === gradeName);
    
    container.innerHTML = works.map(w => {
      const badgeStyles = {
        emerald: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
        amber: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800",
        purple: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200 dark:border-purple-800"
      }[w.badgeColor] || "bg-emerald-100 text-emerald-800";

      return `
        <article class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col group hover:-translate-y-1">
          <!-- Thumbnail com Play Button -->
          <div class="relative aspect-video overflow-hidden bg-slate-900 cursor-pointer" onclick="window.app.openModal('${w.id}')">
            <img 
              src="${w.thumbnail}" 
              alt="${w.title}" 
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex items-center justify-center">
              <div class="w-13 h-13 rounded-2xl bg-white/95 dark:bg-slate-900/95 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-200">
                <svg class="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>

            <div class="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-lg bg-black/75 text-white text-[11px] font-semibold">
              ${w.duration}
            </div>

            <div class="absolute top-2.5 left-2.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-sm ${badgeStyles}">
              Turma ${w.classes.join('/')}
            </div>
          </div>

          <!-- Corpo do Card -->
          <div class="p-5 flex-1 flex flex-col">
            <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              ${w.genre}
            </span>

            <h3 class="font-extrabold text-slate-800 dark:text-white text-base leading-snug mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors cursor-pointer" onclick="window.app.openModal('${w.id}')">
              ${w.title}
            </h3>

            <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
              ${w.summary}
            </p>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium truncate max-w-[180px]">
                👥 ${w.authors}
              </span>
              <button 
                onclick="window.app.openModal('${w.id}')"
                class="font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Assistir / Ler</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  /* ==========================================================================
     MODAL DE VÍDEO (RESPONSIVO PARA CELULAR)
     ========================================================================== */
  openModal(workId) {
    const work = WORKS_DATA.find(w => w.id === workId);
    if (!work) return;

    this.currentWorkModal = work;
    const modal = document.getElementById('work-modal');
    if (!modal) return;

    const content = document.getElementById('work-modal-content');
    content.innerHTML = `
      <div class="flex flex-col lg:flex-row max-h-[92vh]">
        <!-- Player do Vídeo (playsinline e controles nativos touch) -->
        <div class="lg:w-7/12 bg-black flex flex-col justify-center relative shrink-0">
          <video 
            id="modal-video-player"
            controls 
            autoplay
            playsinline
            webkit-playsinline
            class="w-full max-h-[42vh] lg:max-h-[85vh] object-contain bg-black"
            poster="${work.thumbnail}"
          >
            <source src="assets/videos/${work.file}" type="video/mp4">
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        </div>

        <!-- Ficha Técnica e Foco Pedagógico -->
        <div class="lg:w-5/12 p-5 sm:p-7 overflow-y-auto max-h-[50vh] lg:max-h-[85vh] flex flex-col bg-white dark:bg-slate-900">
          <div class="flex items-center justify-between gap-3 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              ${work.grade} • Turma ${work.classes.join('/')}
            </span>
            <span class="text-xs text-slate-500 font-semibold">
              ⏱ ${work.duration}
            </span>
          </div>

          <h2 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
            ${work.title}
          </h2>

          <div class="space-y-3 mb-4 text-xs sm:text-sm flex-1">
            <div class="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/60">
              <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-0.5">
                Gênero: ${work.genre}
              </h4>
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                ${work.summary}
              </p>
            </div>

            <div>
              <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                Foco do Letramento:
              </h4>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                ${work.pedagogicalFocus}
              </p>
            </div>

            <div>
              <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                Equipe de Autoria:
              </h4>
              <p class="text-slate-700 dark:text-slate-200 font-semibold">
                ${work.authors}
              </p>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
            <button 
              onclick="window.app.navigateWork(-1)"
              class="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition cursor-pointer"
            >
              ← Anterior
            </button>

            <button 
              onclick="window.app.closeModal()"
              class="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition cursor-pointer"
            >
              Fechar
            </button>

            <button 
              onclick="window.app.navigateWork(1)"
              class="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition cursor-pointer"
            >
              Próximo →
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  closeModal() {
    const modal = document.getElementById('work-modal');
    if (!modal) return;
    const player = document.getElementById('modal-video-player');
    if (player) player.pause();

    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    this.currentWorkModal = null;
  }

  openBannerModal() {
    const modal = document.getElementById('banner-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  }

  closeBannerModal() {
    const modal = document.getElementById('banner-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  navigateWork(direction) {
    if (!this.currentWorkModal) return;
    const currentGrade = this.currentWorkModal.grade;
    const gradeWorks = WORKS_DATA.filter(w => w.grade === currentGrade);
    const curIdx = gradeWorks.findIndex(w => w.id === this.currentWorkModal.id);
    if (curIdx === -1) return;

    let nextIdx = curIdx + direction;
    if (nextIdx < 0) nextIdx = gradeWorks.length - 1;
    if (nextIdx >= gradeWorks.length) nextIdx = 0;

    this.openModal(gradeWorks[nextIdx].id);
  }

  setupFloatingLeaves() {
    const container = document.getElementById('leaves-container');
    if (!container) return;

    const leafIcons = ['🍃', '🌿', '🌱', '🍎', '🍇'];
    for (let i = 0; i < 10; i++) {
      const leaf = document.createElement('div');
      leaf.className = 'floating-leaf select-none';
      leaf.innerText = leafIcons[Math.floor(Math.random() * leafIcons.length)];
      leaf.style.left = `${Math.random() * 95}%`;
      leaf.style.top = `${-20 - (Math.random() * 50)}px`;
      leaf.style.fontSize = `${16 + Math.random() * 14}px`;
      leaf.style.animationDuration = `${10 + Math.random() * 12}s`;
      leaf.style.animationDelay = `${Math.random() * 8}s`;
      leaf.style.opacity = `${0.25 + Math.random() * 0.35}`;
      container.appendChild(leaf);
    }
  }
}

window.app = new VitrineApp();
document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});
