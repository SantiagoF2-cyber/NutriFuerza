document.addEventListener("DOMContentLoaded", function () {
  // Modo oscuro
  const toggleBtn = document.getElementById("modo-toggle");
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Modo claro"
      : "🌙 Modo oscuro";
  });
});
