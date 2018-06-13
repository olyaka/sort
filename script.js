"use strict";

(function() {
  window.data.getData();

  var sorter = window.sort.createSorter(window.data.updateData());

  var button = document.querySelector("button");

  var clicked = false;

  var onButtonClick = function() {
    if (!clicked) {
      sorter.update(window.data.updateData());
      clicked = true;
    }
    window.sort.sortData(sorter);
    window.render.rerender(sorter);
  };

  button.addEventListener("click", onButtonClick);
})();
