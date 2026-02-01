// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    // Name shown in title
    valentineName: "Bushra",

    // Browser tab title
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis in background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻'],
        flowers: ['🌻', '🌹', '💐', '🌷']
    },

    // ===============================
    // Questions Configuration
    // ===============================
    questions: {

        // FIRST QUESTION
        first: {
            text: "Do you like me? 💕",
            yesBtn: "Yes 😍",
            noBtn: "No 🙈",

            // This is now ONLY a secret message
            // It does NOT control navigation
            secretAnswer: "I don't like you… I LOVE YOU ❤️🥰"
        },

        // SECOND QUESTION (Love Meter)
        second: {
            text: "How much do you love me? 😌",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },

        // FINAL QUESTION
        third: {
            text: "Will you be my Valentine? 🌹",
            yesBtn: "YES 💖",
            noBtn: "No 😏"
        }
    },

    // ===============================
    // Love Meter Messages
    // ===============================
    loveMessages: {
        extreme: "WOOOOW 😳💝 That’s insane love!! 🚀",
        high: "To infinity and beyond! 🚀💖",
        normal: "And even more 🥰"
    },

    // ===============================
    // Celebration Screen
    // ===============================
    celebration: {
        title: "YAY!! I'm the luckiest person ever 😭💖",
        message: "Now come get your gift… a big hug 🤗 and a kiss 😚",
        emojis: "🎉💝🤗💖❤️💕"
    },

    // ===============================
    // Color Theme
    // ===============================
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // ===============================
    // Animations
    // ===============================
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // ===============================
    // Background Music
    // ===============================
    music: {
        enabled: true,

        // Autoplay is risky on browsers — user click feels better
        autoplay: false,

        musicUrl:
            "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",

        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// DO NOT TOUCH BELOW
window.VALENTINE_CONFIG = CONFIG;
