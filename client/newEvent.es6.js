Template.newEvent.helpers({
  eventTypes() {
    return Meteor.users.find()
  }
})

Template.newEvent.events({
  'click #saveEvent'() {
    var now = new Date,
      d1 = now.setHours(14),
      d2 = now

    Events.insert({
      start: d1,
      end: d2,
      title: `${new Date}`,
      id: new Mongo.ObjectID()
    })
  }
})
