var Messages = {


};

/*

  compiled: _.template(
    '<div class="message"> </div>'
  ) ---- need??????


The message objects you send to the api server (via POST requests) should be in the following format:

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};
To get you started, here's an example POST request. Note that any messages you POST to the server are viewable by everyone, so be nice.

$.ajax({
  // This is the url you should use to communicate with the API server.
  url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/CAMPUS',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});
*/