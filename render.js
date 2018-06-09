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
    swap: function(sorter) {
      var divs = document.querySelectorAll(".column");
      for (var i = 0; i < sorter.array.length; i++) {
        if (sorter.array[i] != parseInt(divs[i].innerHTML)) {

          var div1 = divs[i];
          var div2 = divs[i + 1];

          div1.classList.add("selected");
          div2.classList.add("selected");

          div1.style.transform = "translateX(" + 35 + "px)";
          div2.style.transform = "translateX(-" + 35 + "px)";

          setTimeout(function() {
            div1.classList.remove('selected');
            div2.classList.remove('selected');

            div1.style.transform = "translateX(" + 0 + "px)";
            div2.style.transform = "translateX(" + 0 + "px)";

            div1.parentNode.insertBefore(div2, div1);
          }, 1000);

          break;
        }
      }
    }
  };
})();
