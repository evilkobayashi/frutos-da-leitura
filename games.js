/**
 * Jogos Interativos do Espaço Lúdico (PTL - Feira de Ciências)
 * - Quiz dos Gêneros Textuais
 * - Caça-Palavras Digital
 * - Jogo da Memória de Gêneros & Conceitos
 */

// Sintetizador de áudio simples usando Web Audio API
const SoundFX = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  play(type) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;
      if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(190, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'win') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.15);
        osc.frequency.setValueAtTime(783.99, now + 0.3);
        osc.frequency.setValueAtTime(1046.50, now + 0.45);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
        osc.start(now);
        osc.stop(now + 0.8);
      }
    } catch (e) {
      console.warn("SoundFX error:", e);
    }
  }
};

/* ==========================================================================
   1. QUIZ DOS GÊNEROS TEXTUAIS
   ========================================================================== */
class QuizGame {
  constructor() {
    this.currentIdx = 0;
    this.score = 0;
    this.answered = false;
    this.container = document.getElementById("quiz-container");
  }

  start() {
    this.currentIdx = 0;
    this.score = 0;
    this.answered = false;
    this.renderQuestion();
  }

  renderQuestion() {
    if (!this.container) return;

    if (this.currentIdx >= QUIZ_QUESTIONS.length) {
      this.renderSummary();
      return;
    }

    const q = QUIZ_QUESTIONS[this.currentIdx];
    this.answered = false;

    this.container.innerHTML = `
      <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 dark:border-slate-800 transition-all duration-300">
        <!-- Barra de Progresso e Gênero -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Gênero: ${q.genre}
            </span>
            <span class="text-xs text-slate-500 font-medium">Questão ${this.currentIdx + 1} de ${QUIZ_QUESTIONS.length}</span>
          </div>
          <div class="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-xl">
            Pontos: ${this.score * 20}
          </div>
        </div>

        <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 mb-6 overflow-hidden">
          <div class="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full transition-all duration-500" style="width: ${((this.currentIdx) / QUIZ_QUESTIONS.length) * 100}%"></div>
        </div>

        <h3 class="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-6 leading-relaxed">
          ${q.question}
        </h3>

        <!-- Opções -->
        <div class="space-y-3 mb-6" id="quiz-options">
          ${q.options.map((opt, idx) => `
            <button 
              onclick="window.quiz.selectOption(${idx})"
              id="quiz-opt-${idx}"
              class="w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700/80 hover:border-emerald-400 dark:hover:border-emerald-500 bg-white/70 dark:bg-slate-800/60 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-all duration-200 flex items-start gap-4 group cursor-pointer focus:outline-none"
            >
              <span class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 group-hover:bg-emerald-500 group-hover:text-white text-slate-700 dark:text-slate-200 flex items-center justify-center font-bold text-sm shrink-0 transition-colors">
                ${String.fromCharCode(65 + idx)}
              </span>
              <span class="text-slate-700 dark:text-slate-200 font-medium text-base sm:text-lg pt-0.5 leading-snug">
                ${opt}
              </span>
            </button>
          `).join('')}
        </div>

        <!-- Feedback e Botão Avançar -->
        <div id="quiz-feedback" class="hidden rounded-2xl p-4 sm:p-5 mb-6 animate-fade-in"></div>

        <div class="flex justify-end">
          <button 
            id="quiz-next-btn"
            onclick="window.quiz.nextQuestion()"
            class="hidden px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer items-center gap-2"
          >
            <span>Próxima Pergunta</span>
            <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    `;
  }

  selectOption(selectedIdx) {
    if (this.answered) return;
    this.answered = true;

    const q = QUIZ_QUESTIONS[this.currentIdx];
    const isCorrect = selectedIdx === q.correct;
    if (isCorrect) {
      this.score++;
      SoundFX.play('correct');
      if (typeof confetti === 'function') {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      }
    } else {
      SoundFX.play('wrong');
    }

    // Estilizar botões
    q.options.forEach((_, idx) => {
      const btn = document.getElementById(`quiz-opt-${idx}`);
      if (!btn) return;
      btn.disabled = true;
      btn.classList.remove('hover:border-emerald-400', 'hover:bg-emerald-50/50');
      
      if (idx === q.correct) {
        btn.classList.remove('border-slate-200', 'dark:border-slate-700/80', 'bg-white/70');
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-950/50', 'text-emerald-900', 'dark:text-emerald-200');
        const badge = btn.querySelector('span:first-child');
        if (badge) {
          badge.className = 'w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
          badge.innerHTML = '✓';
        }
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.remove('border-slate-200', 'dark:border-slate-700/80');
        btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-900', 'dark:text-rose-200');
        const badge = btn.querySelector('span:first-child');
        if (badge) {
          badge.className = 'w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold text-sm shrink-0';
          badge.innerHTML = '✗';
        }
      } else {
        btn.classList.add('opacity-50');
      }
    });

    // Exibir Feedback
    const fb = document.getElementById("quiz-feedback");
    const nextBtn = document.getElementById("quiz-next-btn");
    if (fb) {
      fb.classList.remove('hidden');
      if (isCorrect) {
        fb.className = "rounded-2xl p-5 mb-6 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200";
        fb.innerHTML = `
          <div class="flex items-start gap-3">
            <span class="text-2xl">🎉</span>
            <div>
              <p class="font-bold text-base text-emerald-700 dark:text-emerald-300">Resposta Correta!</p>
              <p class="text-sm mt-1 leading-relaxed">${q.explanation}</p>
            </div>
          </div>
        `;
      } else {
        fb.className = "rounded-2xl p-5 mb-6 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200";
        fb.innerHTML = `
          <div class="flex items-start gap-3">
            <span class="text-2xl">💡</span>
            <div>
              <p class="font-bold text-base text-rose-700 dark:text-rose-300">Quase lá!</p>
              <p class="text-sm mt-1 leading-relaxed">${q.explanation}</p>
            </div>
          </div>
        `;
      }
    }

    if (nextBtn) {
      nextBtn.classList.remove('hidden');
      nextBtn.classList.add('inline-flex');
    }
  }

  nextQuestion() {
    this.currentIdx++;
    this.renderQuestion();
  }

  renderSummary() {
    SoundFX.play('win');
    if (typeof confetti === 'function') {
      confetti({ particleCount: 100, spread: 100, origin: { y: 0.5 } });
    }

    const total = QUIZ_QUESTIONS.length;
    const percent = Math.round((this.score / total) * 100);

    let message = "Parabéns pelo empenho!";
    let medal = "🥉";
    if (percent === 100) {
      message = "Excelente! Você é um verdadeiro Mestre dos Gêneros Textuais!";
      medal = "🏆";
    } else if (percent >= 60) {
      message = "Muito bom! Seus conhecimentos em PTL estão afiados!";
      medal = "🥈";
    }

    this.container.innerHTML = `
      <div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-100 dark:border-slate-800 text-center animate-scale-up max-w-xl mx-auto">
        <div class="text-6xl sm:text-7xl mb-4 animate-bounce">${medal}</div>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          Quiz Concluído!
        </h3>
        <p class="text-slate-600 dark:text-slate-300 mb-6 text-base sm:text-lg">
          ${message}
        </p>

        <div class="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800 mb-8">
          <div class="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-1">
            ${this.score} / ${total}
          </div>
          <p class="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Respostas Corretas (${percent}%)
          </p>
        </div>

        <!-- Certificado Simbólico -->
        <div class="p-4 rounded-xl border border-dashed border-emerald-300 dark:border-emerald-700 bg-emerald-50/50 dark:bg-emerald-950/30 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 mb-8 leading-relaxed">
          🎓 <strong>Certificado Digital de Leitor Protagonista:</strong> Reconhecimento concedido pela Mostra Cultural PTL 2026 - Município de Queimados.
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <button 
            onclick="window.quiz.start()"
            class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Jogar Novamente
          </button>
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   2. CAÇA-PALAVRAS DIGITAL DE PTL
   ========================================================================== */
class WordSearchGame {
  constructor() {
    this.size = 12;
    this.words = [...WORDSEARCH_WORDS];
    this.foundWords = new Set();
    this.grid = [];
    this.isSelecting = false;
    this.selectedCells = [];
    this.container = document.getElementById("wordsearch-container");
  }

  start() {
    this.foundWords.clear();
    this.selectedCells = [];
    this.isSelecting = false;
    this.generateGrid();
    this.render();
  }

  generateGrid() {
    // Inicializar matriz vazia
    this.grid = Array.from({ length: this.size }, () => Array(this.size).fill(''));

    // Inserir palavras em direções horizontais e verticais
    const directions = [
      [0, 1],  // Horizontal
      [1, 0],  // Vertical
      [1, 1]   // Diagonal
    ];

    for (const rawWord of this.words) {
      const word = rawWord.toUpperCase();
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < 100) {
        attempts++;
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const [dr, dc] = dir;
        const maxRow = this.size - (dr * (word.length - 1));
        const maxCol = this.size - (dc * (word.length - 1));

        if (maxRow <= 0 || maxCol <= 0) continue;

        const startR = Math.floor(Math.random() * maxRow);
        const startC = Math.floor(Math.random() * maxCol);

        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const r = startR + (dr * i);
          const c = startC + (dc * i);
          if (this.grid[r][c] !== '' && this.grid[r][c] !== word[i]) {
            canPlace = false;
            break;
          }
        }

        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            const r = startR + (dr * i);
            const c = startC + (dc * i);
            this.grid[r][c] = word[i];
          }
          placed = true;
        }
      }
    }

    // Preencher células restantes com letras aleatórias
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (this.grid[r][c] === '') {
          this.grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
      }
    }
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 dark:border-slate-800 transition-all">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
              Caça-Palavras Literário
            </h3>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Encontre os 10 termos-chave do Projeto da Árvore e da disciplina PTL!
            </p>
          </div>
          <div class="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-4 py-2 rounded-xl">
            Encontradas: <span id="ws-count">${this.foundWords.size}</span> / ${this.words.length}
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <!-- Grade do Caça-Palavras -->
          <div class="lg:col-span-2 overflow-x-auto pb-2 flex justify-center">
            <div 
              id="ws-grid" 
              class="grid gap-1.5 p-3 bg-emerald-50/50 dark:bg-slate-800/50 rounded-2xl border border-emerald-200 dark:border-slate-700 select-none touch-none"
              style="grid-template-columns: repeat(${this.size}, minmax(0, 1fr)); width: 100%; max-width: 460px; aspect-ratio: 1;"
            >
              ${this.grid.map((row, r) => 
                row.map((letter, c) => `
                  <div 
                    data-r="${r}" 
                    data-c="${c}"
                    class="ws-cell w-full h-full flex items-center justify-center font-bold text-xs sm:text-sm md:text-base rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700/60 cursor-pointer transition-all hover:bg-emerald-100 hover:scale-105 select-none"
                  >
                    ${letter}
                  </div>
                `).join('')
              ).join('')}
            </div>
          </div>

          <!-- Lista de Palavras -->
          <div class="bg-slate-50/80 dark:bg-slate-800/40 rounded-2xl p-4 sm:p-5 border border-slate-200/70 dark:border-slate-700">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Palavras para Encontrar:</h4>
            <div class="flex flex-wrap gap-2" id="ws-words-list">
              ${this.words.map(w => `
                <span 
                  id="ws-word-${w}"
                  class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    this.foundWords.has(w) 
                      ? 'bg-emerald-500 text-white line-through scale-95 shadow-sm' 
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }"
                >
                  ${w}
                </span>
              `).join('')}
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button 
                onclick="window.wordSearch.start()"
                class="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
              >
                🔄 Reiniciar Grade
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachGridEvents();
  }

  attachGridEvents() {
    const gridEl = document.getElementById("ws-grid");
    if (!gridEl) return;

    const cells = gridEl.querySelectorAll(".ws-cell");

    const getCell = (el) => {
      if (!el || !el.dataset) return null;
      const r = parseInt(el.dataset.r, 10);
      const c = parseInt(el.dataset.c, 10);
      if (isNaN(r) || isNaN(c)) return null;
      return { r, c, el };
    };

    const handleStart = (target) => {
      const cell = getCell(target);
      if (!cell) return;
      this.isSelecting = true;
      this.selectedCells = [cell];
      this.highlightSelection();
    };

    const handleMove = (target) => {
      if (!this.isSelecting) return;
      const cell = getCell(target);
      if (!cell) return;
      const last = this.selectedCells[this.selectedCells.length - 1];
      if (last.r === cell.r && last.c === cell.c) return;

      // Se já está na seleção, pode ser volta
      const existingIdx = this.selectedCells.findIndex(c => c.r === cell.r && c.c === cell.c);
      if (existingIdx !== -1) {
        this.selectedCells = this.selectedCells.slice(0, existingIdx + 1);
      } else {
        this.selectedCells.push(cell);
      }
      this.highlightSelection();
    };

    const handleEnd = () => {
      if (!this.isSelecting) return;
      this.isSelecting = false;
      this.checkWord();
      this.clearSelectionHighlight();
    };

    cells.forEach(c => {
      c.addEventListener("mousedown", (e) => handleStart(e.currentTarget));
      c.addEventListener("mouseenter", (e) => handleMove(e.currentTarget));
    });

    window.addEventListener("mouseup", handleEnd);

    // Suporte a Touch
    gridEl.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      handleStart(target);
    }, { passive: false });

    gridEl.addEventListener("touchmove", (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      handleMove(target);
    }, { passive: false });

    gridEl.addEventListener("touchend", handleEnd);
  }

  highlightSelection() {
    // Resetar destaques provisórios
    const gridEl = document.getElementById("ws-grid");
    if (!gridEl) return;
    gridEl.querySelectorAll(".ws-cell").forEach(cell => {
      if (!cell.classList.contains("ws-found")) {
        cell.classList.remove("bg-emerald-400", "text-white", "scale-105");
      }
    });

    this.selectedCells.forEach(cell => {
      cell.el.classList.add("bg-emerald-400", "text-white", "scale-105");
    });
  }

  clearSelectionHighlight() {
    const gridEl = document.getElementById("ws-grid");
    if (!gridEl) return;
    gridEl.querySelectorAll(".ws-cell").forEach(cell => {
      if (!cell.classList.contains("ws-found")) {
        cell.classList.remove("bg-emerald-400", "text-white", "scale-105");
      }
    });
    this.selectedCells = [];
  }

  checkWord() {
    if (this.selectedCells.length < 2) return;
    const formed = this.selectedCells.map(c => this.grid[c.r][c.c]).join("");
    const reversed = formed.split("").reverse().join("");

    let matchedWord = null;
    if (this.words.includes(formed) && !this.foundWords.has(formed)) {
      matchedWord = formed;
    } else if (this.words.includes(reversed) && !this.foundWords.has(reversed)) {
      matchedWord = reversed;
    }

    if (matchedWord) {
      this.foundWords.add(matchedWord);
      SoundFX.play('correct');
      if (typeof confetti === 'function') {
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
      }

      // Marcar células permanentemente
      this.selectedCells.forEach(c => {
        c.el.classList.add("ws-found", "bg-emerald-600", "text-white");
      });

      // Atualizar badge da palavra
      const badge = document.getElementById(`ws-word-${matchedWord}`);
      if (badge) {
        badge.className = "px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 text-white line-through scale-95 shadow-sm transition-all";
      }

      const countEl = document.getElementById("ws-count");
      if (countEl) countEl.innerText = this.foundWords.size;

      // Vitória completa
      if (this.foundWords.size === this.words.length) {
        SoundFX.play('win');
        if (typeof confetti === 'function') {
          confetti({ particleCount: 100, spread: 90, origin: { y: 0.5 } });
        }
      }
    }
  }
}

/* ==========================================================================
   3. JOGO DA MEMÓRIA DOS GÊNEROS TEXTUAIS
   ========================================================================== */
class MemoryGame {
  constructor() {
    this.cards = [];
    this.flipped = [];
    this.matchedCount = 0;
    this.moves = 0;
    this.container = document.getElementById("memory-container");
  }

  start() {
    this.flipped = [];
    this.matchedCount = 0;
    this.moves = 0;
    // Duplicar e embaralhar
    this.cards = [...MEMORY_CARDS].sort(() => Math.random() - 0.5);
    this.render();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 dark:border-slate-800 transition-all">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
              Jogo da Memória dos Gêneros
            </h3>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Combine cada gênero textual com sua definição pedagógica!
            </p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-sm font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
              Movimentos: <span id="mem-moves">0</span>
            </span>
            <button 
              onclick="window.memoryGame.start()"
              class="px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 border border-emerald-200 dark:border-emerald-800 transition cursor-pointer"
            >
              🔄 Embaralhar
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto" id="memory-grid">
          ${this.cards.map((c, idx) => `
            <div 
              onclick="window.memoryGame.flip(${idx})"
              id="mem-card-${idx}"
              class="mem-card group aspect-[4/3] rounded-2xl cursor-pointer perspective-1000 transition-transform active:scale-95"
            >
              <div class="w-full h-full relative rounded-2xl border-2 border-emerald-200 dark:border-slate-700 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-3 text-center shadow-md transition-all duration-300 mem-card-inner">
                <span class="text-2xl sm:text-3xl font-black text-white/70 group-hover:scale-110 transition-transform">
                  🌿
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  flip(idx) {
    if (this.flipped.length >= 2) return;
    const cardData = this.cards[idx];
    const cardEl = document.getElementById(`mem-card-${idx}`);
    if (!cardEl || cardEl.classList.contains("mem-matched") || this.flipped.some(f => f.idx === idx)) return;

    // Revelar carta
    cardEl.innerHTML = `
      <div class="w-full h-full rounded-2xl border-2 border-emerald-400 bg-white dark:bg-slate-800 flex flex-col items-center justify-center p-3 text-center shadow-lg animate-flip-in">
        <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
          ${cardData.label}
        </span>
        <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-tight">
          ${cardData.desc}
        </p>
      </div>
    `;

    this.flipped.push({ idx, data: cardData, el: cardEl });

    if (this.flipped.length === 2) {
      this.moves++;
      const movesEl = document.getElementById("mem-moves");
      if (movesEl) movesEl.innerText = this.moves;

      const [c1, c2] = this.flipped;
      if (c1.data.pairId === c2.data.pairId) {
        // Acertou par
        SoundFX.play('correct');
        this.matchedCount++;
        c1.el.classList.add("mem-matched");
        c2.el.classList.add("mem-matched");
        this.flipped = [];

        if (this.matchedCount === this.cards.length / 2) {
          SoundFX.play('win');
          if (typeof confetti === 'function') {
            confetti({ particleCount: 80, spread: 80, origin: { y: 0.5 } });
          }
        }
      } else {
        // Errou par
        SoundFX.play('wrong');
        setTimeout(() => {
          this.unflip(c1);
          this.unflip(c2);
          this.flipped = [];
        }, 1200);
      }
    }
  }

  unflip(c) {
    c.el.innerHTML = `
      <div class="w-full h-full relative rounded-2xl border-2 border-emerald-200 dark:border-slate-700 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-3 text-center shadow-md transition-all duration-300">
        <span class="text-2xl sm:text-3xl font-black text-white/70">🌿</span>
      </div>
    `;
  }
}

// Inicializar instâncias globais
window.quiz = new QuizGame();
window.wordSearch = new WordSearchGame();
window.memoryGame = new MemoryGame();
