// ============================================
// Initialize configuration
// ============================================
const config = window.VALENTINE_CONFIG;

// ============================================
// State
// ============================================
let noClickCount = 0;

// ============================================
// Validate configuration
// ============================================
function validateConfig() {
    const warnings = [];

    if (!config.valentineName) {
        warnings.push("Valentine's name missing. Using default.");
        config.valentineName = "My Love";
    }

    const isValidHex = (hex) => /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    if (warnings.length) {
        console.warn("⚠️ Config warnings:");
        warnings.forEach(w => console.warn(w));
    }
}

function getDefaultColor(key) {
    return {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    }[key];
}

// ============================================
// DOM Ready
// ============================================
document.title = config.pageTitle;

window.addEventListener("DOMContentLoaded", () => {
    validateConfig();

    document.getElementById("valentineTitle").textContent =
        `${config.valentineName}, my love...`;

    document.getElementById("question1Text").textContent =
        config.questions.first.text;
    document.getElementById("yesBtn1").textContent =
        config.questions.first.yesBtn;
    document.getElementById("noBtn1").textContent =
        config.questions.first.noBtn;

    document.getElementById("secretAnswerBtn").textContent =
        config.questions.first.secretAnswer;

    document.getElementById("question2Text").textContent =
        config.questions.second.text;
    document.getElementById("startText").textContent =
        config.questions.second.startText;
    document.getElementById("nextBtn").textContent =
        config.questions.second.nextBtn;

    document.getElementById("question3Text").textContent =
        config.questions.third.
