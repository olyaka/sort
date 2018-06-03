"use strict";

(function() {
  class Sorter {
    constructor(array) {
      this.array = array;
    }
    next() {
      var array = this.array;
      for (var i = 0; i < array.length - 1; i++) {
        if (parseInt(array[i + 1].innerText) < parseInt(array[i].innerText)) {
          window.render.swap(array[i], array[i + 1]);
          break;
        }
      }
      return array;
    }
  }

  window.sort = {
    sortData: function(array) {
      var sorter = new Sorter(array);
      return sorter.next();
    }
  };
})();
