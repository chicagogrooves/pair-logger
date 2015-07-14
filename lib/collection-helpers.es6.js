Meteor.users.helpers({
  name() {
    return this.profile && this.profile.name
  },
  email() {
    return this.services.github && this.services.github.email
  }
})
