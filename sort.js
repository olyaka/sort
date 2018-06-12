"use strict";

(function() {
  var calcIndexes = function(array) {
    var indexes = [];
    for (var i = 0; i < array.length; i++) {
      indexes.push(i);
    }
    return indexes;
  };

  class Sorter {
    constructor(array) {
      this.array = array;

      this.indexes = calcIndexes(array);

      this.initInd = 0;

      this.isSorted = false;
    }
    update(array) {
      this.array = array;

      this.indexes = calcIndexes(array);
    }
    getIndexes() {
      return this.indexes;
    }
    next() {
      var array = this.array;
      var indexes = this.indexes;

      if (!this.isSorted) {
        this.isSorted = true;
        this.initInd = this.initInd === array.length - 1 ? 0 : this.initInd;

        for (var i = this.initInd; i < array.length - 1; i++) {
          if (array[i + 1] < array[i]) {
            var tmp = array[i + 1];
            array[i + 1] = array[i];
            array[i] = tmp;

            var tmpInd = indexes[i + 1];
            indexes[i + 1] = indexes[i];
            indexes[i] = tmpInd;
            this.isSorted = false;
            break;
          }
        }

        this.array = array;
        return this;
      }

      return this;
    }
  }

  window.sort = {
    createSorter: function(array) {
      var sorter = new Sorter(array);
      return sorter;
    },

    sortData: function(sorter) {
      sorter.next();
    }
  };
})();
