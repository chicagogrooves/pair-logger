Template.newEvent.helpers({
  eventTypes: function () {
    return Meteor.users.find();
  }
});
