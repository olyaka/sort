"use strict";

(function() {
  window.data.getData();

  var button = document.querySelector("button");

  var onButtonClick = function() {
    var sorter = window.data.updateData();
    window.sort.sortData(sorter);
    window.render.rerender(sorter);
  };

  button.addEventListener("click", onButtonClick);

  window.script = {
    button: button,
    onButtonClick: onButtonClick
  };
})();
