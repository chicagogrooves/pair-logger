Meteor.users.helpers({
  name: function () {
    return this.profile && this.profile.name;
  },
  email: function () {
    return (this.services.google && this.services.google.email) ||
    (this.emails && this.emails.length > 0 && this.emails[0].address);
  }
})
