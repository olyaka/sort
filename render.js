"use strict";

(function() {
  window.render = {
    column: function(element) {
      var list = document.querySelector(".list");

      var col = document.createElement("div");
      col.classList.add("column");
      col.innerText = element;
      col.style.height = element * 20 + "px";
      list.appendChild(col);
    },
    swap: function(first, second) {
      var swapElements = function(evt) {
        evt.currentTarget.classList.remove("selected");
        evt.currentTarget.nextSibling.classList.remove("selected");
        evt.currentTarget.style.transform += "translateX(-" + 35 + "px)";
        evt.currentTarget.nextSibling.style.transform +=
          "translateX(" + 35 + "px)";
        evt.currentTarget.parentNode.insertBefore(
          evt.currentTarget.nextSibling,
          evt.currentTarget
        );
        evt.currentTarget.removeEventListener("transitionend", swapElements);
        window.script.button.addEventListener(
          "click",
          window.script.onButtonClick
        );
      };

      first.addEventListener("transitionend", swapElements);

      first.classList.add("selected");
      second.classList.add("selected");

      first.style.transform += "translateX(" + 35 + "px)";
      second.style.transform += "translateX(-" + 35 + "px)";
    }
  };
})();
