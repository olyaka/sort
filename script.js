"use strict";

(function() {
  var data = window.data.getData();

  var button = document.querySelector("button");

  var sorter = window.sort.createSorter(data);

  var onButtonClick = function() {
    button.removeEventListener("click", onButtonClick);
    data = window.sort.sortData(sorter);
    window.render.swap(data);
  };

  button.addEventListener("click", onButtonClick);

  window.script = {
    button: button,
    onButtonClick: onButtonClick
  };
})();
