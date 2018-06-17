"use strict";

(function() {
  var list = document.querySelector(".list");
  var lastTimeout;

  window.render = {
    clear: function() {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    },

    column: function(element, i) {
      var col = document.createElement("div");
      col.classList.add("column");
      col.classList.add(i);
      col.innerText = element;
      col.style.height = element * 20 + "px";
      list.appendChild(col);
    },
    rerender: function(sorter) {
      list.childNodes.forEach((element, i) => {
        var newIndex = sorter.getIndexes().indexOf(i);
        var shift = (newIndex - i) * 35;
        var transition = parseInt(
          element.style.transform.replace(/[^-?\d+$]/g, "")
        );

        if (shift !== 0 && shift != transition) {
          element.classList.add("selected");

          setTimeout(function() {
            element.classList.remove("selected");
          }, 1000);
        }

        element.style.transform = "translateX(" + shift + "px)";
      });
    }
  };
})();
