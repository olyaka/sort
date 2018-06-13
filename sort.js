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

      this.lastInd = array.length - 1;

      this.isSorted = false;
    }
    update(array) {
      this.array = array;

      this.indexes = calcIndexes(array);

      this.lastInd = array.length - 1;
    }
    getIndexes() {
      return this.indexes;
    }
    next() {
      var array = this.array;
      var indexes = this.indexes;

      if (this.initInd === this.lastInd) {
        this.initInd = 0;
        this.lastInd--;
      }

      if (!this.isSorted) {
        this.isSorted = true;

        for (var i = this.initInd; i < this.lastInd; i++) {
          if (array[i + 1] < array[i]) {
            var tmp = array[i + 1];
            array[i + 1] = array[i];
            array[i] = tmp;

            var tmpInd = indexes[i + 1];
            indexes[i + 1] = indexes[i];
            indexes[i] = tmpInd;

            this.isSorted = false;
            this.initInd = i + 1;

            break;
          }

          if (i === this.lastInd - 1 && this.initInd !== 0 && this.isSorted) {
            this.initInd = 0;
            i = -1;
          }
        }
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
