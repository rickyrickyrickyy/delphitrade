(function () {
  var root = document.documentElement;
  var STORAGE = "delphi-demo-theme";

  function effective(theme) {
    if (!theme || theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme;
  }

  function apply(theme) {
    var e = effective(theme);
    root.classList.remove("light", "dark");
    root.classList.add(e);
    root.dataset.theme = e;
  }

  function init() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE);
    } catch (_) {}
    apply(stored || "system");
    root.dataset.themeMode = stored || "system";

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
      if ((localStorage.getItem(STORAGE) || "system") === "system") apply("system");
    });
  }

  window.delphiTheme = {
    cycle: function () {
      var order = ["system", "dark", "light"];
      var cur = localStorage.getItem(STORAGE) || "system";
      var i = order.indexOf(cur);
      var next = order[(i + 1) % order.length];
      try {
        localStorage.setItem(STORAGE, next);
      } catch (_) {}
      root.dataset.themeMode = next;
      apply(next);
      updateLabels();
    },
    set: function (mode) {
      try {
        localStorage.setItem(STORAGE, mode);
      } catch (_) {}
      root.dataset.themeMode = mode;
      apply(mode);
      updateLabels();
    },
  };

  function updateLabels() {
    var mode = root.dataset.themeMode || "system";
    var label = { system: "Theme", dark: "Dark", light: "Light" }[mode] || "Theme";
    document.querySelectorAll("[data-theme-label]").forEach(function (el) {
      el.textContent = label;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      init();
      updateLabels();
    });
  } else {
    init();
    updateLabels();
  }
})();
