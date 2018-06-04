"use strict";

(function() {
  class Sorter {
    constructor(array) {
      this.array = array;
    }
    next() {
      var array = this.array;
      for (var i = 0; i < array.length - 1; i++) {
        if (parseInt(array[i + 1]) < parseInt(array[i])) {
          var tmp = array[i + 1];
          array[i + 1] = array[i];
          array[i] = tmp;
          break;
        }
      }
      return array;
    }
  }

  window.sort = {
    createSorter: function(array) {
      var sorter = new Sorter(array);
      return sorter;
    },

    sortData: function(sorter) {
      return sorter.next();
    }
  };
})();
