Meteor.users.helpers({
  name: function () {
    return this.profile && this.profile.name;
  },
  email: function () {
    return this.services.github && this.services.github.email;
  }
})
