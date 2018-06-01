'use strict';

var input = document.querySelector('input');

var sort = function (array) {
    var min = array[0]
};
var list = document.querySelector('.list');


input.addEventListener('keyup', function() {
  if (input.value.match(/[^1-9]/i)) {
    input.value = input.value.substr(0, input.value.length - 1);
  }

  var numbers = input.value.split('');

  var col = document.createElement('div');
  col.classList.add('column');
  col.innerText = numbers[numbers.length - 1];
  col.style.height = parseInt(numbers[numbers.length - 1]) * 10 + 'px';
  list.appendChild(col);
});

document.querySelector('button').addEventListener('click', function() {
    document.querySelectorAll('.column');

    var divs = list.childNodes;

    var n = divs.length;

    var swapped = false;
    var currentIndex = 0;

    var swapElements = function (evt) {
        evt.currentTarget.classList.remove('selected');
        evt.currentTarget.nextSibling.classList.remove('selected');
        evt.currentTarget.style.transform += 'translateX(-' + 35 + 'px)';
        evt.currentTarget.nextSibling.style.transform += 'translateX(' + 35 + 'px)';
        evt.currentTarget.parentNode.insertBefore(evt.currentTarget.nextSibling, evt.currentTarget);
        evt.currentTarget.removeEventListener('transitionend', swapElements);
    }

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++){
            if (divs[j+1].style.height < divs[j].style.height && !swapped) {
                divs[j].addEventListener('transitionend', swapElements);

                divs[j].classList.add('selected');
                divs[j+1].classList.add('selected');

                divs[j+1].style.transform += 'translateX(-' + 35 + 'px)';
                divs[j].style.transform += 'translateX(' + 35 + 'px)';

                swapped = true;
            }
        }
    }

});


