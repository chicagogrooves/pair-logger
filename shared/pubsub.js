if (Meteor.isServer) {
  Meteor.publish("eligiblePairs", function () {
    return Meteor.users.find({}, {
      fields: {
        'profile.name': 1,
        'emails': 1,
        'services.google.email': 1
      }});
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("eligiblePairs");
}
