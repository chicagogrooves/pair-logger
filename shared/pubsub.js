if (Meteor.isServer) {
  Meteor.publish("eligiblePairs", function () {
    return Meteor.users.find({}, {
      fields: {
        'profile.name': 1,
        'emails': 1,
        'services.github.email': 1,
        'services.github.username': 1
      }});
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("eligiblePairs");
}
