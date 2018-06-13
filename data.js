"use strict";

(function() {
  var arr = [];

  window.data = {
    getData: function() {
      var input = document.querySelector("input");

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
      });
    },

    updateData: function() {
      return arr;
    }
  };
})();
