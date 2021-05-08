var Friends = {

  friendList: new Set(),

  toggleStatus: function (friend) {
    if (!Friends.doesFriendExist(friend)) {
      Friends.friendList.add(friend);
    }
  },

  doesFriendExist: function(friend) {
    return Friends.friendList.has(friend);
  }
};