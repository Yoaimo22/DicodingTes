  const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light");

  let getMode = localStorage.getItem("mode");
  if (getMode && getMode === "dark-mode") {
      body.classList.add("dark");
  }

  // js code to toggle dark and light mode
  modeToggle.addEventListener("click", () => {
      modeToggle.classList.toggle("active");
      body.classList.toggle("dark");

      // js code to keep user selected mode even page refresh or file reopen
      if (!body.classList.contains("dark")) {
          localStorage.setItem("mode", "light-mode");
      } else {
          localStorage.setItem("mode", "dark-mode");
      }
  });