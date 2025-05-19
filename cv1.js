document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.querySelector(".profileText h2");
  const spanWebDev = nameElement.querySelector("span");
  spanWebDev.style.cursor = "pointer";
  spanWebDev.style.background = "linear-gradient(90deg, #1e3c72, #2a5298, #1e3c72)";
  spanWebDev.style.backgroundSize = "200% 200%";
  spanWebDev.style.webkitBackgroundClip = "text";
  spanWebDev.style.webkitTextFillColor = "transparent";
  spanWebDev.style.animation = "gradientAnimation 5s ease infinite";
  spanWebDev.style.fontWeight = "700";
  spanWebDev.style.textShadow = "1px 1px 3px rgba(0,0,0,0.2)";
  spanWebDev.style.transition = "all 0.3s ease";
  spanWebDev.addEventListener("mouseenter", () => {
    spanWebDev.style.background = "linear-gradient(90deg, #2a5298, #1e3c72, #2a5298)";
    spanWebDev.style.textShadow = "2px 2px 8px rgba(0,0,0,0.4)";
    spanWebDev.style.transform = "scale(1.1)";
  });
  spanWebDev.addEventListener("mouseleave", () => {
    spanWebDev.style.background = "linear-gradient(90deg, #1e3c72, #2a5298, #1e3c72)";
    spanWebDev.style.textShadow = "1px 1px 3px rgba(0,0,0,0.2)";
    spanWebDev.style.transform = "scale(1)";
  });
  nameElement.style.cursor = "pointer";
  let welcomeBar = null;
  nameElement.addEventListener("click", () => {
    if (welcomeBar) {
      welcomeBar.remove();
      welcomeBar = null;
      return;
    }
    welcomeBar = document.createElement("div");
    welcomeBar.textContent = "Welcome to my CV!";
    Object.assign(welcomeBar.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      backgroundColor: "#1e3c72",
      color: "#fff",
      textAlign: "center",
      padding: "12px 0",
      fontSize: "1.3em",
      fontWeight: "700",
      zIndex: "9999",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
    });
    document.body.prepend(welcomeBar);
    setTimeout(() => {
      if (welcomeBar) welcomeBar.remove();
      welcomeBar = null;
    }, 3500);
  });
  const languageBars = document.querySelectorAll(".contactInfo.language .percent div");
  languageBars.forEach(bar => {
    const widthValue = parseInt(bar.style.width);
    if (widthValue >= 80) {
      bar.style.backgroundColor = "#4caf50";
    } else if (widthValue >= 50) {
      bar.style.backgroundColor = "#ff9800";
    } else {
      bar.style.backgroundColor = "#f44336";
    }
    bar.style.transition = "background-color 0.5s ease";
  });
  const languageDescriptions = {
    HTML: "I have completed studying this language.",
    CSS: "I have completed studying this language.",
    C: "I have completed studying this language.",
    JavaScript: "I am still developing my skills in this area.",
    GITHUB: "I am still developing my skills in this area."
  };
  const skillBoxes = document.querySelectorAll(".about.skills .boxtext");
  skillBoxes.forEach(box => {
    box.style.cursor = "pointer";
    box.style.transition = "box-shadow 0.3s ease";
    box.addEventListener("mouseenter", () => {
      box.style.boxShadow = "0 4px 15px rgba(30, 60, 114, 0.4)";
    });
    box.addEventListener("mouseleave", () => {
      box.style.boxShadow = "none";
    });
    box.addEventListener("click", () => {
      const skillName = box.querySelector("h4").textContent.trim();
      const description = languageDescriptions[skillName] || "Keep improving myself!";
      alert(`Skill: ${skillName}\n${description}`);
    });
  });
  const fadeElems = document.querySelectorAll(".about, .contactInfo, .profileText");
  fadeElems.forEach(elem => {
    elem.style.opacity = 0;
    elem.style.transition = "opacity 1s ease, transform 1s ease";
    elem.style.transform = "translateY(10px)";
  });
  function reveal() {
    fadeElems.forEach(elem => {
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        elem.style.opacity = 1;
        elem.style.transform = "translateY(0)";
      }
    });
  }
  window.addEventListener("scroll", reveal);
  reveal();
  const contactItems = document.querySelectorAll(".contactInfo ul li");
  contactItems.forEach(item => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      const text = item.querySelector(".text").textContent.trim();
      if (text.toLowerCase().includes("linkedin")) {
        window.open(`https://linkedin.com/in/${text}`, "_blank");
      } else if (/\+?\d{2,}/.test(text)) {
        alert(`Connect with me: ${text}`);
      } else if (text.includes("@")) {
        window.location.href = `mailto:${text}`;
      }
    });
  });
  const themeToggle = document.createElement("button");
  themeToggle.textContent = "🌙";
  Object.assign(themeToggle.style, {
    position: "fixed",
    top: "15px",
    right: "15px",
    backgroundColor: "#1e3c72",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    zIndex: "9999"
  });
  document.body.appendChild(themeToggle);
  let darkMode = false;
  themeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.style.transition = "background 0.5s, color 0.5s";
    document.body.style.background = darkMode ? "#121212" : "#fff";
    document.body.style.color = darkMode ? "#f0f0f0" : "#000";
    themeToggle.textContent = darkMode ? "☀️" : "🌙";
  });
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "📬";
  Object.assign(contactBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#2a5298",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "22px",
    cursor: "pointer",
    zIndex: "9999"
  });
  document.body.appendChild(contactBtn);
  const formContainer = document.createElement("div");
  Object.assign(formContainer.style, {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    zIndex: "9999",
    display: "none",
    width: "250px"
  });
  formContainer.innerHTML = `
    <h4 style="margin-bottom:10px;">Contact Me</h4>
    <input type="text" placeholder="Your Name" style="width:100%;margin-bottom:10px;padding:5px;" />
    <input type="email" placeholder="Your Email" style="width:100%;margin-bottom:10px;padding:5px;" />
    <textarea placeholder="Message" style="width:100%;padding:5px;" rows="3"></textarea>
    <button style="margin-top:10px;padding:6px 10px;background:#1e3c72;color:#fff;border:none;border-radius:5px;width:100%;">Send</button>
  `;
  document.body.appendChild(formContainer);
  contactBtn.addEventListener("click", () => {
    formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
  });
  const progressBar = document.createElement("div");
  Object.assign(progressBar.style, {
    position: "fixed",
    top: "0",
    left: "0",
    height: "4px",
    backgroundColor: "#1e3c72",
    width: "0%",
    zIndex: "9999",
    transition: "width 0.2s"
  });
  document.body.appendChild(progressBar);
  function updateProgressBar() {
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }
  window.addEventListener("scroll", updateProgressBar);
  updateProgressBar();
});
