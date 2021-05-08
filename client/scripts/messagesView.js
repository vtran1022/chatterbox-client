var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    //render view

  },

  renderMessage: function (message) {
    var $note = MessageView.render(message);
    MessagesView.$chats.append($note);
  }
};