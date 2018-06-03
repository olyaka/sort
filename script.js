"use strict";

(function() {
  var data = window.data.getData();

  var button = document.querySelector("button");

  var onButtonClick = function() {
    window.sort.sortData(data);
    button.removeEventListener("click", onButtonClick);
  };

  button.addEventListener("click", onButtonClick);

  window.script = {
    button: button,
    onButtonClick: onButtonClick
  };
})();
