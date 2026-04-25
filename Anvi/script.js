
// 🎉 Start App (Login + Confetti + Music)
function startApp() {
  const pass = document.getElementById("pass").value;

  if (pass === "mybaby@1") {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";

    celebrate(); // 🎉 confetti

    const music = document.getElementById("music");
    if (music) {
      music.play().catch(() => {
        console.log("User interaction required for audio");
      });
    }

  } else {
    alert("Wrong password ❤️");
  }
}


// 📸 Show Sections (Timeline / Letter)
function showSection(section) {
  let content = document.getElementById("content");

  if (section === "timeline") {
    content.innerHTML = `
      <div class="section">
        <h2>📸 My First Year</h2>

        <div class="card">
          <img src="images/month1.jpg">
          <p>Month 1 - You came into our lives ❤️</p>
        </div>

        <div class="card">
          <img src="images/month6.jpg">
          <p>Month 6 - You started crawling 🐾</p>
        </div>

        <div class="card">
          <img src="images/month12.jpg">
          <p>Month 12 - You made us happiest 🎉</p>
        </div>

      </div>
    `;
  }

  if (section === "letter") {
    content.innerHTML = `
      <div class="section">
        <h2>💌 From Dad</h2>
        <p>My dear daughter,</p>
        <p>You are the most precious gift in my life...</p>
        <p>I will always love and protect you ❤️</p>
      </div>
    `;
  }
}


// 🎊 Confetti Function
function celebrate() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}