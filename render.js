"use strict";

(function() {
  var list = document.querySelector(".list");

  window.render = {
    column: function(element, i) {
      var col = document.createElement("div");
      col.classList.add("column");
      col.classList.add(i);
      col.innerText = element;
      col.style.height = element * 20 + "px";
      list.appendChild(col);
    },
    swap: function(sorter) {
      var swapNodes = function(node1, node2) {
        var afterNode2 = node2.nextElementSibling;
        var parent = node2.parentNode;
        node1.replaceWith(node2);
        parent.insertBefore(node1, afterNode2);
      };

      var divs = Array.prototype.slice.call(
        document.querySelectorAll(".column")
      );

      var inner = divs.map(function(x) {
        return parseInt(x.innerText);
      });

      for (var i = 0; i < divs.length; i++) {
        if (
          inner[i] != sorter.array[i] &&
          document.querySelectorAll(".selected").length === 0
        ) {
          var div1 = divs[i];

          var div2 = divs.filter(div =>
            div.classList.contains(sorter.indexes[i])
          )[0];

          div1.classList.add("selected");
          div2.classList.add("selected");

          var shift = Math.abs(divs.indexOf(div2) - i) * 35;

          div1.style.transform = "translateX(" + shift + "px)";
          div2.style.transform = "translateX(-" + shift + "px)";

          setTimeout(function() {
            div1.classList.remove("selected");
            div2.classList.remove("selected");

            div1.style.transform = "translateX(" + 0 + "px)";
            div2.style.transform = "translateX(" + 0 + "px)";

            swapNodes(div1, div2);
          }, 1000);

          break;
        }
      }
    }
  };
})();
