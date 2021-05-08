var MessagesView = {

  // references the chat div
  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', function(event) {
      var username = event.target.textContent;
      Friends.toggleStatus(username);
    });
  },

  render: function(messages) {
    MessagesView.$chats.html(''); // clearing the chats div everytime
    messages.forEach(message => {
      MessagesView.renderMessage(message);
    });

    MessageView.$chats.html('');
    Messages.get();
    Messages.each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function (message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function (event) {

  }
};