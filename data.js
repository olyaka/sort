"use strict";

(function() {
  var arr = [];

  var sorter = window.sort.createSorter(arr);

  window.data = {
    getData: function() {
      var input = document.querySelector("input");

      var list = document.querySelector(".list");

      input.addEventListener("input", function(evt) {
        var inputValue = evt.currentTarget.value;

        if (inputValue.match(/[\D|^0]/g)) {
          evt.currentTarget.value = inputValue.replace(/[\D|^0]/g, "");
        } else {
          arr = [];

          window.render.clear();

          for (var i = 0; i < inputValue.length; i++) {
            window.render.column(inputValue[i], i);
            arr.push(parseInt(inputValue[i]));
          }
        }

        sorter.update(arr);
      });
    },

    updateData: function() {
      return sorter;
    }
  };
})();
