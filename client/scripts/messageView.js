var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">
          "<%= username %>"
        </div>
        <div class="text">
        "<%= text %>""
        </div>
      </div>
    `)
};

/*


          <div class="chat">
      <div
        class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
      data-username="<%- username %>">
      <%- username %>
      </div>
      <div><%- text %></div>
    </div>
*/