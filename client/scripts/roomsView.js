var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function (room) {
    var $roomName = $('<roomName>').val(room).text(room);
    RoomsView.$select.append($roomName);
  }

};
