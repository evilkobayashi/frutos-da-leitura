/**
 * Gerador de "Frutos Tecnológicos" (QR Codes)
 * Para a Instalação Física da "Árvore do Conhecimento" (Etapa 2 do Projeto Pedagógico)
 * Permite aos professores e alunos imprimir os crachás/frutos em formato A4 para plastificação e corte.
 */

class FruitQRStudio {
  constructor() {
    this.container = document.getElementById("qr-studio-container");
    this.currentFilter = "all";
  }

  init() {
    this.render();
  }

  setFilter(grade) {
    this.currentFilter = grade;
    this.render();
  }

  render() {
    if (!this.container) return;

    let filtered = WORKS_DATA;
    if (this.currentFilter !== "all") {
      filtered = WORKS_DATA.filter(w => w.grade === this.currentFilter);
    }

    this.container.innerHTML = `
      <div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 dark:border-slate-800">
        <!-- Cabeçalho Informativo -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 mb-2">
              <span>Etapa 2 do Projeto</span> • <span>A Instalação Física</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
              Frutos Tecnológicos (QR Codes para Impressão)
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              Gere, recorte e plastifique os "frutos digitais" coloridos para pendurar na Árvore do Conhecimento feita de material reciclável no pátio da escola.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button 
              onclick="window.print()" 
              class="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Imprimir Frutos (A4)</span>
            </button>
          </div>
        </div>

        <!-- Filtros por Ano Escolar -->
        <div class="flex flex-wrap gap-2 my-6">
          <button 
            onclick="window.fruitQR.setFilter('all')"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              this.currentFilter === 'all' 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }"
          >
            Todos os Frutos (${WORKS_DATA.length})
          </button>
          <button 
            onclick="window.fruitQR.setFilter('6º Ano')"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              this.currentFilter === '6º Ano' 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }"
          >
            🍏 6º Ano (Biografias & Entrevistas)
          </button>
          <button 
            onclick="window.fruitQR.setFilter('7º Ano')"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              this.currentFilter === '7º Ano' 
                ? 'bg-amber-600 text-white shadow-md' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }"
          >
            🍊 7º Ano (Reportagens)
          </button>
          <button 
            onclick="window.fruitQR.setFilter('8º Ano')"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              this.currentFilter === '8º Ano' 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }"
          >
            🍇 8º Ano (Crônicas & Fábulas)
          </button>
        </div>

        <!-- Grade de Frutos Tecnológicos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="qr-fruit-cards-grid">
          ${filtered.map(w => this.renderFruitCard(w)).join('')}
        </div>
      </div>
    `;

    // Gerar QR Codes nos elementos
    this.generateQRCodes(filtered);
  }

  renderFruitCard(w) {
    const colorClasses = {
      emerald: {
        border: "border-emerald-500",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        badge: "bg-emerald-600 text-white",
        leaf: "text-emerald-500"
      },
      amber: {
        border: "border-amber-500",
        bg: "bg-amber-50 dark:bg-amber-950/30",
        badge: "bg-amber-600 text-white",
        leaf: "text-amber-500"
      },
      purple: {
        border: "border-purple-500",
        bg: "bg-purple-50 dark:bg-purple-950/30",
        badge: "bg-purple-600 text-white",
        leaf: "text-purple-500"
      }
    }[w.badgeColor] || {
      border: "border-emerald-500",
      bg: "bg-emerald-50",
      badge: "bg-emerald-600 text-white",
      leaf: "text-emerald-500"
    };

    return `
      <div class="fruit-print-card relative rounded-3xl border-2 ${colorClasses.border} ${colorClasses.bg} p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
        <!-- Folha decorativa do fruto -->
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <svg class="w-8 h-8 ${colorClasses.leaf} drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>

        <!-- Badges de Turma e Gênero -->
        <div class="flex items-center gap-2 mt-2 mb-3">
          <span class="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${colorClasses.badge}">
            ${w.grade} • Turma ${w.classes.join('/')}
          </span>
          <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
            ${w.genre}
          </span>
        </div>

        <h4 class="font-extrabold text-slate-800 dark:text-white text-base leading-snug line-clamp-2 min-h-[44px] mb-4">
          ${w.title}
        </h4>

        <!-- Container do QR Code -->
        <div class="bg-white p-3 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 mb-4 inline-block">
          <div id="qrcode-${w.id}" class="w-[140px] h-[140px] flex items-center justify-center"></div>
        </div>

        <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4">
          Aponte a câmera do celular para assistir e ler a produção completa da equipe.
        </p>

        <!-- Botão Interativo -->
        <button 
          onclick="window.app.openModal('${w.id}')"
          class="w-full py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>Abrir Trabalho Virtual</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>
    `;
  }

  generateQRCodes(works) {
    setTimeout(() => {
      works.forEach(w => {
        const container = document.getElementById(`qrcode-${w.id}`);
        if (!container) return;
        container.innerHTML = "";

        // O link gerado aponta para a âncora do trabalho no site
        const currentUrl = window.location.href.split('#')[0];
        const targetUrl = `${currentUrl}#${w.id}`;

        if (typeof QRCode !== "undefined") {
          new QRCode(container, {
            text: targetUrl,
            width: 140,
            height: 140,
            colorDark: w.fruitColor,
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
        } else {
          // Fallback SVG QR placeholder estilizado
          container.innerHTML = `
            <svg class="w-28 h-28 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
              <rect x="14" y="14" width="3" height="3"></rect>
              <rect x="18" y="18" width="3" height="3"></rect>
            </svg>
          `;
        }
      });
    }, 100);
  }
}

window.fruitQR = new FruitQRStudio();
