/* Test-5 · Warm boutique: adds the hand-drawn underline to every .scribble word.
   The drawing itself is CSS, triggered when its section is revealed. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  Array.prototype.forEach.call(document.querySelectorAll('.scribble'), function (el) {
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 200 20');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    var path = document.createElementNS(NS, 'path');
    path.setAttribute('pathLength', '1');
    path.setAttribute('d', 'M3 13C42 5 84 3 122 8S178 15 197 6');
    svg.appendChild(path);
    el.appendChild(svg);
  });
})();
