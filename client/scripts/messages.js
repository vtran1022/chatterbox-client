var Messages = {
  storage: {},

  items: function () {
    return Object.values(Messages.storage);
  },

  add: function (message, callback) {
    Messages.storage[message.objectId] = Message.conform(message);
    callback(Messages.items());
  },

  update: function(messages, callback) {
    for (const message of messages) {
      Messages.add(message);
    }
    callback(Messages.items());
  },

  conform: function (message) {
    messages.text = message.text || '';
    messages.username = message.username || '';
    messages.roomname = message.roomname || '';
    return message;
  }
};