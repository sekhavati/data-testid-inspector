javascript: (function() {
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    '.data-test-id-highlight { border: 2px solid hotpink; } .data-test-id-highlight::after{ content: "\\A data-test-id: \\A " attr(data-test-id); color: hotpink; white-space: pre; }';
  document.getElementsByTagName("head")[0].appendChild(style);
  document.querySelectorAll("[data-test-id]").forEach(element => {
    element.classList.toggle("data-test-id-highlight");
  });
})();
