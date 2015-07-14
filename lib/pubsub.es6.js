Events = new Mongo.Collection('events')

if (Meteor.isServer) {
  Meteor.publish('eligiblePairs', () => {
    return Meteor.users.find({}, {
      fields: {
        'profile.name': 1,
        'emails': 1,
        'services.github.email': 1,
        'services.github.username': 1
      }})
  });
  Meteor.publish('events', () => {
    return Events.find()
  });
}

if (Meteor.isClient){
  Meteor.subscribe('eligiblePairs');
  Meteor.subscribe('events');
}
