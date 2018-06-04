"use strict";

(function() {
  var list = document.querySelector(".list");

  window.render = {
    column: function(element) {
      var col = document.createElement("div");
      col.classList.add("column");
      col.innerText = element;
      col.style.height = element * 20 + "px";
      list.appendChild(col);
    },
    swap: function(array) {
      var divs = document.querySelectorAll(".column");
      for (var i = 0; i < array.length; i++) {
        if (array[i] != parseInt(divs[i].innerHTML)) {
          var swapElements = function(evt) {
            evt.currentTarget.removeEventListener(
              "transitionend",
              swapElements
            );
            evt.currentTarget.classList.remove("selected");
            evt.currentTarget.previousSibling.classList.remove("selected");

            evt.currentTarget.style.transform = "translateX(-" + 0 + "px)";
            evt.currentTarget.previousSibling.style.transform =
              "translateX(" + 0 + "px)";

            evt.currentTarget.parentNode.insertBefore(
              evt.currentTarget,
              evt.currentTarget.previousSibling
            );

            window.script.button.addEventListener(
              "click",
              window.script.onButtonClick
            );
          };

          divs[i + 1].addEventListener("transitionend", swapElements);

          divs[i].classList.add("selected");
          divs[i + 1].classList.add("selected");

          divs[i].style.transform = "translateX(" + 35 + "px)";
          divs[i + 1].style.transform = "translateX(-" + 35 + "px)";

          break;
        }
      }
    }
  };
})();
