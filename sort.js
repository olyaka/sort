'use strict';

(function () {
    window.sort = {
        sortData: function (array) {
            for (var i = 0; i < array.length - 1; i++) {
                if (parseInt(array[i+1].innerText) < parseInt(array[i].innerText)) {
                    window.render.swap(array[i], array[i+1]);
                    break;
                }
            }
            return array;
        }
    };
})();