const codes = document.querySelectorAll(".code");

// Focus the first input
window.onload = () => {
  codes[0].focus();
};

codes.forEach((code, index) => {
  code.addEventListener("input", (e) => {
    // Allow only one digit
    e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);

    // Move to next input
    if (e.target.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      code.value = "";

      if (index > 0) {
        codes[index - 1].value = "";
        codes[index - 1].focus();
      }
    }
  });
});