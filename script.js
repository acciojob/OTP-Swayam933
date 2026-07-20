const codes = document.querySelectorAll(".code");

// Focus first input
codes[0].focus();

codes.forEach((code, index) => {
  // Move forward when typing
  code.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");

    if (e.target.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  // Handle backspace
  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (code.value === "" && index > 0) {
        codes[index - 1].value = "";
        codes[index - 1].focus();
      } else {
        code.value = "";
      }
    }
  });
});