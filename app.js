/**
 * 組織學 Vol.8 皮表系統 複習測驗系統 互動邏輯 (app.js)
 * 50 題題庫隨機抽取 20 題，支援共筆真實切片圖譜與點擊放大 Lightbox
 */

(function () {
  'use strict';

  // -------------------- 1. 全域狀態 --------------------
  const masterQuestions = (typeof MASTER_QUIZ_QUESTIONS !== 'undefined')
    ? MASTER_QUIZ_QUESTIONS
    : QUIZ_QUESTIONS;

  let sessionPoolSize = 20; // 預設抽考 20 題，可切換為 50 題
  let currentSessionQuestions = []; // 當前輪次的題目（20 或 50 題）
  let filteredQuestions = []; // 篩選後的當前題目列表
  let currentIndex = 0;
  let mode = 'instant'; // 'instant' (即時刷題) 或 'exam' (模擬測驗)
  let userAnswers = {}; // { [qId]: optionIndex }
  let bookmarked = new Set(); // Set of qId
  let currentFilter = 'all';
  let isExamSubmitted = false;

  // DOM 元素快取
  const DOM = {
    // 頂部
    btnSessionMode: document.getElementById('btn-session-mode'),
    sessionIcon: document.getElementById('session-icon'),
    sessionText: document.getElementById('session-text'),
    btnModeToggle: document.getElementById('btn-mode-toggle'),
    modeIcon: document.getElementById('mode-icon'),
    modeText: document.getElementById('mode-text'),
    btnDrawNew: document.getElementById('btn-draw-new'),
    btnOpenPalette: document.getElementById('btn-open-palette'),
    progressBar: document.getElementById('progress-bar'),
    statCurrentNum: document.getElementById('stat-current-num'),
    statTotalNum: document.getElementById('stat-total-num'),
    statAccuracy: document.getElementById('stat-accuracy'),
    statAnsweredCount: document.getElementById('stat-answered-count'),
    filterBar: document.getElementById('filter-bar'),
    countAll: document.getElementById('count-all'),
    countWrong: document.getElementById('count-wrong'),
    countBookmarked: document.getElementById('count-bookmarked'),

    // 卡片
    cardQIndex: document.getElementById('card-q-index'),
    cardQCat: document.getElementById('card-q-cat'),
    cardPoolId: document.getElementById('card-pool-id'),
    btnCardBookmark: document.getElementById('btn-card-bookmark'),
    cardQStem: document.getElementById('card-q-stem'),
    cardImageBox: document.getElementById('card-image-box'),
    cardOptionsList: document.getElementById('card-options-list'),
    cardExplanation: document.getElementById('card-explanation'),
    cardResultBadge: document.getElementById('card-result-badge'),
    cardRefPill: document.getElementById('card-ref-pill'),
    cardExplanationText: document.getElementById('card-explanation-text'),

    // 底部導航
    btnPrev: document.getElementById('btn-prev'),
    btnPaletteBottom: document.getElementById('btn-palette-bottom'),
    btnNext: document.getElementById('btn-next'),

    // 題號 Modal
    paletteModal: document.getElementById('palette-modal'),
    paletteGrid: document.getElementById('palette-grid'),
    btnClosePalette: document.getElementById('btn-close-palette'),

    // 圖片光箱 Modal
    lightboxModal: document.getElementById('lightbox-modal'),
    lightboxImg: document.getElementById('lightbox-img'),
    btnCloseLightbox: document.getElementById('btn-close-lightbox'),

    // 結算 Modal
    resultModal: document.getElementById('result-modal'),
    btnCloseResult: document.getElementById('btn-close-result'),
    modalScoreNum: document.getElementById('modal-score-num'),
    modalEvalText: document.getElementById('modal-eval-text'),
    modalCorrectCount: document.getElementById('modal-correct-count'),
    modalWrongCount: document.getElementById('modal-wrong-count'),
    modalUnansweredCount: document.getElementById('modal-unanswered-count'),
    btnReviewWrong: document.getElementById('btn-review-wrong'),
    btnDrawNextRound: document.getElementById('btn-draw-next-round'),
    btnRestartQuiz: document.getElementById('btn-restart-quiz')
  };

  // -------------------- 2. 初始化 --------------------
  function init() {
    bindEvents();
    drawNewSession();
  }

  // -------------------- 3. 抽題邏輯（隨機抽取 20 題） --------------------
  function drawNewSession() {
    const poolCopy = JSON.parse(JSON.stringify(masterQuestions));
    poolCopy.sort(() => Math.random() - 0.5);

    const targetSize = Math.min(sessionPoolSize, poolCopy.length);
    currentSessionQuestions = poolCopy.slice(0, targetSize);

    // 隨機打亂每個題目的選項順序
    currentSessionQuestions.forEach(q => {
      const paired = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.answer }));
      paired.sort(() => Math.random() - 0.5);
      q.options = paired.map(p => p.text);
      q.answer = paired.findIndex(p => p.isCorrect);
    });

    userAnswers = {};
    isExamSubmitted = false;
    currentIndex = 0;
    DOM.countAll.textContent = currentSessionQuestions.length;

    applyFilter('all');
  }

  // -------------------- 4. 事件綁定 --------------------
  function bindEvents() {
    // 抽新題組
    DOM.btnDrawNew.addEventListener('click', drawNewSession);

    // 題量模式切換（20題抽考 / 50題全刷）
    DOM.btnSessionMode.addEventListener('click', toggleSessionSize);

    // 作答模式切換（即時刷題 / 模擬測驗）
    DOM.btnModeToggle.addEventListener('click', toggleMode);

    // 題號導航板
    DOM.btnOpenPalette.addEventListener('click', openPalette);
    DOM.btnPaletteBottom.addEventListener('click', openPalette);
    DOM.btnClosePalette.addEventListener('click', closePalette);
    DOM.paletteModal.addEventListener('click', (e) => {
      if (e.target === DOM.paletteModal) closePalette();
    });

    // 圖片 Lightbox 關閉
    DOM.btnCloseLightbox.addEventListener('click', closeLightbox);
    DOM.lightboxModal.addEventListener('click', (e) => {
      if (e.target === DOM.lightboxModal) closeLightbox();
    });

    // 收藏當前題目
    DOM.btnCardBookmark.addEventListener('click', toggleBookmarkCurrent);

    // 上一題 / 下一題
    DOM.btnPrev.addEventListener('click', goToPrev);
    DOM.btnNext.addEventListener('click', handleNextButton);

    // 篩選標籤
    DOM.filterBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip-filter');
      if (!chip) return;
      applyFilter(chip.dataset.filter);
    });

    // 結算彈窗按鈕
    DOM.btnCloseResult.addEventListener('click', () => DOM.resultModal.classList.remove('open'));
    DOM.btnRestartQuiz.addEventListener('click', restartCurrentSession);
    DOM.btnDrawNextRound.addEventListener('click', () => {
      DOM.resultModal.classList.remove('open');
      drawNewSession();
    });
    DOM.btnReviewWrong.addEventListener('click', () => {
      DOM.resultModal.classList.remove('open');
      applyFilter('wrong');
    });

    // 鍵盤左右鍵快捷鍵
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') handleNextButton();
      if (e.key === 'Escape') {
        closePalette();
        closeLightbox();
        DOM.resultModal.classList.remove('open');
      }
    });
  }

  // -------------------- 5. 篩選與渲染 --------------------
  function applyFilter(filterType) {
    currentFilter = filterType;

    document.querySelectorAll('.chip-filter').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.filter === filterType);
    });

    if (filterType === 'all') {
      filteredQuestions = [...currentSessionQuestions];
    } else if (filterType === 'wrong') {
      filteredQuestions = currentSessionQuestions.filter(
        q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== q.answer
      );
    } else if (filterType === 'bookmarked') {
      filteredQuestions = currentSessionQuestions.filter(q => bookmarked.has(q.id));
    } else {
      filteredQuestions = currentSessionQuestions.filter(q => q.category === filterType);
    }

    currentIndex = 0;
    renderCurrentQuestion();
    updateHeaderStats();
  }

  function renderCurrentQuestion() {
    if (filteredQuestions.length === 0) {
      DOM.cardQIndex.textContent = "Q-";
      DOM.cardQCat.textContent = "無題目";
      DOM.cardPoolId.textContent = "";
      DOM.cardQStem.textContent = "目前篩選條件下沒有符合的題目（例如本輪尚無錯題或收藏題）。";
      DOM.cardImageBox.style.display = "none";
      DOM.cardImageBox.innerHTML = "";
      DOM.cardOptionsList.innerHTML = "";
      DOM.cardExplanation.style.display = "none";
      DOM.btnPrev.disabled = true;
      DOM.btnNext.disabled = true;
      DOM.btnCardBookmark.style.display = "none";
      return;
    }

    DOM.btnCardBookmark.style.display = "inline-block";
    const q = filteredQuestions[currentIndex];
    const isAnswered = userAnswers[q.id] !== undefined;
    const chosenIndex = userAnswers[q.id];
    const isBookmarked = bookmarked.has(q.id);

    // 題號與分類
    DOM.cardQIndex.textContent = `Q${currentIndex + 1}`;
    DOM.cardQCat.textContent = q.category;
    DOM.cardPoolId.textContent = `#題庫第${q.id}題`;
    DOM.cardQStem.textContent = q.question;
    DOM.btnCardBookmark.classList.toggle('bookmarked', isBookmarked);

    // 圖片渲染（若有共筆切片/圖譜）
    if (q.image) {
      DOM.cardImageBox.style.display = 'block';
      DOM.cardImageBox.innerHTML = `
        <div class="img-wrapper" id="img-trigger-${q.id}" title="點擊可全螢幕檢視">
          <img src="${q.image}" alt="組織切片與解剖圖譜" class="question-img" loading="eager">
          <div class="img-zoom-badge">🔍 輕觸放大</div>
        </div>
      `;
      const trigger = document.getElementById(`img-trigger-${q.id}`);
      if (trigger) {
        trigger.addEventListener('click', () => openLightbox(q.image));
      }
    } else {
      DOM.cardImageBox.style.display = 'none';
      DOM.cardImageBox.innerHTML = '';
    }

    // 選項渲染
    const letters = ['A', 'B', 'C', 'D'];
    DOM.cardOptionsList.innerHTML = '';

    q.options.forEach((optText, idx) => {
      const optDiv = document.createElement('div');
      optDiv.className = 'option-item';
      optDiv.dataset.index = idx;

      if (mode === 'instant' && isAnswered) {
        optDiv.classList.add('disabled');
        if (idx === q.answer) {
          optDiv.classList.add('correct');
        } else if (idx === chosenIndex) {
          optDiv.classList.add('wrong');
        }
      } else if (mode === 'exam') {
        if (isExamSubmitted) {
          optDiv.classList.add('disabled');
          if (idx === q.answer) {
            optDiv.classList.add('correct');
          } else if (idx === chosenIndex) {
            optDiv.classList.add('wrong');
          }
        } else if (isAnswered && idx === chosenIndex) {
          optDiv.classList.add('selected');
        }
      }

      optDiv.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${optText}</span>
      `;

      optDiv.addEventListener('click', () => selectOption(q.id, idx));
      DOM.cardOptionsList.appendChild(optDiv);
    });

    // 詳解區域
    const shouldShowExplanation = (mode === 'instant' && isAnswered) || (mode === 'exam' && isExamSubmitted);
    if (shouldShowExplanation) {
      DOM.cardExplanation.style.display = 'block';
      const isCorrect = chosenIndex === q.answer;
      DOM.cardResultBadge.textContent = isCorrect ? '作答正確 ✓' : '作答錯誤 ✕';
      DOM.cardResultBadge.className = `result-badge ${isCorrect ? 'correct' : 'wrong'}`;
      DOM.cardRefPill.textContent = q.ref;
      DOM.cardExplanationText.textContent = q.explanation;
    } else {
      DOM.cardExplanation.style.display = 'none';
    }

    // 導航按鈕狀態
    DOM.btnPrev.disabled = currentIndex === 0;

    if (mode === 'exam' && !isExamSubmitted && currentIndex === filteredQuestions.length - 1) {
      DOM.btnNext.textContent = '完成交卷 📝';
      DOM.btnNext.classList.add('primary');
    } else if (currentIndex === filteredQuestions.length - 1) {
      DOM.btnNext.textContent = '查看成果 📊';
      DOM.btnNext.classList.add('primary');
    } else {
      DOM.btnNext.textContent = '下一題 →';
      DOM.btnNext.classList.add('primary');
    }

    updateHeaderStats();
  }

  // -------------------- 6. 作答邏輯 --------------------
  function selectOption(qId, selectedIdx) {
    const q = filteredQuestions.find(item => item.id === qId);
    if (!q) return;

    if (mode === 'instant' && userAnswers[qId] !== undefined) return;
    if (mode === 'exam' && isExamSubmitted) return;

    userAnswers[qId] = selectedIdx;
    renderCurrentQuestion();
    updateHeaderStats();
  }

  function handleNextButton() {
    if (currentIndex < filteredQuestions.length - 1) {
      currentIndex++;
      renderCurrentQuestion();
    } else {
      submitExam();
    }
  }

  function goToPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      renderCurrentQuestion();
    }
  }

  function toggleBookmarkCurrent() {
    const q = filteredQuestions[currentIndex];
    if (!q) return;
    if (bookmarked.has(q.id)) {
      bookmarked.delete(q.id);
    } else {
      bookmarked.add(q.id);
    }
    DOM.btnCardBookmark.classList.toggle('bookmarked', bookmarked.has(q.id));
    updateHeaderStats();
  }

  // -------------------- 7. 圖片 Lightbox 放大 --------------------
  function openLightbox(src) {
    DOM.lightboxImg.src = src;
    DOM.lightboxModal.classList.add('open');
  }

  function closeLightbox() {
    DOM.lightboxModal.classList.remove('open');
    DOM.lightboxImg.src = '';
  }

  // -------------------- 8. 統計與資訊更新 --------------------
  function updateHeaderStats() {
    const totalCount = filteredQuestions.length;
    DOM.statCurrentNum.textContent = totalCount > 0 ? (currentIndex + 1) : 0;
    DOM.statTotalNum.textContent = totalCount;

    let answeredCount = 0;
    let correctCount = 0;
    let wrongCount = 0;

    currentSessionQuestions.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans !== undefined) {
        answeredCount++;
        if (ans === q.answer) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    DOM.statAnsweredCount.textContent = answeredCount;
    DOM.countWrong.textContent = wrongCount;
    DOM.countBookmarked.textContent = currentSessionQuestions.filter(q => bookmarked.has(q.id)).length;

    if (answeredCount > 0) {
      const accuracy = Math.round((correctCount / answeredCount) * 100);
      DOM.statAccuracy.textContent = `${accuracy}%`;
    } else {
      DOM.statAccuracy.textContent = '--';
    }

    const progressPercent = totalCount > 0 ? ((currentIndex + 1) / totalCount) * 100 : 0;
    DOM.progressBar.style.width = `${progressPercent}%`;
  }

  // -------------------- 9. 題號導航板 --------------------
  function openPalette() {
    DOM.paletteGrid.innerHTML = '';

    filteredQuestions.forEach((q, idx) => {
      const cell = document.createElement('div');
      cell.className = 'palette-cell';
      cell.textContent = idx + 1;

      if (idx === currentIndex) {
        cell.classList.add('current');
      }

      const isAnswered = userAnswers[q.id] !== undefined;
      const chosen = userAnswers[q.id];

      if ((mode === 'instant' || isExamSubmitted) && isAnswered) {
        if (chosen === q.answer) {
          cell.classList.add('correct');
        } else {
          cell.classList.add('wrong');
        }
      } else if (mode === 'exam' && isAnswered) {
        cell.style.borderColor = 'var(--color-primary)';
      }

      if (bookmarked.has(q.id)) {
        cell.classList.add('bookmarked');
      }

      cell.addEventListener('click', () => {
        currentIndex = idx;
        renderCurrentQuestion();
        closePalette();
      });

      DOM.paletteGrid.appendChild(cell);
    });

    DOM.paletteModal.classList.add('open');
  }

  function closePalette() {
    DOM.paletteModal.classList.remove('open');
  }

  // -------------------- 10. 模式切換與結算 --------------------
  function toggleSessionSize() {
    if (sessionPoolSize === 20) {
      sessionPoolSize = 50;
      DOM.sessionIcon.textContent = '📚';
      DOM.sessionText.textContent = '全刷50題';
    } else {
      sessionPoolSize = 20;
      DOM.sessionIcon.textContent = '🎯';
      DOM.sessionText.textContent = '抽考20題';
    }
    drawNewSession();
  }

  function toggleMode() {
    if (mode === 'instant') {
      mode = 'exam';
      DOM.modeIcon.textContent = '📝';
      DOM.modeText.textContent = '模擬測驗';
      DOM.btnModeToggle.classList.add('active');
    } else {
      mode = 'instant';
      DOM.modeIcon.textContent = '⚡';
      DOM.modeText.textContent = '即時刷題';
      DOM.btnModeToggle.classList.remove('active');
      isExamSubmitted = false;
    }
    renderCurrentQuestion();
  }

  function submitExam() {
    isExamSubmitted = true;

    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    currentSessionQuestions.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans === undefined) {
        unansweredCount++;
      } else if (ans === q.answer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const totalQuestions = currentSessionQuestions.length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    DOM.modalScoreNum.textContent = score;
    DOM.modalCorrectCount.textContent = correctCount;
    DOM.modalWrongCount.textContent = wrongCount;
    DOM.modalUnansweredCount.textContent = unansweredCount;

    if (score >= 90) {
      DOM.modalEvalText.textContent = "🏆 完美！皮表系統考點已完全掌握！";
    } else if (score >= 75) {
      DOM.modalEvalText.textContent = "👏 很棒！複習一下錯題即可達到滿分！";
    } else {
      DOM.modalEvalText.textContent = "💪 建議複習錯題後，再抽一組 20 題檢驗實力！";
    }

    DOM.resultModal.classList.add('open');
    renderCurrentQuestion();
  }

  function restartCurrentSession() {
    userAnswers = {};
    isExamSubmitted = false;
    currentIndex = 0;
    DOM.resultModal.classList.remove('open');
    renderCurrentQuestion();
    updateHeaderStats();
  }

  // 啟動應用
  init();
})();
