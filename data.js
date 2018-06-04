"use strict";

(function() {
  window.data = {
    getData: function() {
      var input = document.querySelector("input");

      var list = document.querySelector(".list");

      var arr = [];

      input.addEventListener("input", function(evt) {
        if (evt.currentTarget.value.match(/[^1-9]/i)) {
          evt.currentTarget.value = evt.currentTarget.value.replace(
            /[^1-9]/i,
            ""
          );
        } else {
          window.render.column(
            evt.currentTarget.value[evt.currentTarget.value.length - 1]
          );
          arr.push(evt.currentTarget.value[evt.currentTarget.value.length - 1]);
        }
      });

      return arr;
    }
  };
})();
