var MessageView = {
  render: _.template(`
      <div class="chat">
        <div class="username"
          class="<%- Friends.isFriend(username) ? 'friend' : '' %>"
          data-username="<%- username %>"
        >
          <%- username %>
        </div>
        <div><%- text %></div>
      </div>
    `)
};