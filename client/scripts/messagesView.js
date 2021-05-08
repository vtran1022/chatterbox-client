var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', function(event) {
      var username = event.target.textContent;
      Friends.toggleStatus(username);
    });
  },

  render: function() {
    //want to get the messages for storage array and append to the chat box
    MessageView.$chats.html('');
    Messages.get();
    Messages.each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function (message) {
    var $note = MessageView.render(message);
    MessagesView.$chats.append($note);
  }
};