let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".bx");
let input = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.textContent;

    if (value === "C") {
      input = "";
      screen.textContent = "0";
    } else if (value === "=") {
      try {
        screen.textContent = eval(input);
        input = screen.textContent;
      } catch {
        screen.textContent = "Error";
      }
    } else {
      // Agar x likha ho to usse * me convert kare
      if (value === "x") value = "*";

      input += value;
      screen.textContent = input;
    }
  });
});
