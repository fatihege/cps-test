const currentCPS = document.querySelector('.left-side .current.score-block span.score');
const highCPSElem = document.querySelector('.left-side .high.score-block span.cps span.score');
const highScoreElem = document.querySelector('.left-side .high.score-block span.point span.score');
const showHistoryBtn = document.querySelector('.left-side .history .history-btn');
const closeHistoryBtn = document.querySelector('.history-side .close .close-btn');
const cpsHistoryList = document.querySelector('.history-side ul');
const cpsLog = document.querySelector('.left-side .cps-log ul');
const timerElem = document.querySelector('.main-section .timer');
const toggleThemeBtn = document.querySelector('.main-section .theme-toggle .theme-toggle-btn');
const scoreElem = document.querySelector('.main-section .score span.score-text');
const restartBtn = document.querySelector('.main-section .restart');
const copyrightContainer = document.querySelector('.main-section .copyright');
const faviconImages = {
    dark: 'https://fatihege.github.io/cps-test/img/favicon-dark_128x128.png',
    light: 'https://fatihege.github.io/cps-test/img/favicon-light_128x128.png',
}
const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
}

const changeTheme = () => {
    if (localStorage.getItem('dark_mode') === '1') {
        document.body.classList.add('dark');
        toggleThemeBtn.innerHTML = `
            <svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g transform="matrix(1.12722,0,0,1.12722,-32.5695,-32.5695)">
                    <path d="M241.774,468.88C241.774,476.732 248.148,483.106 256,483.106C263.852,483.106 270.226,476.732 270.226,468.88L270.226,403C270.226,395.148 263.852,388.774 256,388.774C248.148,388.774 241.774,395.148 241.774,403L241.774,468.88ZM95.411,396.47C89.86,402.022 89.86,411.037 95.411,416.589C100.963,422.14 109.978,422.14 115.53,416.589L162.115,370.004C167.667,364.452 167.667,355.437 162.115,349.885C156.563,344.333 147.548,344.333 141.996,349.885L95.411,396.47ZM396.47,416.589C402.022,422.14 411.037,422.14 416.589,416.589C422.14,411.037 422.14,402.022 416.589,396.47L370.004,349.885C364.452,344.333 355.437,344.333 349.885,349.885C344.333,355.437 344.333,364.452 349.885,370.004L396.47,416.589ZM256,140.117C319.958,140.117 371.883,192.042 371.883,256C371.883,319.958 319.958,371.883 256,371.883C192.042,371.883 140.117,319.958 140.117,256C140.117,192.042 192.042,140.117 256,140.117ZM43.12,241.774C35.268,241.774 28.894,248.148 28.894,256C28.894,263.852 35.268,270.226 43.12,270.226L109,270.226C116.852,270.226 123.226,263.852 123.226,256C123.226,248.148 116.852,241.774 109,241.774L43.12,241.774ZM468.88,270.226C476.732,270.226 483.106,263.852 483.106,256C483.106,248.148 476.732,241.774 468.88,241.774L403,241.774C395.148,241.774 388.774,248.148 388.774,256C388.774,263.852 395.148,270.226 403,270.226L468.88,270.226ZM416.589,115.53C422.14,109.978 422.14,100.963 416.589,95.411C411.037,89.86 402.022,89.86 396.47,95.411L349.885,141.996C344.333,147.548 344.333,156.563 349.885,162.115C355.437,167.667 364.452,167.667 370.004,162.115L416.589,115.53ZM115.53,95.411C109.978,89.86 100.963,89.86 95.411,95.411C89.86,100.963 89.86,109.978 95.411,115.53L141.996,162.115C147.548,167.667 156.563,167.667 162.115,162.115C167.667,156.563 167.667,147.548 162.115,141.996L115.53,95.411ZM270.226,43.12C270.226,35.268 263.852,28.894 256,28.894C248.148,28.894 241.774,35.268 241.774,43.12L241.774,109C241.774,116.852 248.148,123.226 256,123.226C263.852,123.226 270.226,116.852 270.226,109L270.226,43.12Z"/>
                </g>
            </svg>`;
    } else {
        document.body.classList.remove('dark');
        toggleThemeBtn.innerHTML = `
            <svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g transform="matrix(1.1565,0,0,1.1565,-5.14062,-40.0647)">
                    <path d="M416.961,407.893C376.6,450.65 319.394,477.357 256,477.357C133.83,477.357 34.643,378.17 34.643,256C34.643,133.83 133.83,34.643 256,34.643C314.263,34.643 367.299,57.201 406.84,94.051C394.069,90.837 380.693,89.128 366.922,89.128C276.798,89.128 203.629,162.298 203.629,252.422C203.629,342.546 276.798,415.715 366.922,415.715C384.371,415.715 401.183,412.973 416.961,407.893Z" style="fill:white;"/>
                </g>
            </svg>`;
    }
}

const setTheme = (t) => {
    if (t) localStorage.setItem('dark_mode', t);
    else {
        const currentIsDark = localStorage.getItem('dark_mode');
        localStorage.setItem('dark_mode', currentIsDark === '1' ? '0' : '1');
    }

    changeTheme();
}

const showRestart = () => {
    restartBtn.classList.remove('hidden');
    setTimeout(() => copyrightContainer.classList.add('hidden'), 250);
}

const addCPSLog = (cps) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.classList.add('score');
    span.innerText = cps;
    li.appendChild(span);
    li.append(' CPS');
    cpsLog.appendChild(li);
}

const updateHighScore = (cps, score) => {
    let highCPS = localStorage.getItem('high_cps') ? parseFloat(localStorage.getItem('high_cps')) : 0;
    let highScore = localStorage.getItem('high_score') ? parseFloat(localStorage.getItem('high_score')) : 0;
    if (cps > highCPS) {
        localStorage.setItem('high_cps', cps);
        highCPSElem.innerText = cps;
    }
    if (score > highScore) {
        localStorage.setItem('high_score', score);
        highScoreElem.innerText = score;
    }
}

const updateScores = (conf) => {
    if (conf) {
        currentCPS.innerText = conf.cps;
        updateHighScore(conf.cps, conf.score);
    } else {
        currentCPS.innerText = 0;
        updateHighScore(0, 0);
    }
}

const setFavicon = () => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const faviconLink = document.querySelector('head link[rel="shortcut icon"]');
    if (isDarkMode) faviconLink.href = faviconImages.light;
    else faviconLink.href = faviconImages.dark;
}

const getCPSHistory = () => {
    let cpsHistory = (JSON.parse(localStorage.getItem('cps_history')) || []);
    if (cpsHistory.length > 150) cpsHistory = cpsHistory.reverse().slice(0, 150).reverse();
    return cpsHistory;
}

const addCPSHistoryItem = (item) => {
    item.date = new Date(item.date);
    const formattedDate = `${item.date.getDate()} ${months[item.date.getMonth()]} ${item.date.getFullYear()} ${
        item.date.getHours()}:${item.date.getMinutes()}:${item.date.getSeconds()}`;
    let li = document.createElement('li');
    li.title = formattedDate;
    li.innerHTML = `
        <span class="cps">
            <span class="value">${item.cps}</span>
            <span class="key">CPS</span>
        </span><span class="score">
            <span class="value">${item.score}</span>
            <span class="key">score</span>
        </span>`;
    cpsHistoryList.appendChild(li);
}

const updateCPSHistory = (cps, score) => {
    const cpsHistory = getCPSHistory();
    cpsHistory.push({
        cps,
        score,
        date: new Date()
    });

    localStorage.setItem('cps_history', JSON.stringify(cpsHistory));
    updateCPSHistoryList();
}

const updateCPSHistoryList = () => {
    cpsHistoryList.innerHTML = '';
    getCPSHistory().reverse().forEach((item) => addCPSHistoryItem(item));
}

const init = () => {
    setFavicon();
    changeTheme();
    updateScores();
    updateCPSHistoryList();
    highCPSElem.innerText = (localStorage.getItem('high_cps') || 0).toString();
    highScoreElem.innerText = (localStorage.getItem('high_score') || 0).toString();

    let conf = {
        initTime: 5,
        time: 0,
        counter: 0,
        score: 0,
        tempScore: 0,
        cps: 0,
        scoreLog: [],
    }
    conf.time = conf.initTime;
    let finished = false;
    let cpsInterval = null;
    timerElem.innerText = conf.time;

    addEventListener('click', (e) => {
        if (
            (e.target.classList.contains(showHistoryBtn.classList[0])) ||
            (e.target.classList.contains(closeHistoryBtn.classList[0])) ||
            (e.target.classList.contains(toggleThemeBtn.classList[0])) ||
            (e.target.classList.contains(restartBtn.classList[0])) ||
            (e.target.tagName === 'A')
        ) return;

        if (!finished) {
            conf.score++;
            conf.tempScore++;
            scoreElem.innerText = conf.score;
        }

        if (cpsInterval === null && !finished) {
            cpsInterval = setInterval(() => {
                conf.cps = conf.score / conf.initTime;
                updateScores(conf);

                if (conf.counter > 0 && conf.counter % 1000 === 0) {
                    conf.time--;

                    if (conf.time > 0) {
                        addCPSLog(conf.tempScore);
                        conf.tempScore = 0;
                        timerElem.innerText = conf.time;
                    } else {
                        if (conf.tempScore >= 0) addCPSLog(conf.tempScore);
                        updateCPSHistory(conf.cps, conf.score);
                        conf.tempScore = -1;
                        finished = true;
                        timerElem.innerText = 0;
                        showRestart();
                        clearInterval(cpsInterval);
                        cpsInterval = null;
                    }
                }

                conf.counter += 10;
            }, 10);
        }
    });

    addEventListener('keydown', (e) => {
        if (e.keyCode === 88) setTheme();
        if (e.keyCode === 72) cpsHistoryList.parentElement.classList.toggle('active');
    });
}

addEventListener('load', () => init());
showHistoryBtn.addEventListener('click', () => cpsHistoryList.parentElement.classList.add('active'));
closeHistoryBtn.addEventListener('click', () => cpsHistoryList.parentElement.classList.remove('active'));
toggleThemeBtn.addEventListener('click', () => setTheme());
restartBtn.addEventListener('click', () => location.reload());
