const images = [
    '1682062205905.jpg',
    'IMG_20230402_202313_5.jpg',
    'IMG_20230407_204036_446.jpg',
    'IMG_20230407_204040_280.jpg',
    'IMG_20230407_204141_861.jpg',
    'IMG_20230408_214633_563.jpg',
    'IMG_20230421_072445_331.jpg',
    'IMG_20230606_210509_706.jpg',
    'IMG_20230803_212602_120.jpg',
    'IMG_20230918_134445_416.jpg',
    'IMG_20240701_094344_397.jpg',
    'IMG_20240701_154100_492.jpg',
    'IMG_20240701_154102_927.jpg',
    'IMG_20250608_103633_131.jpg',
    'IMG_20250621_190618_471.jpg',
    'IMG_20250621_190627_834.jpg',
    'IMG_20250625_152446_679.jpg',
    'IMG_20250725_125103_881.jpg',
    'IMG_20250727_155415_509.jpg',
    'IMG_20250817_040750_469.jpg',
    'IMG_20250817_053710_065.jpg',
    'IMG_20250817_053710_873.jpg',
    'IMG_20250817_054139_538.jpg',
    'IMG_20251012_192137_198.jpg',
    'IMG_20251012_192139_698.jpg',
    'Screenshot_20230107-222705.jpg',
    'ff13c358d432695938141583102bedd2.0.jpg',
    'received_836261600939307.jpeg'
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const cursorFollower = document.getElementById('cursor-follower');
const surpriseMessage = document.getElementById('surprise-message');
const missionButton = document.getElementById('mission-button');
const missionResult = document.getElementById('mission-result');
const missionCount = document.getElementById('mission-count');
const startHeartGameBtn = document.getElementById('start-heart-game');
const heartScoreEl = document.getElementById('heart-score');
const heartTimeEl = document.getElementById('heart-time');
const heartResultEl = document.getElementById('heart-result');
const heartArena = document.getElementById('heart-arena');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const newGuessGameBtn = document.getElementById('new-guess-game');
const guessFeedback = document.getElementById('guess-feedback');
const guessAttemptsEl = document.getElementById('guess-attempts');
const nameOneInput = document.getElementById('name-one');
const nameTwoInput = document.getElementById('name-two');
const calculateLoveBtn = document.getElementById('calculate-love');
const loveMeterFill = document.getElementById('love-meter-fill');
const loveMeterMessage = document.getElementById('love-meter-message');
const promiseInput = document.getElementById('promise-input');
const addPromiseBtn = document.getElementById('add-promise');
const promiseList = document.getElementById('promise-list');
const spinDatePlanBtn = document.getElementById('spin-date-plan');
const datePlanResult = document.getElementById('date-plan-result');
const moodOne = document.getElementById('mood-one');
const moodTwo = document.getElementById('mood-two');
const syncMoodBtn = document.getElementById('sync-mood');
const moodResult = document.getElementById('mood-result');
const bingoBoard = document.getElementById('bingo-board');
const bingoCount = document.getElementById('bingo-count');
const resetBingoBtn = document.getElementById('reset-bingo');
const capsuleTitle = document.getElementById('capsule-title');
const capsuleMessage = document.getElementById('capsule-message');
const saveCapsuleBtn = document.getElementById('save-capsule');
const capsuleList = document.getElementById('capsule-list');
const wyrQuestion = document.getElementById('wyr-question');
const newWyrBtn = document.getElementById('new-wyr');
const decisionResult = document.getElementById('decision-result');
const spinDecisionBtn = document.getElementById('spin-decision');
const focusMinutesInput = document.getElementById('focus-minutes');
const startFocusBtn = document.getElementById('start-focus');
const pauseFocusBtn = document.getElementById('pause-focus');
const resetFocusBtn = document.getElementById('reset-focus');
const focusTime = document.getElementById('focus-time');
const goalInput = document.getElementById('goal-input');
const addGoalBtn = document.getElementById('add-goal');
const goalList = document.getElementById('goal-list');
const markLoveDayBtn = document.getElementById('mark-love-day');
const loveStreakCount = document.getElementById('love-streak-count');
const generateCouponBtn = document.getElementById('generate-coupon');
const couponResult = document.getElementById('coupon-result');
const quizYesBtn = document.getElementById('quiz-yes');
const quizNoBtn = document.getElementById('quiz-no');
const quizResult = document.getElementById('quiz-result');
const photoUploadInput = document.getElementById('photo-upload');
const clearCustomPhotosBtn = document.getElementById('clear-custom-photos');
const uploadStatus = document.getElementById('upload-status');
const shuffleGalleryBtn = document.getElementById('shuffle-gallery');
const toggleFavoritesBtn = document.getElementById('toggle-favorites');
const startSlideshowBtn = document.getElementById('start-slideshow');
const galleryStatus = document.getElementById('gallery-status');
const startImageGameBtn = document.getElementById('start-image-game');
const guessFavoriteYesBtn = document.getElementById('guess-favorite-yes');
const guessFavoriteNoBtn = document.getElementById('guess-favorite-no');
const imageGamePreview = document.getElementById('image-game-preview');
const imageGameResult = document.getElementById('image-game-result');
const imageGameStreak = document.getElementById('image-game-streak');
const modalCloseBtn = document.getElementById('modal-close');
const slidePrevBtn = document.getElementById('slide-prev');
const slidePlayPauseBtn = document.getElementById('slide-play-pause');
const slideNextBtn = document.getElementById('slide-next');
const slideProgress = document.getElementById('slide-progress');

const missions = [
    "Take a silly selfie together and save it as today's memory. 🤳",
    "Send each other a 10-word love note right now. 💌",
    "Dance together for one full song with no excuses. 💃",
    "Feed each other one snack dramatically like in a movie. 🍓",
    "Recreate your favorite photo pose in 30 seconds. 📸",
    "Say three things you appreciate about each other. 🌟",
    "Do a tiny living-room date: lights low, music on, hugs allowed. 🕯️",
    "Give each other a warm forehead kiss and a goofy compliment. 😘",
    "Take a short walk and hold hands for at least 5 minutes. 🚶",
    "Pick a random old photo and tell the story behind it. 🐾"
];

const surprises = [
    "You're the cat's pajamas! 🐱",
    "I love you more than cats love tuna! 🐟",
    "You make my heart go purr-purr! 💓",
    "Stay paws-itive, my love! 🐾",
    "You're purr-fect just the way you are! ✨",
    "I'm feline so lucky to have you! 🍀",
    "You're the meow-tain of my life! 🏔️",
    "Life with you is a cat-walk! 👠"
];

let heartGameTimer = null;
let heartSpawnTimer = null;
let heartTimeLeft = 10;
let heartScore = 0;
let loveSecretNumber = Math.floor(Math.random() * 20) + 1;
let loveGuessAttempts = 0;
let showOnlyFavorites = false;
let currentGalleryImages = [];
let slideshowTimer = null;
let currentModalIndex = 0;
let currentModalImages = [...images];
let imageGameCurrentImage = '';
let imageGameCurrentIsFavorite = false;
let imageGameCurrentStreak = 0;
let focusSecondsLeft = 600;
let focusTimer = null;
let quizScore = 0;
let quizTurns = 0;

const loveMeterMessages = [
    { min: 95, text: 'Soulmate energy unlocked. You two are unstoppable.' },
    { min: 80, text: 'Major lovebirds. Your vibe is warm and sweet.' },
    { min: 65, text: 'Great team chemistry. Keep choosing each other daily.' },
    { min: 45, text: 'Cute and growing. Small moments make this stronger.' },
    { min: 0, text: 'Love is in progress mode. Keep flirting and caring.' }
];

const dateMoods = ['cozy', 'adventure', 'creative', 'chill', 'nostalgic'];
const dateActivities = [
    'cook a new recipe together',
    'have a sunset walk and take selfies',
    'watch old photos and retell memories',
    'build a pillow fort movie night',
    'play your favorite songs and dance'
];
const dateSnacks = ['milk tea', 'fries', 'ice cream', 'popcorn', 'fruit platter'];

const bingoTasks = [
    'Hold hands for 5 mins',
    'Give 1 random compliment',
    'Take a goofy selfie',
    'Share 1 gratitude each',
    'Recreate an old photo',
    'Hug for 20 seconds',
    'Say "I love you" in a new way',
    'Do one kind act',
    'Plan next tiny date'
];

const wouldYouRatherQuestions = [
    'Would you rather plan a surprise date or receive one tonight?',
    'Would you rather cook together or order food and watch a movie?',
    'Would you rather dance at home or take a night walk together?',
    'Would you rather exchange letters or voice notes today?',
    'Would you rather do a photo challenge or a mini game challenge?'
];

const decisionOptions = [
    'You plan the next date night!',
    'Your partner picks tonight\'s snack.',
    'You both do a 20-second hug now.',
    'Whoever reads this gives the next compliment.',
    'Flip a coin and loser gives a forehead kiss.'
];

const couponOptions = [
    '1 Free Forehead Kiss (redeem now)',
    '1 Long Hug Pass (30 seconds minimum)',
    'Snack Delivery by Partner (today only)',
    'Movie Picker Rights (next date night)',
    'Back Rub Token (10 minutes)'
];

function showSurprise(event) {
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    surpriseMessage.innerText = randomSurprise;
    surpriseMessage.style.opacity = '1';

    // Also spawn some hearts
    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();
    spawnHearts({
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2
    });

    setTimeout(() => {
        surpriseMessage.style.opacity = '0';
    }, 3000);
}

function getFavoriteImages() {
    const raw = localStorage.getItem('monthsaryFavoriteImages');
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function getCustomPhotos() {
    const raw = localStorage.getItem('monthsaryCustomPhotos');
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string' && item.startsWith('data:image/')) : [];
    } catch {
        return [];
    }
}

function saveCustomPhotos(customPhotos) {
    localStorage.setItem('monthsaryCustomPhotos', JSON.stringify(customPhotos));
}

function refreshGalleryImages() {
    currentGalleryImages = [...images, ...getCustomPhotos()];
}

function resolveImageSrc(imageId) {
    return imageId.startsWith('data:image/') ? imageId : `images/${imageId}`;
}

function saveFavoriteImages(favorites) {
    localStorage.setItem('monthsaryFavoriteImages', JSON.stringify(favorites));
}

function getImageReactions() {
    const raw = localStorage.getItem('monthsaryImageReactions');
    if (!raw) return {};
    try {
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
        return {};
    }
}

function saveImageReactions(reactions) {
    localStorage.setItem('monthsaryImageReactions', JSON.stringify(reactions));
}

function updateGalleryStatus(count) {
    if (!galleryStatus) return;
    galleryStatus.textContent = `${count} memories showing`;
}

function updateFavoritesButton() {
    if (!toggleFavoritesBtn) return;
    toggleFavoritesBtn.textContent = showOnlyFavorites ? 'Show All Memories' : 'Show Favorites';
}

function removeImageMeta(imageId) {
    const favorites = getFavoriteImages().filter((item) => item !== imageId);
    saveFavoriteImages(favorites);

    const reactions = getImageReactions();
    if (Object.prototype.hasOwnProperty.call(reactions, imageId)) {
        delete reactions[imageId];
        saveImageReactions(reactions);
    }
}

function renderGallery() {
    if (!gallery) return;
    refreshGalleryImages();
    gallery.innerHTML = '';

    const favorites = getFavoriteImages();
    const reactions = getImageReactions();
    const visibleImages = showOnlyFavorites
        ? currentGalleryImages.filter((img) => favorites.includes(img))
        : currentGalleryImages;

    visibleImages.forEach((img, index) => {
        const container = document.createElement('div');
        container.className = 'cat-card relative group cursor-pointer overflow-hidden rounded-2xl aspect-square bg-pink-50 shadow-md';

        const image = document.createElement('img');
        image.src = resolveImageSrc(img);
        image.alt = `Memory ${index + 1}`;
        image.className = 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110';
        image.loading = 'lazy';
        image.addEventListener('click', () => openModal(visibleImages, visibleImages.indexOf(img)));

        const overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center';
        overlay.innerHTML = '<i class="fas fa-paw text-white text-3xl"></i>';

        const controls = document.createElement('div');
        controls.className = 'memory-controls';

        const favButton = document.createElement('button');
        const isFav = favorites.includes(img);
        favButton.className = `memory-btn ${isFav ? 'active' : ''}`;
        favButton.textContent = isFav ? '★' : '☆';
        favButton.title = 'Toggle favorite';
        favButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const nextFavorites = getFavoriteImages();
            if (nextFavorites.includes(img)) {
                saveFavoriteImages(nextFavorites.filter((item) => item !== img));
            } else {
                nextFavorites.push(img);
                saveFavoriteImages(nextFavorites);
            }
            renderGallery();
        });

        const reactButton = document.createElement('button');
        const reactionCount = Number(reactions[img] || 0);
        reactButton.className = 'memory-btn';
        reactButton.textContent = `❤️ ${reactionCount}`;
        reactButton.title = 'Send love to this memory';
        reactButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const nextReactions = getImageReactions();
            nextReactions[img] = Number(nextReactions[img] || 0) + 1;
            saveImageReactions(nextReactions);
            spawnHearts(event);
            renderGallery();
        });

        controls.appendChild(favButton);
        controls.appendChild(reactButton);

        if (img.startsWith('data:image/')) {
            const removeButton = document.createElement('button');
            removeButton.className = 'memory-btn danger';
            removeButton.textContent = '🗑';
            removeButton.title = 'Remove uploaded photo';
            removeButton.addEventListener('click', (event) => {
                event.stopPropagation();
                const nextCustomPhotos = getCustomPhotos().filter((item) => item !== img);
                saveCustomPhotos(nextCustomPhotos);
                removeImageMeta(img);
                renderGallery();
            });
            controls.appendChild(removeButton);
        }

        container.appendChild(image);
        container.appendChild(overlay);
        container.appendChild(controls);
        gallery.appendChild(container);
    });

    updateFavoritesButton();
    updateGalleryStatus(visibleImages.length);
}

// Modal Functions
function updateSlideProgress() {
    if (!slideProgress) return;
    const total = currentModalImages.length;
    if (!total) {
        slideProgress.textContent = '0 / 0';
        return;
    }
    slideProgress.textContent = `${currentModalIndex + 1} / ${total}`;
}

function renderModalImage() {
    if (!currentModalImages.length) return;
    modalImg.src = resolveImageSrc(currentModalImages[currentModalIndex]);
    updateSlideProgress();
}

function startSlideshowAutoplay() {
    if (slideshowTimer) clearInterval(slideshowTimer);
    slideshowTimer = setInterval(showNextModalImage, 1800);
    if (slidePlayPauseBtn) slidePlayPauseBtn.textContent = '⏸';
    if (startSlideshowBtn) startSlideshowBtn.textContent = 'Stop Slideshow';
}

function stopSlideshowAutoplay() {
    if (slideshowTimer) {
        clearInterval(slideshowTimer);
        slideshowTimer = null;
    }
    if (slidePlayPauseBtn) slidePlayPauseBtn.textContent = '▶';
    if (startSlideshowBtn) startSlideshowBtn.textContent = 'Start Slideshow';
}

function openModal(imageList, index = 0) {
    currentModalImages = imageList.length ? [...imageList] : [...currentGalleryImages];
    currentModalIndex = index;
    renderModalImage();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => modalImg.classList.remove('scale-95'), 10);
}

function closeModal() {
    stopSlideshowAutoplay();
    modalImg.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

function showPreviousModalImage() {
    if (!currentModalImages.length) return;
    currentModalIndex = (currentModalIndex - 1 + currentModalImages.length) % currentModalImages.length;
    renderModalImage();
}

function showNextModalImage() {
    if (!currentModalImages.length) return;
    currentModalIndex = (currentModalIndex + 1) % currentModalImages.length;
    renderModalImage();
}

function toggleSlideshowPlayback() {
    if (slideshowTimer) {
        stopSlideshowAutoplay();
    } else if (currentModalImages.length) {
        startSlideshowAutoplay();
    }
}

// Interactions
document.addEventListener('mousemove', (e) => {
    cursorFollower.style.left = e.clientX - 15 + 'px';
    cursorFollower.style.top = e.clientY - 15 + 'px';
});

document.addEventListener('mousedown', (e) => {
    spawnPaw(e.clientX, e.clientY);
});

function spawnHearts(e) {
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart-particle text-2xl';
        heart.style.left = e.clientX + (Math.random() * 60 - 30) + 'px';
        heart.style.top = e.clientY + (Math.random() * 60 - 30) + 'px';
        heart.style.animationDelay = (Math.random() * 0.2) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

function spawnPaw(x, y) {
    const paw = document.createElement('div');
    paw.innerHTML = '🐾';
    paw.className = 'paw-print text-3xl';
    paw.style.left = x - 15 + 'px';
    paw.style.top = y - 15 + 'px';
    paw.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(paw);
    setTimeout(() => paw.remove(), 2000);
}

function getMissionCount() {
    const raw = localStorage.getItem('monthsaryMissionCount');
    const parsed = Number(raw);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function setMissionCount(value) {
    localStorage.setItem('monthsaryMissionCount', String(value));
    missionCount.textContent = String(value);
}

function spinMission(event) {
    const randomMission = missions[Math.floor(Math.random() * missions.length)];
    missionResult.textContent = randomMission;
    missionResult.classList.remove('pop');

    // Trigger a reflow so the pop animation can replay each click.
    void missionResult.offsetWidth;
    missionResult.classList.add('pop');

    const nextCount = getMissionCount() + 1;
    setMissionCount(nextCount);
    spawnHearts(event);
}

if (missionButton && missionResult && missionCount) {
    missionButton.addEventListener('click', spinMission);
    missionCount.textContent = String(getMissionCount());
}

function clearHeartArena() {
    if (!heartArena) return;
    heartArena.innerHTML = '';
}

function spawnGameHeart() {
    if (!heartArena) return;
    const heartBtn = document.createElement('button');
    heartBtn.className = 'game-heart';
    heartBtn.textContent = '💖';

    const maxX = Math.max(0, heartArena.clientWidth - 42);
    const maxY = Math.max(0, heartArena.clientHeight - 42);
    heartBtn.style.left = `${Math.floor(Math.random() * (maxX + 1))}px`;
    heartBtn.style.top = `${Math.floor(Math.random() * (maxY + 1))}px`;

    heartBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        heartScore += 1;
        if (heartScoreEl) heartScoreEl.textContent = String(heartScore);
        spawnHearts(event);
        heartBtn.remove();
    });

    heartArena.appendChild(heartBtn);
    setTimeout(() => heartBtn.remove(), 800);
}

function endHeartGame() {
    if (heartGameTimer) clearInterval(heartGameTimer);
    if (heartSpawnTimer) clearInterval(heartSpawnTimer);
    heartGameTimer = null;
    heartSpawnTimer = null;
    clearHeartArena();
    if (heartResultEl) {
        heartResultEl.textContent =
            heartScore >= 12
                ? `Purr-fect reflexes! You caught ${heartScore} hearts!`
                : `You caught ${heartScore} hearts. Want another round?`;
    }
    if (startHeartGameBtn) startHeartGameBtn.disabled = false;
}

function startHeartGame() {
    if (!heartArena) return;
    heartTimeLeft = 10;
    heartScore = 0;
    if (heartScoreEl) heartScoreEl.textContent = '0';
    if (heartTimeEl) heartTimeEl.textContent = '10';
    if (heartResultEl) heartResultEl.textContent = 'Go go go! Catch hearts!';
    if (startHeartGameBtn) startHeartGameBtn.disabled = true;
    clearHeartArena();

    heartSpawnTimer = setInterval(spawnGameHeart, 450);
    heartGameTimer = setInterval(() => {
        heartTimeLeft -= 1;
        if (heartTimeEl) heartTimeEl.textContent = String(heartTimeLeft);
        if (heartTimeLeft <= 0) {
            endHeartGame();
        }
    }, 1000);
}

function resetGuessGame() {
    loveSecretNumber = Math.floor(Math.random() * 20) + 1;
    loveGuessAttempts = 0;
    if (guessAttemptsEl) guessAttemptsEl.textContent = '0';
    if (guessFeedback) guessFeedback.textContent = 'New number picked. Start guessing!';
    if (guessInput) guessInput.value = '';
}

function submitLoveGuess() {
    if (!guessInput || !guessFeedback || !guessAttemptsEl) return;
    const guess = Number(guessInput.value);
    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
        guessFeedback.textContent = 'Pick a number from 1 to 20, cutie.';
        return;
    }

    loveGuessAttempts += 1;
    guessAttemptsEl.textContent = String(loveGuessAttempts);

    if (guess === loveSecretNumber) {
        guessFeedback.textContent = `You got it in ${loveGuessAttempts} tries! Love genius!`;
        spawnHearts({
            clientX: window.innerWidth / 2,
            clientY: window.innerHeight / 2
        });
        return;
    }

    guessFeedback.textContent =
        guess < loveSecretNumber ? 'Too low! Aim higher 💗' : 'Too high! Go lower 💗';
}

if (startHeartGameBtn) {
    startHeartGameBtn.addEventListener('click', startHeartGame);
}

if (guessButton) {
    guessButton.addEventListener('click', submitLoveGuess);
}

if (newGuessGameBtn) {
    newGuessGameBtn.addEventListener('click', resetGuessGame);
}

if (guessInput) {
    guessInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') submitLoveGuess();
    });
}

function computeLoveScore(nameA, nameB) {
    const pair = `${nameA.trim().toLowerCase()}|${nameB.trim().toLowerCase()}`;
    let hash = 0;
    for (let i = 0; i < pair.length; i++) {
        hash = (hash * 31 + pair.charCodeAt(i)) % 9973;
    }
    return 40 + (hash % 61);
}

function getLoveMessage(score) {
    return loveMeterMessages.find((item) => score >= item.min)?.text || loveMeterMessages[loveMeterMessages.length - 1].text;
}

function updateLoveMeter() {
    if (!nameOneInput || !nameTwoInput || !loveMeterFill || !loveMeterMessage) return;
    const first = nameOneInput.value.trim();
    const second = nameTwoInput.value.trim();

    if (!first || !second) {
        loveMeterFill.style.width = '0%';
        loveMeterFill.textContent = '0%';
        loveMeterMessage.textContent = 'Enter both names to begin.';
        return;
    }

    const score = computeLoveScore(first, second);
    loveMeterFill.style.width = `${score}%`;
    loveMeterFill.textContent = `${score}%`;
    loveMeterMessage.textContent = `${first} + ${second}: ${getLoveMessage(score)}`;

    spawnHearts({
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 3
    });
}

function getPromises() {
    const raw = localStorage.getItem('monthsaryPromises');
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function savePromises(promises) {
    localStorage.setItem('monthsaryPromises', JSON.stringify(promises));
}

function renderPromises() {
    if (!promiseList) return;
    const promises = getPromises();
    promiseList.innerHTML = '';

    promises.forEach((text, index) => {
        const item = document.createElement('li');

        const promiseText = document.createElement('span');
        promiseText.textContent = `❤️ ${text}`;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'promise-remove';
        removeBtn.textContent = 'Done';
        removeBtn.addEventListener('click', () => {
            const updated = getPromises().filter((_, i) => i !== index);
            savePromises(updated);
            renderPromises();
        });

        item.appendChild(promiseText);
        item.appendChild(removeBtn);
        promiseList.appendChild(item);
    });
}

function addPromise() {
    if (!promiseInput) return;
    const value = promiseInput.value.trim();
    if (!value) return;

    const promises = getPromises();
    promises.unshift(value);
    savePromises(promises.slice(0, 8));
    promiseInput.value = '';
    renderPromises();
}

function spinDatePlan() {
    if (!datePlanResult) return;
    const mood = dateMoods[Math.floor(Math.random() * dateMoods.length)];
    const activity = dateActivities[Math.floor(Math.random() * dateActivities.length)];
    const snack = dateSnacks[Math.floor(Math.random() * dateSnacks.length)];
    datePlanResult.textContent = `Tonight's ${mood} plan: ${activity}, then enjoy ${snack}.`;
    spawnHearts({
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2.5
    });
}

function getMoodSuggestion(a, b) {
    if ((a === 'stressed' && b === 'tired') || (a === 'tired' && b === 'stressed')) {
        return 'Low-energy date: cuddle, hydrate, and watch one comfort episode together.';
    }
    if (a === 'romantic' || b === 'romantic') {
        return 'Romantic mode: dim lights, slow songs, and a 10-minute heart-to-heart.';
    }
    if (a === 'playful' || b === 'playful') {
        return 'Play mode: choose a mini-game and loser gives a forehead kiss.';
    }
    if (a === 'happy' && b === 'happy') {
        return 'Double happy! Take a quick walk and capture one photo memory.';
    }
    return 'Sync gently: share snacks and ask "what would make today better?"';
}

function syncMood() {
    if (!moodOne || !moodTwo || !moodResult) return;
    const first = moodOne.value;
    const second = moodTwo.value;
    if (!first || !second) {
        moodResult.textContent = 'Pick both moods first.';
        return;
    }
    moodResult.textContent = getMoodSuggestion(first, second);
}

function getBingoState() {
    const raw = localStorage.getItem('monthsaryBingoState');
    if (!raw) return Array(9).fill(false);
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) && parsed.length === 9 ? parsed.map(Boolean) : Array(9).fill(false);
    } catch {
        return Array(9).fill(false);
    }
}

function saveBingoState(state) {
    localStorage.setItem('monthsaryBingoState', JSON.stringify(state));
}

function renderBingo() {
    if (!bingoBoard || !bingoCount) return;
    const state = getBingoState();
    bingoBoard.innerHTML = '';

    bingoTasks.forEach((task, index) => {
        const btn = document.createElement('button');
        const done = state[index];
        btn.className = `bingo-cell ${done ? 'done' : ''}`;
        btn.textContent = task;
        btn.addEventListener('click', () => {
            const next = getBingoState();
            next[index] = !next[index];
            saveBingoState(next);
            renderBingo();
        });
        bingoBoard.appendChild(btn);
    });

    const count = state.filter(Boolean).length;
    bingoCount.textContent = String(count);
}

function resetBingo() {
    saveBingoState(Array(9).fill(false));
    renderBingo();
}

function getCapsules() {
    const raw = localStorage.getItem('monthsaryCapsules');
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveCapsules(list) {
    localStorage.setItem('monthsaryCapsules', JSON.stringify(list));
}

function renderCapsules() {
    if (!capsuleList) return;
    const capsules = getCapsules();
    capsuleList.innerHTML = '';

    capsules.forEach((capsule, index) => {
        const item = document.createElement('li');
        item.className = 'capsule-item';

        const textWrap = document.createElement('div');
        textWrap.className = 'capsule-text';
        textWrap.innerHTML = `<strong>${capsule.title}</strong><p>${capsule.message}</p>`;

        const actions = document.createElement('div');
        actions.className = 'capsule-actions';

        const openBtn = document.createElement('button');
        openBtn.className = 'capsule-btn';
        openBtn.textContent = 'Open';
        openBtn.addEventListener('click', () => {
            alert(`${capsule.title}\n\n${capsule.message}`);
        });

        const removeBtn = document.createElement('button');
        removeBtn.className = 'capsule-btn danger';
        removeBtn.textContent = 'Delete';
        removeBtn.addEventListener('click', () => {
            const next = getCapsules().filter((_, i) => i !== index);
            saveCapsules(next);
            renderCapsules();
        });

        actions.appendChild(openBtn);
        actions.appendChild(removeBtn);
        item.appendChild(textWrap);
        item.appendChild(actions);
        capsuleList.appendChild(item);
    });
}

function addCapsule() {
    if (!capsuleTitle || !capsuleMessage) return;
    const title = capsuleTitle.value.trim();
    const message = capsuleMessage.value.trim();
    if (!title || !message) return;

    const next = getCapsules();
    next.unshift({ title, message });
    saveCapsules(next.slice(0, 12));
    capsuleTitle.value = '';
    capsuleMessage.value = '';
    renderCapsules();
}

function startImageGameRound() {
    if (!imageGamePreview || !imageGameResult) return;
    const pool = currentGalleryImages.length ? currentGalleryImages : images;
    imageGameCurrentImage = pool[Math.floor(Math.random() * pool.length)];
    const favorites = getFavoriteImages();
    imageGameCurrentIsFavorite = favorites.includes(imageGameCurrentImage);
    imageGamePreview.src = resolveImageSrc(imageGameCurrentImage);
    imageGamePreview.classList.remove('hidden');
    imageGameResult.textContent = 'Guess now: is this memory a favorite?';
}

function submitImageGameGuess(guessFavorite) {
    if (!imageGameCurrentImage || !imageGameResult || !imageGameStreak) {
        return;
    }
    const isCorrect = guessFavorite === imageGameCurrentIsFavorite;
    if (isCorrect) {
        imageGameCurrentStreak += 1;
        imageGameResult.textContent = `Correct! Cute memory instincts.`;
        spawnHearts({
            clientX: window.innerWidth / 2,
            clientY: window.innerHeight / 2
        });
    } else {
        imageGameCurrentStreak = 0;
        imageGameResult.textContent = 'Oops! Streak reset. Try another memory.';
    }
    imageGameStreak.textContent = String(imageGameCurrentStreak);
    setTimeout(startImageGameRound, 700);
}

function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error(`Could not read ${file.name}`));
        reader.readAsDataURL(file);
    });
}

async function handlePhotoUpload(event) {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    const imageFiles = files.filter((file) => file.type.startsWith('image/'));
    if (!imageFiles.length) {
        if (uploadStatus) uploadStatus.textContent = 'Please select image files only.';
        return;
    }

    const encoded = await Promise.all(imageFiles.map(readFileAsDataUrl));
    const existing = getCustomPhotos();
    const combined = [...existing];
    encoded.forEach((item) => {
        if (!combined.includes(item)) combined.push(item);
    });
    saveCustomPhotos(combined.slice(-80));
    refreshGalleryImages();
    renderGallery();

    if (uploadStatus) {
        uploadStatus.textContent = `Added ${encoded.length} photo(s)! Total uploaded: ${getCustomPhotos().length}.`;
    }
    if (photoUploadInput) photoUploadInput.value = '';
}

function clearUploadedPhotos() {
    const customPhotos = getCustomPhotos();
    customPhotos.forEach(removeImageMeta);
    saveCustomPhotos([]);
    refreshGalleryImages();
    renderGallery();
    if (uploadStatus) uploadStatus.textContent = 'Uploaded photos removed.';
}

function showNewWyrQuestion() {
    if (!wyrQuestion) return;
    const question = wouldYouRatherQuestions[Math.floor(Math.random() * wouldYouRatherQuestions.length)];
    wyrQuestion.textContent = question;
}

function spinDecision() {
    if (!decisionResult) return;
    const result = decisionOptions[Math.floor(Math.random() * decisionOptions.length)];
    decisionResult.textContent = result;
    spawnHearts({
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2.5
    });
}

function renderFocusTime() {
    if (!focusTime) return;
    const mins = Math.floor(focusSecondsLeft / 60);
    const secs = focusSecondsLeft % 60;
    focusTime.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startFocusTimer() {
    if (!focusMinutesInput) return;
    if (!focusTimer) {
        const inputMinutes = Number(focusMinutesInput.value);
        if (Number.isFinite(inputMinutes) && inputMinutes > 0 && focusSecondsLeft === 600) {
            focusSecondsLeft = Math.floor(inputMinutes * 60);
            renderFocusTime();
        }
    }
    if (focusTimer) return;
    focusTimer = setInterval(() => {
        focusSecondsLeft -= 1;
        renderFocusTime();
        if (focusSecondsLeft <= 0) {
            clearInterval(focusTimer);
            focusTimer = null;
            focusSecondsLeft = 0;
            renderFocusTime();
            alert('Cuddle focus complete! Time for a sweet check-in.');
            spawnHearts({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
        }
    }, 1000);
}

function pauseFocusTimer() {
    if (!focusTimer) return;
    clearInterval(focusTimer);
    focusTimer = null;
}

function resetFocusTimer() {
    if (focusTimer) {
        clearInterval(focusTimer);
        focusTimer = null;
    }
    const inputMinutes = Number(focusMinutesInput?.value || 10);
    focusSecondsLeft = Math.floor((Number.isFinite(inputMinutes) && inputMinutes > 0 ? inputMinutes : 10) * 60);
    renderFocusTime();
}

function getGoals() {
    const raw = localStorage.getItem('monthsaryGoals');
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveGoals(goals) {
    localStorage.setItem('monthsaryGoals', JSON.stringify(goals));
}

function renderGoals() {
    if (!goalList) return;
    goalList.innerHTML = '';
    const goals = getGoals();

    goals.forEach((goal, index) => {
        const item = document.createElement('li');
        item.className = 'goal-item';

        const left = document.createElement('button');
        left.className = `goal-check ${goal.done ? 'done' : ''}`;
        left.textContent = goal.done ? '✓' : '○';
        left.addEventListener('click', () => {
            const next = getGoals();
            next[index].done = !next[index].done;
            saveGoals(next);
            renderGoals();
        });

        const text = document.createElement('span');
        text.className = goal.done ? 'goal-text done' : 'goal-text';
        text.textContent = goal.text;

        const remove = document.createElement('button');
        remove.className = 'goal-remove';
        remove.textContent = 'x';
        remove.addEventListener('click', () => {
            const next = getGoals().filter((_, i) => i !== index);
            saveGoals(next);
            renderGoals();
        });

        item.appendChild(left);
        item.appendChild(text);
        item.appendChild(remove);
        goalList.appendChild(item);
    });
}

function addGoal() {
    if (!goalInput) return;
    const text = goalInput.value.trim();
    if (!text) return;
    const goals = getGoals();
    goals.unshift({ text, done: false });
    saveGoals(goals.slice(0, 12));
    goalInput.value = '';
    renderGoals();
}

function getLoveStreakData() {
    const raw = localStorage.getItem('monthsaryLoveStreak');
    if (!raw) return { count: 0, lastDate: '' };
    try {
        const parsed = JSON.parse(raw);
        return {
            count: Number.isFinite(parsed?.count) ? parsed.count : 0,
            lastDate: typeof parsed?.lastDate === 'string' ? parsed.lastDate : ''
        };
    } catch {
        return { count: 0, lastDate: '' };
    }
}

function saveLoveStreakData(data) {
    localStorage.setItem('monthsaryLoveStreak', JSON.stringify(data));
}

function renderLoveStreak() {
    if (!loveStreakCount) return;
    const data = getLoveStreakData();
    loveStreakCount.textContent = String(data.count);
}

function markLoveDay() {
    const today = new Date().toISOString().slice(0, 10);
    const data = getLoveStreakData();
    if (data.lastDate === today) {
        if (couponResult) couponResult.textContent = 'Already marked today. You are so consistent!';
        return;
    }

    const previous = data.lastDate ? new Date(data.lastDate) : null;
    const current = new Date(today);
    let nextCount = 1;
    if (previous) {
        const diffDays = Math.round((current - previous) / (1000 * 60 * 60 * 24));
        nextCount = diffDays === 1 ? data.count + 1 : 1;
    }

    saveLoveStreakData({ count: nextCount, lastDate: today });
    renderLoveStreak();
    spawnHearts({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2.5 });
}

function generateCoupon() {
    if (!couponResult) return;
    const coupon = couponOptions[Math.floor(Math.random() * couponOptions.length)];
    couponResult.textContent = `Coupon: ${coupon}`;
}

function answerQuiz(answerYes) {
    quizTurns += 1;
    if (answerYes) quizScore += 1;
    const percent = Math.round((quizScore / quizTurns) * 100);
    if (quizResult) {
        quizResult.textContent = `Compatibility vibe: ${percent}% after ${quizTurns} answers.`;
    }
}

if (calculateLoveBtn) {
    calculateLoveBtn.addEventListener('click', updateLoveMeter);
}

if (addPromiseBtn) {
    addPromiseBtn.addEventListener('click', addPromise);
}

if (promiseInput) {
    promiseInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') addPromise();
    });
}

if (spinDatePlanBtn) {
    spinDatePlanBtn.addEventListener('click', spinDatePlan);
}

if (syncMoodBtn) {
    syncMoodBtn.addEventListener('click', syncMood);
}

if (saveCapsuleBtn) {
    saveCapsuleBtn.addEventListener('click', addCapsule);
}

if (photoUploadInput) {
    photoUploadInput.addEventListener('change', handlePhotoUpload);
}

if (newWyrBtn) {
    newWyrBtn.addEventListener('click', showNewWyrQuestion);
}

if (spinDecisionBtn) {
    spinDecisionBtn.addEventListener('click', spinDecision);
}

if (startFocusBtn) {
    startFocusBtn.addEventListener('click', startFocusTimer);
}

if (pauseFocusBtn) {
    pauseFocusBtn.addEventListener('click', pauseFocusTimer);
}

if (resetFocusBtn) {
    resetFocusBtn.addEventListener('click', resetFocusTimer);
}

if (focusMinutesInput) {
    focusMinutesInput.addEventListener('change', resetFocusTimer);
}

if (addGoalBtn) {
    addGoalBtn.addEventListener('click', addGoal);
}

if (goalInput) {
    goalInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') addGoal();
    });
}

if (markLoveDayBtn) {
    markLoveDayBtn.addEventListener('click', markLoveDay);
}

if (generateCouponBtn) {
    generateCouponBtn.addEventListener('click', generateCoupon);
}

if (quizYesBtn) {
    quizYesBtn.addEventListener('click', () => answerQuiz(true));
}

if (quizNoBtn) {
    quizNoBtn.addEventListener('click', () => answerQuiz(false));
}

if (clearCustomPhotosBtn) {
    clearCustomPhotosBtn.addEventListener('click', clearUploadedPhotos);
}

if (capsuleMessage) {
    capsuleMessage.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') addCapsule();
    });
}

if (shuffleGalleryBtn) {
    shuffleGalleryBtn.addEventListener('click', () => {
        currentGalleryImages = [...currentGalleryImages].sort(() => Math.random() - 0.5);
        renderGallery();
    });
}

if (toggleFavoritesBtn) {
    toggleFavoritesBtn.addEventListener('click', () => {
        showOnlyFavorites = !showOnlyFavorites;
        renderGallery();
    });
}

if (startSlideshowBtn) {
    startSlideshowBtn.addEventListener('click', () => {
        if (slideshowTimer) {
            stopSlideshowAutoplay();
            return;
        }
        const favorites = getFavoriteImages();
        const activeImages = showOnlyFavorites
            ? currentGalleryImages.filter((img) => favorites.includes(img))
            : currentGalleryImages;
        if (!activeImages.length) return;
        openModal(activeImages, 0);
        startSlideshowAutoplay();
    });
}

if (resetBingoBtn) {
    resetBingoBtn.addEventListener('click', resetBingo);
}

if (startImageGameBtn) {
    startImageGameBtn.addEventListener('click', startImageGameRound);
}

if (guessFavoriteYesBtn) {
    guessFavoriteYesBtn.addEventListener('click', () => submitImageGameGuess(true));
}

if (guessFavoriteNoBtn) {
    guessFavoriteNoBtn.addEventListener('click', () => submitImageGameGuess(false));
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
}

if (slidePrevBtn) {
    slidePrevBtn.addEventListener('click', showPreviousModalImage);
}

if (slidePlayPauseBtn) {
    slidePlayPauseBtn.addEventListener('click', toggleSlideshowPlayback);
}

if (slideNextBtn) {
    slideNextBtn.addEventListener('click', showNextModalImage);
}

if (modal) {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
}

renderPromises();
renderBingo();
renderCapsules();
renderGoals();
renderLoveStreak();
refreshGalleryImages();
renderGallery();
updateSlideProgress();
renderFocusTime();

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
