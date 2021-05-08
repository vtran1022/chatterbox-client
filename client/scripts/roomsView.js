var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function(event) {
      var room = prompt('Enter room name');
      Rooms.add(room);
      RoomsView.$select.val(room);
    });
  },

  render: function() {
    //
  },

  renderRoom: function (room) {
    var $room = $('<room>').val(room);
    RoomsView.$select.append($room);
  }

};
