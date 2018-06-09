"use strict";

(function () {
  var arr = [];

  var sorter = window.sort.createSorter(arr);

  window.data = {
    getData: function () {
      var input = document.querySelector("input");

      var list = document.querySelector(".list");

      input.addEventListener("input", function (evt) {
        if (evt.currentTarget.value.match(/[^1-9]/i)) {
          evt.currentTarget.value = evt.currentTarget.value.replace(
            /[^1-9]/i,
            ""
          );
        } else {

          arr = [];

          while (list.firstChild) {
            list.removeChild(list.firstChild);
          }

          for (var i = 0; i < evt.currentTarget.value.length; i++) {
            window.render.column(evt.currentTarget.value[i]);
            arr.push(parseInt(evt.currentTarget.value[i]));
          }
        }

        sorter.update(arr);
      });
    },

    updateData: function () {
      return sorter;
    }
  };
})();
