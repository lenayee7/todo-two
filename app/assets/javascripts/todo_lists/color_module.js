// Object Literal Pattern
function ColorPicker(element) {
  this.el = element;
  this.colorChangingElement = $('#color-changing-container');

  this.changeColor = function(event) {
    debugger;
    var target = $(event.target)
    // https://api.jquery.com/hasclass/
    if (target.hasClass('dot')) {
      // https://api.jquery.com/data/
      var colorValue = target.data('color-value');
      this.colorChangingElement.addClass(colorValue);
    }
  };

  this.el.on('click', this.changeColor.bind(this));
}

$(document).ready(function() {
  var selectionElement = $('#color-selection-element');
  var colorPicker = new ColorPicker(selectionElement);
  window.colorPicker = colorPicker;
});
