var Rooms = {

  roomList: new Set(),
  //currentRoom: '';

  add: function (room) {
    Rooms.roomList.add(room);
    //Rooms.selectedRoom(room);
    //RoomsView.render();
  }

  // selectedRoom: function(room){
  //   Rooms.currentRoom = room;
  //   MessagesView.render();
  // }



};
