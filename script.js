'use strict';

var data = window.data.getData();

document.querySelector("button").addEventListener("click", function() {
    window.sort.sortData(data);
});
