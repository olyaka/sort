"use strict";

(function() {
  var list = document.querySelector(".list");

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

        element.classList.remove("selected");

        if (shift !== 0 && shift != transition) {
          element.classList.add("selected");
        }
        element.style.transform = "translateX(" + shift + "px)";
      });
    }
  };
})();
