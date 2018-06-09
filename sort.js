"use strict";

(function() {

  var calcIndexes = function (array) {
    var indexes = []
      for (var i = 0; i < array.length; i++) {
        indexes.push(i);
      }
    return indexes;
  }

  class Sorter {
    constructor(array) {
      this.array = array;
 
      this.indexes = calcIndexes(array);
    }
    update (array) {
      this.array = array;

      this.indexes = calcIndexes(array);
    }
    next() {
      var array = this.array;
      var indexes = this.indexes;
      
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i + 1] < array[i]) {
          var tmp = array[i + 1];
          array[i + 1] = array[i];
          array[i] = tmp;

          var tmpInd = indexes[i + 1];
          indexes[i + 1] = indexes[i];
          indexes[i] = tmpInd;
          break;
        }
      }
      this.array = array;
      return this;
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
