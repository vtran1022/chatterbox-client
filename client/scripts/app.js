var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // Setup a way to refresh the displayed messages (either automatically or with a button)
    setInterval(App.fetch, 3000);

  },

  fetch: function(callback = ()=>{}) {
    // data is an array of result objects, so instead of data as a parameter, can use ES6 {results}
    Parse.readAll(({results}) => {
      // examine the response from the server request:
      console.log(results);

      // use the data to update messages and rooms and re-render the corresponding views
      Messages.update(results, MessagesView.render);
      Rooms.update(results, RoomsView.render);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
