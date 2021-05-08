var Messages = {
  value: {},

  get: function() {
    return _.chain(Object.values(Messages.value)).sortBy('createdAt');
  }

//update function (put)
//delete function (delete)
};