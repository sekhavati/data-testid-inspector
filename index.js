javascript: (function() {
  var testIdAttribute = "data-testid";
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `.data-testid-inspector { border: 2px solid hotpink; } .data-testid-inspector::after{ content: "\\A ${testIdAttribute}: \\A " attr(${testIdAttribute}); color: hotpink; white-space: pre; font-style: italic; font-weight: bold; }`;
  document.getElementsByTagName("head")[0].appendChild(style);
  document.querySelectorAll(`[${testIdAttribute}]`).forEach(element => {
    element.classList.toggle("data-testid-inspector");
  });
})();
