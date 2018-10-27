(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _dots = require('./modules/dots');

var _dots2 = _interopRequireDefault(_dots);

var _common = require('./common');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    _dots2.default.dotsEffect();
  });

  (0, _common2.default)();
})(jQuery);

},{"./common":2,"./modules/dots":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var visible = function visible() {
    var textHide = 'Hide';
    var textShow = 'Show all';
    $('a.btn').click(function () {
        if ($('.cards-wrapper').hasClass('hide')) {
            $('.cards-wrapper.hide').addClass('visible');
            $('.cards-wrapper').removeClass('hide');
            $('a.btn').text(textHide);
        } else {
            $('.cards-wrapper.visible').addClass('hide');
            $('.cards-wrapper').removeClass('visible');
            var curPos=$(document).scrollTop();
            $("body,html").animate({"scrollTop":1015},1);
            $('a.btn').text(textShow);
        }
    });

    $('.carousel.carousel-slider').carousel({
        fullWidth: true

    });

    $('.move-next').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
    });

    $('.move-prev').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
    });

    $('.submit-form').click(function () {
        if ($('#email').hasClass('valid')) {
            $('#form').submit();
        } else {
            $('#email').addClass('error-animate');
            setTimeout(function () {
                $('#email').removeClass('error-animate');
            }, 2000);
            return false;
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 297) {
            $('.z-depth-0').addClass('white');
            $('#nav-mobile>li>a').addClass('bunker-color');
            $('.sidenav-trigger >i').addClass('bunker-color');
            $('.logo-black').show();
            $('.logo').hide();
        } else {
            $('.z-depth-0').removeClass('white');
            $('#nav-mobile>li>a').removeClass('bunker-color');
            $('.sidenav-trigger >i').removeClass('bunker-color');
            $('.logo-black').hide();
            $('.logo').show();
        }
    });

    $(document).ready(function () {
        $('.sidenav').sidenav();
    });
};

exports.default = visible;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var DE = {
  dotsEffect: function dotsEffect() {
    var $cnt = $('#home-canvas'),
        cells = createCells();

    $cnt.html(cells);

    function createCells() {
      var width = 10,
          height = 10,
          size = width * height,
          html = '<div class="entry-cells">';

      for (var i = 0; i < size; i++) {
        html += '<div class="cell cell-' + i + '"></div>';
      }

      html += '</div>';

      return html;
    }
  }
};

exports.default = DE;

},{}]},{},[1]);
