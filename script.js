"use strict";

(function() {
  window.data.getData();

  var button = document.querySelector("button");

  var onButtonClick = function() {
    var sorter = window.data.updateData();
    sorter = window.sort.sortData(sorter);
    window.render.swap(sorter);
  };

  button.addEventListener("click", onButtonClick);

  window.script = {
    button: button,
    onButtonClick: onButtonClick
  };
})();
